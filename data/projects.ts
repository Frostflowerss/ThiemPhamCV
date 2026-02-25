export type Project = {
  id: string;
  title: string;
  subtitle: string;
  dateText: string;
  locationLine: string;
  priceText?: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "The Velvet Room // Amsterdam",
    subtitle: "Acoustic night / Story-driven set",
    dateText: "Th 7, 12 thg 7, 2025, 00:00 - Th 3, 24 thg 2, 2026",
    locationLine: "Singel 460, 1017 AW Amsterdam, Netherlands",
    priceText: "$99",
    description:
      "Một buổi tối acoustic với ánh nến và những câu chuyện đằng sau các bài hát. Thiết kế trải nghiệm tối giản, tương phản cao, nhấn mạnh không gian và nhịp chuyển cảnh.",
    ctaLabel: "RSVP",
    ctaHref: "https://example.com",
    image: "/projects/p1.jpg",
  },
  {
    id: "p2",
    title: "Sage House Sessions // Copenhagen",
    subtitle: "Session / Minimal stage light",
    dateText: "CN, 3 thg 8, 2025",
    locationLine: "Copenhagen, Denmark",
    priceText: "",
    description:
      "Concept trình bày theo dạng module: ảnh, thông tin ngắn, và CTA. Tối ưu cho đọc nhanh và cảm giác 'digital-lux'.",
    ctaLabel: "View detail",
    ctaHref: "https://example.com",
    image: "/projects/p2.jpg",
  },
  {
    id: "p3",
    title: "The Listening Room // Berlin",
    subtitle: "Live / High-contrast photography",
    dateText: "CN, 14 thg 9, 2025",
    locationLine: "Berlin, Germany",
    priceText: "",
    description:
      "Trải nghiệm trình chiếu ảnh đen trắng + typography tối giản. Hiệu ứng mở modal nhanh, blur nền, và scale nhẹ tạo cảm giác cao cấp.",
    ctaLabel: "Open link",
    ctaHref: "https://example.com",
    image: "/projects/p3.jpg",
  },
];
