import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b mb-8">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between">
        <Link href="/" className="font-bold">
          Bharath
        </Link>
        <div className="flex gap-4">
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}
