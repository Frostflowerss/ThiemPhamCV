# cv-website-modern-motion

Next.js (App Router) + Tailwind + Framer Motion.
- Project carousel auto grayscale (hover reveal)
- Modal popup detail
- Global tone editor (password protected: 270298)
- Modern, fast animations

## Run local
```bash
npm i
npm run dev
```

## Deploy (Vercel)
- Import this GitHub repo in Vercel
- Framework: Next.js (auto-detect)
- Build command: `next build` (default)
- Output: default

## Replace data
Edit: `data/projects.ts`
Replace images in: `public/projects/*`

## Nội dung / Content
- Dữ liệu nằm trong thư mục `data/` (projects, skills, experience, education).
- Ảnh dự án đặt trong `public/projects/`.
- Avatar & CV PDF đặt trong `public/uploads/`.

## Song ngữ
- VI: màu trắng
- EN: màu vàng (accent)

## Featured Projects
- Carousel ngang: vuốt trên mobile, nút prev/next trên desktop
- Tối đa 4 hiển thị trên màn hình lớn (center nổi bật, mờ dần 2 bên)
