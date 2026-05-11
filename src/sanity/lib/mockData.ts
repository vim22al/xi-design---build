export const mockProjects = [
  {
    _id: '1',
    title: 'The Obsidian House',
    slug: 'obsidian-house',
    location: 'Chelsea, London',
    category: { title: 'Residential' },
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
    publishedAt: '2024-03-15T00:00:00Z',
    description: [
      {
        _key: 'a',
        _type: 'block',
        children: [{ _type: 'span', text: 'A masterclass in modern minimalism, the Obsidian House redefined the traditional Chelsea mews. Our team focused on deep textures and natural light play.' }],
        markDefs: [],
        style: 'normal',
      }
    ],
    details: [
      { label: 'Surface Area', value: '450 sqm' },
      { label: 'Sustainability', value: 'BREEAM Excellent' }
    ],
    gallery: [
      { url: 'https://images.unsplash.com/photo-1600585152223-998175727efc?q=80&w=2070&auto=format&fit=crop' },
      { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop' }
    ]
  },
  {
    _id: '2',
    title: 'Azure Commercial Hub',
    slug: 'azure-commercial-hub',
    location: 'Shoreditch, London',
    category: { title: 'Commercial' },
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    publishedAt: '2023-11-20T00:00:00Z',
    description: [
      {
        _key: 'b',
        _type: 'block',
        children: [{ _type: 'span', text: 'Innovative workspace design for the modern era. Azure combines industrial heritage with futuristic infrastructure.' }],
        markDefs: [],
        style: 'normal',
      }
    ],
    details: [
      { label: 'Client', value: 'Azure Tech Group' },
      { label: 'Timeline', value: '18 Months' }
    ]
  },
  {
    _id: '3',
    title: 'Heritage Mews Restoration',
    slug: 'heritage-mews',
    location: 'Kensington, London',
    category: { title: 'Restoration' },
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2070&auto=format&fit=crop',
    publishedAt: '2024-01-10T00:00:00Z',
    description: [
      {
        _key: 'c',
        _type: 'block',
        children: [{ _type: 'span', text: 'Carefully restoring a Grade II listed property while introducing contemporary architectural elements.' }],
        markDefs: [],
        style: 'normal',
      }
    ]
  }
];

export const mockPosts = [
  {
    _id: 'p1',
    title: 'The Future of Sustainable Urban Living',
    slug: 'future-sustainable-living',
    excerpt: 'Exploring how biophilic design and smart technology are transforming the way we live in high-density environments.',
    image: 'https://images.unsplash.com/photo-1600585154542-637a91dc7c5b?q=80&w=2070&auto=format&fit=crop',
    author: {
      name: 'Julian Thorne',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
      bio: 'Julian Thorne is a leading architectural critic and sustainable design advocate with over 15 years of experience.'
    },
    category: {
      title: 'Innovation',
      slug: 'innovation'
    },
    publishedAt: '2024-04-01T10:00:00Z',
    content: [
      {
        _key: 'd1',
        _type: 'block',
        children: [{ _type: 'span', text: 'Sustainable architecture is no longer a luxury; it is a necessity. In this article, we delve into the core principles of eco-conscious design.' }],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: 'd2',
        _type: 'block',
        children: [{ _type: 'span', text: 'The integration of nature into urban environments, or biophilic design, has shown significant benefits for mental well-being and environmental performance.' }],
        markDefs: [],
        style: 'normal',
      }
    ],
    seoTitle: 'Future of Sustainable Urban Living | XI Journal',
    seoDescription: 'Discover how biophilic design and smart technology are shaping the future of sustainable architecture in urban environments.'
  },
  {
    _id: 'p2',
    title: 'Minimalism: More Than Just an Aesthetic',
    slug: 'minimalism-aesthetic',
    excerpt: 'A deep dive into the psychological benefits of spatial clarity and intentional architectural design.',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067&auto=format&fit=crop',
    author: {
      name: 'Sophia Vane',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
      bio: 'Sophia Vane specializes in minimalist interiors and the psychological impact of spatial design.'
    },
    category: {
      title: 'Design Philosophy',
      slug: 'design-philosophy'
    },
    publishedAt: '2024-03-20T09:00:00Z',
    content: [
      {
        _key: 'e1',
        _type: 'block',
        children: [{ _type: 'span', text: 'Minimalism in architecture is about removing the non-essential to let the essential speak. It is a philosophy of reduction that leads to clarity.' }],
        markDefs: [],
        style: 'normal',
      }
    ],
    seoTitle: 'Minimalism in Architecture: Beyond Aesthetic | XI Journal',
    seoDescription: 'Explore the deep-rooted principles of minimalism and how intentional spatial design impacts our daily lives.'
  },
  {
    _id: 'p3',
    title: 'The Art of Light and Shadow',
    slug: 'art-light-shadow',
    excerpt: 'How natural light manipulation creates drama and defines space in contemporary residential projects.',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bed9a88?q=80&w=2070&auto=format&fit=crop',
    author: {
      name: 'Julian Thorne',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
      bio: 'Julian Thorne is a leading architectural critic and sustainable design advocate.'
    },
    category: {
      title: 'Architecture',
      slug: 'architecture'
    },
    publishedAt: '2024-02-15T14:00:00Z',
    content: [
      {
        _key: 'f1',
        _type: 'block',
        children: [{ _type: 'span', text: 'Light is the most fundamental tool in an architect\'s arsenal. It has the power to transform a cold room into a sanctuary.' }],
        markDefs: [],
        style: 'normal',
      }
    ]
  },
  {
    _id: 'p4',
    title: 'Materiality in the Digital Age',
    slug: 'materiality-digital-age',
    excerpt: 'The resurgence of tactile materials like timber and stone in an increasingly virtual world.',
    image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=2069&auto=format&fit=crop',
    author: {
      name: 'Sophia Vane',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
      bio: 'Sophia Vane specializes in minimalist interiors.'
    },
    category: {
      title: 'Materials',
      slug: 'materials'
    },
    publishedAt: '2024-01-05T11:00:00Z',
    content: [
      {
        _key: 'g1',
        _type: 'block',
        children: [{ _type: 'span', text: 'As our lives become more digital, the importance of physical texture in our homes becomes even more vital for our sensory well-being.' }],
        markDefs: [],
        style: 'normal',
      }
    ]
  }
];

export const mockCategories = [
  { _id: 'c1', title: 'Architecture', slug: 'architecture' },
  { _id: 'c2', title: 'Interiors', slug: 'interiors' },
  { _id: 'c3', title: 'Sustainability', slug: 'sustainability' },
  { _id: 'c4', title: 'Innovation', slug: 'innovation' },
  { _id: 'c5', title: 'Design Philosophy', slug: 'design-philosophy' },
  { _id: 'c6', title: 'Materials', slug: 'materials' }
];
