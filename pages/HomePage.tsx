
import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { BlogPost } from '../types';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold font-sans border-b border-gray-700 pb-4">Latest Articles</h1>
      {blogPosts.map((post: BlogPost) => (
        <article key={post.slug} className="group">
          <Link to={`/post/${post.slug}`}>
            <h2 className="text-2xl font-bold font-sans text-gray-100 group-hover:text-white transition-colors duration-300">
              {post.title}
            </h2>
          </Link>
          <div className="text-sm text-gray-400 mt-2">
            <span>{post.date}</span> &bull; <span>By {post.author}</span>
          </div>
          <p className="mt-4 text-gray-300 leading-relaxed">
            {post.summary}
          </p>
          <Link to={`/post/${post.slug}`} className="text-white font-bold inline-block mt-4 group-hover:underline">
            Read more &rarr;
          </Link>
        </article>
      ))}
    </div>
  );
};

export default HomePage;
