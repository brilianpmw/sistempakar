import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

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
    component: () => import('src/pages/LandingPage.vue')

  },
  {
    path: '/treatment',
    component: () => import('src/pages/Treatment.vue')

  },
  {
    path: '/dryskin',
    component: () => import('src/pages/SkinType.vue')

  },
  {
    path: '/habbits',
    component: () => import('src/pages/DailyHabbits.vue')

  },
  {
    path: '/login',
    component: () => import('src/pages/Login.vue'),
  },
  {
    path: '/register',
    component: () => import('src/pages/Register.vue'),
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
        meta: {
          requiresAuth: true,
          is_user: true
        }

      },
      {
        path: 'doctor',
        name: 'doctor',
        component: Doctor,
        meta: {
          requiresAuth: true,
          is_admin: true
        }
      },
      {
        path: 'admin',
        name: 'admin',
        component: Admin,
        meta: {
          requiresAuth: true,
          is_admin: true
        }
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('src/pages/User/User.vue'),
        meta: {
          requiresAuth: true,
          is_admin: true
        }

      },
      {
        path: 'gejala',
        name: 'gejala',
        component: () => import('src/pages/Gejala/Gejala.vue'),
        meta: {
          requiresAuth: true,
          is_doctor: true
        }

      },
      {
        path: 'penyakit',
        name: 'penyakit',
        component: () => import('src/pages/Penyakit/Penyakit.vue'),
        meta: {
          requiresAuth: true,
          is_doctor: true
        }

      },
      {
        path: 'rule',
        name: 'rule',
        component: () => import('src/pages/Rule/Rule.vue'),
        meta: {
          requiresAuth: true,
          is_doctor: true
        }

      },
      {
        path: 'user/add',
        name: 'add_user',
        component: () => import('src/pages/User/Add.vue'),
        meta: {
          requiresAuth: true,
          is_admin: true
        }

      },
      {
        path: 'user/update/:id',
        name: 'update_user',
        component: () => import('src/pages/User/Update.vue'),
        meta: {
          requiresAuth: true,
          is_admin: true
        }

      },
      {
        path: 'gejala/add',
        name: 'add_gejala',
        component: () => import('src/pages/Gejala/Add.vue'),
        meta: {
          requiresAuth: true,
          is_doctor: true
        }

      },
      {
        path: 'gejala/update/:id',
        name: 'update_gejala',
        component: () => import('src/pages/Gejala/Update.vue'),
        meta: {
          requiresAuth: true,
          is_doctor: true
        }

      },
      {
        path: 'penyakit/add',
        name: 'add_penyakit',
        component: () => import('src/pages/Penyakit/Add.vue'),
        meta: {
          requiresAuth: true,
          is_doctor: true
        }

      },
      {
        path: 'penyakit/update/:id',
        name: 'update_penyakit',
        component: () => import('src/pages/Penyakit/Update.vue'),
        meta: {
          requiresAuth: true,
          is_doctor: true
        }

      },
      {
        path: 'rule/add',
        name: 'add_rule',
        component: () => import('src/pages/Rule/Add.vue'),
        meta: {
          requiresAuth: true,
          is_doctor: true
        }

      },
      {
        path: 'rule/update/:id',
        name: 'update_rule',
        component: () => import('src/pages/Rule/Update.vue'),
        meta: {
          requiresAuth: true,
          is_doctor: true
        }

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
        path: 'doctor/add',
        name: 'add_doctor',
        component: () => import('src/pages/Doctor/Add.vue'),
        meta: {
          requiresAuth: true,
          is_admin: true
        }

      },
      {
        path: 'doctor/update/:id',
        name: 'update_doctor',
        component: () => import('src/pages/Doctor/Update.vue'),
        meta: {
          requiresAuth: true,
          is_admin: true
        }


      },
      {
        path: 'admin/add',
        name: 'add_admin',
        component: () => import('src/pages/Admin/Add.vue'),
        meta: {
          requiresAuth: true,
          is_admin: true
        }


      },
      {
        path: 'admin/update/:id',
        name: 'update_admin',
        component: () => import('src/pages/Admin/Update.vue'),
        meta: {
          requiresAuth: true,
          is_admin: true
        }


      },

      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },


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
