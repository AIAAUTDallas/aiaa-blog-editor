import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogs } from '../../lib/blogFetchers';
import PageHeader from '@/components/PageHeader';
import styles from '@/styles/App.module.css';

function BlogCard({ blog }) {
  return (
    <div className="p-4">
      <Image
        className="mb-4 rounded-lg"
        src={blog.metadata.coverImage}
        alt={blog.metadata.title}
        width={1300}
        height={630}
      />
      <Link className="text-blue-600 underline" href={'blogs/' + blog.slug}>
        <h2 className="text-left mb-4 text-2xl md:text-3xl">{blog.metadata.title}</h2>
      </Link>
      <div className="flex items-center mb-3">
        <div className="relative w-10 h-10">
          <Image
            className="rounded-full w-full object-cover"
            src={blog.metadata.author.picture}
            alt={blog.metadata.author.name}
            fill
          />
        </div>
        <p className="text-left ml-3 mb-0">{blog.metadata.author.name}</p>
      </div>
      <p className="text-ellipsis text-left mb-2">{blog.metadata.excerpt}</p>
      <p className="text-left text-sm text-gray-500">
        {blog.metadata.date} - {blog.metadata.readTime} min read
      </p>
    </div>
  );
}

export default async function Page() {
  const blogs = await getAllBlogs();
  return (
    <main className={styles.App}>
      <PageHeader title="Blogs" subtitle={`A list of all blogs`} />
      <div className="min-h-[100svh] w-full mx-auto md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </main>
  );
}
