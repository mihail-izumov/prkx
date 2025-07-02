# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

123

## Custom Containers

<form id="myForm" class="custom-form">
  <!-- Поля формы -->
  <div class="form-group">
    <label for="name">Имя:</label>
    <input type="text" id="name" name="name" class="form-input" required>
  </div>
  
  <div class="form-group">
    <label for="phone">Телефон:</label>
    <input type="tel" id="phone" name="phone" class="form-input" required placeholder="+79123456789">
  </div>
  
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" class="form-input" required>
  </div>
  
  <div class="form-group checkbox-group">
    <input type="checkbox" id="consent" name="consent" required checked>
    <label for="consent">Согласен на обработку персональных данных</label>
  </div>
  
  <button type="submit" class="submit-btn">
    Отправить заявку
  </button>
</form>

<div id="successMessage" class="success-message" style="display:none;">
  ✅ Заявка успешно отправлена! Скоро с вами свяжемся.
</div>

<style>
/* Стили остаются без изменений */
.custom-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 25px;
  background-color: #111;
  border-radius: 8px;
  color: white;
}
/* ... остальные стили ... */
</style>

<script>
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(e) {
      // 1. Предотвращаем перезагрузку страницы
      e.preventDefault();
      
      // 2. Собираем данные формы
      const formData = {
        name: this.name.value,
        phone: this.phone.value,
        email: this.email.value,
        consent: this.consent.checked
      };
      
      // 3. Отправка данных (вариант через FormSubmit)
      fetch('https://formsubmit.co/ajax/theorchestramanco@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        // 4. Показываем сообщение об успехе
        successMessage.style.display = 'block';
        form.style.display = 'none'; // Скрываем форму
        
        // 5. Не сбрасываем форму сразу (чтобы видно было сообщение)
        setTimeout(() => {
          form.reset();
          form.style.display = 'block';
          successMessage.style.display = 'none';
        }, 5000);
      })
      .catch(error => {
        console.error('Error:', error);
        // 6. Альтернативная отправка через mailto
        const mailtoLink = `mailto:theorchestramanco@gmail.com?subject=Заявка&body=Имя: ${encodeURIComponent(formData.name)}%0AТелефон: ${encodeURIComponent(formData.phone)}%0AEmail: ${encodeURIComponent(formData.email)}`;
        window.location.href = mailtoLink;
        
        successMessage.style.display = 'block';
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 5000);
      });
    });
  });
}
</script>

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
