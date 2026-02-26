import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Work from './pages/Work';
import JIMCaseStudy from './pages/case-studies/JIM';
import UltaCaseStudy from './pages/case-studies/Ulta';
import CvsCaseStudy from './pages/case-studies/Cvs';
import AmericanAirlinesCaseStudy from './pages/case-studies/AmericanAirlines';
import StJudeNavigationExploration from './pages/case-studies/StJudeNavigationExploration';
import RenoBrandRedesign from './pages/case-studies/RenoBrandRedesign';
import Proof from './pages/Proof';
import QaChecklist from './pages/artifacts/QaChecklist';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'work', Component: Work },
      { path: 'work/jim', Component: JIMCaseStudy },
      { path: 'work/ulta', Component: UltaCaseStudy },
      { path: 'work/cvs', Component: CvsCaseStudy },
      { path: 'work/american-airlines', Component: AmericanAirlinesCaseStudy },
      { path: 'work/stjude-navigation-exploration', Component: StJudeNavigationExploration },
      { path: 'work/reno-brand-redesign', Component: RenoBrandRedesign },
      { path: 'proof', Component: Proof },
      { path: 'artifacts/qa-checklist', Component: QaChecklist },
      { path: 'about', Component: About },
      { path: 'resume', Component: Resume },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
]);