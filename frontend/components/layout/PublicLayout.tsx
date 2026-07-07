import PublicNavbar from "./PublicNavbar";
import PublicFooter from "./PublicFooter";

interface PublicLayoutProps {
  children: React.ReactNode;
  /** Extra classes for the <main> element */
  className?: string;
}

/**
 * PublicLayout — wraps any public page with the shared PublicNavbar + PublicFooter.
 *
 * Usage:
 *   export default function AboutPage() {
 *     return (
 *       <PublicLayout>
 *         <section>…</section>
 *       </PublicLayout>
 *     );
 *   }
 */
export default function PublicLayout({ children, className }: PublicLayoutProps) {
  return (
    <div className="bg-white text-zinc-950 min-h-screen flex flex-col">
      <PublicNavbar />
      <main className={`flex-1 ${className ?? ""}`}>{children}</main>
      <PublicFooter />
    </div>
  );
}
