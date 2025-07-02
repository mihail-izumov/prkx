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
    const inputs = form.querySelectorAll('input[required]');
    const checkbox = document.getElementById('consent');

    // Проверка валидности всей формы
    function checkFormValidity() {
      let isFormValid = true;
      
      inputs.forEach(input => {
        if (input.type === 'checkbox') {
          if (!input.checked) isFormValid = false;
        } else {
          if (!input.value.trim()) isFormValid = false;
        }
      });
      
      submitBtn.disabled = !isFormValid;
    }

    // Проверка при каждом изменении
    inputs.forEach(input => {
      input.addEventListener('input', checkFormValidity);
    });
    
    checkbox.addEventListener('change', checkFormValidity);

    // Инициализация проверки при загрузке
    checkFormValidity();

    if (form && successMessage) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Сбор данных формы
        const formData = {
          name: form.querySelector('#name').value,
          phone: form.querySelector('#phone').value,
          email: form.querySelector('#email').value,
          consent: checkbox.checked
        };
        
        // Отправка данных через FormSubmit
        fetch('https://formsubmit.co/ajax/theorchestramanco@gmail.com', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
        })
        .then(data => {
          successMessage.style.display = 'block';
          form.reset();
          submitBtn.disabled = true;
          
          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 5000);
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте ещё раз.');
        });
      });
    }
  });
}
</script>

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
