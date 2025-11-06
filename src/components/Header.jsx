import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faqs' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-[#ff7a00]" />
          <span className="font-semibold tracking-tight">ThumbnailGPT</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a href="#" className="text-sm text-white/80 transition hover:text-white">Login</a>
          <a
            href="#pricing"
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-inner shadow-white/10 ring-1 ring-white/10 transition hover:bg-white/15"
          >
            Get Started
          </a>
          <a
            href="#hero"
            className="rounded-full bg-[#ff7a00] px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-[#ff7a00]/30 transition hover:brightness-95"
          >
            Create Thumbnail
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="border-t border-white/10 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-white/90 hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <a href="#" className="rounded-md px-2 py-2 text-sm text-white/90 hover:bg-white/10" onClick={() => setOpen(false)}>Login</a>
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white ring-1 ring-white/10"
            >
              Get Started
            </a>
            <a
              href="#hero"
              onClick={() => setOpen(false)}
              className="rounded-md bg-[#ff7a00] px-3 py-2 text-sm font-semibold text-black"
            >
              Create Thumbnail
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
