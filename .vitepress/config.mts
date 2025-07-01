import { defineConfig, DefaultTheme } from 'vitepress'
import pkg from '../package.json' assert { type: 'json' }
const { version } = pkg

export default defineConfig({
  title: 'Модуль Роста® – Расти по своим правилам',
  locales: {
    '/': {
      lang: 'ru-RU',              // HTML <html lang="ru-RU">
      title: 'Модуль Роста® – Расти по своим правилам',          // Site title
      description: 'Расти по своим правилам с Модуль Роста®',
    },
  },
  head: [
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
  ['style', {}, `
      .VPNavBarTitle .logo {
        height: 32px !important;
        width: auto !important;
      }

      /* Make social links area bigger and allow proper spacing */
      .VPNavBarSocialLinks {
        min-width: 200px !important;
        justify-content: flex-end !important;
        gap: 12px !important;
      }

      /* Ensure social links don't wrap */
      .VPNavBar .social-links {
        white-space: nowrap !important;
      }

      /* Hide ALL GitHub icons */
      .VPSocialLink .vpi-social-github {
        display: none !important;
      }

      /* Reset default social link styling */
      .VPSocialLink {
        width: auto !important;
        height: auto !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
      }

      /* Style the register link */
      .VPSocialLink[aria-label="register-link"]::after {
        content: "Войти";
        font-size: 14px;
        color: var(--vp-c-text-1);
        padding: 6px 12px;
        border: 1px solid var(--vp-c-divider);
        border-radius: 6px;
        background: var(--vp-c-bg-alt);
        transition: all 0.3s ease;
        white-space: nowrap;
        margin: 0 4px; /* Add horizontal margin for spacing */
      }

      .VPSocialLink[aria-label="register-link"]:hover::after {
        background: var(--vp-c-bg-soft);
        border-color: var(--vp-c-brand);
      }

      /* Style the login link */
      .VPSocialLink[aria-label="login-link"]::after {
        content: "30 мин. Демо";
        font-size: 14px;
        color: white;
        padding: 6px 12px;
        border: 1px solid var(--vp-c-brand);
        border-radius: 6px;
        background: var(--vp-c-brand);
        transition: all 0.3s ease;
        white-space: nowrap;
        margin: 0 4px; /* Add horizontal margin for spacing */
      }

      .VPSocialLink[aria-label="login-link"]:hover::after {
        background: var(--vp-c-brand-darker, var(--vp-c-brand));
        transform: translateY(-1px);
        height: 36px;
      }
    `]
  ],
  base: '/',
  outDir: '.vitepress/dist',
  description: '© Модуль Роста® 2010 — 2025',
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: "Модуль роста",
    sidebar: {
      '/checkup/': {
        items: sidebarCheckup()
      },
      '/system/': {
        items: sidebarSystem()
      },
    },
    search: {
      provider: 'local',
      options: {
        placeholder: 'Поиск…'
      }
    },
    // Empty nav array - removes navigation from header
    nav: nav(),
    socialLinks: [
      { icon: 'github', link: 'https://app.mplan.sbs', ariaLabel: 'register-link' },
      { icon: 'github', link: '/apply', ariaLabel: 'login-link' }
    ],

  }
})

// Keep the existing nav function for reference if needed later
function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Продукты',
      link: '/checkup/overview',  // без .md
      activeMatch: '/checkup/'
    },
    {
      text: 'Компания',
      link: '/system/overview',
      activeMatch: '/system/'
    }
  ]
}

function sidebarCheckup(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Продукты',
      collapsed: false,
      items: [
        { text: 'Бизнес-чекап', link: '/checkup/overview.md'},
        { text: 'Система роста бизнеса', link: '/system/overview.md' }
      ]
    },
  ]
}

function sidebarSystem(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Компания',
      items: [
      { text: 'О нас', link: '/about/overview.md'},
      { text: 'Метод', link: '/method/overview.md' },
      { text: 'Технологии', link: '/technology/overview.md' },
      { text: 'Клиенты и кейсы', link: '/about/clients' }
      ]
    }
  ]
}

function sidebarCompare(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Reference',
      items: [
        {
          text: 'Default Theme',
          items: []
        }
      ]
    }
  ]
}

function sidebarCompany(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Reference',
      items: [
        {
          text: 'Default Theme',
          items: []
        }
      ]
    }
  ]
}

function sidebarResourses(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Reference',
      items: [
        {
          text: 'Default Theme',
          items: []
        }
      ]
    }
  ]
}
