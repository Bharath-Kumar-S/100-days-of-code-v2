export default function Footer() {
  return (
    <footer className="border-t mt-12 fixed bottom-5 w-full">
      <div className="max-w-4xl mx-auto px-6 py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Bharath
      </div>
    </footer>
  );
}
