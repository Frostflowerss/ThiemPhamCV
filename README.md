# pntarch — Portfolio & CV

Portfolio + CV song ngữ (VI/EN), dark/light mode, admin panel, backend Supabase.
Stack: Next.js 15 · React 19 · TypeScript · Tailwind CSS · Supabase.

## 1. Cài đặt

```bash
npm install
cp .env.example .env.local   # điền giá trị thật
npm run dev
```

## 2. Biến môi trường (.env.local & Vercel)

| Biến | Mô tả |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | URL project Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Anon key (public read qua RLS) |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role — **chỉ server-side** |
| `ADMIN_PASSWORD` | Mật khẩu đăng nhập `/pntarch` |
| `AUTH_SECRET` | Chuỗi ngẫu nhiên dài để ký cookie HMAC |

## 3. Supabase

Chạy `supabase/schema.sql` trong SQL Editor. Tạo 6 bảng + RLS (public read-only)
+ bucket storage `media` (public).

## 4. Trang

- `/` — Home (hero + dự án nổi bật)
- `/projects`, `/projects/[slug]` — danh sách + chi tiết
- `/cv` — CV, in/lưu PDF từ browser
- `/pntarch` — admin (đăng nhập bằng `ADMIN_PASSWORD`)

## 5. Deploy Vercel

Import repo → thêm 5 biến môi trường ở trên → deploy.
Nếu code nằm trong subfolder, set **Root Directory = `pntarch`**.

## Bảo mật

- Service role key không bao giờ lộ ra client (chỉ dùng trong Server Action).
- Public đọc dữ liệu qua anon key + RLS SELECT.
- Admin bảo vệ bằng cookie httpOnly ký HMAC, hết hạn sau 8h.
