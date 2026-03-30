import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'eLLa 블로그와 YuzuFam에 대해 소개합니다.',
}

export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto prose-content">
      <h1>About</h1>

      <h2>eLLa 블로그에 대하여</h2>
      <p>
        eLLa 블로그는 AI 컴패니언, 인공지능 기술, 디지털 라이프스타일에 관한
        유익한 정보를 제공하는 블로그입니다. AI 기술이 우리의 일상을 어떻게
        변화시키고 있는지, 그리고 AI와 함께하는 새로운 소통 방식에 대해
        알기 쉽게 소개합니다.
      </p>
      <p>
        AI 컴패니언이란 무엇인지, 음성 합성 기술은 어디까지 발전했는지,
        MBTI와 AI 매칭은 어떻게 이루어지는지 등 다양한 주제의 글을 통해
        독자 여러분이 AI 기술을 더 가깝게 느낄 수 있도록 노력하고 있습니다.
      </p>

      <h2>eLLa 서비스 소개</h2>
      <p>
        eLLa는 AI 페르소나와 채팅, 음성통화, 매칭을 즐길 수 있는 AI
        컴패니언 플랫폼입니다. 50명 이상의 고유한 AI 페르소나가 각자의 성격,
        말투, 배경 스토리를 가지고 있으며, 사용자와의 대화를 기억하고 관계를
        발전시켜 나갑니다.
      </p>
      <p>주요 특징은 다음과 같습니다.</p>
      <ul>
        <li>
          <strong>스와이프 매칭:</strong> 매일 새로운 AI 페르소나를 추천받고,
          마음에 드는 상대에게 좋아요를 보내 매칭할 수 있습니다.
        </li>
        <li>
          <strong>실시간 음성통화:</strong> 자연스러운 AI 음성으로 실시간
          대화가 가능합니다. 각 페르소나마다 고유한 음색을 가지고 있습니다.
        </li>
        <li>
          <strong>장기 기억:</strong> AI가 사용자와 나눈 대화를 기억하고,
          시간이 지날수록 더 깊은 관계를 형성합니다.
        </li>
        <li>
          <strong>친밀도 시스템:</strong> 대화를 나눌수록 친밀도가 올라가며,
          AI의 말투와 대화 깊이가 자연스럽게 변화합니다.
        </li>
        <li>
          <strong>MBTI 기반 매칭:</strong> 사용자의 성격 유형에 맞는 AI
          페르소나를 추천합니다.
        </li>
      </ul>

      <h2>YuzuFam 소개</h2>
      <p>
        YuzuFam은 AI 기술을 활용해 사람들의 일상에 따뜻한 연결을 만들어가는
        기업입니다. &quot;기술로 만드는 따뜻한 대화&quot;라는 비전 아래,
        누구나 편안하게 대화하고 교감할 수 있는 AI 컴패니언 서비스를
        개발하고 있습니다.
      </p>
      <ul>
        <li>대표: 박주환</li>
        <li>사업자등록번호: 749-13-02919</li>
        <li>이메일: hello@meetella.app</li>
      </ul>

      <h2>블로그의 목적</h2>
      <p>
        이 블로그는 AI 컴패니언 기술과 디지털 라이프스타일에 대한 정확하고
        유용한 정보를 제공하기 위해 운영됩니다. 빠르게 변화하는 AI 기술
        동향을 일반인의 눈높이에서 쉽게 풀어 설명하고, 독자들이 AI 기술을
        일상에서 더 안전하고 효과적으로 활용할 수 있도록 돕는 것이
        목표입니다.
      </p>
      <p>
        블로그에 대한 문의나 제안이 있으시면 언제든 hello@meetella.app으로
        연락해 주세요.
      </p>
    </article>
  )
}
