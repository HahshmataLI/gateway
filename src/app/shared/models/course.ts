export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: number;
  category: 'Digital Marketing' | 'Shopify' | 'Web Development' | 'SEO' | 'Freelancing';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  features: string[];
  imageUrl?: string;
  isFeatured?: boolean;
  tags?: string[];
}

export const COURSE_DATA: Course[] = [
  {
    id: 1,
    title: 'Digital Marketing',
    description: 'Learn how to promote businesses online and increase sales through effective marketing strategies. This course focuses on practical skills including social media marketing, paid advertising, and tracking results. Ideal for beginners and anyone who wants to build a career in digital marketing.',
    duration: '8 Weeks',
    price: 499,
    category: 'Digital Marketing',
    level: 'Intermediate',
    features: ['SEO Optimization', 'Social Media Marketing', 'Google Ads', 'Analytics', 'Content Strategy'],
    isFeatured: true,
    tags: ['SEO', 'Social Media', 'Google Ads', 'Analytics']
  },
  {
    id: 2,
    title: 'Shopify E-commerce Development',
    description: 'Build and scale successful Shopify stores. Learn theme customization, app development, and conversion optimization.',
    duration: '6 Weeks',
    price: 399,
    category: 'Shopify',
    level: 'Beginner',
    features: ['Store Setup', 'Theme Customization', 'App Development', 'Payment Integration', 'SEO'],
    isFeatured: true,
    tags: ['E-commerce', 'Shopify', 'Store Management']
  },
  {
    id: 3,
    title: 'Full Stack Web Development',
    description: 'Master modern web development with Angular, Node.js, and MongoDB. Build responsive, scalable applications.',
    duration: '12 Weeks',
    price: 799,
    category: 'Web Development',
    level: 'Advanced',
    features: ['Angular 21', 'Node.js', 'MongoDB', 'REST APIs', 'Deployment'],
    isFeatured: true,
    tags: ['Angular', 'Node.js', 'MongoDB', 'Full Stack']
  },
  {
    id: 4,
    title: 'Advanced SEO Strategies',
    description: 'Advanced SEO techniques for ranking higher in search engines. Technical SEO, content optimization, and link building.',
    duration: '5 Weeks',
    price: 349,
    category: 'SEO',
    level: 'Advanced',
    features: ['Keyword Research', 'Technical SEO', 'Content Optimization', 'Link Building', 'Analytics'],
    tags: ['SEO', 'Keyword Research', 'Analytics']
  },
  {
    id: 5,
    title: 'Freelancing Success Blueprint',
    description: 'Learn how to start and grow a successful freelancing business. Client acquisition, pricing, and business management.',
    duration: '4 Weeks',
    price: 299,
    category: 'Freelancing',
    level: 'Beginner',
    features: ['Client Acquisition', 'Proposal Writing', 'Pricing Strategies', 'Time Management', 'Contracts'],
    tags: ['Freelancing', 'Business', 'Client Management']
  },
  {
    id: 6,
    title: 'Social Media Marketing Pro',
    description: 'Master social media platforms for business growth. Content strategy, paid advertising, and community management.',
    duration: '6 Weeks',
    price: 449,
    category: 'Digital Marketing',
    level: 'Intermediate',
    features: ['Facebook Ads', 'Instagram Marketing', 'Content Calendar', 'Analytics', 'Community Management'],
    tags: ['Social Media', 'Facebook', 'Instagram', 'Marketing']
  },
  // {
  //   id: 7,
  //   title: 'Shopify Plus for Enterprises',
  //   description: 'Advanced Shopify Plus training for large-scale e-commerce businesses. APIs, automation, and scalability.',
  //   duration: '8 Weeks',
  //   price: 599,
  //   category: 'Shopify',
  //   level: 'Advanced',
  //   features: ['Shopify Plus', 'API Integration', 'Automation', 'Scalability', 'Multi-channel'],
  //   tags: ['Shopify Plus', 'Enterprise', 'API']
  // },
  {
    id: 8,
    title: 'Angular Developer Bootcamp',
    description: 'Comprehensive Angular development course with real-world projects. Latest features and best practices.',
    duration: '10 Weeks',
    price: 699,
    category: 'Web Development',
    level: 'Intermediate',
    features: ['Angular 21', 'TypeScript', 'RxJS', 'State Management', 'Testing'],
    tags: ['Angular', 'TypeScript', 'Frontend']
  },
  {
    id: 9,
    title: 'Local SEO & Google My Business',
    description: 'Specialized course for local businesses to dominate local search results and Google Maps rankings.',
    duration: '4 Weeks',
    price: 299,
    category: 'SEO',
    level: 'Beginner',
    features: ['Local SEO', 'Google My Business', 'Reviews Management', 'Local Citations', 'Map Optimization'],
    tags: ['Local SEO', 'Google My Business', 'Local Marketing']
  },
  {
    id: 10,
    title: 'Upwork & Fiverr Mastery',
    description: 'Learn how to create winning profiles and proposals on top freelancing platforms. Price negotiation and client management.',
    duration: '3 Weeks',
    price: 249,
    category: 'Freelancing',
    level: 'Beginner',
    features: ['Profile Optimization', 'Proposal Writing', 'Portfolio Building', 'Client Communication', 'Rate Setting'],
    tags: ['Upwork', 'Fiverr', 'Freelance Platforms']
  },
  {
    id: 11,
    title: 'Email Marketing Automation',
    description: 'Build effective email marketing campaigns with automation. Lead nurturing, segmentation, and analytics.',
    duration: '5 Weeks',
    price: 399,
    category: 'Digital Marketing',
    level: 'Intermediate',
    features: ['Email Automation', 'Lead Nurturing', 'Segmentation', 'A/B Testing', 'Analytics'],
    tags: ['Email Marketing', 'Automation', 'CRM']
  },
  {
    id: 12,
    title: 'WordPress Development',
    description: 'Learn WordPress theme and plugin development. Custom post types, REST API, and security best practices.',
    duration: '7 Weeks',
    price: 549,
    category: 'Web Development',
    level: 'Intermediate',
    features: ['Theme Development', 'Plugin Development', 'Custom Post Types', 'REST API', 'Security'],
    tags: ['WordPress', 'PHP', 'CMS']
  }
];