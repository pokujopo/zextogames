import { Outlet } from 'react-router-dom';
import SidebarPlaceholder from '@/components/admin/SidebarPlaceholder';

function DashboardShell() {
  return (
    <div className="page-shell section-space flex gap-6">
      <SidebarPlaceholder />
      <div className="min-w-0 flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardShell;
