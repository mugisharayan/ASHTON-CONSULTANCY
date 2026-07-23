/**
 * App.jsx
 * -------
 * Root of the application. Sets up client-side routing.
 *
 * Route structure:
 *   <Layout>  ← renders TopBar, Navbar, Footer around every page
 *     /             → Home
 *     /about        → About
 *     /services     → Services
 *     /projects     → Projects
 *     /insights     → Insights
 *     /contact      → Contact
 *     *             → redirects to Home (handles unknown URLs gracefully)
 *
 * To add a new page:
 *   1. Create the component in src/pages/
 *   2. Import it here
 *   3. Add a <Route> inside the Layout route
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Layout   from './components/Layout';
import Home     from './pages/Home';
import About    from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Insights from './pages/Insights';
import Contact  from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index        element={<Home />}     />
          <Route path="about"    element={<About />}    />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="insights" element={<Insights />} />
          <Route path="contact"  element={<Contact />}  />

          {/* Catch-all: redirect any unknown URL back to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
