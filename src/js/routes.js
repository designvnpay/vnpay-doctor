import HomePage from '../pages/home.jsx';
import SchedulePage from '../pages/schedule.jsx';
import FavouritePage from '../pages/favourite.jsx';
import PhonebookPage from '../pages/phonebook.jsx';
import AboutPage from '../pages/about.jsx';
import FormPage from '../pages/form.jsx';
import Button from '../pages/button.jsx';
import ProductPage from '../pages/product.jsx';
import Accordion from '../pages/accordion.jsx';
import ActionSheet from '../pages/action-sheet.jsx';
import AreaChart from '../pages/area-chart.jsx';
import Icons from '../pages/icons.jsx';
import Typo from '../pages/typo.jsx';
import Element from '../pages/element.jsx';
import DatKhamDetail from '../pages/dat-kham-detail.jsx';
import CoSoYte from '../pages/co-so-ye-te.jsx';
import CoSoYteDetail from '../pages/co-so-ye-te-detail.jsx';
import CoSoYteSearch from '../pages/co-so-ye-te-search.jsx';
import GoiKham from '../pages/goi-kham.jsx';
import ChuyenKhoa from '../pages/chuyen-khoa.jsx';
import ChuyenKhoaDetail from '../pages/chuyen-khoa-detail.jsx';
import BacSi from '../pages/bac-si.jsx';
import BacSiDetail from '../pages/bac-si-detail.jsx';
import HomeSearch from '../pages/home-search.jsx';
import CardPage from '../pages/card.jsx';

import DynamicRoutePage from '../pages/dynamic-route.jsx';
import RequestAndLoad from '../pages/request-and-load.jsx';
import NotFoundPage from '../pages/404.jsx';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/chuyen-khoa/',
    component: ChuyenKhoa,
  },
  {
    path: '/chuyen-khoa-detail/',
    component: ChuyenKhoaDetail,
  },
  {
    path: '/bac-si/',
    component: BacSi,
  },
  {
    path: '/bac-si-detail/',
    component: BacSiDetail,
  },
  {
    path: '/home-search/',
    component: HomeSearch,
  },
  {
    path: '/schedule/',
    component: SchedulePage,
  },
  {
    path: '/favourite/',
    component: FavouritePage,
  },  
  {
    path: '/co-so-ye-te/',
    component: CoSoYte,
  },
  {
    path: '/co-so-ye-te-detail/',
    component: CoSoYteDetail,
  },
  {
    path: '/co-so-ye-te-search/',
    component: CoSoYteSearch,
  },
  {
    path: '/goi-kham/',
    component: GoiKham,
  },
  {
    path: '/phonebook/',
    component: PhonebookPage,
  },
  {
    path: '/element/',
    component: Element,
  },
  {
    path: '/card/',
    component: CardPage,
  },
  {
    path: '/dat-kham-detail/',
    component: DatKhamDetail,
  },
  {
    path: '/typo/',
    component: Typo,
  },
  {
    path: '/icons/',
    component: Icons,
  },
  {
    path: '/area-chart/',
    component: AreaChart,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/button/',
    component: Button,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/accordion/',
    component: Accordion,
  },
  {
    path: '/action-sheet/',
    component: ActionSheet,
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
