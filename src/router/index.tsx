import { lazy } from 'react';
import { createHashRouter } from "react-router-dom";
import App from 'views/App';
import ContactCharacterView from 'views/Contact/ContactCharacter/ContactCharacterView';

export const ROUTER_PATHNAME = {
  HOME: "/",
  CONTACT: 'contact',
}

const ContactView = lazy(() => import(/* webpackChunkName: "ContactView" */ 'views/Contact/ContactView'))

const routers = createHashRouter([
  {
    path: ROUTER_PATHNAME.HOME,
    element: <App />,
    children: [
      {
        path: ROUTER_PATHNAME.CONTACT,
        element: <ContactView />,
        children: [
          {
            path: ':id',
            element: <ContactCharacterView />,
          }
        ]
      },
    ]
  },
])

export default routers
