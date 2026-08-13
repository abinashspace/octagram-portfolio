import { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
};

const DEFAULT_TITLE = 'OCTAGRAM — Website Design Agency for Local Businesses';
const DEFAULT_DESCRIPTION =
  'We build modern, fast and conversion-focused websites for gyms, clinics, restaurants, banquet halls and local businesses that want a stronger online presence.';

export function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);

    return () => {
      document.title = DEFAULT_TITLE;
      document.querySelector('meta[name="description"]')?.setAttribute('content', DEFAULT_DESCRIPTION);
    };
  }, [title, description]);

  return null;
}

export default Seo;
