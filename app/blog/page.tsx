import { client } from '@/sanity/lib/client'
import { postsQuery } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import Link from 'next/link'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

export default async function BlogPage() {
  const posts = await client.fetch(postsQuery, {}, { cache: 'no-store' })

  return (
    <main className="w-full bg-[#FAFAFA] min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 mb-4">
          Our <span className="text-pink-500">Blog.</span>
        </h1>
        <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-16">
          Latest insights, nutrition tips, and health guides.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any, index: number) => (
            <Link 
              href={`/blog/${post.slug.current}`} 
              key={post._id}
              className="group rounded-3xl border border-pink-50 bg-white/80 p-4 shadow-xl backdrop-blur-sm transition-transform duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="h-64 w-full overflow-hidden rounded-2xl relative mb-6">
                {post.coverImage ? (
                  <Image 
                    src={urlForImage(post.coverImage)} 
                    alt={post.title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-200"></div>
                )}
              </div>
              <div className="px-2 flex-grow flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-pink-500">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <h2 className="text-xl font-black tracking-tight text-slate-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-sm font-medium text-slate-700 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-pink-500 flex items-center gap-1 group-hover:text-pink-600">
                  Read Article <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
