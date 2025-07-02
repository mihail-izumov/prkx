# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

123

## Custom Containers

<form id="myForm" class="custom-form">
  <div class="form-group">
    <label for="name">Имя:</label>
    <input type="text" id="name" name="name" class="form-input" required>
  </div>
  
  <div class="form-group">
    <label for="phone">Телефон (формат: +7XXX... или 8XXX...):</label>
    <input type="tel" id="phone" name="phone" class="form-input" required pattern="^(\+7|8)\d{10}$">
    <small class="hint">Пример: +79161234567 или 89161234567</small>
  </div>
  
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" class="form-input" required>
  </div>
  
  <div class="form-group checkbox-group">
    <input type="checkbox" id="consent" name="consent" required>
    <label for="consent">Я согласен(а) на обработку персональных данных</label>
  </div>
  
  <button type="submit" class="submit-btn" disabled>
    Отправить
  </button>
</form>

<div id="successMessage" class="success-message" style="display: none;">
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
  box-sizing: border-box;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: #000000;
  color: #ffffff;
}

.form-input:invalid {
  border-color: #ff4444;
}

.hint {
  display: block;
  margin-top: 5px;
  color: #aaaaaa;
  font-size: 0.8em;
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
}

.checkbox-group input {
  width: auto;
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
  transition: opacity 0.3s;
}

.submit-btn:hover:not(:disabled) {
  opacity: 0.9;
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.success-message {
  margin-top: 15px;
  padding: 10px;
  background-color: #e6f7e6;
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
    const submitBtn = form.querySelector('.submit-btn');
    const phoneInput = document.getElementById('phone');
    
    // Валидация телефона в реальном времени
    phoneInput.addEventListener('input', function() {
      this.value = this.value.replace(/[^0-9+]/g, '');
      if (this.value.startsWith('9') && this.value.length === 10) {
        this.value = '+7' + this.value;
      }
    });

    // Проверка всей формы
    function checkFormValidity() {
      const isPhoneValid = /^(\+7|8)\d{10}$/.test(phoneInput.value);
      const isEmailValid = document.getElementById('email').checkValidity();
      const isNameValid = document.getElementById('name').value.trim() !== '';
      const isConsentChecked = document.getElementById('consent').checked;
      
      submitBtn.disabled = !(isPhoneValid && isEmailValid && isNameValid && isConsentChecked);
    }

    // Слушаем изменения во всех полях
    form.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', checkFormValidity);
    });

    // Отправка формы через mailto
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = encodeURIComponent(document.getElementById('name').value);
      const phone = encodeURIComponent(document.getElementById('phone').value);
      const email = encodeURIComponent(document.getElementById('email').value);
      
      const subject = encodeURIComponent('Новая заявка с сайта');
      const body = encodeURIComponent(
        `Имя: ${name}\nТелефон: ${phone}\nEmail: ${email}\n\nДата: ${new Date().toLocaleString()}`
      );
      
      // Открываем почтовый клиент
      window.location.href = `mailto:theorchestramanco@gmail.com?subject=${subject}&body=${body}`;
      
      // Показываем сообщение об успехе
      successMessage.style.display = 'block';
      form.reset();
      submitBtn.disabled = true;
      
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 5000);
    });
    
    // Первоначальная проверка
    checkFormValidity();
  });
}
</script>

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
