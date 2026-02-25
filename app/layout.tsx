import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata = {
  title: "CV Digital",
  description: "Modern CV / Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="noise">
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
