import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center">
        <h1 className="text-4xl font-bold font-sans">404 - Post Not Found</h1>
        <p className="mt-4 text-gray-300">The article you are looking for does not exist.</p>
        <Link to="/" className="text-white font-bold inline-block mt-8 hover:underline">
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto">
      <Link to="/" className="text-gray-400 font-bold inline-block mb-8 hover:text-white transition-colors duration-300">
        &larr; Back to all articles
      </Link>
      <h1 className="text-4xl md:text-5xl font-bold font-sans leading-tight">
        {post.title}
      </h1>
      <div className="text-md text-gray-400 mt-4 border-b border-gray-700 pb-4">
        <span>{post.date}</span> &bull; <span>By {post.author}</span>
      </div>
      {/* FIX: The blog post content is now an HTML string. Use dangerouslySetInnerHTML to render it correctly. */}
      <div
        className="prose prose-invert prose-lg mt-8 text-gray-300 leading-relaxed space-y-6"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
};

export default BlogPostPage;
