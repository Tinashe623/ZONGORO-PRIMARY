export interface GalleryImage {
  src: string;
  alt: string;
  category: 'School Activities' | 'Church Events' | 'Trips';
}

export const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop',
    alt: 'School classroom',
    category: 'School Activities',
  },
  {
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
    alt: 'Children playing',
    category: 'School Activities',
  },
  {
    src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop',
    alt: 'School assembly',
    category: 'School Activities',
  },
  {
    src: 'https://images.unsplash.com/photo-1519810755548-39cd217da494?w=600&h=400&fit=crop',
    alt: 'Church service',
    category: 'Church Events',
  },
  {
    src: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006b5?w=600&h=400&fit=crop',
    alt: 'Choir performance',
    category: 'Church Events',
  },
  {
    src: 'https://images.unsplash.com/photo-1594642704677-f2c1d253269b?w=600&h=400&fit=crop',
    alt: 'Sunday school',
    category: 'Church Events',
  },
  {
    src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&h=400&fit=crop',
    alt: 'School trip',
    category: 'Trips',
  },
  {
    src: 'https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?w=600&h=400&fit=crop',
    alt: 'Nature walk',
    category: 'Trips',
  },
  {
    src: 'https://images.unsplash.com/photo-1472145246862-24f3a5f0f98e?w=600&h=400&fit=crop',
    alt: 'Excursion',
    category: 'Trips',
  },
];