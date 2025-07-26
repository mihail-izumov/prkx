import { defineConfig, DefaultTheme } from 'vitepress'
import pkg from '../package.json' assert { type: 'json' }
const { version } = pkg

export default defineConfig({
  appearance: {
    initialValue: 'light' as any
  },
  title: 'Парк за углом',
  locales: {
    '/': {
      lang: 'ru-RU',
      title: 'Парк за углом',
      description: 'Умные парки для детей и их родителей',
    },
  },

  transformPageData(pageData) {
    return pageData
  },

  buildEnd(siteConfig) {
    // ...
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'public/prkx-icon.png' }],
    ['link', { rel: 'shortcut icon', href: '/prkx-icon.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['script', {}, `
    (function() {
      function createFooterContent() {
        const links = [
          { text: 'Контакт', href: '89370606690' },
          { text: 'Телеграм-канал', href: 'https://t.me/runprkx', target: '_blank' },
          { text: 'Orxaos', href: 'https://orxaos.sbs', target: '_blank' }
        ];

        let html = '<hr style="border: 0; border-top: 1px solid var(--vp-c-divider); margin: 24px 0;">';
        html += '<div class="custom-footer-links"><div class="footer-row">';
        links.slice(0, 3).forEach((link, i) => {
          if (i > 0) html += '<span class="dot-separator">•</span>';
          html += '<a href="' + link.href + '"' + (link.target ? ' target="' + link.target + '" rel="noopener noreferrer"' : '') + '>' + link.text + '</a>';
        });
        html += '</div><div class="footer-row">';
        links.slice(3).forEach((link, i) => {
          if (i > 0) html += '<span class="dot-separator">•</span>';
          html += '<a href="' + link.href + '">' + link.text + '</a>';
        });
        html += '</div></div>';
        html += '<div style="margin-top: 24px; text-align: center;">';
        html += '<div style="color: var(--vp-c-text-2); font-size: 14px;">Что то там</div>';
        html += '<div style="color: var(--vp-c-text-2); margin-top: 4px; font-size: 14px; text-align: center;">© Orxaos | Михаил Изюмов 2025</div>';
        return html;
      }

      function replaceFooter() {
        let footer = document.querySelector('.VPFooter');
        if (!footer) {
          footer = document.createElement('footer');
          footer.className = 'VPFooter';
          document.body.appendChild(footer);
        }
        footer.innerHTML = createFooterContent();
        if (window.location.pathname !== '/') {
          footer.style.position = 'relative';
          footer.style.bottom = '70px';
          footer.style.zIndex = '10';
          footer.style.marginBottom = '-70px';
        } else {
          footer.style.position = '';
          footer.style.bottom = '';
          footer.style.zIndex = '';
          footer.style.paddingBottom = '30px';
        }
      }

      function updateLinksTarget() {
        const map = {
          'login-link': '/community',
          'apply-link': '/run-prkx'
        };
        Object.entries(map).forEach(([ariaLabel, href]) => {
          const links = document.querySelectorAll(\`.VPSocialLink[aria-label="\${ariaLabel}"]\`);
          links.forEach(link => {
            link.href = href;
            link.setAttribute('target', '_self');
            link.removeAttribute('rel');

            // Создаем новую ссылку для замены (чтобы перезаписать атрибуты корректно)
            const newLink = document.createElement('a');
            newLink.href = href;
            newLink.className = link.className;
            newLink.setAttribute('aria-label', ariaLabel);
            newLink.setAttribute('target', '_self');

            Array.from(link.attributes).forEach(attr => {
              if (!['href', 'target', 'rel'].includes(attr.name)) {
                newLink.setAttribute(attr.name, attr.value);
              }
            });

            link.parentNode.replaceChild(newLink, link);
          });
        });
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          replaceFooter();
          updateLinksTarget();
        });
      } else {
        replaceFooter();
        updateLinksTarget();
      }

      window.addEventListener('load', () => {
        replaceFooter();
        updateLinksTarget();
      });

      setTimeout(() => {
        replaceFooter();
        updateLinksTarget();
      }, 1000);

      setTimeout(() => {
        replaceFooter();
        updateLinksTarget();
      }, 2000);

      let lastUrl = location.href;
      new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
          lastUrl = url;
          setTimeout(() => {
            replaceFooter();
            updateLinksTarget();
          }, 100);
        }
      }).observe(document, { subtree: true, childList: true });
    })();
    `],
    ['style', {}, `
      /* Ваши стили без изменений */
      :root {
        --vp-c-brand-1: #2e6b5e;
        --vp-c-brand-2: #3a7d6e;
        --vp-c-brand-3: #2e6b5e;
        --vp-c-brand-soft: rgba(46, 107, 94, 0.14);
      }
      /* ... остальные стили ... */
    `]
  ],
  base: '/',
  cleanUrls: true,
  appearance: false,
  outDir: '.vitepress/dist',
  description: 'Парк вместо мусорки.',
  themeConfig: {
    logo: '/prkx-favicon.png',
    siteTitle: "Парк за углом",
    sidebar: {
      '/Parks/': { items: sidebarParki() },
      '/masterplan/': { items: sidebarMasterplan() },
      '/about/': { items: sidebarWhyPark() }
    },
    search: {
      provider: 'local',
      options: {
        placeholder: 'Поиск…',
        translations: {
          button: {
            buttonText: 'Поиск',
            buttonAriaLabel: 'Поиск',
          },
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
      { icon: 'github', link: '/community', ariaLabel: 'login-link', target: '_self' },
      { icon: 'github', link: '/run-prkx', ariaLabel: 'apply-link', target: '_self' }
    ],
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Парки',
      items: [
        { text: 'Самара, Конноармейская 6а', link: '/Parks/Samara/konnoarmeiskaya_6/overview.md' }
      ]
    },
    {
      text: 'Мастерплан',
      items: [
        { text: 'Обзор', link: '/masterplan/overview' },
        { text: 'В чем план', link: '/masterplan/the-plan' },
        { text: 'Прогресс', link: '/masterplan/roadmap' },
        { text: 'Нас поддерживают', link: '/masterplan/not-alone' }
      ]
    },
    {
      text: 'О Нас',
      items: [
        { text: 'Инициатива', link: '/about/origin' },
        { text: 'Миссия', link: '/about/mission' },
        { text: 'Видение', link: '/about/vision' },
        { text: 'Ценности', link: '/about/values' }
      ]
    },
    {
      text: 'Культура',
      items: [
        { text: 'Культура парков', link: '/culture/park' },
        { text: 'Примеры', link: '/culture/references' }
      ]
    }
  ]
}

function sidebarParki(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Самара, Конноармейская, 6а',
      collapsed: false,
      items: [
        { text: 'Обзор проекта', link: '/Parks/Samara/konnoarmeiskaya_6/overview.md' },
        { text: 'Прогресс по проекту', link: '/Parks/Samara/konnoarmeiskaya_6/progress.md' },
        { text: 'Цифры и факты', link: '/Parks/Samara/konnoarmeiskaya_6/facts-and-figures.md' },
        { text: 'СМИ о парке', link: '/Parks/Samara/konnoarmeiskaya_6/media.md' },
        { text: 'Вопросы и ответы', link: '/Parks/Samara/konnoarmeiskaya_6/faq.md' }
      ]
    }
  ]
}

function sidebarMasterplan(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Мастерплан',
      collapsed: false,
      items: [
        { text: 'Обзор', link: '/masterplan/overview' },
        { text: 'Сегодня', link: '/masterplan/the-present' },
        { text: 'Возможности', link: '/masterplan/the-possibility' },
        { text: 'Решение', link: '/masterplan/the-solution' },
        { text: 'В чем план', link: '/masterplan/the-plan' },
        { text: 'Как мы это сделаем', link: '/masterplan/how-we-can-do-it' },
        { text: 'Прогресс', link: '/masterplan/roadmap' },
        { text: 'Нас поддерживают', link: '/masterplan/not-alone' }
      ]
    }
  ]
}

function sidebarWhyPark(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Технологии',
      collapsed: false,
      items: [
        { text: 'Идея', link: '/Почему_Парк/Идея.md' },
        { text: 'Как это работает', link: '/Почему_Парк/Как_это_работает.md' },
        { text: 'Комфорт+', link: '/Почему_Парк/Комфорт+.md' },
      ]
    }
  ]
}
