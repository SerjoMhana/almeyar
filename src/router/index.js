import { createRouter, createWebHistory } from 'vue-router'
import { getCurrentLanguage } from '../translations'

const siteName = 'المعيار المتميز'
const defaultDescription = 'حلول كهروميكانيكية متكاملة في تجميع اللوحات الكهربائية وتركيب وصيانة خطوط الإنتاج والمصانع.'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: {
        title: `${siteName} | أعمال كهروميكانيكية`,
        description: defaultDescription
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
      meta: {
        title: `من نحن | ${siteName}`,
        description: 'تعرف على خبرات شركة المعيار المتميز في الحلول الكهروميكانيكية ومعايير الجودة والسلامة.'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
      meta: {
        title: `اتصل بنا | ${siteName}`,
        description: 'تواصل مع فريق المعيار المتميز للاستفسارات وطلبات عروض الأسعار للمشاريع الكهروميكانيكية.'
      }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/Portfolio.vue'),
      meta: {
        title: `أعمالنا | ${siteName}`,
        description: 'نماذج من مشاريع المعيار المتميز في الأنظمة الكهربائية والميكانيكية للقطاعات المختلفة.'
      }
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/Gallery.vue'),
      meta: {
        title: `معرض الصور | ${siteName}`,
        description: 'صور من أعمال ومواقع وفريق المعيار المتميز خلال تنفيذ المشاريع.'
      }
    },
    {
      path: '/training',
      name: 'training',
      component: () => import('../views/Training.vue'),
      meta: {
        title: `برامج التدريب | ${siteName}`,
        description: 'برامج تدريبية عملية في التحكم الكهربائي والأوتوكاد والـ PLC.'
      }
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/Products.vue'),
      meta: {
        title: `منتجاتنا | ${siteName}`,
        description: 'منتجات كهربائية من علامات موثوقة مثل ABB و CHINT و Schneider و EATON.'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 96
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

router.beforeEach(() => {
  document.documentElement.classList.add('is-route-loading')
})

router.afterEach((to) => {
  const title = to.meta?.title || `${siteName} | أعمال كهروميكانيكية`
  const description = to.meta?.description || defaultDescription

  document.title = title
  const language = getCurrentLanguage()
  document.documentElement.lang = language
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)

  requestAnimationFrame(() => {
    document.documentElement.classList.remove('is-route-loading')
  })
})

router.onError(() => {
  document.documentElement.classList.remove('is-route-loading')
})

export default router
