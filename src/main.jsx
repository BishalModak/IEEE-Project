
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'

import {

  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routers from "./routers/Routers.jsx";
import ErrorPage from "./Errorpage/ErrorPage.jsx";
import Home from "./Home/Home.jsx";
import AddResearch from "./AddResearch/AddResearch.jsx";
import Blog from "./blog/Blog.jsx";
import BlogWriting from "./BlogWriting/BlogWriting.jsx";
import Contact from "./Contact/Contact.jsx";
import Achievement from "./Achievement/Achievement.jsx";
import Developers from "./Developers/Developers.jsx";
import Event from "./Event/Event.jsx";
import FAQ from "./FAQ/FAQ.jsx";
import Gallery from "./Gallery/Gallery.jsx";
import ResearchPapers from "./ResearchPapers/ResearchPapers.jsx";
import Toolkit from "./Toolkit/Toolkit.jsx";
import Volunteers from "./Volunteers/Volunteers.jsx";
import Webmaster from "./Webmaster/Webmaster.jsx";
import JoinIEEE from "./JoinIEEE/JoinIEEE.jsx";
import Megazine from "./Megazine/Megazine.jsx";
import News from "./News/News.jsx";
import Panel from "./Panel/Panel.jsx";
import Portal from "./Portal/Portal.jsx";
import ProgramCoordinator from "./ProgramCoordinator/ProgramCoordinator.jsx";
import SignIn from "./SignIn/SignIn.jsx";
import SignUp from "./SignUp/SignUp.jsx";
import AboutIEEE from "./IEEE/AboutIEEE.jsx";
import JoinUs from "./JoinUS/JoinUs.jsx";
import PublicationNewsletter from './PublicationNewsletter/PublicationNewsletter';
import PublicityCoordinator from './PublicityCoordinator/PublicityCoordinator';
import ChiefReportingExecutive from './Chief Reporting Executive/ChiefReportingExecutive';
import PhotographyExecutive from './Photography Executive/PhotographyExecutive';
import LogisticExecutive from './Logistic Executive/LogisticExecutive';
import ACM from './ACM coordinator/ACM';
import MembershipDevelopment from './MembershipDevelopment/MembershipDevelopment';
import GraphicsDesign from './Graphic design executive/GraphicsDesign';
import VideoContent from './Video Content Executive/VideoContent';
import IEERegion10 from "./IEEE/IEERegion10.jsx";
import IEEELU from "./IEEE/IEEELU.jsx";
import IEEEBangladesh from "./IEEE/IEEEBangladesh.jsx";
import SingleNews from "./News/SingleNews.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Routers></Routers>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/addResearch',
        element: <AddResearch></AddResearch>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/write',
        element: <BlogWriting></BlogWriting>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/achievement',
        element: <Achievement></Achievement>
      },
      {
        path: '/developers',
        element: <Developers></Developers>
      },
      {
        path: '/event',
        element: <Event></Event>
      },
      {
        path: '/faq',
        element: <FAQ></FAQ>
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>
      },
      
      {
        path: '/researchPapers',
        element: <ResearchPapers></ResearchPapers>
      },
      {
        path: '/toolkit',
        element: <Toolkit></Toolkit>
      },
      {
        path: '/volunteers',
        element: <Volunteers></Volunteers>
      },
      {
        path: '/webmaster',
        element: <Webmaster></Webmaster>
      },
      {
        path: '/joinIEEE',
        element: <JoinIEEE></JoinIEEE>
      },
      {
        path: '/megazine',
        element: <Megazine></Megazine>
      },
      {
        path: '/news',
        element: <News></News>
      },
      {
        path: '/panel',
        element: <Panel></Panel>
      },
      {
        path: '/programCoordinator',
        element: <ProgramCoordinator></ProgramCoordinator>
      },
      {
        path: '/IEEE',
        element: <AboutIEEE></AboutIEEE>
      },
      {
        path: '/join',
        element: <JoinUs></JoinUs>
      },
      {
        path: '/publication-newsletter-coordinator',
        element: <PublicationNewsletter></PublicationNewsletter>
      },
      {
        path: '/publicity-coordinator',
        element: <PublicityCoordinator></PublicityCoordinator>
      },
      {
        path: '/chief-reporting-executive',
        element: <ChiefReportingExecutive></ChiefReportingExecutive>
      },
      {
        path: '/photography-executive',
        element: <PhotographyExecutive></PhotographyExecutive>
      },
      {
        path: '/logistic-executive',
        element: <LogisticExecutive></LogisticExecutive>
      },
      {
        path: '/acm-coordinator',
        element: <ACM></ACM>
      },
      {
        path: '/membership-development-coordinator',
        element: <MembershipDevelopment></MembershipDevelopment>
      },
      {
        path: '/membership-development-coordinator',
        element: <MembershipDevelopment></MembershipDevelopment>
      },
      {
        path: '/webmaster',
        element: <Webmaster></Webmaster>
      },
      
      {
        path: '/graphics-design-executive',
        element: <GraphicsDesign></GraphicsDesign>
      },
      {
        path: '/video-content-executive',
        element: <VideoContent></VideoContent>
      },
      {
        path: '/IEEE-REGION-10',
        element: <IEERegion10></IEERegion10>
      },
      {
        path: '/IEEE-REGION-10',
        element: <IEERegion10></IEERegion10>
      },
      {
        path: '/IEEE-LU-BRANCH',
        element: <IEEELU></IEEELU>
      },
      {
        path: '/IEEE-Bangladesh-section',
        element: <IEEEBangladesh></IEEEBangladesh>
      },
      {
        path: '/news/:id',
        loader: () => fetch('/News.json'),
        element: <SingleNews></SingleNews>
      }

      










    ]


  },
  {
    path: '/portal',
    element: <Portal></Portal>
  },
  {
    path: '/signin',
    element: <SignIn></SignIn>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  

  
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);