import { Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from './Header';

function Layout() {
  return (
    <main>
      <Header />
      <div className="max-w-content mx-auto px-4">
        <Suspense fallback={<p className="p-8 text-center text-secondary">Loading…</p>}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
}

export default Layout;
