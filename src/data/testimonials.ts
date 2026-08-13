export type Testimonial = {
  quote: string;
  name: string;
  business: string;
  role?: string;
  rating: number;
  placeholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "OCTAGRAM built us a website that finally matches how our venue looks in person. It's simple for our team to keep updated, and guests tell us it makes it easy to find everything before they even call.",
    name: 'Theotokos Convention Centre',
    business: '',
    rating: 5,
  },
];
