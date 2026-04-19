import { motion } from 'framer-motion';

function StatsCard({ label, value, icon: Icon }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="panel p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-text-muted">{label}</p>
          <p className="mt-3 text-3xl font-bold">{value}</p>
        </div>
        {Icon && <Icon className="text-primary" size={28} />}
      </div>
    </motion.div>
  );
}

export default StatsCard;
