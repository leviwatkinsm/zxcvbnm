---
layout: default
title: 首页
description: 浏览专题文章与资料，查找已发布的全部内容。
---

<section class="home-section" id="categories" aria-labelledby="category-title">
  <div class="section-heading">
    <div>
      <span class="eyebrow">分类导航</span>
      <h2 id="category-title">按主题开始阅读</h2>
    </div>
    <p>从主题入口进入目录，再按标题快速查找。</p>
  </div>
  <a class="category-card" href="{{ '/articles/' | relative_url }}#all-articles">
    <span class="category-icon" aria-hidden="true">01</span>
    <span class="category-copy"><strong>加拿大 PC28 相关文章</strong><small>浏览此主题下的全部文章与资料</small></span>
    <span class="category-arrow" aria-hidden="true">→</span>
  </a>
</section>

<section class="home-section" aria-labelledby="preview-title">
  <div class="section-heading">
    <div>
      <span class="eyebrow">文章速览</span>
      <h2 id="preview-title">先看看这些内容</h2>
    </div>
    <a class="text-link" href="{{ '/articles/' | relative_url }}#all-articles">查看全部文章 →</a>
  </div>
  <ul class="article-grid preview-grid">
  {% assign article_pages = site.pages | sort: 'path' | reverse %}
  {% assign shown = 0 %}
  {% for article in article_pages %}
    {% assign path_parts = article.path | split: '/' %}
    {% assign article_name = path_parts | last %}
    {% assign extension = article_name | slice: -3, 3 %}
    {% assign prefix = article_name | slice: 0, 9 %}
    {% if path_parts.size == 1 and extension == '.md' and article_name != 'README.md' and article_name != 'index.md' and prefix != 'category-' %}
      {% if shown < 6 %}
      <li><a href="{{ article.url | relative_url }}"><span>{{ article_name | remove: '.md' | escape }}</span><span class="article-arrow" aria-hidden="true">↗</span></a></li>
      {% assign shown = shown | plus: 1 %}
      {% endif %}
    {% endif %}
  {% endfor %}
  </ul>
</section>
