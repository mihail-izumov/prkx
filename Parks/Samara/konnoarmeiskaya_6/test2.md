---
title: Галерея
---

# Моя трёхколоночная галерея

<div class="gallery-grid">
  ![Фото 1](./public/parks/smr/knrmsk6a/26-07-2025/prkx-smr-26-07-2025_9874.jpeg){data-zoomable}
  ![Фото 2](./public/parks/smr/knrmsk6a/26-07-2025/prkx-smr-26-07-2025_9874.jpeg){data-zoomable}
  ![Фото 3](./public/parks/smr/knrmsk6a/26-07-2025/prkx-smr-26-07-2025_9874.jpeg){data-zoomable}
  ![Фото 4](./public/parks/smr/knrmsk6a/26-07-2025/prkx-smr-26-07-2025_9874.jpeg){data-zoomable}
  ![Фото 5](./public/parks/smr/knrmsk6a/26-07-2025/prkx-smr-26-07-2025_9874.jpeg){data-zoomable}
  ![Фото 6](./public/parks/smr/knrmsk6a/26-07-2025/prkx-smr-26-07-2025_9874.jpeg){data-zoomable}
</div>

<script setup>
import { onMounted } from 'vue'
import mediumZoom from 'medium-zoom'

onMounted(() => {
  mediumZoom('[data-zoomable]', {
    background: 'var(--vp-c-bg)',
    margin: 24
  })
})
</script>

<style>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.gallery-grid img {
  width: 100%;
  height: auto;
  cursor: zoom-in;
}

.medium-zoom-overlay {
  backdrop-filter: blur(5rem);
  z-index: 30;
}

.medium-zoom-image--opened {
  z-index: 31;
}
</style>
