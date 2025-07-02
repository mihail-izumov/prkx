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
    <input type="tel" id="phone" name="phone" class="form-input" required placeholder="+7 (XXX) XXX-XX-XX">
  </div>
  
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" class="form-input" required>
  </div>
  
  <div class="form-group checkbox-group">
    <input type="checkbox" id="consent" name="consent" required checked>
    <label for="consent">Я согласен(а) на обработку персональных данных</label>
  </div>
  
  <button type="submit" class="submit-btn" disabled>
    Отправить
  </button>
</form>

<div id="successMessage" class="success-message" style="display: none;">
  ✓ Заявка успешно отправлена. Скоро свяжемся.
</div>

<style>
.custom-form {
  max-width: 500px;
  margin: 0 auto;
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
  color: #ffffff;
  font-size: 16px;
  box-sizing: border-box;
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 20px 0;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background: white;
  color: black;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
  display: none;
  margin-top: 15px;
  color: white;
  font-weight: normal;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.success-message::before {
  content: "✓";
  color: #4CAF50;
  font-size: 18px;
}
</style>

<script>
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    if (!form) return;

    const successMessage = document.getElementById('successMessage');
    const submitBtn = form.querySelector('.submit-btn');
    const requiredInputs = form.querySelectorAll('input[required]');
    const checkbox = document.getElementById('consent');

    // Проверка валидности формы
    function checkFormValidity() {
      let allValid = true;
      
      requiredInputs.forEach(input => {
        if (!input.value.trim()) allValid = false;
      });
      
      if (!checkbox.checked) allValid = false;
      
      submitBtn.disabled = !allValid;
    }

    // Назначаем обработчики событий
    requiredInputs.forEach(input => {
      input.addEventListener('input', checkFormValidity);
    });
    
    checkbox.addEventListener('change', checkFormValidity);

    // Обработка отправки формы
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Показываем сообщение только после валидации
      if (submitBtn.disabled) return;
      
      // Скрываем форму
      form.style.display = 'none';
      
      // Показываем сообщение
      successMessage.style.display = 'flex';
      
      // Собираем данные
      const formData = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        consent: checkbox.checked ? 'Да' : 'Нет'
      };

      // Отправка данных
      fetch('https://formsubmit.co/ajax/baf883ec9b4c490d575eb60b7a4266d4', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .catch(error => {
        console.error('Ошибка отправки:', error);
      })
      .finally(() => {
        // Через 5 секунд сбрасываем форму
        setTimeout(() => {
          form.reset();
          form.style.display = 'block';
          successMessage.style.display = 'none';
          submitBtn.disabled = true;
        }, 5000);
      });
    });

    // Инициализация проверки
    checkFormValidity();
  });
}
</script>

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
