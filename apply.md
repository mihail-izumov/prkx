# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

123

## Custom Containers

<script>
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const successMessage = document.getElementById('successMessage');
    const submitBtn = form.querySelector('.submit-btn');
    
    // Все обязательные поля
    const requiredFields = [
      { id: 'name', validate: (v) => v.trim().length >= 2 },
      { id: 'phone', validate: (v) => /^(\+7|8)\d{10}$/.test(v) },
      { id: 'email', validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
      { id: 'consent', validate: (checked) => checked }
    ];

    // Проверка всей формы
    function checkFormValidity() {
      const isFormValid = requiredFields.every(field => {
        const element = document.getElementById(field.id);
        const value = element.type === 'checkbox' ? element.checked : element.value;
        return field.validate(value);
      });
      
      submitBtn.disabled = !isFormValid;
      console.log('Form valid:', isFormValid); // Для отладки
    }

    // Проверка при изменении
    requiredFields.forEach(field => {
      const element = document.getElementById(field.id);
      element.addEventListener(field.id === 'consent' ? 'change' : 'input', checkFormValidity);
    });

    // Обработчик телефона
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
      this.value = this.value.replace(/[^0-9+]/g, '');
      if (this.value.startsWith('9') && this.value.length === 10) {
        this.value = '+7' + this.value;
      }
      checkFormValidity();
    });

    // Отправка формы
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Здесь можно добавить реальную отправку
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
