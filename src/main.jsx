import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './Components/App.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import Topics0 from './Pages/Topics0.jsx';
import Topics1 from './Pages/Topics1.jsx';
import Topics2 from './Pages/Topics2.jsx';
import Topics3 from './Pages/Topics3.jsx';
import Topics4 from './Pages/Topics4.jsx';
import About from './Components/About.jsx';
import Cards from './Components/Cards.jsx';
import MarvelReportButton from './Components/MarvelReportButton.jsx';
import CertificatePage from './Pages/CertificatePage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App acts as the layout
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <div>
        <About/>
        <Cards/>
      </div> },
      { path: 'about', element: <AboutPage /> },
      { path: 'topics/0', element: <Topics0 /> },
      { path: 'topics/1', 
        element: <Topics1 />,
      },
      {
        path:'certificatesPage',
        element : <CertificatePage/>,
      },
      { path: 'topics/2', element: <><Topics2 /> <MarvelReportButton/></> },
      { path: 'topics/3', element: <Topics3 /> },
      { path: 'topics/4', element: <Topics4 /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
