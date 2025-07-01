// .vitepress/config.mts
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

      /* Footer 3-column layout */
      .VPFooter .footer-content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 30px;
        margin-bottom: 20px;
        text-align: left;
      }

      .VPFooter .footer-nav {
        padding-right: 15px;
      }

      .VPFooter .footer-nav h4 {
        color: var(--vp-c-text-1);
        font-size: 16px;
        font-weight: 600;
        margin: 0 0 16px 0;
      }

      .VPFooter .footer-nav-links {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .VPFooter .footer-nav-links a {
        color: var(--vp-c-text-2);
        text-decoration: none;
        font-weight: 400;
        transition: color 0.3s ease;
        padding: 2px 0;
      }

      .VPFooter .footer-nav-links a:hover {
        color: var(--vp-c-brand);
      }

      .VPFooter .footer-info {
        padding: 0 15px;
        border-left: 1px solid var(--vp-c-divider);
        border-right: 1px solid var(--vp-c-divider);
      }

      .VPFooter .footer-info h4 {
        color: var(--vp-c-text-1);
        font-size: 16px;
        font-weight: 600;
        margin: 0 0 16px 0;
      }

      .VPFooter .footer-links {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .VPFooter .footer-links a {
        color: var(--vp-c-text-2);
        text-decoration: none;
        font-weight: 400;
        transition: color 0.3s ease;
        padding: 2px 0;
      }

      .VPFooter .footer-links a:hover {
        color: var(--vp-c-brand);
      }

      .VPFooter .footer-contact {
        padding-left: 15px;
      }

      .VPFooter .footer-contact h4 {
        color: var(--vp-c-text-1);
        font-size: 16px;
        font-weight: 600;
        margin: 0 0 16px 0;
      }

      .VPFooter .footer-contact-links {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .VPFooter .footer-contact-links a {
        color: var(--vp-c-text-2);
        text-decoration: none;
        font-weight: 400;
        transition: color 0.3s ease;
        padding: 2px 0;
      }

      .VPFooter .footer-contact-links a:hover {
        color: var(--vp-c-brand);
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        .VPNavBarSocialLinks {
          min-width: 160px !important;
          gap: 16px !important; /* Increased gap for better separation */
          flex-wrap: wrap; /* Allow wrapping if needed */
        }

        .VPSocialLink[aria-label="register-link"]::after,
        .VPSocialLink[aria-label="login-link"]::after {
          padding: 4px 6px; /* Reduced padding for mobile */
          font-size: 12px; /* Smaller font size for mobile */
          margin: 0 2px; /* Adjusted margin for mobile */
        }

        .VPFooter .footer-content {
          grid-template-columns: 1fr;
          gap: 25px;
        }

        .VPFooter .footer-info {
          border-left: none;
          border-right: none;
          border-top: 1px solid var(--vp-c-divider);
          padding: 20px 0 0 0;
        }

        .VPFooter .footer-nav {
          padding-right: 0;
        }

        .VPFooter .footer-contact {
          padding-left: 0;
          border-top: 1px solid var(--vp-c-divider);
          padding-top: 20px;
        }
      }

      /* Tablet responsive - 2 columns on medium screens */
      @media (max-width: 1024px) and (min-width: 769px) {
        .VPFooter .footer-content {
          grid-template-columns: 1fr 1fr;
        }

        .VPFooter .footer-contact {
          grid-column: 1 / -1;
          border-top: 1px solid var(--vp-c-divider);
          border-left: none;
          padding: 20px 0 0 0;
          margin-top: 15px;
        }

        .VPFooter .footer-info {
          border-right: none;
        }
      }
    `]
  ],
  base: '/',
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
      message: `
        <div class="footer-content">
          <div class="footer-nav">
            <h4>Навигация</h4>
            <div class="footer-nav-links">
              <a href="/Чекапы/markdown-examplescopy.md">Чекапы</a>
              <a href="/Система/markdown-examplescopy.md">Система</a>
              <a href="/Сравнить/markdown-examplescopy.md">Сравнить</a>
              <a href="/Компания/markdown-examplescopy.md">Компания</a>
              <a href="/Ресурсы/markdown-examplescopy.md">Ресурсы</a>
            </div>
          </div>
          <div class="footer-info">
            <h4>Информация</h4>
            <div class="footer-links">
              <a href="/terms">Условия использования</a>
              <a href="/about/privacy">Политика конфиденциальности</a>
              <a href="/about/support">Поддержка</a>
              <a href="/about/faq">Часто задаваемые вопросы</a>
            </div>
          </div>
          <div class="footer-contact">
            <h4>Контакты</h4>
            <div class="footer-contact-links">
              <a href="/about/contacts">Связаться с нами</a>
              <a href="mailto:info@modulrosta.ru">info@modulrosta.ru</a>
              <a href="tel:+78001234567">8 (800) 123-45-67</a>
              <a href="/about/office">Адрес офиса</a>
            </div>
          </div>
        </div>
      `,
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
