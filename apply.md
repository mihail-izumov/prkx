# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

<script src="https://forms.yandex.ru/_static/embed.js"></script><iframe src="https://forms.yandex.ru/u/6864f06b84227c484c9d0ca7?iframe=1" frameborder="0" name="ya-form-6864f06b84227c484c9d0ca7" width="650"></iframe>

## Custom Containers

<form class="custom-form">
  <div class="form-group">
    <label for="field1">Поле 1:</label>
    <input type="text" id="field1" name="field1" class="form-input">
  </div>
  
  <div class="form-group">
    <label for="field2">Поле 2:</label>
    <input type="text" id="field2" name="field2" class="form-input">
  </div>
  
  <button type="submit" class="submit-btn">
    Отправить
  </button>
</form>

<style>
.custom-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

.form-input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.submit-btn {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #45a049;
}
</style>

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
