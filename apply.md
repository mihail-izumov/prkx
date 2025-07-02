# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

123

## Custom Containers

<form id="myForm" class="custom-form">
  <!-- Поля формы остаются без изменений -->
  <!-- ... -->
</form>

<div id="successMessage" class="success-message" style="display: none;">
  Заявка успешно отправлена. Скоро свяжемся.
</div>

<style>
/* Остальные стили остаются без изменений */
/* ... */

.success-message {
  margin-top: 15px;
  color: white;
  font-weight: normal;
  font-size: 16px;
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.success-message::before {
  content: "✓";
  color: white; /* Белая галочка */
  font-size: 18px;
}
</style>

<script>
// Остальной JavaScript код остаётся без изменений
// ...
</script>

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
