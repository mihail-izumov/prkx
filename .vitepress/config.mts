// .vitepress/config.mts
import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/ModulRosta/',
  description: 'Сайт модуля роста',

  // ─── 1) ROOT-LEVEL SEARCH ──────────────────────────────────────────────────


  // ─── 2) THEME CONFIG (nav, sidebar, footer, etc) ─────────────────────────
  themeConfig: {
  search: {
    provider: 'local',
    options: {
      appId:     'YOUR_ALGOLIA_APP_ID',
      apiKey:    'YOUR_ALGOLIA_SEARCH_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
      // change the placeholder in the input:
      placeholder: 'Поиск…'
    }
  },
    nav: [
      { text: 'Home',     link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples',    link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
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
