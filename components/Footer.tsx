import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-base mb-3">
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 text-black px-2 py-1 rounded-md text-sm">
                &lt;/&gt;
              </span>
              InterviewAI
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              AI-powered interview preparation for the modern developer.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-4">
              <SocialIcon href="#" icon="fa-x-twitter" />
              <SocialIcon href="#" icon="fa-github" />
              <SocialIcon href="#" icon="fa-linkedin-in" />
            </div>
          </div>

          {/* Columns */}
          <FooterColumn
            title="Product"
            links={[
              { label: "Features", href: "#features" },
              { label: "Pricing", href: "#pricing" },
              { label: "FAQ", href: "#faq" },
            ]}
          />

          <FooterColumn
            title="Resources"
            links={[
              { label: "Blog", href: "#" },
              { label: "Interview Tips", href: "#" },
              { label: "Documentation", href: "#" },
            ]}
          />

          <FooterColumn
            title="Legal"
            links={[
              { label: "Privacy", href: "#" },
              { label: "Terms", href: "#" },
              { label: "Contact", href: "#" },
            ]}
          />
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 pt-4 text-center">
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} InterviewAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Sub Components ---------- */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold text-slate-300 mb-3 uppercase tracking-wide">
        {title}
      </h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: string }) {
  return (
    <Link
      href={href}
      aria-label={icon}
      className="w-8 h-8 rounded-md border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition"
    >
      <i className={`fab ${icon} text-xs`}></i>
    </Link>
  );
}
