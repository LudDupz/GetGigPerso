import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/HomeView.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/announcements',
    name: 'Announcements',
    component: () => import( /* webpackChunkName: "about" */ '../views/AnnouncementsView.vue')
  },
  {
    path: '/single-announcement/:id',
    name: 'singleAnnouncement',
    component: () => import('../views/singleAnnouncement.vue')
  },
  {
    path: '/MyAnnouncement',
    name: 'MyAnnouncement',
    component: () => import('../views/MyAnnouncement.vue')
  },
  {
    path: '/PostAnnouncement',
    name: 'PostAnnouncement',
    component: () => import('../views/PostAnnouncement.vue')
  },
  {
    path: '/Messages',
    name: 'Messages',
    component: () => import('../views/MessagesView.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/Registration',
    name: 'Registration',
    component: () => import('../views/RegistrationView.vue')
  },
  
  {
    path: '/User',
    name: 'User',
    component: () => import('../views/UserProfile.vue')
  },
  //footer routes
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/Contact/:id',
    name: 'Contact-single',
    component: () => import('../views/ContactView.vue'),
    props: true
  },
  
  {
    path: '/Faq',
    name: 'Faq',
    component: () => import('../views/Faq.vue')
  },

  {
    path: '/LegalNotice',
    name: 'LegalNotice',
    component: () => import('../views/LegalNotice.vue')
  },

  {
    path: '/plan-du-site',
    name: 'SiteMap',
    component: () => import('../views/SiteMap.vue')
  },

  {
    path: '/404',
    name: '404',
    component: () => import('../views/Error404.vue')
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router