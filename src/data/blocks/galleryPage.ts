/**
 * Default content for the Gallery page (`pages.gallery`).
 *
 * The gallery images and their categories are served from the CMS
 * (`content.gallery`); this block only carries the surrounding page copy.
 */
export interface GalleryPageBlock {
  hero: {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  filters: {
    allLabel: string;
  };
  viewHint: string;
}

export const galleryPageBlock: GalleryPageBlock = {
  hero: {
    title: 'School Gallery',
    subtitle: 'Capturing moments of learning, faith, and community',
    image: '/images/moments/chapel-04.webp',
    imageAlt: 'The school gathered for assembly',
  },
  intro: {
    eyebrow: 'Our Moments',
    title: 'School Gallery',
    subtitle: 'Browse life at St James Zongoro across the years',
  },
  filters: {
    allLabel: 'All',
  },
  viewHint: 'Click on any image to view full screen',
};
