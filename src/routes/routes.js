import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'
import Login from 'src/pages/Login.vue'

// Admin pages
import Overview from 'src/pages/Overview.vue'

import UserProfile from 'src/pages/UserProfile.vue'
import TableList from 'src/pages/TableList.vue'
import Typography from 'src/pages/Typography.vue'
import Icons from 'src/pages/Icons.vue'
import Maps from 'src/pages/Maps.vue'
import Notifications from 'src/pages/Notifications.vue'
import Upgrade from 'src/pages/Upgrade.vue'
import Doctor from 'src/pages/Doctor/Doctor.vue'
import Admin from 'src/pages/Admin/Admin.vue'



const routes = [

  {
    path: '/',
    component: () => import('src/pages/LandingPage.vue'),

  },
  {
    path: '/treatment',
    component: () => import('src/pages/Treatment.vue'),

  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'konsultasi',
        name: 'Konsultasi',
        component: () => import('src/pages/Konsultasi/Konsultasi.vue'),

      },
      {
        path: 'doctor',
        name: 'doctor',
        component: Doctor
      },
      {
        path: 'admin',
        name: 'admin',
        component: Admin
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('src/pages/User/User.vue'),

      },
      {
        path: 'gejala',
        name: 'gejala',
        component: () => import('src/pages/Gejala/Gejala.vue'),

      },
      {
        path: 'penyakit',
        name: 'penyakit',
        component: () => import('src/pages/Penyakit/Penyakit.vue'),

      },
      {
        path: 'rule',
        name: 'rule',
        component: () => import('src/pages/Rule/Rule.vue'),

      },
      {
        path: 'user/add',
        name: 'add_user',
        component: () => import('src/pages/User/Add.vue'),

      },
      {
        path: 'user/update/:id',
        name: 'update_user',
        component: () => import('src/pages/User/Update.vue'),

      },
      {
        path: 'gejala/add',
        name: 'add_gejala',
        component: () => import('src/pages/Gejala/Add.vue'),

      },
      {
        path: 'gejala/update/:id',
        name: 'update_gejala',
        component: () => import('src/pages/Gejala/Update.vue'),

      },
      {
        path: 'penyakit/add',
        name: 'add_penyakit',
        component: () => import('src/pages/Penyakit/Add.vue'),

      },
      {
        path: 'penyakit/update/:id',
        name: 'update_penyakit',
        component: () => import('src/pages/Penyakit/Update.vue'),

      },
      {
        path: 'rule/add',
        name: 'add_rule',
        component: () => import('src/pages/Rule/Add.vue'),

      },
      {
        path: 'rule/update/:id',
        name: 'update_rule',
        component: () => import('src/pages/Rule/Update.vue'),

      },
      {
        path: 'diagnosa',
        name: 'diagnosa',
        component: () => import('src/pages/Diagnosa/Diagnosa.vue'),
      },


      {
        path: 'profile/update/:id',
        name: 'update_profile',
        component: () => import('src/pages/Profile/Update.vue'),

      },
      {
        path: 'blog',
        name: 'blog',
        component: () => import('src/pages/Blog/Blog.vue'),

      },
      {
        path: 'blog/add',
        name: 'add_blog',
        component: () => import('src/pages/Blog/Add.vue'),

      },
      {
        path: 'blog/update/:id',
        name: 'update_blog',
        component: () => import('src/pages/Blog/Update.vue'),

      },
      {
        path: 'doctor/add',
        name: 'add_doctor',
        component: () => import('src/pages/Doctor/Add.vue'),

      },
      {
        path: 'doctor/update/:id',
        name: 'update_doctor',
        component: () => import('src/pages/Doctor/Update.vue'),

      },
      {
        path: 'admin/add',
        name: 'add_admin',
        component: () => import('src/pages/Admin/Add.vue'),

      },
      {
        path: 'admin/update/:id',
        name: 'update_admin',
        component: () => import('src/pages/Admin/Update.vue'),

      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: Upgrade
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
