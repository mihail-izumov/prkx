import { defineConfig, DefaultTheme } from 'vitepress'
import pkg from '../package.json' assert { type: 'json' }
const { version } = pkg

export default defineConfig({
  title: 'Модуль Роста® – Расти по своим правилам',
  locales: {
    '/': {
      lang: 'ru-RU',
      title: 'Модуль Роста® – Расти по своим правилам',
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
        min-width: 280px !important;
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

      /* Style the Войти link (transparent button) */
      .VPSocialLink[aria-label="login-link"]::after {
        content: "Войти";
        font-size: 14px;
        color: var(--vp-c-text-1);
        padding: 6px 12px;
        border: 1px solid var(--vp-c-divider);
        border-radius: 6px;
        background: transparent;
        transition: all 0.3s ease;
        white-space: nowrap;
        margin: 0 4px;
      }

      .VPSocialLink[aria-label="login-link"]:hover::after {
        background: var(--vp-c-bg-soft);
        border-color: var(--vp-c-brand);
      }

      /* Style the Расти с планом link (full button) */
      .VPSocialLink[aria-label="apply-link"]::after {
        content: "Расти с планом";
        font-size: 14px;
        color: white;
        padding: 6px 12px;
        border: 1px solid var(--vp-c-brand);
        border-radius: 6px;
        background: var(--vp-c-brand);
        transition: all 0.3s ease;
        white-space: nowrap;
        margin: 0 4px;
      }

      .VPSocialLink[aria-label="apply-link"]:hover::after {
        background: var(--vp-c-brand-darker, var(--vp-c-brand));
        transform: translateY(-1px);
      }

      
    `]
  ],
  base: '/',
  outDir: '.vitepress/dist',
  description: '© Модуль Роста® 2010 — 2025',
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: "Модуль роста",

    // Sidebar configuration для связанных страниц
    sidebar: {
      '/about/': {
        items: sidebarAbout()
      },
      '/method/': {
        items: sidebarMethod()
      },
      '/technology/': {
        items: sidebarTechnology()
      },
      '/checkup/': {
        items: sidebarCheckup()
      },
      '/system/': {
        items: sidebarSystem()
      }
    },

    search: {
      provider: 'local',
      options: {
        placeholder: 'Поиск…'
      }
    },

    // Navigation with dropdowns
    nav: nav(),

    // Social links (header buttons)
    socialLinks: [
      { icon: 'github', link: 'https://app.mplan.sbs', ariaLabel: 'login-link' },
      { icon: 'github', link: '/apply', ariaLabel: 'apply-link' }
    ],

    // Footer configuration
    footer: {
      message: `
        <div class="custom-footer-links">
          <div class="footer-row">
            <a href="/journal">Журнал</a>
            <span class="dot-separator">•</span>
            <a href="https://t.me/runscale" target="_blank" rel="noopener noreferrer">Телеграм-канал</a>
            <span class="dot-separator">•</span>
            <a href="/support">Поддержка</a>
          </div>
          <div class="footer-row">
            <a href="/terms">Условия использования</a>
            <span class="dot-separator">•</span>
            <a href="/about/contacts">Контакт</a>
          </div>
        </div>
      `,
      copyright: '© Модуль Роста® 2010 — 2025'
    },
  }
})

// Navigation with dropdown menus
function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Продукты',
      items: [
        { text: 'Бизнес-чекап', link: '/checkup/overview' },
        { text: 'Система роста бизнеса', link: '/system/overview' }
      ]
    },
    {
      text: 'Компания',
      items: [
        { text: 'О нас', link: '/about/overview' },
        { text: 'Метод', link: '/method/overview' },
        { text: 'Технологии', link: '/technology/overview' },
        { text: 'Клиенты и кейсы', link: '/about/clients' }
      ]
    }
  ]
}

// Sidebar for About section
function sidebarAbout(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'О компании',
      collapsed: false,
      items: [
        { text: 'О нас', link: '/about/overview' },
        { text: 'Клиенты и кейсы', link: '/about/clients' },
        { text: 'Контакты', link: '/about/contacts' }
      ]
    }
  ]
}

// Sidebar for Method section
function sidebarMethod(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Метод',
      collapsed: false,
      items: [
        { text: 'Методология', link: '/method/overview' }
      ]
    }
  ]
}

// Sidebar for Technology section
function sidebarTechnology(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Технологии',
      collapsed: false,
      items: [
        { text: 'Обзор', link: '/technology/overview' }
      ]
    }
  ]
}

// Sidebar for Checkup section
function sidebarCheckup(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Бизнес-чекап',
      collapsed: false,
      items: [
        { text: 'Обзор', link: '/checkup/overview' }
      ]
    }
  ]
}

// Sidebar for System section
function sidebarSystem(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Система роста бизнеса',
      collapsed: false,
      items: [
        { text: 'Обзор', link: '/system/overview' }
      ]
    }
  ]
}
