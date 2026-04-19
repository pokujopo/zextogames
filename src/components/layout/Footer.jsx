import { footerLinks } from '@/constants/navigation';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 py-10">
      <div className="page-shell grid gap-10 md:grid-cols-[1.6fr_repeat(3,1fr)]">
        <div>
          <h3 className="text-2xl font-bold">ZextoGames</h3>
          <p className="mt-3 max-w-md text-sm text-text-muted">Premium frontend shell for a modern gaming startup with download, play-online, wishlist, search, auth, and backend-ready integrations.</p>
        </div>
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <h4 className="font-semibold">{group}</h4>
            <div className="mt-4 space-y-2 text-sm text-text-muted">
              {links.map((link) => <p key={link}>{link}</p>)}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
