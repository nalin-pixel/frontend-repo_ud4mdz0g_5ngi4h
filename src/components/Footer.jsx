import { Youtube, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-[#ff7a00]" />
            <span className="font-semibold tracking-tight">ThumbnailGPT</span>
          </div>
          <p className="mt-3 max-w-md text-sm text-white/60">
            AI that crafts high-converting YouTube thumbnails in seconds.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-white/80">Links</div>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><a className="hover:text-white" href="#">Home</a></li>
            <li><a className="hover:text-white" href="#pricing">Pricing</a></li>
            <li><a className="hover:text-white" href="#">Docs</a></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-white/80">Legal</div>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><a className="hover:text-white" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-white" href="#">Terms</a></li>
            <li><a className="hover:text-white" href="#">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-6">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} ThumbnailGPT. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="rounded p-2 text-white/70 hover:bg-white/10 hover:text-white">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="rounded p-2 text-white/70 hover:bg-white/10 hover:text-white">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="rounded p-2 text-white/70 hover:bg-white/10 hover:text-white">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
