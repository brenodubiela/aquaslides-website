export const metadata = {
  title: "Design System | Aqua Slides",
  robots: { index: false, follow: false },
};

export default function DesignSystemLayout({ children }) {
  return (
    <div className="min-h-screen bg-canvas">
      {children}
    </div>
  );
}
