import { client } from '@/sanity/lib/client'
import { postQuery } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = await client.fetch(postQuery, { slug }, { cache: 'no-store' })
  if (!post) return {}
  
  return {
    title: `${post.title} | Nutritionist Pratibha`,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      images: post.coverImage ? [urlForImage(post.coverImage)] : [],
    },
  }
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 my-8 rounded-2xl overflow-hidden shadow-xl">
          <Image src={urlForImage(value)} alt="Post image" fill className="object-cover" />
        </div>
      )
    }
  },
  block: {
    h2: ({ children }: any) => <h2 className="text-3xl font-black text-slate-900 mt-12 mb-6">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">{children}</h3>,
    normal: ({ children }: any) => <p className="text-base text-slate-800 leading-relaxed mb-6">{children}</p>,
    blockquote: ({ children }: any) => <blockquote className="border-l-4 border-pink-500 pl-4 italic text-slate-700 my-8">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 text-slate-800 mb-6">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 text-slate-800 mb-6">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="mb-2">{children}</li>,
  },
  marks: {
    link: ({ children, value }: any) => (
      <a href={value.href} className="text-pink-500 hover:underline decoration-2 underline-offset-2" target="_blank" rel="noreferrer">
        {children}
      </a>
    ),
  },
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await client.fetch(postQuery, { slug }, { cache: 'no-store' })

  if (!post) {
    notFound()
  }

  return (
    <main className="w-full bg-[#FAFAFA] min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-pink-500 transition-colors mb-12">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Blog
        </Link>

        <div className="mb-12">
          {post.tags && post.tags.length > 0 && (
            <div className="flex gap-2 mb-6 flex-wrap">
              {post.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-pink-50 text-pink-500 rounded-full text-xs font-bold tracking-widest uppercase border border-pink-100">
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="text-sm font-bold tracking-widest text-slate-400 uppercase">
            Published {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
        </div>

        {post.coverImage && (
          <div className="w-full h-[40vh] md:h-[60vh] relative rounded-[2rem] overflow-hidden mb-16 shadow-2xl">
            <Image 
              src={urlForImage(post.coverImage)} 
              alt={post.title} 
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <article className="prose prose-lg max-w-none">
          <PortableText value={post.body} components={portableTextComponents} />
        </article>

      </div>
    </main>
  )
}
