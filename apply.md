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
/* Ваши стили с небольшими адаптациями */
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
}

/* Стилизация элементов внутри iframe (работает не всегда) */
.yandex-form-iframe .form-group {
  margin-bottom: 15px;
}

.yandex-form-iframe .form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.yandex-form-iframe .submit-btn {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  transition: background-color 0.3s;
}

.yandex-form-iframe .submit-btn:hover {
  background-color: #45a049;
}

/* Для сообщения об успешной отправке */
.yandex-form-iframe .success-message {
  margin-top: 15px;
  padding: 10px;
  background-color: #e6f7e6;
  border: 1px solid #a5d6a7;
  border-radius: 4px;
  color: #2e7d32;
  font-weight: bold;
  text-align: center;
}
</style>

<script>
// Для отслеживания отправки формы (если нужно)
window.addEventListener('message', function(e) {
  if (e.data.type === 'yandex-form-submit') {
    console.log('Форма отправлена');
    // Здесь можно добавить свои действия после отправки
  }
});
</script>

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
