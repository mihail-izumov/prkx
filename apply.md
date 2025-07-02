# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

123

## Custom Containers

<form id="myForm" class="custom-form">
  <!-- Поля формы остаются без изменений -->
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
  <button type="submit" class="submit-btn" disabled>Отправить</button>
</form>

<div id="successMessage" class="success-message" style="display: none;">
  ✅ Заявка успешно отправлена. Скоро свяжемся.
</div>

<script>
export default {
  mounted() {
    this.initForm();
  },
  methods: {
    async initForm() {
      if (typeof document === 'undefined') return;
      
      const form = document.getElementById('myForm');
      if (!form) return;

      // Элементы формы
      const submitBtn = form.querySelector('.submit-btn');
      const successMessage = document.getElementById('successMessage');
      const requiredFields = Array.from(form.querySelectorAll('[required]'));

      // Проверка валидности
      const checkValidity = () => {
        const isValid = requiredFields.every(field => {
          if (field.type === 'checkbox') return field.checked;
          return field.value.trim() !== '';
        });
        submitBtn.disabled = !isValid;
      };

      // Обработчики событий
      requiredFields.forEach(field => {
        field.addEventListener(field.type === 'checkbox' ? 'change' : 'input', checkValidity);
      });

      // Отправка формы
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (submitBtn.disabled) return;

        submitBtn.disabled = true;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
          // 1. Попытка отправки через FormSubmit
          const response = await fetch('https://formsubmit.co/ajax/YOUR_FORMSUBMIT_TOKEN', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            signal: AbortSignal.timeout(5000) // Таймаут 5 секунд
          });

          if (!response.ok) throw new Error('Ошибка сервера');

          // Успешная отправка
          successMessage.style.display = 'block';
          form.reset();
          setTimeout(() => successMessage.style.display = 'none', 5000);

        } catch (error) {
          console.error('Ошибка FormSubmit:', error);
          
          // 2. Резервная отправка через EmailJS
          try {
            await this.sendViaEmailJS(data);
            successMessage.style.display = 'block';
          } catch (emailJSError) {
            console.error('Ошибка EmailJS:', emailJSError);
            
            // 3. Последний вариант - mailto
            const mailtoBody = `Имя: ${data.name}%0AТелефон: ${data.phone}%0AEmail: ${data.email}`;
            window.location.href = `mailto:your_email@example.com?subject=Заявка&body=${mailtoBody}`;
          }
        } finally {
          submitBtn.disabled = false;
          checkValidity();
        }
      });

      // Инициализация
      checkValidity();
    },

    async sendViaEmailJS(data) {
      // Реализация отправки через EmailJS
      // Требуется подключение скрипта EmailJS
      return new Promise((resolve, reject) => {
        if (typeof emailjs === 'undefined') {
          reject('EmailJS не загружен');
          return;
        }
        
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data)
          .then(resolve, reject);
      });
    }
  }
}
</script>

<style>
/* Стили остаются без изменений */
.custom-form { /* ... */ }
.form-group { /* ... */ }
.form-input { /* ... */ }
.checkbox-group { /* ... */ }
.submit-btn { /* ... */ }
.success-message { /* ... */ }
</style>

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
