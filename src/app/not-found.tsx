import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-5 text-center">
      <div>
        <p className="font-mono text-sm uppercase tracking-widest text-accent">404</p>
        <h1 className="mt-2 font-display text-4xl font-semibold">Không tìm thấy trang</h1>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white"
        >
          Về trang chủ
        </Link>
      </div>
    </main>
  );
}
