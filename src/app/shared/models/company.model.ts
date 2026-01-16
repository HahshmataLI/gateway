export interface CompanyMilestone {
  year: number;
  title: string;
  description: string;
  icon: string;
}

export interface CompanyValue {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const COMPANY_MILESTONES: CompanyMilestone[] = [
  {
    year: 2010,
    title: 'Gateway Founded',
    description: 'Started as a small call center training facility with just 2 courses and 50 students.',
    icon: 'pi pi-flag'
  },
  {
    year: 2013,
    title: 'Digital Expansion',
    description: 'Introduced our first online courses and expanded course catalog to 10 specialized programs.',
    icon: 'pi pi-globe'
  },
  {
    year: 2016,
    title: 'Industry Partnerships',
    description: 'Established partnerships with 50+ tech companies for student placements and internships.',
    icon: 'pi pi-handshake'
  },
  {
    year: 2019,
    title: 'Call Center Services Launch',
    description: 'Expanded our services to include professional call center solutions for businesses.',
    icon: 'pi pi-headphones'
  },
  {
    year: 2022,
    title: 'Global Recognition',
    description: 'Recognized as a top training institute with over 5000+ students trained globally.',
    icon: 'pi pi-award'
  },
  {
    year: 2024,
    title: 'Cutting-Edge Curriculum',
    description: 'Introduced AI-powered learning and expanded to 20+ industry-relevant courses.',
    icon: 'pi pi-bolt'
  }
];

export const COMPANY_VALUES: CompanyValue[] = [
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from course content to student support.',
    icon: 'pi pi-star',
    color: 'bg-yellow-500'
  },
  {
    title: 'Innovation',
    description: 'Continuously updating our curriculum with the latest industry trends and technologies.',
    icon: 'pi pi-lightbulb',
    color: 'bg-blue-500'
  },
  {
    title: 'Integrity',
    description: 'Building trust through transparent practices and ethical business operations.',
    icon: 'pi pi-shield',
    color: 'bg-green-500'
  },
  {
    title: 'Inclusivity',
    description: 'Creating opportunities for everyone regardless of background or experience level.',
    icon: 'pi pi-users',
    color: 'bg-purple-500'
  },
  {
    title: 'Results-Driven',
    description: 'Focused on measurable outcomes for both our students and call center clients.',
    icon: 'pi pi-chart-line',
    color: 'bg-orange-500'
  },
  {
    title: 'Community',
    description: 'Building a supportive community of learners, mentors, and industry professionals.',
    icon: 'pi pi-heart',
    color: 'bg-red-500'
  }
];