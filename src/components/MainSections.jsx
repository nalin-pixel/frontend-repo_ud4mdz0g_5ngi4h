import { Check, ImageIcon, Link as LinkIcon, Stars, Star } from 'lucide-react';

function SectionTitle({ eyebrow, title, subtitle, id }) {
  return (
    <div id={id} className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <div className="mb-2 text-xs font-medium uppercase tracking-widest text-[#ff7a00]">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-2 text-white/70">{subtitle}</p>}
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: Stars,
      title: 'Text → Thumbnail (T2T)',
      desc: 'Generate eye-catching thumbnails from just a title or description.',
    },
    {
      icon: ImageIcon,
      title: 'Image → Thumbnail (I2T)',
      desc: 'Upload an image and style it with AI for maximum click-through.',
    },
    {
      icon: LinkIcon,
      title: 'Recreate Existing Thumbnail',
      desc: 'Paste a YouTube URL or upload an image to auto recreate the design.',
    },
  ];

  return (
    <section id="features" className="px-4 py-16 md:py-24">
      <SectionTitle
        eyebrow="Capabilities"
        title="Create scroll-stopping thumbnails in three powerful ways"
      />
      <div className="mx-auto grid w-full max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-lg transition hover:bg-white/[0.06]"
          >
            <div className="mb-4 inline-flex rounded-lg bg-[#ff7a00]/20 p-2 text-[#ff7a00]">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-white/70">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      name: 'Ava R.',
      text: 'Switched all our channels over—CTR jumped 28% in a week. Unreal.',
      stars: 5,
    },
    {
      name: 'Marcus L.',
      text: 'I produce daily. This saves me 30-40 mins per video. Game changer.',
      stars: 5,
    },
    {
      name: 'Yuki S.',
      text: 'Recreate feature nailed a competitor style perfectly. So fast.',
      stars: 5,
    },
    {
      name: 'Diego P.',
      text: 'Clients love the consistent look. Agency plan worth every dollar.',
      stars: 5,
    },
  ];

  return (
    <section id="reviews" className="px-4 py-16 md:py-24">
      <SectionTitle
        eyebrow="Social Proof"
        title="Trusted by YouTubers, marketers & editors"
      />
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map((r) => (
          <div key={r.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="mb-2 flex items-center gap-1 text-[#ff7a00]">
              {Array.from({ length: r.stars }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-sm text-white/80">“{r.text}”</p>
            <div className="mt-3 text-xs text-white/50">{r.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: 'Free',
      price: '$0',
      note: 'Great to try it out',
      features: ['10 credits / mo', 'Basic styles', 'Watermarked export'],
      featured: false,
    },
    {
      name: 'Pro',
      price: '$19',
      note: 'For creators growing channels',
      features: ['300 credits / mo', 'All styles + I2T', 'No watermark', 'Priority queue'],
      featured: true,
    },
    {
      name: 'Agency',
      price: '$79',
      note: 'For teams & clients',
      features: ['1500 credits / mo', 'Brand kits', 'Team seats (5)', 'API access'],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="px-4 py-16 md:py-24">
      <SectionTitle eyebrow="Pricing" title="Simple, transparent plans" />
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative rounded-2xl border p-6 ${
              t.featured
                ? 'border-[#ff7a00]/50 bg-[#ff7a00]/5 ring-1 ring-[#ff7a00]/30'
                : 'border-white/10 bg-white/[0.03]'
            }`}
          >
            {t.featured && (
              <div className="absolute -top-3 right-4 rounded-full bg-[#ff7a00] px-2 py-1 text-[10px] font-bold text-black">Popular</div>
            )}
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <div className="mt-2 flex items-baseline gap-2">
              <div className="text-3xl font-bold">{t.price}</div>
              <div className="text-xs text-white/50">/ month</div>
            </div>
            <p className="mt-1 text-sm text-white/60">{t.note}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-[#ff7a00]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition ${
                t.featured
                  ? 'bg-[#ff7a00] text-black shadow-lg shadow-[#ff7a00]/30 hover:brightness-95'
                  : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQs() {
  const faqs = [
    {
      q: 'How do credits work?',
      a: 'Each generation uses one credit. Plans include a monthly credit allowance that resets every 30 days.',
    },
    {
      q: 'Can I use thumbnails commercially?',
      a: 'Yes. All paid plans include full commercial usage rights for the generated assets.',
    },
    {
      q: 'Do you offer refunds?',
      a: 'We offer a 7-day refund window if the product does not work as advertised for you.',
    },
    {
      q: 'Is there a watermark?',
      a: 'Free plan exports include a subtle watermark. All paid plans remove watermarks.',
    },
    {
      q: 'Can I collaborate with my team?',
      a: 'Agency plan includes 5 seats, shared brand kits, and project folders.',
    },
    {
      q: 'Do you have an API?',
      a: 'Yes, API access is available on the Agency plan.',
    },
  ];

  return (
    <section id="faqs" className="px-4 py-16 md:py-24">
      <SectionTitle eyebrow="FAQs" title="Answers to common questions" />
      <div className="mx-auto grid max-w-5xl gap-4">
        {faqs.map((f) => (
          <details key={f.q} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 open:bg-white/[0.06]">
            <summary className="cursor-pointer list-none text-sm font-medium text-white/90">
              {f.q}
            </summary>
            <p className="mt-2 text-sm text-white/70">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default function MainSections() {
  return (
    <div>
      <Features />
      <Reviews />
      <Pricing />
      <FAQs />
    </div>
  );
}
