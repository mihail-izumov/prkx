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
    `]
  ],
  base: '/ModulRosta/',
  description: '© Модуль Роста® 2010 — 2025',
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: false,
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
      { icon: 'github', link: 'https://app.mplan.sbs' },
      {
       icon: 'github',                     // any existing Lucide icon
       link: 'https://app.mplan.sbs',
       ariaLabel: 'login-link'            // used by our CSS selector
     }
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
