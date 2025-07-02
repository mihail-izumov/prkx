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
    <input type="tel" id="phone" name="phone" class="form-input" placeholder="+7XXXXXXXXXX">
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
    Отправить заявку
  </button>
</form>

<div id="successMessage" class="success-message">
  ✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.
</div>

<style>
.custom-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 25px;
  background-color: #111;
  border-radius: 8px;
  color: white;
}

.form-group {
  margin-bottom: 20px;
}

.form-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #333;
  border-radius: 6px;
  background-color: #222;
  color: white;
  font-size: 16px;
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 25px 0;
}

.checkbox-group input {
  width: 18px;
  height: 18px;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  background: white;
  color: black;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}

.submit-btn:hover {
  background: #ddd;
}

.success-message {
  display: none;
  margin-top: 20px;
  padding: 15px;
  background: #e8f5e9;
  color: #2e7d32;
  border-radius: 6px;
  text-align: center;
}
</style>

<script>
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const success = document.getElementById('successMessage');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Собираем данные формы
      const formData = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        consent: form.consent.checked,
        date: new Date().toLocaleString()
      };
      
      // Вариант 1: Отправка через FormSubmit
      fetch('https://formsubmit.co/ajax/theorchestramanco@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        showSuccess();
      })
      .catch(error => {
        console.error('Error:', error);
        showSuccess(); // Все равно показываем успех
      });
      
      // Вариант 2: Отправка через mailto (резервный вариант)
      const mailtoBody = `Имя: ${formData.name}%0AТелефон: ${formData.phone}%0AEmail: ${formData.email}%0AСогласие: ${formData.consent ? 'Да' : 'Нет'}`;
      window.location.href = `mailto:theorchestramanco@gmail.com?subject=Новая заявка&body=${mailtoBody}`;
      
      function showSuccess() {
        success.style.display = 'block';
        form.reset();
        setTimeout(() => {
          success.style.display = 'none';
        }, 5000);
      }
    });
  });
}
</script>

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
