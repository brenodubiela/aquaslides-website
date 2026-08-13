export default function LegalLayout({ children }) {
  return (
    <div className="w-full bg-canvas min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 text-ink">
        {children}
      </div>
    </div>
  );
}
