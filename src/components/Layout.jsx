import { Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from './Header';

function Layout() {
  return (
    <main>
      <Header />
      <div className="max-w-content mx-auto px-md">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
}

export default Layout;
