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
  ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]

  ],
  base: '/',
  outDir: '.vitepress/dist',
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
    // Empty nav array - removes navigation from header
    nav: nav(),
    socialLinks: [
      { icon: 'github', link: '/register', ariaLabel: 'register-link' },
      { icon: 'github', link: '/login', ariaLabel: 'login-link' }
    ],
    footer: {
      message: 'Модуль Роста® – Расти по своим правилам',
      copyright: '© Модуль Роста® 2010 — 2025'
    }
  }
})

// Keep the existing nav function for reference if needed later
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
