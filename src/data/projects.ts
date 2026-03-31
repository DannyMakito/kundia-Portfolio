import type { Project, JobListing, GalleryImage, FloatingImage } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    name: 'GOOGLE',
    slug: 'google',
    previewImage: '/images/projects/google.jpg',
    previewImages: [
      '/images/homepage/gun.png',
      '/images/homepage/lotus.png',
      '/images/homepage/tooth.png',
      '/images/homepage/med.png',
    ],
  },
  {
    id: '2',
    name: 'HENNESSY',
    slug: 'hennessy',
    previewImage: '/images/projects/hennessy.jpg',
    previewImages: [
      '/images/homepage/draw.png',
      '/images/homepage/gun.png',
      '/images/homepage/lotus.png',
      '/images/homepage/tooth.png',
    ],
  },
  {
    id: '3',
    name: 'HERMES',
    slug: 'hermes',
    label: 'FRAGRANCE FINDER',
    previewImage: '/images/projects/hermes.jpg',
    previewImages: [
      '/images/homepage/med.png',
      '/images/homepage/draw.png',
      '/images/homepage/gun.png',
      '/images/homepage/lotus.png',
    ],
  },
  {
    id: '4',
    name: 'LA MER',
    slug: 'la-mer',
    label: 'SKINCARE PRINT',
    previewImage: '/images/homepage/bubbles-product.jpg',
    previewImages: [
      '/images/homepage/tooth.png',
      '/images/homepage/med.png',
      '/images/homepage/draw.png',
      '/images/homepage/gun.png',
    ],
  },
  {
    id: '5',
    name: 'LOUIS VUITTON ASNIERES',
    slug: 'louis-vuitton-asnieres',
    label: 'SOCIAL QUEST',
    previewImage: '/images/projects/lv-trunks.jpg',
    previewImages: [
      '/images/homepage/lotus.png',
      '/images/homepage/tooth.png',
      '/images/homepage/med.png',
      '/images/homepage/draw.png',
    ],
  },
  {
    id: '6',
    name: 'LOUIS VUITTON GRASSE',
    slug: 'louis-vuitton-grasse',
    label: 'SOCIAL QUEST II',
    previewImage: '/images/projects/lv-grasse.jpg',
    previewImages: [
      '/images/homepage/gun.png',
      '/images/homepage/lotus.png',
      '/images/homepage/tooth.png',
      '/images/homepage/med.png',
    ],
  },
  {
    id: '7',
    name: 'MARLY GARDEN',
    slug: 'marly-garden',
    previewImage: '/images/projects/marly-garden.jpg',
    previewImages: [
      '/images/homepage/draw.png',
      '/images/homepage/gun.png',
      '/images/homepage/lotus.png',
      '/images/homepage/tooth.png',
    ],
  },
  {
    id: '8',
    name: 'PARIS BERLIN',
    slug: 'paris-berlin',
    previewImage: '/images/homepage/woman-field.jpg',
    previewImages: [
      '/images/homepage/med.png',
      '/images/homepage/draw.png',
      '/images/homepage/gun.png',
      '/images/homepage/lotus.png',
    ],
  },
  {
    id: '9',
    name: 'TAITTINGER',
    slug: 'taittinger',
    previewImage: '/images/homepage/champagne-picnic.jpg',
    previewImages: [
      '/images/homepage/tooth.png',
      '/images/homepage/med.png',
      '/images/homepage/draw.png',
      '/images/homepage/gun.png',
    ],
  },
];

export const jobListings: JobListing[] = [
  {
    id: '1',
    title: 'GROWTH DIRECTOR',
    link: '#',
  },
  {
    id: '2',
    title: 'SENIOR MOTION DESIGNER',
    link: '#',
  },
  {
    id: '3',
    title: 'STRATEGIC PARTNERSHIP (INTERN)',
    link: '#',
  },
];

export const homepageGallery: GalleryImage[] = [
  {
    id: '1',
    src: '/images/homepage/gun.png',
    alt: 'Wine bottle',
    width: 300,
    height: 400,
  },
  {
    id: '2',
    src: '/images/homepage/lotus.png',
    alt: 'Pretzel with ribbon',
    width: 300,
    height: 400,
  },
  {
    id: '3',
    src: '/images/homepage/tooth.png',
    alt: 'Makeup brushes',
    width: 300,
    height: 400,
  },
  {
    id: '4',
    src: '/images/homepage/med.png',
    alt: 'La Mer product',
    width: 300,
    height: 400,
  },
  {
    id: '5',
    src: '/images/homepage/draw.png',
    alt: 'Beauty portrait',
    width: 300,
    height: 400,
  },
  {
    id: '6',
    src: '/images/homepage/tooth.png',
    alt: 'Italian village',
    width: 400,
    height: 300,
  },
  {
    id: '7',
    src: '/images/homepage/gun.png',
    alt: 'Champagne picnic',
    width: 400,
    height: 300,
  },
  {
    id: '8',
    src: '/images/homepage/lotus.png',
    alt: 'Woman in field',
    width: 300,
    height: 400,
  },
];

export const servicesFloatingImages: FloatingImage[] = [
  {
    id: '1',
    src: '/images/services/abstract-gradient.jpg',
    position: { x: '5%', y: '20%' },
    size: { width: 120, height: 120 },
    delay: 0,
  },
  {
    id: '2',
    src: '/images/services/perfume-desert.jpg',
    position: { x: '85%', y: '15%' },
    size: { width: 150, height: 200 },
    delay: 1,
  },
  {
    id: '3',
    src: '/images/services/hennessy-neon.jpg',
    position: { x: '10%', y: '60%' },
    size: { width: 180, height: 135 },
    delay: 2,
  },
  {
    id: '4',
    src: '/images/services/fashion-silhouette.jpg',
    position: { x: '80%', y: '55%' },
    size: { width: 140, height: 186 },
    delay: 0.5,
  },
];
