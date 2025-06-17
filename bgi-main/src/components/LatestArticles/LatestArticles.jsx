'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';

const LatestArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('articles')
        .select('id, title, content, featured_image_url, enabled, created_at')
        .eq('enabled', true)
        .order('created_at', { ascending: false })
        .limit(3);
      if (!error) setArticles(data || []);
      setLoading(false);
    };
    fetchArticles();
  }, []);

  if (loading) return <div className="text-center py-8">Loading latest articles...</div>;
  if (!articles.length) return <div className="text-center py-8">No articles found.</div>;

  return (
    <section className="py-12 bg-gray-50">
      <div className="Container">
        <h2 className="text-2xl font-bold mb-8 text-center">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map(article => (
            <div key={article.id} className="bg-white rounded shadow p-4 flex flex-col">
              {article.featured_image_url && (
                <img src={article.featured_image_url} alt={article.title} className="rounded mb-4 w-full h-48 object-cover" />
              )}
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <div className="text-gray-600 text-sm mb-4" dangerouslySetInnerHTML={{ __html: article.content.slice(0, 120) + (article.content.length > 120 ? '...' : '') }} />
              <a href={`/article/${article.slug}`} className="mt-auto text-blue-600 underline">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles; 