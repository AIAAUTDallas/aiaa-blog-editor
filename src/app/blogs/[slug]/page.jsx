import { getBlogBySlug, getAllBlogSlugs } from '@/lib/blogFetchers';
import Image from 'next/image';
import markdownToHtml from '@/lib/markdownToHtml';
import '@/styles/Markdown.css';

export async function generateStaticParams() {
    return getAllBlogSlugs();
}

export default async function Page({ params }) {
    const blog = await getBlogBySlug(params.slug);
    const content = await markdownToHtml(blog.content);
    return (
        <main className="markdown text-white">
            <div className="min-h-screen max-w-3xl mx-auto text-left py-14 px-4">
                <h1 className="text-3xl md:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
                    {blog.metadata.title}
                </h1>
                {/* cover image */}
                <Image
                    className="mb-5 rounded-lg object-cover"
                    src={blog.metadata.coverImage}
                    alt={blog.metadata.title}
                    width={1300}
                    height={630}
                />

                {/* author */}
                <div className="flex flex-col mb-4 md:flex-row md:items-center">
                    <div className='flex items-center'>
                        <div className='relative w-14 h-14'>
                            <Image
                                className="rounded-full w-full object-cover m-0"
                                src={blog.metadata.author.picture}
                                alt={blog.metadata.author.name}
                                fill
                            />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm my-0">Written by</p>
                            <p className="text-lg font-bold my-0">{blog.metadata.author.name}</p>
                        </div>
                    </div>

                    {/* date and read time */}
                    <div className="mt-3 md:ml-auto">
                        <p className="text-sm my-0">
                            {blog.metadata.date} • {blog.metadata.readTime} min read
                        </p>
                    </div>
                </div>

                {/* line */}
                <div className="w-full mb-4 border-b-2 border-gray-500" />

                <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </main>
    );
}
