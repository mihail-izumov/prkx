# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

123

## Custom Containers

<form id="myForm" class="custom-form">
  <div class="form-group">
    <label for="name">Имя:</label>
    <input type="text" id="name" name="name" class="form-input" required minlength="2">
    <div class="error-message" id="name-error"></div>
  </div>
  
  <div class="form-group">
    <label for="phone">Телефон:</label>
    <input type="tel" id="phone" name="phone" class="form-input" 
           pattern="^(\+7|8)\d{10}$" required
           placeholder="+79123456789 или 89123456789">
    <div class="error-message" id="phone-error"></div>
  </div>
  
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" class="form-input" required>
    <div class="error-message" id="email-error"></div>
  </div>
  
  <div class="form-group checkbox-group">
    <input type="checkbox" id="consent" name="consent" required>
    <label for="consent">Я согласен(а) на обработку персональных данных</label>
    <div class="error-message" id="consent-error"></div>
  </div>
  
  <button type="submit" class="submit-btn" disabled>
    Отправить
  </button>
</form>

<div id="successMessage" class="success-message">
  ✅ Заявка успешно отправлена. Скоро свяжемся.
</div>

<style>
/* Ваши стили остаются без изменений */
.custom-form {
  max-width: 500px;
  margin: 0;
  padding: 20px;
  background-color: #000000;
  border-radius: 5px;
  color: #ffffff;
}
/* ... остальные стили ... */
</style>

<script>
// Оборачиваем код в проверку на выполнение в браузере
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    if (!form) return;
    
    const submitBtn = form.querySelector('.submit-btn');
    const successMessage = document.getElementById('successMessage');
    
    // Функция валидации
    function validateForm() {
      let isValid = true;
      
      // Проверка имени
      const name = document.getElementById('name');
      if (name.value.trim().length < 2) {
        isValid = false;
      }
      
      // Проверка телефона
      const phone = document.getElementById('phone');
      if (!/^(\+7|8)\d{10}$/.test(phone.value)) {
        isValid = false;
      }
      
      // Проверка email
      const email = document.getElementById('email');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        isValid = false;
      }
      
      // Проверка согласия
      const consent = document.getElementById('consent');
      if (!consent.checked) {
        isValid = false;
      }
      
      submitBtn.disabled = !isValid;
      return isValid;
    }
    
    // Обработчики событий
    form.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', validateForm);
    });
    
    document.getElementById('consent').addEventListener('change', validateForm);
    
    // Обработка телефона
    document.getElementById('phone').addEventListener('input', function(e) {
      this.value = this.value.replace(/[^0-9+]/g, '');
      validateForm();
    });
    
    // Отправка формы
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (validateForm()) {
        successMessage.style.display = 'block';
        form.reset();
        submitBtn.disabled = true;
        
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 5000);
      }
    });
  });
}
</script>

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
