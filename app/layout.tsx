import "./globals.css";

export const metadata = {
  title: "CV Digital",
  description: "Modern CV / Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="noise">
        {children}
      </body>
    </html>
  );
}
