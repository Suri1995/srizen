import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-navy-gradient text-center px-6">
      <div>
        <p className="eyebrow mb-4">Error 404</p>
        <h1 className="font-display text-white text-4xl md:text-6xl mb-6">
          This level doesn't exist.
        </h1>
        <p className="text-white/60 max-w-md mx-auto mb-8">
          The page you're looking for may have moved. Let's get you back to
          solid ground.
        </p>
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
