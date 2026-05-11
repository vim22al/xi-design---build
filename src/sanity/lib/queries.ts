import { groq } from 'next-sanity';

// Project Queries
export const allProjectsQuery = groq`*[_type == "project"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  location,
  category->{title},
  "image": mainImage.asset->url,
  publishedAt
}`;

export const featuredProjectsQuery = groq`*[_type == "project" && featured == true][0...6] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  location,
  category->{title},
  "image": mainImage.asset->url
}`;

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  location,
  category->{title},
  "image": mainImage.asset->url,
  gallery[] {
    "url": asset->url
  },
  publishedAt,
  description,
  details[] {
    label,
    value
  }
}`;

export const projectSlugsQuery = groq`*[_type == "project"] | order(publishedAt desc) {
  "slug": slug.current,
  title
}`;

// Blog Queries
export const allPostsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "image": featuredImage.asset->url,
  "author": author->name,
  "authorImage": author->image.asset->url,
  "category": category->title,
  "categorySlug": category->slug.current,
  publishedAt
}`;

export const latestPostsQuery = groq`*[_type == "post"][0...3] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "image": featuredImage.asset->url,
  "category": category->title,
  publishedAt
}`;

export const featuredPostQuery = groq`*[_type == "post"] | order(publishedAt desc)[0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "image": featuredImage.asset->url,
  "author": author->name,
  "authorImage": author->image.asset->url,
  "category": category->title,
  publishedAt
}`;

export const postsByCategoryQuery = groq`*[_type == "post" && category->slug.current == $categorySlug] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "image": featuredImage.asset->url,
  "author": author->name,
  "category": category->title,
  publishedAt
}`;

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  "image": featuredImage.asset->url,
  "author": author->{
    name,
    "image": image.asset->url,
    bio
  },
  "category": category->{
    title,
    "slug": slug.current
  },
  publishedAt,
  content,
  excerpt,
  seoTitle,
  seoDescription
}`;

export const postSlugsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  "slug": slug.current,
  title
}`;

// Category Query
export const allCategoriesQuery = groq`*[_type == "category"] {
  _id,
  title,
  "slug": slug.current
}`;
