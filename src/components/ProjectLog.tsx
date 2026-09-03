import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects, statusLabel, type Status } from '../content';

const statusColor: Record<Status, string> = {
  operational: 'text-teal',
  'in progress': 'text-gold',
  archived: 'text-muted',
};

export default function ProjectLog() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.getAttribute('data-id') ?? projects[0].id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 },
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const active = projects.find((p) => p.id === activeId) ?? projects[0];

  return (
    <section id="projects" className="border-t border-rule bg-paper-dim">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <p className="font-mono text-[13px] text-muted">Project log</p>

        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1fr)_320px]">
          {/* Left: scrolling entries */}
          <div className="space-y-24">
            {projects.map((project, i) => (
              <div
                key={project.id}
                data-id={project.id}
                ref={(el) => {
                  sectionRefs.current[project.id] = el;
                }}
                className={`transition-opacity duration-500 ${
                  activeId === project.id ? 'opacity-100' : 'opacity-40'
                }`}
              >
                <div className="flex items-baseline gap-3 font-mono text-[13px] text-muted">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <span>{project.dateLabel}</span>
                  <span className={statusColor[project.status]}>
                    {statusLabel[project.status]}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-2xl leading-snug sm:text-3xl">
                  {project.name}
                </h3>

                <p className="mt-3 max-w-[52ch] text-ink/80">{project.summary}</p>
                <p className="mt-3 max-w-[52ch] text-ink/70">{project.detail}</p>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[12px] text-muted">
                  {project.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1 border-b border-ink pb-0.5 font-mono text-[13px] transition-colors hover:border-gold hover:text-gold"
                  >
                    View on GitHub
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Right: sticky placeholder panel for the active project */}
          <div className="hidden md:block">
            <div className="sticky top-24">
              <div className="flex aspect-[4/5] w-full flex-col justify-between border border-rule bg-paper p-6">
                <span className="font-mono text-[13px] text-muted">
                  {statusLabel[active.status]}
                </span>
                <span className="font-display text-5xl italic leading-none text-ink/20">
                  {active.name
                    .split(' ')
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join('')}
                </span>
                <span className="font-mono text-[12px] text-muted">
                  {active.dateLabel}
                </span>
              </div>
              <p className="mt-3 font-mono text-[12px] text-muted">
                Image or clip placeholder — swap in a screenshot or short
                screen capture per project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
