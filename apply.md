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
    <label for="phone">Телефон:</label>
    <input type="tel" id="phone" name="phone" class="form-input" required>
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

.submit-btn:hover {
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
// Используем export default для совместимости с VitePress
export default {
  mounted() {
    this.initForm();
  },
  methods: {
    initForm() {
      // Проверка выполнения в браузере
      if (typeof document === 'undefined') return;
      
      const form = document.getElementById('myForm');
      if (!form) return;
      
      const successMessage = document.getElementById('successMessage');
      const submitBtn = form.querySelector('.submit-btn');
      const requiredInputs = Array.from(form.querySelectorAll('input[required]'));
      const checkbox = document.getElementById('consent');
      
      // Функция проверки валидности формы
      const checkFormValidity = () => {
        const nameValid = document.getElementById('name').value.trim() !== '';
        const phoneValid = document.getElementById('phone').value.trim() !== '';
        const emailValid = document.getElementById('email').value.trim() !== '';
        const consentValid = checkbox.checked;
        
        submitBtn.disabled = !(nameValid && phoneValid && emailValid && consentValid);
      };
      
      // Назначение обработчиков событий
      requiredInputs.forEach(input => {
        input.addEventListener('input', checkFormValidity);
      });
      
      checkbox.addEventListener('change', checkFormValidity);
      
      // Обработка отправки формы
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Проверка перед отправкой
        if (submitBtn.disabled) return;
        
        // Сбор данных формы
        const formData = {
          name: form.name.value,
          phone: form.phone.value,
          email: form.email.value,
          consent: checkbox.checked ? 'Да' : 'Нет',
          _subject: 'Новая заявка с сайта'
        };
        
        // 1. Показать сообщение об отправке
        successMessage.style.display = 'block';
        submitBtn.disabled = true;
        
        // 2. Отправка через FormSubmit.co (с использованием токена)
        fetch('https://formsubmit.co/ajax/ВАШ_ТОКЕН', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(response => {
          if (response.ok) {
            // Успешная отправка
            form.reset();
          } else {
            throw new Error('Ошибка сервера');
          }
        })
        .catch(error => {
          console.error('FormSubmit error:', error);
          
          // 3. Резервная отправка через mailto
          const mailtoBody = `Имя: ${formData.name}%0AТелефон: ${formData.phone}%0AEmail: ${formData.email}%0AСогласие: ${formData.consent}`;
          window.location.href = `mailto:theorchestramanco@gmail.com?subject=Заявка&body=${mailtoBody}`;
        })
        .finally(() => {
          // 4. Скрыть сообщение через 5 секунд
          setTimeout(() => {
            successMessage.style.display = 'none';
            checkFormValidity(); // Перепроверить состояние формы
          }, 5000);
        });
      });
      
      // Инициализация проверки
      checkFormValidity();
    }
  }
}
</script>

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
