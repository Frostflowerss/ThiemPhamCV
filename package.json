"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit() {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: "Đăng nhập thất bại." }));
        setError(error ?? "Đăng nhập thất bại.");
        return;
      }
      router.replace("/pntarch");
      router.refresh();
    } catch {
      setError("Lỗi kết nối. Thử lại.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="grid min-h-screen place-items-center px-5">
      <div className="w-full max-w-sm rounded-xl border border-line bg-surface p-8">
        <h1 className="font-display text-2xl font-semibold">Admin</h1>
        <p className="mt-1 text-sm text-muted">pntarch control panel</p>

        <div className="mt-6 space-y-4">
          <div>
            <label htmlFor="pw" className="mb-1.5 block text-sm font-medium">
              Mật khẩu
            </label>
            <input
              id="pw"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              autoFocus
              className="w-full rounded-lg border border-line bg-bg px-3 py-2 outline-none focus:border-accent"
            />
          </div>

          {error && (
            <p role="alert" className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-500">
              {error}
            </p>
          )}

          <button
            onClick={submit}
            disabled={loading || !password}
            className="w-full rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white transition-opacity disabled:opacity-50"
          >
            {loading ? "Đang vào…" : "Đăng nhập"}
          </button>
        </div>
      </div>
    </main>
  );
}
