export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>
          © {new Date().getFullYear()} Pavitra G V. Crafted with care.
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </div>
      </div>
    </footer>
  );
}
