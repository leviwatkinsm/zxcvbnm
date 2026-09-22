---
layout: default
title: 全部文章
description: 浏览与搜索本站已发布的全部文章。
---

<section class="directory" aria-labelledby="all-articles">
  <div class="section-heading">
    <div>
      <span class="eyebrow">文章目录</span>
      <h2 id="all-articles">浏览全部文章</h2>
    </div>
    <p>点击标题即可在本站阅读。</p>
  </div>

  <div class="directory-tools">
    <label for="article-search">搜索文章标题</label>
    <div class="search-field">
      <input id="article-search" type="search" placeholder="输入关键词查找文章" autocomplete="off" data-article-search>
      <button type="button" class="clear-button" data-clear-search hidden>清除</button>
    </div>
    <p class="search-status" data-search-status role="status" aria-live="polite">文章目录会随发布自动更新。</p>
  </div>

  <ul class="article-grid" data-article-list>
  {% assign article_pages = site.pages | sort: 'path' | reverse %}
  {% for article in article_pages %}
    {% assign path_parts = article.path | split: '/' %}
    {% assign article_name = path_parts | last %}
    {% assign extension = article_name | slice: -3, 3 %}
    {% assign prefix = article_name | slice: 0, 9 %}
    {% if path_parts.size == 1 and extension == '.md' and article_name != 'README.md' and article_name != 'index.md' and prefix != 'category-' %}
    <li><a href="{{ article.url | relative_url }}"><span>{{ article_name | remove: '.md' | escape }}</span><span class="article-arrow" aria-hidden="true">↗</span></a></li>
    {% endif %}
  {% endfor %}
  </ul>
  <p class="empty-state" data-empty-state hidden>没有找到匹配的文章，请换个关键词试试。</p>
</section>
