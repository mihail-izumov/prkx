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

  // Добавляем хук для обработки данных страницы
  transformPageData(pageData) {
    return pageData
  },

  // Добавляем buildEnd хук для модификации HTML после сборки
  buildEnd(siteConfig) {
    // Этот хук выполняется после сборки
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['script', {}, `
    (function() {
    function createFooterContent() {
      const links = [
        { text: 'Журнал', href: '/journal/contents/index' },
        { text: 'Телеграм-канал', href: 'https://t.me/runscale', target: '_blank' },
        { text: 'Поддержка', href: '/support' },
        { text: 'Условия использования', href: '/terms' },
        { text: 'Контакт', href: '/about/contacts' }
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
      html += '<div style="color: white; font-size: 14px;">Расти по своим правилам</div>';
      html += '<div style="color: var(--vp-c-text-2); margin-top: 4px; font-size: 14px; text-align: center;">© Модуль Роста® 2010 — 2025</div>';
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
        footer.style.bottom = '70px';    // уменьшили отступ с 85px до 40px
        footer.style.zIndex = '10';
        footer.style.marginBottom = '-70px';  // уменьшили с -125px до -60px
      } else {
        footer.style.position = '';
        footer.style.bottom = '';
        footer.style.zIndex = '';
        footer.style.paddingBottom = '30px';
      }

    }

    function updateApplyLinkTarget() {
      const applyLinks = document.querySelectorAll('.VPSocialLink[aria-label="apply-link"]');
      applyLinks.forEach(applyLink => {
        applyLink.href = '/apply';
        applyLink.setAttribute('target', '_self');
        applyLink.removeAttribute('rel');

        // Создаем новую ссылку для замены
        const newLink = document.createElement('a');
        newLink.href = '/apply';
        newLink.className = applyLink.className;
        newLink.setAttribute('aria-label', 'apply-link');
        newLink.setAttribute('target', '_self');

        // Копируем все атрибуты кроме href и target
        Array.from(applyLink.attributes).forEach(attr => {
          if (attr.name !== 'href' && attr.name !== 'target' && attr.name !== 'rel') {
            newLink.setAttribute(attr.name, attr.value);
          }
        });

        // Заменяем элемент
        applyLink.parentNode.replaceChild(newLink, applyLink);
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        replaceFooter();
        updateApplyLinkTarget();
      });
    } else {
      replaceFooter();
      updateApplyLinkTarget();
    }

    window.addEventListener('load', () => {
      replaceFooter();
      updateApplyLinkTarget();
    });
    setTimeout(() => {
      replaceFooter();
      updateApplyLinkTarget();
    }, 1000);
    setTimeout(() => {
      replaceFooter();
      updateApplyLinkTarget();
    }, 2000);

    let lastUrl = location.href;
    new MutationObserver(() => {
      const url = location.href;
      if (url !== lastUrl) {
        lastUrl = url;
        setTimeout(() => {
          replaceFooter();
          updateApplyLinkTarget();
        }, 100);
      }
    }).observe(document, { subtree: true, childList: true });
  })();
`],
    ['style', {}, `
    :root {
  --vp-c-brand-1: #2e6b5e;
  --vp-c-brand-2: #3a7d6e;
  --vp-c-brand-3: #2e6b5e;
  --vp-c-brand-soft: rgba(46, 107, 94, 0.14);
}
    /* Логотип */
.VPNavBarTitle .logo {
  height: 32px !important;
  width: auto !important;
}

/* Контейнер социальных ссылок - добавляем правильный отступ слева */
.VPNavBarSocialLinks {
  min-width: 280px !important;
  justify-content: flex-end !important;
  gap: 20px !important;
  margin-left: 0px !important; /* Уменьшенный отступ от переключателя темы */
}

/* Убираем все иконки GitHub */
.VPSocialLink .vpi-social-github {
  display: none !important;
}

/* Базовые стили для социальных ссылок */
.VPSocialLink {
  width: auto !important;
  height: auto !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
}

/* Кнопка "Войти" (прозрачная) */
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

/* Кнопка "Расти с планом" (заполненная) */
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

/* Стили для футера */
.custom-footer-links {
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: center;
}

.footer-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-row a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-row a:hover {
  color: var(--vp-c-brand);
}

.dot-separator {
  color: var(--vp-c-text-3);
  font-weight: bold;
}

.VPFooter .copyright {
  margin-top: 2px !important;
}

/* Мобильные стили */
@media (max-width: 768px) {
  .VPNavBarSocialLinks {
    width: 100% !important;
    min-width: 100% !important;
    flex-direction: column !important;
    gap: 8px !important;
    padding: 0 16px !important;
    box-sizing: border-box !important;
    margin-left: 8 !important;
  }

  .VPSocialLink {
    width: 100% !important;
    display: flex !important;
    justify-content: center !important;
    box-sizing: border-box !important;
  }

  .VPSocialLink[aria-label="login-link"]::after,
  .VPSocialLink[aria-label="apply-link"]::after {
    width: 100% !important;
    display: block !important;
    text-align: center;
    padding: 10px 12px !important;
    margin: 10 !important;
    box-sizing: border-box !important;
  }

  /* Футер на мобильных */
  .footer-row {
    flex-direction: column;
    gap: 8px;
  }

  .dot-separator {
    display: none;
  }
}
    `]
  ],
  base: '/',
  outDir: '.vitepress/dist',
  description: 'Эксперты по системному росту бизнеса. Помогаем владельцам компаний находить скрытые резервы прибыли через data-driven подход и глубокую диагностику процессов.',
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: "Модуль Роста",

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
      },
      '/journal/': {
        items: sidebarJournal()
      }
    },

    search: {
      provider: 'local',
      options: {
        placeholder: 'Поиск…',
        translations: {
          button: {
            buttonText: 'Поиск',
            buttonAriaLabel: 'Поиск'
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

    // Navigation with dropdowns
    nav: nav(),

    // Social links (header buttons)
    socialLinks: [
      { icon: 'github', link: 'https://app.mplan.sbs', ariaLabel: 'login-link' },
      { icon: 'github', link: '/apply', ariaLabel: 'apply-link', target: '_self'  }
    ],

    // Footer configuration - простой текст для production
    //footer: {
    //  message: 'Журнал  •  Телеграм-канал  •  Поддержка  •  Условия использования  •  Контакт',
    //  copyright: '© Модуль Роста® 2010 — 2025'
    //},
  }
})

// Navigation with dropdown menus
function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Продукты',
      items: [
        { text: 'Бизнес-чекап', link: '/checkup/overview' },
        { text: 'Система роста бизнеса', link: '/system/overview' },
        { text: 'ИИ-автоматизация', link: '/technology/overview' }
      ]
    },
    {
      text: 'Компания',
      items: [
        { text: 'О нас', link: '/about/overview' },
        { text: 'Метод', link: '/method/overview' },
        { text: 'Клиенты и кейсы', link: '/about/clients' }
      ]
    }
  ]
}

