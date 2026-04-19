import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div className="grid min-h-screen lg:grid-cols-[0.95fr_1.05fr]">
      <div className="hidden border-r border-white/10 bg-hero-grid p-10 lg:flex lg:flex-col lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-primary">ZextoGames Access</p>
          <h1 className="mt-6 text-5xl font-black leading-tight">Premium gaming identity for your next session.</h1>
        </div>
        <div className="panel p-6">
          <p className="text-lg font-semibold">Backend-ready auth UX</p>
          <p className="mt-2 text-text-muted">Bearer token flow, social placeholders, reset flows, and verify-email support are already structured.</p>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-10">
        <div className="w-full max-w-xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
