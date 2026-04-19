import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { mainNav } from '@/constants/navigation';
import { useUIStore } from '@/store/useUIStore';

function MobileMenu() {
  const { mobileMenuOpen, closeMobileMenu } = useUIStore();

  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/70 lg:hidden" onClick={closeMobileMenu}>
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="ml-auto flex h-full w-80 flex-col gap-6 bg-bg p-6" onClick={(e) => e.stopPropagation()}>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-text-muted">Navigation</p>
              <h2 className="mt-2 text-2xl font-bold">ZextoGames</h2>
            </div>
            <div className="space-y-2">
              {mainNav.map((item) => (
                <Link key={item.href} to={item.href} onClick={closeMobileMenu} className="block rounded-xl border border-white/10 px-4 py-3 text-text-primary hover:bg-white/5">
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
