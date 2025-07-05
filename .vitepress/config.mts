import { defineConfig, DefaultTheme } from 'vitepress'
import pkg from '../package.json' assert { type: 'json' }
import taskLists from 'markdown-it-task-lists' // Используем проверенный пакет

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

  transformPageData(pageData) {
    return pageData
  },

  buildEnd(siteConfig) {
    // Этот хук выполняется после сборки
  },

  markdown: {
    config: (md) => {
      md.use(checkbox) // Используем рабочий пакет
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['script', {}, `
    (function() {
      // ... ваш оригинальный JavaScript код ...
    })();
    `],
    ['style', {}, `
    :root {
      --vp-c-brand-1: #2e6b5e;
      --vp-c-brand-2: #3a7d6e;
      --vp-c-brand-3: #2e6b5e;
      --vp-c-brand-soft: rgba(46, 107, 94, 0.14);
    }
    
    /* ... ваш оригинальный CSS ... */
    
    /* Стили для чекбоксов */
    .task-list-item {
      list-style-type: none !important;
    }
    .task-list-item input[type="checkbox"] {
      margin: 0 0.2em 0.25em -1.6em;
      vertical-align: middle;
    }
    `]
  ],
  base: '/',
  outDir: '.vitepress/dist',
  description: 'Эксперты по системному росту бизнеса. Помогаем владельцам компаний находить скрытые резервы прибыли через data-driven подход и глубокую диагностику процессов.',
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: "Модуль Роста",
    sidebar: {
      '/about/': { items: sidebarAbout() },
      '/method/': { items: sidebarMethod() },
      '/technology/': { items: sidebarTechnology() },
      '/checkup/': { items: sidebarCheckup() },
      '/system/': { items: sidebarSystem() },
      '/journal/': { items: sidebarJournal() }
    },
    search: {
      provider: 'local',
      options: {
        placeholder: 'Поиск…',
        translations: {
          button: { buttonText: 'Поиск', buttonAriaLabel: 'Поиск' },
          modal: {
            displayDetails: 'Показать подробные результаты',
            resetButtonTitle: 'Сбросить поиск',
            backButtonTitle: 'Закрыть поиск',
            noResultsText: 'Результаты не найдены для',
            footer: {
              selectText: 'выбрать',
              navigateText: 'навигация',
              closeText: 'закрыть'
            }
          }
        }
      }
    },
    nav: nav(),
    socialLinks: [
      { icon: 'github', link: 'https://app.mplan.sbs', ariaLabel: 'login-link' },
      { icon: 'github', link: '/apply', ariaLabel: 'apply-link', target: '_self' }
    ],
  }
})

// ... все ваши оригинальные функции (nav, sidebarAbout и др.) остаются без изменений ...
