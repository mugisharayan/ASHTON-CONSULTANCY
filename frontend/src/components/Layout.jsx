/**
 * Layout
 * ------
 * The shared page shell rendered around every route.
 * Composes: TopBar → Navbar → <main> (page content) → Footer
 *
 * Usage in App.jsx:
 *   <Route element={<Layout />}>
 *     <Route path="/" element={<Home />} />
 *     ...
 *   </Route>
 *
 * react-router-dom's <Outlet /> is the slot where the matched
 * child route's component is rendered.
 */

import { Outlet } from 'react-router-dom';
import TopBar    from './TopBar';
import Navbar    from './Navbar';
import Footer    from './Footer';
import BackToTop from './BackToTop';
import '../styles/components.css';

export default function Layout() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
