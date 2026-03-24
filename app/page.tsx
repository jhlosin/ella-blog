import { getAllPosts } from '@/lib/posts'

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <div>
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">eLLa</span> 블로그
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          AI 컴패니언, 음성통화, MBTI 매칭까지.
          <br />
          eLLa와 함께하는 새로운 일상 이야기를 만나보세요.
        </p>
      </section>

      {/* Post Grid */}
      <section className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="group block rounded-xl border border-ella-dark-border bg-ella-dark-card p-6 hover:border-ella-purple/50 transition-all duration-300"
          >
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-ella-purple/10 text-ella-purple-light"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-lg font-semibold text-slate-100 group-hover:text-ella-purple-light transition-colors mb-2">
              {post.title}
            </h2>
            <p className="text-sm text-slate-400 line-clamp-2 mb-4">
              {post.description}
            </p>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>{post.author}</span>
              <time dateTime={post.date}>{post.date}</time>
            </div>
          </a>
        ))}
      </section>
    </div>
  )
}
