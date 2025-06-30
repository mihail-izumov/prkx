// .vitepress/config.mts
import { defineConfig, DefaultTheme } from 'vitepress'
// ← import the whole JSON, then destructure
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
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/ModulRosta/favicon.svg' }],
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
        padding: 6px 16px;
        border: 1px solid var(--vp-c-brand);
        border-radius: 6px;
        background: var(--vp-c-brand);
        transition: all 0.3s ease;
        white-space: nowrap;
      }

      .VPSocialLink[aria-label="login-link"]:hover::after {
        background: var(--vp-c-brand-darker, var(--vp-c-brand));
        transform: translateY(-1px);
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        .VPNavBarSocialLinks {
          min-width: 160px !important;
          gap: 8px !important;
        }

        .VPSocialLink[aria-label="register-link"]::after,
        .VPSocialLink[aria-label="login-link"]::after {
          padding: 4px 8px;
          font-size: 13px;
        }
      }
    `]
  ],
  base: '/ModulRosta/',
  description: '© Модуль Роста® 2010 — 2025',
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: "Модуль роста",
    sidebar: {
      '/Чекапы/': { base: '/Чекапы/', items: sidebarCheckup() },
      '/Система/': { base: '/Система/', items: sidebarSystem() },
      '/Сравнить/': { base: '/Сравнить/', items: sidebarCompare() },
      '/Компания/': { base: '/Компания/', items: sidebarCompany() },
      '/Ресурсы/': { base: '/Ресурсы/', items: sidebarResourses() }
    },
    search: {
      provider: 'local',
      options: {
        placeholder: 'Поиск…'
      }
    },
    nav: nav(),
    socialLinks: [
      { icon: 'github', link: '/register', ariaLabel: 'register-link' },
      { icon: 'github', link: '/login', ariaLabel: 'login-link' }
    ],
    footer: {
      message: `
        <a href="/terms">Условия использования</a>
        &nbsp;•&nbsp;
        <a href="/about/contacts">Контакты</a>
      `,
      copyright: '© Модуль Роста® 2010 — 2025'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Чекапы',
      link: '/Чекапы/markdown-examplescopy.md',
      activeMatch: '/Чекапы/'
    },
    {
      text: 'Система',
      link: '/Система/markdown-examplescopy.md',
      activeMatch: '/Система/'
    },
    {
      text: 'Сравнить',
      link: '/Сравнить/markdown-examplescopy.md',
      activeMatch: '/Сравнить/'
    },
    {
      text: 'Компания',
      link: '/Компания/markdown-examplescopy.md',
      activeMatch: '/Компания/'
    },
    {
      text: 'Ресурсы',
      link: '/Ресурсы/markdown-examplescopy.md',
      activeMatch: '/Ресурсы/'
    }
  ]
}

function sidebarCheckup(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [{ text: 'Yoooo', link: '/markdown-examplescopy.md' }]
    },
    {
      text: 'Writing',
      collapsed: false,
      items: []
    },
    {
      text: 'Customization',
      collapsed: false,
      items: []
    },
    {
      text: 'Experimental',
      collapsed: false,
      items: []
    },
  ]
}

function sidebarSystem(): DefaultTheme.SidebarItem[] {
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
