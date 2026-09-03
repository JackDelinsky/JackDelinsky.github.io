export default function Hero() {
  return (
    <header className="hero-band">
      <div className="mx-auto max-w-3xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <p className="font-mono text-[13px] text-teal">
          Athens, GA — Terry College of Business, UGA
        </p>

        <h1 className="mt-5 font-display text-[2.75rem] leading-[1.05] tracking-tight sm:text-6xl">
          Jack Delinsky
        </h1>

        <p className="mt-6 max-w-[38ch] font-display text-xl italic leading-snug text-ink/80 sm:text-2xl">
          Business analytics student who builds the AI tools he's writing
          reports about.
        </p>

        <div className="mt-10 border-t border-rule pt-5">
          <p className="font-mono text-[13px] leading-relaxed text-muted">
            Currently: Program Assistant, UGA Competitive Sports.
            <br />
            Graduating: May 2027, MIS &amp; Business Analytics, Spanish minor.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[13px]">
          <a
            href="/resume.pdf"
            className="border-b border-ink pb-0.5 transition-colors hover:border-gold hover:text-gold"
          >
            Download resume
          </a>
          <a
            href="#contact"
            className="border-b border-rule pb-0.5 text-muted transition-colors hover:border-gold hover:text-gold"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
