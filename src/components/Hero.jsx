import { Play, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] h-72 w-72 -translate-x-1/2 rounded-full bg-[#ff7a00]/30 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        {/* Copy */}
        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <Sparkles className="h-3.5 w-3.5 text-[#ff7a00]" />
            <span>AI-powered thumbnail generation</span>
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Create High-Impact YouTube Thumbnails With AI
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
            Text-to-Thumbnail, Image-to-Thumbnail & AI Thumbnail Recreation in seconds.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-[#ff7a00] px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-[#ff7a00]/30 transition hover:brightness-95"
            >
              Generate Thumbnail
            </a>
            <a
              href="https://www.youtube.com" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              <Play className="h-4 w-4" />
              Watch Demo
            </a>
          </div>
        </div>

        {/* Mockup */}
        <div className="relative">
          <div className="absolute inset-0 -z-0 rounded-2xl bg-gradient-to-tr from-[#ff7a00]/20 to-transparent blur-2xl" />
          <div className="relative mx-auto aspect-video w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
            <div className="absolute right-3 top-3 rounded-md bg-black/60 px-2 py-1 text-[10px] font-medium text-white/80 ring-1 ring-white/10">
              AI Output Preview
            </div>
            {/* Placeholder thumbnail composition */}
            <div className="grid h-full w-full grid-cols-2">
              <div className="relative flex items-center justify-center bg-black">
                <span className="text-4xl font-extrabold text-[#ff7a00] drop-shadow">WOW</span>
              </div>
              <div className="relative bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIzNTg2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-3">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-white/70" />
                <div className="text-xs text-white/90">Your Channel</div>
              </div>
              <div className="rounded bg-[#ff7a00] px-2 py-1 text-[10px] font-bold text-black">CTR +34%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
