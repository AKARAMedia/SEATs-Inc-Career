export default function HomePage() {
  return (
    <main className="container-site flex flex-1 flex-col items-center justify-center gap-6 py-24 text-center">
      <h1 className="text-4xl">S.E.A.T.S Career — rebuild scaffold</h1>
      <p className="max-w-xl text-text">
        Project scaffold and design tokens are wired up. Static pages (Top, Work, Company, Team, Register)
        and the Jobs section come next.
      </p>
      <a href="/jobs" className="btn-primary">
        View Jobs
      </a>
    </main>
  );
}
