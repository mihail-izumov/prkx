# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

123

## Custom Containers

<div class="custom-form">
  <iframe 
    src="https://forms.yandex.ru/cloud/ВАШ_ID_ФОРМЫ/?embedded=true" 
    frameborder="0" 
    name="yandex-form"
    style="width:100%;height:600px;border:none;background:transparent;"
    loading="lazy">
  </iframe>
</div>

<style>
.custom-form {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Для мобильных устройств */
@media (max-width: 600px) {
  .custom-form {
    padding: 15px;
    margin: 10px;
  }
}
</style>

<script>
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    // Проверка загрузки iframe (опционально)
    const iframe = document.querySelector('iframe[name="yandex-form"]');
    
    iframe.onload = function() {
      console.log('Форма Яндекс загружена');
      // Здесь можно добавить обработку успешной загрузки
    };
    
    // Резервный вариант на случай проблем
    setTimeout(() => {
      if (!iframe.contentDocument || 
          iframe.contentDocument.body.innerHTML === '') {
        console.warn('Форма не загрузилась, показываем ссылку');
        iframe.style.display = 'none';
        const link = document.createElement('a');
        link.href = 'https://forms.yandex.ru/cloud/ВАШ_ID_ФОРМЫ/';
        link.textContent = 'Открыть форму на Яндекс.Формах';
        link.style.display = 'block';
        link.style.textAlign = 'center';
        link.style.padding = '20px';
        link.style.color = '#4CAF50';
        link.style.fontWeight = 'bold';
        iframe.parentNode.appendChild(link);
      }
    }, 5000);
  });
}
</script>

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
