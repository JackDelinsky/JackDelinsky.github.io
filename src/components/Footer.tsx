export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-6 text-paper/40">
      <div className="mx-auto flex max-w-3xl items-center justify-between font-mono text-[12px]">
        <span>&copy; {new Date().getFullYear()} Jack Delinsky</span>
        <span>Built with React &amp; Tailwind</span>
      </div>
    </footer>
  );
}
