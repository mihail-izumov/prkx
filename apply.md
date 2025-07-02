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
/* Стили остаются без изменений */
.custom-form { /* ... */ }
.form-group { /* ... */ }
.form-input { /* ... */ }
.checkbox-group { /* ... */ }
.submit-btn { /* ... */ }
.success-message { /* ... */ }
</style>

<script>
// Функция инициализации формы
function initForm() {
  const form = document.getElementById('myForm');
  if (!form) return;

  const successMessage = document.getElementById('successMessage');
  const submitBtn = form.querySelector('.submit-btn');
  const inputs = Array.from(form.querySelectorAll('input[required]'));
  const checkbox = document.getElementById('consent');

  // Проверка валидности формы
  function checkFormValidity() {
    const allValid = inputs.every(input => input.value.trim() !== '') && checkbox.checked;
    submitBtn.disabled = !allValid;
  }

  // Обработчики событий
  inputs.forEach(input => {
    input.addEventListener('input', checkFormValidity);
  });
  checkbox.addEventListener('change', checkFormValidity);

  // Отправка формы
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Показ сообщения (без setTimeout)
    successMessage.style.display = 'flex';
    
    // Сбор данных
    const formData = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      consent: checkbox.checked ? 'Да' : 'Нет'
    };

    // Отправка через FormSubmit
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
      window.open(`mailto:theorchestramanco@gmail.com?subject=Заявка&body=${encodeURIComponent(body)}`, '_blank');
    })
    .finally(() => {
      form.reset();
      submitBtn.disabled = true;
      // Альтернатива setTimeout
      setTimeout(() => successMessage.style.display = 'none', 5000);
    });
  });

  // Инициализация
  checkFormValidity();
}

// Запуск только в браузере
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initForm);
}
</script>

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
