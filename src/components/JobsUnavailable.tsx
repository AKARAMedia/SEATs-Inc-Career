export default function JobsUnavailable({ className = "" }: { className?: string }) {
  return (
    <div role="status" className={`rounded-xl bg-surface p-10 text-center text-text ${className}`}>
      <p className="font-semibold text-heading">We can&rsquo;t load the jobs right now.</p>
      <p className="mt-1 text-sm">This page will try again automatically in a few seconds.</p>
    </div>
  );
}
