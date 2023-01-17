import HomePage from '../pages/home.jsx';
import SchedulePage from '../pages/schedule.jsx';
import SchedulePageDetail from '../pages/schedule-detail.jsx';
import SchedulePageDetail2 from '../pages/schedule-detail2.jsx';
import SchedulePageDetail3 from '../pages/schedule-detail3.jsx';
import FavouritePage from '../pages/favourite.jsx';
import PhonebookPage from '../pages/phonebook.jsx';
import FormPage from '../pages/form.jsx';
import Button from '../pages/button.jsx';
import ProductPage from '../pages/product.jsx';
import Accordion from '../pages/accordion.jsx';
import ActionSheet from '../pages/action-sheet.jsx';
import AreaChart from '../pages/area-chart.jsx';
import Icons from '../pages/icons.jsx';
import Typo from '../pages/typo.jsx';
import Element from '../pages/element.jsx';
import DatLichKham from '../pages/dat-lich-kham.jsx';
import DatLichKhamGoi from '../pages/dat-lich-kham-goi.jsx';
import DatKhamDetail from '../pages/dat-kham-detail.jsx';
import ThongTinDatKham from '../pages/thong-tin-dat-kham.jsx';
import ThongTinCuaToi from '../pages/thong-tin-cua-toi.jsx';
import ThongTinNguoiThan from '../pages/thong-tin-nguoi-than.jsx';
import ThongTinList from '../pages/thong-tin-list.jsx';
import ThongTinDetail from '../pages/thong-tin-detail.jsx';
import ThongTinDetail2 from '../pages/thong-tin-detail2.jsx';
import ThongTinDetail3 from '../pages/thong-tin-detail3.jsx';
import CoSoYte from '../pages/co-so-ye-te.jsx';
import CoSoYteDetail from '../pages/co-so-ye-te-detail.jsx';
import CoSoYteSearch from '../pages/co-so-ye-te-search.jsx';
import GoiKham from '../pages/goi-kham.jsx';
import GoiKhamDetail from '../pages/goi-kham-detail.jsx';
import ChuyenKhoa from '../pages/chuyen-khoa.jsx';
import ChuyenKhoaDetail from '../pages/chuyen-khoa-detail.jsx';
import BacSi from '../pages/bac-si.jsx';
import BacSiDetail from '../pages/bac-si-detail.jsx';
import HomeSearch from '../pages/home-search.jsx';
import DiaDiemSearch from '../pages/dia-diem-search.jsx';
import CardPage from '../pages/card.jsx';

import DynamicRoutePage from '../pages/dynamic-route.jsx';
import RequestAndLoad from '../pages/request-and-load.jsx';
import NotFoundPage from '../pages/404.jsx';
import Guide from '../pages/huong-dan-di-kham.jsx';
import XacNhanThongTin from '../pages/xac-nhan-thong-tin.jsx';
import XacNhanThongTinGoi from '../pages/xac-nhan-thong-tin-goi';
import ThongTinDatKhamGoi from '../pages/thong-tin-dat-kham-goi';
import KetquaThanhtoan from '../pages/ket-qua-thanh-toan.jsx';
import KetquaThanhtoanGoi from '../pages/ket-qua-thanh-toan-goi.jsx';
import KetquaThanhtoanError from '../pages/ket-qua-thanh-toan-error.jsx';
import Help from '../pages/tro-giup';
import HelpDetail1 from '../pages/tro-giup-detail1';
import HelpDetail2 from '../pages/tro-giup-detail2';
import HelpDetail3 from '../pages/tro-giup-detail3';
import HelpDetail4 from '../pages/tro-giup-detail4';
import HelpDetail5 from '../pages/tro-giup-detail5';
import HelpDetail6 from '../pages/tro-giup-detail6';
import HelpDetail7 from '../pages/tro-giup-detail7';
import KetQuaKham from '../pages/ket-qua-kham';
import HomesearchDiaDiem from '../pages/home-search-dia-diem';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/ket-qua-kham/',
    component: KetQuaKham,
  },
  {
    path: '/home-search-dia-diem/',
    component: HomesearchDiaDiem,
  },
  
  {
    path: '/xac-nhan-thong-tin/',
    component: XacNhanThongTin,
  },
  {
    path: '/xac-nhan-thong-tin-goi/',
    component: XacNhanThongTinGoi,
  },
  {
    path: '/tro-giup/',
    component: Help,
  },
  {
    path: '/tro-giup-detail1/',
    component: HelpDetail1,
  },
  {
    path: '/tro-giup-detail2/',
    component: HelpDetail2,
  },
  {
    path: '/tro-giup-detail3/',
    component: HelpDetail3,
  },
  {
    path: '/tro-giup-detail4/',
    component: HelpDetail4,
  },
  {
    path: '/tro-giup-detail5/',
    component: HelpDetail5,
  },
  {
    path: '/tro-giup-detail6/',
    component: HelpDetail6,
  },
  {
    path: '/tro-giup-detail7/',
    component: HelpDetail7,
  },
  {
    path: '/ket-qua-thanh-toan-goi/',
    component: KetquaThanhtoanGoi,
  },
  {
    path: '/ket-qua-thanh-toan/',
    component: KetquaThanhtoan,
  },
  {
    path: '/ket-qua-thanh-toan-error/',
    component: KetquaThanhtoanError,
  },
  {
    path: '/dat-lich-kham-goi/',
    component: DatLichKhamGoi,
  },
  {
    path: '/thong-tin-dat-kham/',
    component: ThongTinDatKham,
  },
  {
    path: '/element/',
    component: Element,
  },  
  {
    path: '/favourite/',
    component: FavouritePage,
  },  
  {
    path: '/thong-tin-dat-kham-goi/',
    component: ThongTinDatKhamGoi,
  },
  {
    path: '/dat-lich-kham/',
    component: DatLichKham,
  },    
  {
    path: '/dia-diem-search/',
    component: DiaDiemSearch,
  },
  {
    path: '/thong-tin-cua-toi/',
    component: ThongTinCuaToi,
  },
  {
    path: '/thong-tin-nguoi-than/',
    component: ThongTinNguoiThan,
  },
  {
    path: '/thong-tin-list/',
    component: ThongTinList,
  },
  {
    path: '/thong-tin-detail/',
    component: ThongTinDetail,
  },
  {
    path: '/thong-tin-detail2/',
    component: ThongTinDetail2,
  },
  {
    path: '/thong-tin-detail3/',
    component: ThongTinDetail3,
  },  
  {
    path: '/huong-dan-di-kham/',
    component: Guide,
  },
  {
    path: '/schedule-detail/',
    component: SchedulePageDetail,
  },
  {
    path: '/schedule-detail2/',
    component: SchedulePageDetail2,
  },
  {
    path: '/schedule-detail3/',
    component: SchedulePageDetail3,
  },
  {
    path: '/goi-kham/',
    component: GoiKham,
  },
  {
    path: '/goi-kham-detail/',
    component: GoiKhamDetail,
  },
  {
    path: '/dat-kham-detail/',
    component: DatKhamDetail,
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
    path: '/phonebook/',
    component: PhonebookPage,
  },
  
  {
    path: '/card/',
    component: CardPage,
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
