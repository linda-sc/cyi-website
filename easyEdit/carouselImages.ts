export interface CarouselImage {
  url: string;
  alt: string;
  title?: string;
  description?: string;
}

export const carouselImages: CarouselImage[] = [
  {
    url: "https://static.wixstatic.com/media/e8d998_192f1b74f14648c8ab053ec03dd44d5a~mv2.jpg/v1/fill/w_596,h_720,al_c,q_85,enc_avif,quality_auto/24058871_10155031946142918_5957528640526929563_n.jpg",
    alt: "Chinatown Youth Initiatives activity",
    title: "Youth Leadership",
    description: "Empowering the next generation of community leaders",
  },
  {
    url: "https://static.wixstatic.com/media/e8d998_26ed3bcdf2014e1b91381305e3142929~mv2.jpeg/v1/crop/x_101,y_0,w_417,h_528/fill/w_500,h_605,al_c,lg_1,q_80,enc_avif,quality_auto/cyi-cbd-3.jpeg",
    alt: "Community event",
    title: "Community Building",
    description: "Bringing the community together",
  },
  {
    url: "https://static.wixstatic.com/media/e8d998_63a2b14a7bee4c91864f9c041b2d8c59~mv2.jpg/v1/fill/w_447,h_540,al_c,q_80,enc_avif,quality_auto/10501811_10152291702242918_2443624704680753876_n.jpg",
    alt: "Youth program",
    title: "Programs & Events",
    description: "Engaging youth through innovative programs",
  },
];
