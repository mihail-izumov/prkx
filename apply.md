# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

123

## Custom Containers

<form id="myForm" class="custom-form">
  <div class="form-group">
    <label for="field1">Имя:</label>
    <input type="text" id="field1" name="name" class="form-input" required>
  </div>
  
  <div class="form-group">
    <label for="field2">Телефон или Email:</label>
    <input type="text" id="field2" name="contact" class="form-input" required>
  </div>
  
  <div class="form-group checkbox-group">
    <input type="checkbox" id="consent" name="consent" required>
    <label for="consent">Я согласен(а) на обработку персональных данных</label>
  </div>
  
  <button type="submit" class="submit-btn">
    Отправить
  </button>
</form>

<div id="successMessage" class="success-message" style="display: none;">
  ✅ Заявка успешно отправлена!
</div>

<style>
.custom-form {
  max-width: 500px;
  margin: 0;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

.form-input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.checkbox-group input {
  width: auto;
}

.submit-btn {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
}

.submit-btn:hover {
  background-color: #45a049;
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
// Проверяем, что код выполняется в браузере (а не при SSR)
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const successMessage = document.getElementById('successMessage');

    if (form && successMessage) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Здесь можно добавить fetch-запрос на сервер
        // Пример: fetch('/api/submit', { method: 'POST', body: new FormData(form) })
        
        successMessage.style.display = 'block';
        form.reset();
        
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 5000);
      });
    }
  });
}
</script>

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