// Sidebar for About section
function sidebarAbout(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Компания',
      collapsed: false,
      items: [
        { text: 'О нас', link: '/about/overview' },
        { text: 'Мы, Растем', link: '/about/mission' },
        { text: 'Клиенты', link: '/about/clients' },
        { text: 'Контакт', link: '/about/contacts' }
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
        { text: 'Обзор', link: '/method/overview' },
        { text: '3 принципа здоровой аналитики', link: '/method/different' },
        { text: 'Метод эффективной трансформации', link: '/method/transform' },
        { text: 'Фрейм-менеджмент', link: '/method/frames' },
        { text: 'Сравнить', link: '/method/pro-et-contra' }
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
        { text: 'Обзор', link: '/technology/overview' },
        { text: 'Живая база знаний', link: '/technology/datahub' },
        { text: 'Глубокая бизнес-аналитика', link: '/technology/analytics-360' },
        { text: 'Речевая аналитика', link: '/technology/wordpower' },
        { text: 'Дистанционные стратегические сессии', link: '/technology/vision-now' },
        { text: 'ИИ-ассистент продаж', link: '/technology/anna' },
        { text: 'Радар', link: '/technology/radar' }
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
        { text: 'Обзор', link: '/checkup/overview' },
        { text: 'Глубокий чекап', link: '/checkup/deep' },
        { text: 'Платите за движение', link: '/checkup/pay-as-you-go' },
        { text: 'Чек-лист готовности', link: '/checkup/checklist' }
      ]
    },
{
      text: 'Подготовка к чекапу',
      collapsed: false,
      items: [
        { text: 'Обзор', link: '/checkup/prep/overview' },        
        { text: '1 - Скрытые проблемы, которые блокируют рост', link: '/checkup/prep/01-hidden-problems-blocking-growth' },
        { text: '2 - Почему мы запрашиваем готовые отчёты, а не доступы к системам', link: '/checkup/prep/02-why-we-request-ready-reports-not-system-access' },
        { text: '3 - Системная диагностика бизнеса против разовых решений', link: '/checkup/prep/03-system-diagnostics-vs-one-time-solutions' },
        { text: '4 - Чекап как основа для принятия решений на данных', link: '/checkup/prep/04-checkup-for-data-driven-decisions' },
        { text: '5 - ИИ-аналитика RAG: надёжная база для управленческих решений', link: '/checkup/prep/05-ai-analytics-rag-management' },
        { text: '6 - Десять разделов диагностики: структура анализа бизнеса', link: '/checkup/prep/06-10-diagnostic-sections' },
        { text: '7 - Три принципа надёжной аналитики для точных решений', link: '/checkup/prep/07-three-reliable-analytics-principles' },
        { text: '8 - Аналитика как инструмент прозрачного управления', link: '/checkup/prep/08-analytics-transparent-management' }
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
        { text: 'Обзор', link: '/system/overview' },
        { text: '12-нед. интенсив', link: '/system/12-weeks' }
      ]
    }
  ]
}

function sidebarJournal(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Журнал',
      collapsed: false,
      items: [
        { text: 'Содержание', link: '/journal/contents/index' },        
        { text: 'Кейсы', link: '/journal/contents/cases' },
        { text: 'Статьи', link: '/journal/contents/articles' },
        { text: 'Экспертиза', link: '/journal/contents/expertise' }
      ]
    }
  ]
}
