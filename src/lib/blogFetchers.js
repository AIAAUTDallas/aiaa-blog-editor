import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'src/data/blogs');

export async function getBlogBySlug(slug) {
  const fileName = slug + '.md';
  const filePath = path.join(contentDir, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  // Calculate reading time based on the length of the content
  const averageWordsPerMinute = 238; // Adjust as needed
  const words = fileContent.split(/\s+/).length;
  const readingTime = Math.ceil(words / averageWordsPerMinute);

  return {
    metadata: {...data, readTime: readingTime},
    content,
    slug: path.parse(fileName).name,
  };
}

export async function getAllBlogs() {
  const files = fs.readdirSync(contentDir);
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
