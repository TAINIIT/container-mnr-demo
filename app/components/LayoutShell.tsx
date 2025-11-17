"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import classNames from "classnames";

const menuItems = [
  { href: "/", label: "Dashboard" },
  { href: "/containers", label: "Danh sách container" }
];

export default function LayoutShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <header className="h-14 border-b bg-white flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center text-sm font-bold">
            M&R
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-slate-900">Container M&amp;R Demo</span>
            <span className="text-xs text-slate-500">Prototype cho khách hàng dùng thử</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <span className="hidden sm:inline">Xin chào, Demo User</span>
          <span className="px-2 py-1 rounded-full bg-slate-100 text-xs">VN / EN</span>
        </div>
      </header>

      {/* Main layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-56 border-r bg-white hidden md:block">
          <nav className="p-3 space-y-1">
            {menuItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={classNames(
                  "flex items-center px-3 py-2 rounded-lg text-sm font-medium",
                  pathname === item.href
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-600 hover:bg-slate-100"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 p-4 md:p-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
