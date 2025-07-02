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
.custom-form {
  max-width: 500px;
  margin: 0;
  padding: 20px;
  background-color: #000000;
  border-radius: 5px;
  color: #ffffff;
}

.form-group {
  margin-bottom: 20px;
}

.form-input {
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: #111111;
  color: #ffffff;
  margin-top: 5px;
}

.form-input:invalid {
  border-color: #ff4444;
}

.error-message {
  color: #ff4444;
  font-size: 0.8em;
  margin-top: 5px;
  display: none;
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
  padding: 14px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  font-weight: bold;
  margin-top: 10px;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  display: none;
  margin-top: 20px;
  padding: 15px;
  background-color: #e8f5e9;
  border: 1px solid #a5d6a7;
  border-radius: 4px;
  color: #2e7d32;
  font-weight: bold;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('myForm');
  const submitBtn = document.querySelector('.submit-btn');
  const successMessage = document.getElementById('successMessage');
  
  // Элементы для валидации
  const fields = {
    name: document.getElementById('name'),
    phone: document.getElementById('phone'),
    email: document.getElementById('email'),
    consent: document.getElementById('consent')
  };
  
  // Проверка всей формы
  function validateForm() {
    let isValid = true;
    
    // Проверка имени
    if (fields.name.value.trim().length < 2) {
      showError('name-error', 'Имя должно содержать минимум 2 символа');
      isValid = false;
    } else {
      hideError('name-error');
    }
    
    // Проверка телефона
    if (!/^(\+7|8)\d{10}$/.test(fields.phone.value)) {
      showError('phone-error', 'Введите телефон в формате +79123456789 или 89123456789');
      isValid = false;
    } else {
      hideError('phone-error');
    }
    
    // Проверка email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value)) {
      showError('email-error', 'Введите корректный email');
      isValid = false;
    } else {
      hideError('email-error');
    }
    
    // Проверка согласия
    if (!fields.consent.checked) {
      showError('consent-error', 'Необходимо ваше согласие');
      isValid = false;
    } else {
      hideError('consent-error');
    }
    
    submitBtn.disabled = !isValid;
    return isValid;
  }
  
  function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }
  
  function hideError(id) {
    document.getElementById(id).style.display = 'none';
  }
  
  // Обработчики событий
  fields.name.addEventListener('input', validateForm);
  fields.phone.addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9+]/g, '');
    if (this.value.startsWith('9') && this.value.length === 10) {
      this.value = '+7' + this.value;
    }
    validateForm();
  });
  fields.email.addEventListener('input', validateForm);
  fields.consent.addEventListener('change', validateForm);
  
  // Отправка формы
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateForm()) {
      // Здесь можно добавить реальную отправку на email
      successMessage.style.display = 'block';
      form.reset();
      submitBtn.disabled = true;
      
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 5000);
    }
  });
  
  // Первоначальная проверка
  validateForm();
});
</script>

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
