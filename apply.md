# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

123

## Custom Containers

<form id="myForm" class="custom-form" onsubmit="return false">
  <div class="form-group">
    <label for="name">Имя:</label>
    <input type="text" id="name" name="name" class="form-input">
  </div>
  
  <div class="form-group">
    <label for="phone">Телефон:</label>
    <input type="tel" id="phone" name="phone" class="form-input">
  </div>
  
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" class="form-input">
  </div>
  
  <button type="submit" class="submit-btn">
    Отправить
  </button>
</form>

<div id="successMessage" class="success-message">
  ✅ Заявка успешно отправлена. Скоро свяжемся.
</div>

<style>
.custom-form {
  max-width: 500px;
  margin: 0;
  padding: 20px;
  background-color: #000000;
  border-radius: 5px;
  color: #ffffff;
}

.form-group {
  margin-bottom: 15px;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  background-color: #111;
  color: white;
}

.submit-btn {
  background: white;
  color: black;
  padding: 12px;
  width: 100%;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

.success-message {
  display: none;
  margin-top: 15px;
  padding: 10px;
  background: #e8f5e9;
  color: #2e7d32;
  border-radius: 4px;
}
</style>

<script>
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const success = document.getElementById('successMessage');
    
    form.addEventListener('submit', () => {
      // Собираем данные без валидации
      const data = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        date: new Date().toLocaleString()
      };
      
      // Отправляем письмо (варианты):
      
      // 1. Через mailto (просто откроет почтовый клиент)
      const mailto = `mailto:theorchestramanco@gmail.com?subject=Заявка&body=${
        encodeURIComponent(JSON.stringify(data, null, 2))
      }`;
      window.location.href = mailto;
      
      // 2. Через FormSubmit (работает без сервера)
      fetch('https://formsubmit.co/ajax/theorchestramanco@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).catch(e => console.error(e));
      
      // Показываем сообщение
      success.style.display = 'block';
      form.reset();
      
      setTimeout(() => {
        success.style.display = 'none';
      }, 5000);
    });
  });
}
</script>

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
