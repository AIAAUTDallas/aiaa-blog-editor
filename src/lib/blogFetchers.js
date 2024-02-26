import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'src/data/blogs');

export async function getBlogMetadata(markdown) {
  const { data, content } = matter(markdown);

  // Calculate reading time based on the length of the content
  const averageWordsPerMinute = 238; // Adjust as needed
  const words = markdown.split(/\s+/).length;
  const readingTime = Math.ceil(words / averageWordsPerMinute);

  return {
    metadata: {...data, readTime: readingTime},
    content,
  };
}

export async function getAllBlogs() {
  const files = fs.readdirSync(contentDir);
  if (files?.length === 1) return [];

  const blogs = await Promise.all(
    files.map(async (file) => {
      const slug = path.parse(file).name;
      return await getBlogBySlug(slug);
    }),
  );

  blogs.sort((a, b) => {
    return a.metadata.date < b.metadata.date ? 1 : -1;
  });

  return blogs;
}

export async function getAllBlogSlugs() {
  const files = fs.readdirSync(contentDir);
  return files.map((file) => {
    slug: path.parse(file).name;
  });
}
