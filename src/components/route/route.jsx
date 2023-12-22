import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../../screens/home/home.screen";

import About from "../../screens/about/about.screen";
import Artists from "../../screens/artists/artists.screen";
import ContactUs from "../../screens/contactus/contactUs.screen";
import Events from "../../screens/event/event.screen";
import Musics from "../../screens/music/musics.screen";
import OurService from "../../screens/ourService/ourService";


 export const router = createBrowserRouter([

          {
            path: "/",
            element: <Home/>,
          },
          {
            path: "/artists",
            element: <Artists/>,
          },
          {
            path: "/ourservice",
            element: <OurService/>,
          },
        
          {
            path: "/musics",
            element: <Musics/>,
          },
          {
            path: "/about",
            element: <About/>,
          },
          {
            path: "/contactus",
            element: <ContactUs/>,
          },  {
            path: "/events",
            element: <Events/>,
          }, 
        // ]
 
//  },
 
]);