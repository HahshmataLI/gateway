export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  imageUrl?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  expertise: string[];
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: 'test test ',
    position: 'Founder & CEO',
    bio: 'With over 15 years in the tech industry and 10+ years in education, Michael founded Gateway to bridge the gap between industry demands and practical education.',
    expertise: ['Educational Leadership', 'Technology Strategy', 'Business Development'],
    socialLinks: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 2,
    name: 'Ahmed Abdullah',
    position: 'Head of Training',
    bio: 'Former Google Digital Marketing Lead with 12 years of experience. Ahmed  leads our curriculum development and ensures industry relevance.',
    expertise: ['Digital Marketing', 'Curriculum Design', 'Industry Training'],
    socialLinks: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 3,
    name: 'Malik Ali',
    position: 'Technical Director',
    bio: 'Full-stack developer turned educator with 8 years of teaching experience. Robert ensures our technical courses stay current with industry trends.',
    expertise: ['Web Development', 'Technical Education', 'Project Management'],
    socialLinks: {
      linkedin: '#',
      website: '#'
    }
  },
  {
    id: 4,
    name: 'Moez ',
    position: 'Call Center Operations Head',
    bio: 'Former call center director with expertise in scaling customer support operations. Priya oversees all call center services and training.',
    expertise: ['Call Center Management', 'Customer Experience', 'Process Optimization'],
    socialLinks: {
      linkedin: '#'
    }
  }
];