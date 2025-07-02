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

<div id="successMessage" class="success-message">
  ✓ Заявка успешно отправлена. Скоро свяжемся.
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
  gap: 8px;
  align-items: center;
}

.success-message::before {
  content: "✓";
  color: #4CAF50;
  font-size: 18px;
}
</style>

<script>
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    // Получаем элементы формы
    const form = document.getElementById('myForm');
    const successMessage = document.getElementById('successMessage');
    const submitBtn = form.querySelector('.submit-btn');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const consentCheckbox = document.getElementById('consent');
    
    // Функция проверки валидности формы
    const checkFormValidity = () => {
      // Проверяем заполнение всех обязательных полей
      const isNameValid = nameInput.value.trim() !== '';
      const isPhoneValid = phoneInput.value.trim() !== '';
      const isEmailValid = emailInput.value.trim() !== '';
      const isConsentValid = consentCheckbox.checked;
      
      // Активируем кнопку только если все условия выполнены
      submitBtn.disabled = !(isNameValid && isPhoneValid && isEmailValid && isConsentValid);
    };
    
    // Назначаем обработчики событий
    nameInput.addEventListener('input', checkFormValidity);
    phoneInput.addEventListener('input', checkFormValidity);
    emailInput.addEventListener('input', checkFormValidity);
    consentCheckbox.addEventListener('change', checkFormValidity);
    
    // Обработка отправки формы
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Показываем сообщение об успехе
      successMessage.style.display = 'flex';
      
      // Собираем данные формы
      const formData = {
        name: nameInput.value,
        phone: phoneInput.value,
        email: emailInput.value,
        consent: consentCheckbox.checked ? 'Да' : 'Нет'
      };
      
      // Отправка данных через FormSubmit
      fetch('https://formsubmit.co/ajax/baf883ec9b4c490d575eb60b7a4266d4', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .catch(() => {
        // Резервная отправка через mailto
        const body = `Имя: ${formData.name}\nТелефон: ${formData.phone}\nEmail: ${formData.email}`;
        window.location.href = `mailto:theorchestramanco@gmail.com?subject=Заявка&body=${encodeURIComponent(body)}`;
      })
      .finally(() => {
        // Сбрасываем форму и блокируем кнопку
        form.reset();
        submitBtn.disabled = true;
        
        // Скрываем сообщение через 5 секунд
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 5000);
      });
    });
    
    // Инициализируем проверку при загрузке
    checkFormValidity();
  });
}
</script>

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
