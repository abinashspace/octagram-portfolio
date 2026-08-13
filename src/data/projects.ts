export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  image: string;
  services: string[];
  stack: string[];
  liveUrl: string;
};

export const projects: Project[] = [
  {
    slug: 'theotokos-convention-centre',
    name: 'Theotokos Convention Centre',
    category: 'Convention Centre / Banquet Hall',
    description:
      "A modern business website designed to showcase the venue, facilities, events and booking information while making it easy for customers to get in touch.",
    challenge:
      'Theotokos needed an online presence that matched the scale and elegance of the venue itself, and made it simple for couples and event planners to explore the space and enquire about bookings without picking up the phone first.',
    solution:
      'We designed and built a modern, image-led website that puts the venue front and centre — clear sections for facilities and events, fast navigation, and a direct path to enquire from any page.',
    image: '/theotokos-signage.webp',
    services: ['Website Design', 'Development', 'Enquiry Flow', 'Mobile Optimization'],
    stack: ['React', 'Tailwind CSS'],
    liveUrl: 'https://theotokos-convention-centre.vercel.app/',
  },
];
