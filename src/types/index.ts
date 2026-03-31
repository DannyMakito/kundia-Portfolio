export interface Project {
  id: string;
  name: string;
  slug: string;
  label?: string;
  previewImage: string;
  previewImages?: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  angle: number;
}

export interface FloatingImage {
  id: string;
  src: string;
  position: { x: string; y: string };
  size: { width: number; height: number };
  delay: number;
}

export interface JobListing {
  id: string;
  title: string;
  link: string;
}
