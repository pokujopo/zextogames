import { Activity, Download, Gamepad2, ShieldCheck, Sparkles, Users } from 'lucide-react';
import HeroBanner from '@/components/common/HeroBanner';
import SectionHeader from '@/components/common/SectionHeader';
import FeaturedGameCard from '@/components/game/FeaturedGameCard';
import GameCard from '@/components/game/GameCard';
import CategoryCard from '@/components/game/CategoryCard';
import SkeletonCard from '@/components/game/SkeletonCard';
import StatsCard from '@/components/ui/StatsCard';
import Button from '@/components/ui/Button';
import InputField from '@/components/ui/InputField';
import { useFeaturedGames, useTrendingGames } from '@/hooks/useGames';
import { useCategories } from '@/hooks/useCategories';
import { Link } from 'react-router-dom';

function HomePage() {
  const featuredQuery = useFeaturedGames();
  const trendingQuery = useTrendingGames();
  const categoriesQuery = useCategories();
  const heroGame = featuredQuery.data?.[0];

  return (
    <>
      {heroGame ? <HeroBanner game={heroGame} /> : <div className="section-space"><div className="page-shell"><SkeletonCard /></div></div>}

      <section className="section-space">
        <div className="page-shell space-y-14">
          <div>
            <SectionHeader title="Featured spotlight" description="Editorially highlighted experiences ready for instant discovery." />
            {featuredQuery.isLoading ? <SkeletonCard /> : heroGame && <FeaturedGameCard game={heroGame} />}
          </div>

          <div>
            <SectionHeader title="Trending now" description="Top games drawing attention across downloads and browser sessions." actionLabel="Browse all" actionHref="/search?tab=all" />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {trendingQuery.isLoading ? Array.from({ length: 4 }).map((_, idx) => <SkeletonCard key={idx} />) : trendingQuery.data?.map((game) => <GameCard key={game.id} game={game} />)}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="panel p-6">
              <SectionHeader title="Latest downloadable games" description="Rich installable titles from your backend-normalized catalog." actionLabel="View downloads" actionHref="/download" />
              <div className="grid gap-4">
                {trendingQuery.data?.filter((item) => item.type === 'download').slice(0, 2).map((game) => <GameCard key={game.id} game={game} />)}
              </div>
            </div>
            <div className="panel p-6">
              <SectionHeader title="Play online instantly" description="Launch browser-ready titles without waiting for installs." actionLabel="Play now" actionHref="/play-online" />
              <div className="grid gap-4">
                {trendingQuery.data?.filter((item) => item.type === 'online').slice(0, 2).map((game) => <GameCard key={game.id} game={game} />)}
              </div>
            </div>
          </div>

          <div>
            <SectionHeader title="Categories" description="Explore curated genres and platform-native browsing pathways." actionLabel="All categories" actionHref="/categories" />
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {categoriesQuery.data?.map((category) => <CategoryCard key={category.id} category={category} />)}
            </div>
          </div>

          <div className="panel grid gap-6 overflow-hidden p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-primary">Why ZextoGames</p>
              <h2 className="mt-4 text-3xl font-bold">Backend-ready storefront architecture for growth.</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  ['Search and discovery', 'Global search, filters, tabs, metadata-ready cards.'],
                  ['Wishlist and recent activity', 'Local-first persistence structured for backend sync later.'],
                  ['Premium gamer UI', 'Dark futuristic design with reusable design tokens.'],
                  ['Startup-ready frontend', 'Clean services, query hooks, and route protection patterns.'],
                ].map(([title, description]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-2 text-sm text-text-muted">{description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              <StatsCard label="Games indexed" value="12,500+" icon={Gamepad2} />
              <StatsCard label="Monthly players" value="860K" icon={Users} />
              <StatsCard label="Secure sessions" value="99.98%" icon={ShieldCheck} />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <StatsCard label="Download sessions" value="250K+" icon={Download} />
            <StatsCard label="Live gameplay launches" value="1.4M" icon={Activity} />
            <StatsCard label="Featured content refreshes" value="Every day" icon={Sparkles} />
          </div>

          <div className="panel grid gap-8 p-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-primary">How it works</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {['Discover games', 'Preview and save', 'Play or download instantly'].map((step, index) => (
                  <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-primary">0{index + 1}</p>
                    <h3 className="mt-3 font-semibold">{step}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-primary/15 to-accent/10 p-8">
              <h3 className="text-2xl font-bold">Build faster with a ready premium shell</h3>
              <p className="mt-3 text-text-muted">Hook this frontend to Laravel or any backend that normalizes itch.io and GameMonetize data, then scale into admin workflows later.</p>
              <div className="mt-6 flex gap-3">
                <Button as={Link} to="/download">Browse downloads</Button>
                <Button as={Link} variant="secondary" to="/play-online">Play online</Button>
              </div>
            </div>
          </div>

          <div className="panel p-8">
            <SectionHeader title="Stay in the loop" description="Newsletter section placeholder with premium visual treatment and proper form styling." />
            <form className="grid gap-4 md:grid-cols-[1fr_auto]">
              <InputField type="email" placeholder="Enter your email for game drops and launch alerts" />
              <Button type="submit">Join newsletter</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
