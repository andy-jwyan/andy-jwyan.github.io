---
title: "Glimpses"
permalink: /glimpses/
layout: single
author_profile: false
right_sidebar: false
classes: wide
---

<div class="glimpses-grid" id="glimpses-grid">
  {% assign glimpse_images = site.static_files | where_exp: "f", "f.path contains '/images/glimpses/'" %}
  {% for image in glimpse_images %}
    {% if image.extname == '.jpg' or image.extname == '.jpeg' or image.extname == '.png' or image.extname == '.webp' %}
      <div class="glimpse-item">
        <img src="{{ image.path | relative_url }}" alt="" loading="lazy" class="glimpse-thumb">
      </div>
    {% endif %}
  {% endfor %}
</div>

<p class="glimpse-closing">The world, as I see it.</p>

<div class="glimpse-lightbox" id="glimpse-lightbox">
  <span class="glimpse-lightbox__close" id="glimpse-lightbox-close">&times;</span>
  <img src="" alt="" id="glimpse-lightbox-img">
</div>

<link rel="stylesheet" href="{{ '/assets/css/glimpses.css' | relative_url }}">
<script src="{{ '/assets/js/glimpses.js' | relative_url }}"></script>
