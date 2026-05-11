import { createClient } from 'next-sanity';
import { mockProjects, mockPosts, mockCategories } from './mockData';

import { projectId, dataset, apiVersion } from '../env';

const baseClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

export const client = {
  ...baseClient,
  fetch: async (query: string, params?: any, options?: any) => {
    // If we have a placeholder ID, use mock data to allow build/demo
    if (projectId === 'placeholder-id' || !projectId || projectId === 'missing-project-id') {
      console.log('Using Sanity Mock Data Fallback');
      
      if (query.includes('_type == "project"') && query.includes('slug.current == $slug')) {
        return mockProjects.find(p => p.slug === params?.slug) || null;
      }
      if (query.includes('_type == "project"')) {
        return mockProjects;
      }
      
      // Blog Slug Query (returns full objects)
      if (query.includes('_type == "post"') && query.includes('slug.current == $slug')) {
        return mockPosts.find(p => p.slug === params?.slug) || null;
      }
      
      // Category Filter Query (often expects strings in listing)
      if (query.includes('_type == "post"') && query.includes('category->slug.current == $categorySlug')) {
        return mockPosts
          .filter(p => p.category.slug === params?.categorySlug)
          .map(p => ({
            ...p,
            author: p.author.name,
            authorImage: p.author.image,
            category: p.category.title,
            categorySlug: p.category.slug
          }));
      }

      // Featured Post Query (expects strings in listing context)
      if (query.includes('_type == "post"') && query.includes('order(publishedAt desc)[0]')) {
        const p = mockPosts[0];
        return {
          ...p,
          author: p.author.name,
          authorImage: p.author.image,
          category: p.category.title,
          categorySlug: p.category.slug
        };
      }

      // All Posts Query (listing context - transform objects to strings)
      if (query.includes('_type == "post"')) {
        return mockPosts.map(p => ({
          ...p,
          author: p.author.name,
          authorImage: p.author.image,
          category: p.category.title,
          categorySlug: p.category.slug
        }));
      }
      
      if (query.includes('_type == "category"')) {
        return mockCategories;
      }
      
      return [];
    }

    try {
      return await baseClient.fetch(query, params, options);
    } catch (error) {
      console.error('Sanity Fetch Error, falling back to mock data:', error);
      // Fallback to mock data on error as well
      if (query.includes('_type == "project"')) return mockProjects;
      if (query.includes('_type == "post"')) return mockPosts;
      return [];
    }
  }
};

