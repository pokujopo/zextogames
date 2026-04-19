import { LockKeyhole, Settings, Shield, UserCircle2 } from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import StatsCard from '@/components/ui/StatsCard';
import { useAuthStore } from '@/store/useAuthStore';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { useRecentStore } from '@/store/useRecentStore';
import { useProfile } from '@/hooks/useProfile';

function ProfilePage() {
  const authUser = useAuthStore((state) => state.user);
  const favorites = useFavoritesStore((state) => state.items);
  const recent = useRecentStore((state) => state.items);
  const query = useProfile();
  const user = query.data || authUser;

  return (
    <section className="section-space">
      <div className="page-shell space-y-8">
        <PageHeader eyebrow="Profile" title="Your player account" description="Personal account overview, activity stats, and placeholder settings architecture." />
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="panel p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-5 text-primary"><UserCircle2 size={46} /></div>
              <div>
                <h2 className="text-2xl font-bold">{user?.username || 'Player'}</h2>
                <p className="text-text-muted">{user?.email}</p>
              </div>
            </div>
            <div className="mt-6 space-y-3 text-sm text-text-muted">
              <div className="rounded-2xl border border-white/10 p-4">Public profile settings placeholder</div>
              <div className="rounded-2xl border border-white/10 p-4">Connected providers placeholder</div>
              <div className="rounded-2xl border border-white/10 p-4">Notification preferences placeholder</div>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <StatsCard label="Favorites" value={favorites.length} icon={Shield} />
            <StatsCard label="Recently played" value={recent.length} icon={Settings} />
            <StatsCard label="Downloads" value={user?.stats?.downloads || 0} icon={LockKeyhole} />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="panel p-6">
            <h3 className="text-xl font-semibold">Security</h3>
            <div className="mt-4 space-y-3 text-sm text-text-muted">
              <div className="rounded-2xl border border-white/10 p-4">Password reset route ready</div>
              <div className="rounded-2xl border border-white/10 p-4">Email verification placeholder available</div>
              <div className="rounded-2xl border border-white/10 p-4">Session management placeholder</div>
            </div>
          </div>
          <div className="panel p-6">
            <h3 className="text-xl font-semibold">Preferences</h3>
            <div className="mt-4 space-y-3 text-sm text-text-muted">
              <div className="rounded-2xl border border-white/10 p-4">Display preferences and theme hooks can be added here.</div>
              <div className="rounded-2xl border border-white/10 p-4">Gameplay defaults and favorite genres placeholder.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
