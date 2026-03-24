/** 간단한 마크다운 → HTML 변환기 (의존성 없음) */
export function markdownToHtml(md: string): string {
  let html = md

  // 코드 블록 (```...```) — 먼저 처리해서 내부가 변환되지 않도록
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_m, _lang, code) => {
    return `<pre><code>${escapeHtml(code.trimEnd())}</code></pre>`
  })

  // 인라인 코드
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>')

  // 헤딩 (h1 ~ h4)
  html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>')
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>')
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>')
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>')

  // 수평선
  html = html.replace(/^---$/gm, '<hr />')

  // 인용문
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
  // 연속 blockquote 병합
  html = html.replace(/<\/blockquote>\n<blockquote>/g, '\n')

  // 볼드 & 이탈릭
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>')

  // 이미지 (링크보다 먼저 처리)
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<figure><img src="$2" alt="$1" loading="lazy" /><figcaption>$1</figcaption></figure>')

  // 링크
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')

  // 비순서 목록
  html = html.replace(/^(\s*)[-*] (.+)$/gm, '$1<li>$2</li>')
  html = html.replace(/((?:<li>[\s\S]*?<\/li>\n?)+)/g, '<ul>$1</ul>')

  // 순서 목록
  html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>')

  // 단락 — 빈 줄로 구분된 텍스트를 <p>로 감싸기
  const blocks = html.split(/\n\n+/)
  html = blocks
    .map((block) => {
      const trimmed = block.trim()
      if (!trimmed) return ''
      if (
        trimmed.startsWith('<h') ||
        trimmed.startsWith('<ul') ||
        trimmed.startsWith('<ol') ||
        trimmed.startsWith('<blockquote') ||
        trimmed.startsWith('<pre') ||
        trimmed.startsWith('<hr') ||
        trimmed.startsWith('<li') ||
        trimmed.startsWith('<figure')
      ) {
        return trimmed
      }
      return `<p>${trimmed.replace(/\n/g, '<br />')}</p>`
    })
    .join('\n')

  return html
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
