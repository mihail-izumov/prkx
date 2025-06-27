// .vitepress/config.mts
import { defineConfig, DefaultTheme } from 'vitepress'
// ← import the whole JSON, then destructure
import pkg from '../package.json' assert { type: 'json' }
const { version } = pkg

export default defineConfig({
  lang: 'ru-RU',
  base: '/ModulRosta/',
  description: 'Сайт модуля роста',
  titleTemplate: 'Custom Suffix',
  themeConfig: {
    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/demo/': { base: '/demo/', items: sidebarReference() }
    },
    search: {
      provider: 'local',
      options: {
        appId:     'YOUR_ALGOLIA_APP_ID',
        apiKey:    'YOUR_ALGOLIA_SEARCH_API_KEY',
        indexName: 'YOUR_INDEX_NAME',
        placeholder: 'Поиск…'
      }
    },
    nav: nav(),
    socialLinks: [
      { icon: '', link: 'https://app.mplan.sbs' }
    ],
    footer: {
      message: `
        <a href="/terms">Условия использования</a>
        &nbsp;•&nbsp;
        <a href="/about/contacts">Контакты</a>
      `,
      copyright: '© 2025 Модуль роста'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Справа 1 😁',
      link: '/guide/markdown-examplescopy.md',
      activeMatch: '/guide/'
    },
    {
      text: 'Демо',
      link: '/demo/markdown-examplescopy.md',
      activeMatch: '/demo/'
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
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

function sidebarReference(): DefaultTheme.SidebarItem[] {
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
