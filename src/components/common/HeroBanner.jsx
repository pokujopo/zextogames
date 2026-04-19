import { motion } from 'framer-motion';
import { Download, PlayCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

function HeroBanner({ game }) {
  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="panel relative overflow-hidden p-6 md:p-10">
          <div className="absolute inset-0 bg-hero-grid" />
          <div className="absolute right-0 top-0 h-full w-full bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${game?.cover})` }} />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Badge variant="accent"><Sparkles size={12} /> Trending Spotlight</Badge>
              <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight md:text-6xl">Play & Download <span className="text-primary">Unlimited Games</span></h1>
              <p className="mt-5 max-w-2xl text-lg text-text-muted">ZextoGames brings downloadable titles and instant browser gaming into one premium gaming storefront, built for speed and backend scalability.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button as={Link} to="/download"><Download size={18} /> Download Games</Button>
                <Button as={Link} to="/play-online" variant="secondary"><PlayCircle size={18} /> Play Online</Button>
              </div>
            </div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="panel ml-auto max-w-md overflow-hidden border-white/15 bg-white/5">
              <img src={game?.thumbnail} alt={game?.title} className="h-72 w-full object-cover" />
              <div className="p-5">
                <div className="flex flex-wrap gap-2">{game?.tags?.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
                <h3 className="mt-4 text-2xl font-bold">{game?.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{game?.shortDescription}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
