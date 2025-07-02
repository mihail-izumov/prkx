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
      const form = document.getElementById('myForm');
      if (!form) return;
      
      const successMessage = document.getElementById('successMessage');
      const submitBtn = form.querySelector('.submit-btn');
      const requiredInputs = form.querySelectorAll('input[required]');
      const checkbox = form.querySelector('input[type="checkbox"]');
      
      // Функция проверки валидности формы
      const checkFormValidity = () => {
        let allValid = true;
        
        requiredInputs.forEach(input => {
          if (!input.value.trim()) allValid = false;
        });
        
        if (checkbox && !checkbox.checked) allValid = false;
        
        submitBtn.disabled = !allValid;
      };
      
      // Проверяем форму при каждом изменении
      requiredInputs.forEach(input => {
        input.addEventListener('input', checkFormValidity);
      });
      
      if (checkbox) {
        checkbox.addEventListener('change', checkFormValidity);
      }
      
      // Обработка отправки формы
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Собираем данные формы
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Показываем сообщение сразу
        successMessage.style.display = 'block';
        form.reset();
        submitBtn.disabled = true;
        
        // Отправка на email через FormSubmit.co
        fetch('https://formsubmit.co/ajax/theorchestramanco@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => {
          if (!response.ok) throw new Error('Network error');
          return response.json();
        })
        .catch(error => {
          console.error('Error:', error);
          // Резервная отправка через mailto
          const mailtoBody = `Имя: ${data.name}%0AТелефон: ${data.phone}%0AEmail: ${data.email}%0AСогласие: ${data.consent ? 'Да' : 'Нет'}`;
          window.location.href = `mailto:theorchestramanco@gmail.com?subject=Заявка&body=${mailtoBody}`;
        })
        .finally(() => {
          // Скрываем сообщение через 5 секунд
          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 5000);
        });
      });
      
      // Инициализируем проверку
      checkFormValidity();
    }
  }
}
</script>

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
