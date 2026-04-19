import { Gamepad2, Menu, Search, UserCircle2 } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { mainNav } from '@/constants/navigation';
import { useUIStore } from '@/store/useUIStore';
import Button from '@/components/ui/Button';
import { useAuthStore } from '@/store/useAuthStore';

function Navbar() {
  const openMobileMenu = useUIStore((state) => state.openMobileMenu);
  const toggleCommandPalette = useUIStore((state) => state.toggleCommandPalette);
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-bg/80 backdrop-blur-xl">
      <div className="page-shell flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 font-bold">
          <div className="rounded-2xl bg-primary/15 p-2 text-primary shadow-glow"><Gamepad2 size={20} /></div>
          <div>
            <span className="text-xl">ZextoGames</span>
            <p className="text-xs font-normal text-text-muted">Download. Play. Discover.</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {mainNav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `rounded-xl px-4 py-2 text-sm transition ${isActive ? 'bg-white/10 text-text-primary' : 'text-text-muted hover:bg-white/5 hover:text-text-primary'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Button variant="ghost" onClick={() => toggleCommandPalette(true)} aria-label="Open quick search">
            <Search size={18} /> Search
          </Button>
          <Button variant="secondary" onClick={() => navigate(user ? '/profile' : '/login')}>
            <UserCircle2 size={18} /> {user ? 'Profile' : 'Login'}
          </Button>
        </div>

        <button className="rounded-xl border border-white/10 p-3 text-text-primary lg:hidden" onClick={openMobileMenu} aria-label="Open menu">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
