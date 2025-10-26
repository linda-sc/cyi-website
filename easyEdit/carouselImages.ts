export interface CarouselImage {
  url: string;
  alt: string;
  title?: string;
  description?: string;
}

export const carouselImages: CarouselImage[] = [
  {
    url: "https://static.wixstatic.com/media/your-image-url-1.jpg",
    alt: "Chinatown Youth Initiatives activity",
    title: "Youth Leadership",
    description: "Empowering the next generation of community leaders",
  },
  {
    url: "https://static.wixstatic.com/media/your-image-url-2.jpg",
    alt: "Community event",
    title: "Community Building",
    description: "Bringing the community together",
  },
  {
    url: "https://static.wixstatic.com/media/your-image-url-3.jpg",
    alt: "Youth program",
    title: "Programs & Events",
    description: "Engaging youth through innovative programs",
  },
];
