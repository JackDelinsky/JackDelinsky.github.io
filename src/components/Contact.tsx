export default function Contact() {
  return (
    <section id="contact" className="border-t border-rule bg-ink text-paper">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <p className="font-mono text-[13px] text-paper/60">Contact</p>

        <p className="mt-6 max-w-[42ch] font-display text-3xl leading-snug sm:text-4xl">
          Reach out, or save everything below to your contacts in one tap.
        </p>

        <div className="mt-10 flex flex-col gap-4 font-mono text-[15px]">
          {/* TODO: replace with your real email, LinkedIn, and GitHub */}
          <a
            href="mailto:you@example.com"
            className="w-fit border-b border-paper/40 pb-0.5 transition-colors hover:border-gold hover:text-gold"
          >
            you@example.com
          </a>
          <a
            href="https://linkedin.com/in/your-handle"
            target="_blank"
            rel="noreferrer"
            className="w-fit border-b border-paper/40 pb-0.5 transition-colors hover:border-gold hover:text-gold"
          >
            linkedin.com/in/your-handle
          </a>
          <a
            href="https://github.com/JackDelinsky"
            target="_blank"
            rel="noreferrer"
            className="w-fit border-b border-paper/40 pb-0.5 transition-colors hover:border-gold hover:text-gold"
          >
            github.com/JackDelinsky
          </a>
        </div>

        <p className="mt-12 max-w-[48ch] font-mono text-[12px] leading-relaxed text-paper/50">
          This page is built to be the landing spot for an NFC card — point
          the card at this URL and a tap hands someone your resume and every
          link above.
        </p>
      </div>
    </section>
  );
}
