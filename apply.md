# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

123

## Custom Containers

<form id="myForm" class="custom-form">
  <div class="form-group">
    <label for="name">Имя:</label>
    <input type="text" id="name" name="name" class="form-input">
  </div>
  
  <div class="form-group">
    <label for="phone">Телефон:</label>
    <input type="tel" id="phone" name="phone" class="form-input" placeholder="+79123456789">
  </div>
  
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" class="form-input">
  </div>
  
  <div class="form-group checkbox-group">
    <input type="checkbox" id="consent" name="consent" checked>
    <label for="consent">Согласен на обработку данных</label>
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
  background-color: #111111;
  color: #ffffff;
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 15px;
}

.submit-btn {
  background-color: #ffffff;
  color: #000000;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  font-weight: bold;
}

.success-message {
  display: none;
  margin-top: 15px;
  padding: 10px;
  background-color: #e8f5e9;
  border: 1px solid #a5d6a7;
  border-radius: 4px;
  color: #2e7d32;
  font-weight: bold;
}
</style>

<script>
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const successMessage = document.getElementById('successMessage');
    
    // Функция для показа сообщения
    function showSuccess() {
      successMessage.style.display = 'block';
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 5000);
    }
    
    // Отправка через EmailJS
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // 1. Собираем данные
      const formData = {
        name: this.name.value,
        phone: this.phone.value,
        email: this.email.value,
        consent: this.consent.checked ? 'Да' : 'Нет',
        date: new Date().toLocaleString()
      };
      
      // 2. Вариант A: Отправка через EmailJS (требует настройки)
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
        .then(() => {
          showSuccess();
          form.reset();
        }, (err) => {
          console.error('Ошибка:', err);
          // 3. Вариант B: Резервная отправка через Formspree
          backupSubmit(formData);
        });
      
      // 4. Показываем сообщение в любом случае
      showSuccess();
    });
    
    // Резервный метод отправки
    function backupSubmit(data) {
      fetch('https://formspree.io/f/theorchestramanco@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).catch(e => console.error(e));
    }
  });
}
</script>

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
