import type { Metadata } from 'next'
import { getAllSlugs, getPostBySlug } from '@/lib/posts'
import { markdownToHtml } from '@/lib/markdown'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-slate-300">
          글을 찾을 수 없습니다
        </h1>
        <a href="/" className="text-ella-purple-light mt-4 inline-block">
          홈으로 돌아가기
        </a>
      </div>
    )
  }

  const htmlContent = markdownToHtml(post.content)

  return (
    <article className="max-w-3xl mx-auto">
      {/* Meta */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-ella-purple/10 text-ella-purple-light"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-400">
          <span>{post.author}</span>
          <time dateTime={post.date}>{post.date}</time>
        </div>
      </div>

      <hr className="border-ella-dark-border mb-8" />

      {/* Content */}
      <div
        className="prose-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {/* Back */}
      <div className="mt-16 pt-8 border-t border-ella-dark-border">
        <a
          href="/"
          className="text-ella-purple-light hover:text-ella-purple transition-colors"
        >
          &larr; 모든 글 보기
        </a>
      </div>
    </article>
  )
}
