import { experience } from '../content';

export default function About() {
  return (
    <section id="about" className="border-t border-rule">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <p className="font-mono text-[13px] text-muted">About</p>

        <p className="mt-6 max-w-[60ch] font-display text-2xl leading-relaxed sm:text-[1.75rem]">
          I study Management Information Systems and Business Analytics at
          UGA's Terry College of Business, with a Spanish minor. Most of my
          work sits at the intersection of operations and AI — reading a
          messy process and finding where a language model actually saves
          someone time, instead of just sounding impressive.
        </p>

        <div className="mt-14">
          <p className="font-mono text-[13px] text-muted">Experience</p>
          <div className="mt-6 space-y-8">
            {experience.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 gap-1 border-t border-rule pt-4 sm:grid-cols-[160px_1fr]"
              >
                <p className="font-mono text-[12px] text-muted">
                  {item.dateLabel}
                </p>
                <div>
                  <p className="font-display text-lg leading-snug">
                    {item.role} <span className="text-ink/50">— {item.org}</span>
                  </p>
                  <p className="mt-2 max-w-[55ch] text-ink/75">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
