---
layout: page
title: ALICE 26 - Gallery
---

Photos from the ALICE Workshop 2026 in Copenhagen.

<style>
.gallery{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:8px;margin-top:1.5rem}
.gallery a{display:block;overflow:hidden;border-radius:4px;width:100%;height:0;padding-bottom:100%;position:relative;background:#f0f0f0}
.gallery img,.gallery hy-img{position:absolute!important;top:0;left:0;width:100%!important;height:100%!important;object-fit:cover!important;transition:transform .3s ease}
.gallery a:hover img{transform:scale(1.05)}
</style>

<div class="gallery">
{% for file in site.static_files %}
  {% if file.path contains '/images/alice26/' %}
    {% assign ext = file.extname | downcase %}
    {% if ext == '.jpg' or ext == '.jpeg' or ext == '.png' or ext == '.gif' %}
<a href="{{ file.path }}" target="_blank"><img src="{{ file.path }}" loading="lazy"></a>
    {% endif %}
  {% endif %}
{% endfor %}
</div>

<script>
function randomizeGallery() {
  const gallery = document.querySelector('.gallery');
  if (gallery) {
    const items = Array.from(gallery.children);
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    gallery.innerHTML = '';
    items.forEach(item => gallery.appendChild(item));
  }
}
document.addEventListener('DOMContentLoaded', randomizeGallery);
const pushStateEl = document.querySelector('hy-push-state');
if (pushStateEl) pushStateEl.addEventListener('hy-push-state-after', randomizeGallery);
</script>
