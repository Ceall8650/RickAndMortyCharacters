import { lazy } from 'react';
import { createHashRouter } from "react-router-dom";
import SERVICES from 'services';
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
            loader: async ({ params }) => {
              if(params.id) {
                const [character, episode] = await Promise.all([
                  SERVICES.CHARACTER.get(params.id),
                  SERVICES.EPISODE.get(params.id),
                ])

                return {
                  character, 
                  episode
                }
              }
            },
          }
        ]
      },
    ]
  },
])

export default routers
