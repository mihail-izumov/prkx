# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

123

## Custom Containers

<div id="yandex-form-container" class="custom-form">
  <iframe 
    src="https://forms.yandex.ru/cloud/ВАШ_ID_ФОРМЫ/?iframe=1" 
    frameborder="0" 
    style="width:100%;height:500px;border:none;"
    class="yandex-form-iframe">
  </iframe>
</div>

<style>
.custom-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.yandex-form-iframe {
  background: transparent;
  min-height: 500px;
}
</style>

<script>
// Обернем код в проверку на выполнение в браузере
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    // Код для отслеживания отправки формы (если нужно)
    window.addEventListener('message', function(e) {
      if (e.data.type === 'yandex-form-submit') {
        console.log('Форма отправлена');
      }
    });
    
    // Дополнительные настройки iframe при необходимости
    const iframe = document.querySelector('.yandex-form-iframe');
    iframe.onload = function() {
      // Можно добавить обработку загрузки iframe
    };
  });
}
</script>

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
