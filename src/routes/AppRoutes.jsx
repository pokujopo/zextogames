import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import AuthLayout from '@/layouts/AuthLayout';
import ProtectedRoute from '@/components/common/ProtectedRoute';
import SkeletonHero from '@/components/game/SkeletonHero';

const HomePage = lazy(() => import('@/pages/HomePage'));
const DownloadGamesPage = lazy(() => import('@/pages/DownloadGamesPage'));
const PlayOnlinePage = lazy(() => import('@/pages/PlayOnlinePage'));
const GameDetailsPage = lazy(() => import('@/pages/GameDetailsPage'));
const SearchResultsPage = lazy(() => import('@/pages/SearchResultsPage'));
const CategoriesPage = lazy(() => import('@/pages/CategoriesPage'));
const CategoryDetailsPage = lazy(() => import('@/pages/CategoryDetailsPage'));
const FavoritesPage = lazy(() => import('@/pages/FavoritesPage'));
const RecentlyPlayedPage = lazy(() => import('@/pages/RecentlyPlayedPage'));
const ProfilePage = lazy(() => import('@/pages/ProfilePage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/RegisterPage'));
const ForgotPasswordPage = lazy(() => import('@/pages/ForgotPasswordPage'));
const ResetPasswordPage = lazy(() => import('@/pages/ResetPasswordPage'));
const VerifyEmailPage = lazy(() => import('@/pages/VerifyEmailPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

function AppRoutes() {
  return (
    <Suspense fallback={<SkeletonHero />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/download" element={<DownloadGamesPage />} />
          <Route path="/play-online" element={<PlayOnlinePage />} />
          <Route path="/games/:slug" element={<GameDetailsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:slug" element={<CategoryDetailsPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/favorites" element={<ProtectedRoute><FavoritesPage /></ProtectedRoute>} />
          <Route path="/recently-played" element={<ProtectedRoute><RecentlyPlayedPage /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
        </Route>

        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
