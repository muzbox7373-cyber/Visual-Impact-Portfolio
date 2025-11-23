import { Project, Experience, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Dashboard Redesign',
    category: 'UI/UX',
    tags: ['Figma', 'React', 'Data Visualization'],
    thumbnail: 'https://picsum.photos/800/600',
    overview: 'A complete overhaul of an existing e-commerce admin dashboard to improve usability and data accessibility for non-technical merchants.',
    duration: '3 Months',
    role: 'Lead Designer',
    contribution: 100,
    challenge: 'Users reported that the old dashboard was cluttered, slow, and difficult to navigate on mobile devices.',
    solution: 'Implemented a modular card-based layout, optimized data fetching strategies for 50% faster load times, and introduced a responsive design system.',
    result: 'User satisfaction score increased by 40%, and daily active users on mobile grew by 25%.',
    images: ['https://picsum.photos/1000/600?random=1', 'https://picsum.photos/1000/600?random=2']
  },
  {
    id: '2',
    title: 'Fintech Mobile App',
    category: 'Front-end',
    tags: ['React Native', 'TypeScript', 'Animation'],
    thumbnail: 'https://picsum.photos/600/800',
    overview: 'A cross-platform mobile application for managing personal finances with intuitive gesture-based controls.',
    duration: '4 Months',
    role: 'Frontend Developer',
    contribution: 80,
    challenge: 'Handling real-time transaction data without compromising battery life or UI responsiveness.',
    solution: ' Utilized efficient state management with Recoil and optimized re-renders. Implemented native animation drivers for smooth 60fps transitions.',
    result: 'App store rating 4.8/5.0, featured in "Apps of the Week".',
    githubUrl: 'https://github.com/example/fintech',
    liveUrl: 'https://example.com',
    images: ['https://picsum.photos/1000/600?random=3']
  },
  {
    id: '3',
    title: 'Legacy Code Refactoring',
    category: 'Refactoring',
    tags: ['Legacy Code', 'Testing', 'CI/CD'],
    thumbnail: 'https://picsum.photos/800/800',
    overview: 'Modernizing a 5-year-old jQuery codebase into a scalable React architecture.',
    duration: '6 Months',
    role: 'Tech Lead',
    contribution: 100,
    challenge: 'The system was fragile, with zero test coverage and tight coupling between business logic and UI.',
    solution: 'Adopted the Strangler Fig pattern to incrementally replace components. Introduced Jest/Testing Library for 80% coverage.',
    result: 'Bug reports dropped by 60%, and new feature development speed increased by 2x.',
    images: ['https://picsum.photos/1000/600?random=4', 'https://picsum.photos/1000/600?random=5']
  },
  {
    id: '4',
    title: 'Travel Agency Rebranding',
    category: 'Branding',
    tags: ['Identity', 'Logo', 'Web Design'],
    thumbnail: 'https://picsum.photos/800/500',
    overview: 'Creating a fresh, adventurous brand identity for a boutique travel agency focusing on eco-tourism.',
    duration: '2 Months',
    role: 'Brand Designer',
    contribution: 100,
    challenge: 'The client wanted to appeal to younger demographics without alienating their existing luxury clientele.',
    solution: 'Designed a minimalist yet vibrant visual language using earth tones and bold typography.',
    result: 'Social media engagement increased by 150% in the first month post-launch.',
    images: ['https://picsum.photos/1000/600?random=6']
  },
  {
    id: '5',
    title: 'SaaS Landing Page Optimization',
    category: 'Front-end',
    tags: ['Next.js', 'SEO', 'Performance'],
    thumbnail: 'https://picsum.photos/600/900',
    overview: 'Optimizing a marketing landing page to improve conversion rates and Core Web Vitals.',
    duration: '1 Month',
    role: 'Developer',
    contribution: 100,
    challenge: 'Low conversion rates due to slow LCP (Largest Contentful Paint) and confusing CTA placement.',
    solution: 'Optimized images, lazy-loaded off-screen components, and A/B tested hero section variations.',
    result: 'LCP reduced from 2.5s to 0.8s, Conversion rate improved by 12%.',
    liveUrl: 'https://example.com',
    images: ['https://picsum.photos/1000/600?random=7']
  },
  {
    id: '6',
    title: 'Health Care Portal',
    category: 'UI/UX',
    tags: ['Accessibility', 'User Research'],
    thumbnail: 'https://picsum.photos/800/700',
    overview: 'Designing an accessible patient portal for a large hospital network.',
    duration: '5 Months',
    role: 'UX Researcher',
    contribution: 70,
    challenge: 'Ensuring the platform was fully WCAG 2.1 AA compliant for elderly users and those with disabilities.',
    solution: 'Conducted extensive user testing with screen readers. Designed high-contrast themes and simplified navigation flows.',
    result: 'Passed external accessibility audit with zero critical issues.',
    images: ['https://picsum.photos/1000/600?random=8']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Senior Frontend Engineer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    description: 'Leading a team of 5 developers, architecting scalable frontend systems using React and TypeScript.'
  },
  {
    id: '2',
    role: 'UI/UX Designer',
    company: 'Creative Studio',
    period: '2020 - 2022',
    description: 'Designed user-centric interfaces for mobile apps and web platforms. Conducted user research and usability testing.'
  },
  {
    id: '3',
    role: 'Junior Web Developer',
    company: 'StartUp Alpha',
    period: '2018 - 2020',
    description: 'Collaborated with designers to implement responsive web pages. Maintained legacy codebases.'
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'Development',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'GraphQL']
  },
  {
    category: 'Design',
    items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Prototyping', 'User Research']
  },
  {
    category: 'Tools',
    items: ['Git', 'Jira', 'Slack', 'Vercel', 'AWS', 'Docker']
  }
];