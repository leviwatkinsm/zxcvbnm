---
layout: default
title: 全部文章
---

## 全部文章
{: #all-articles }

这里汇总本站已经发布的全部文章，点击标题即可阅读。

<ul class="article-list">
{% assign article_pages = site.pages | sort: 'path' | reverse %}
{% for article in article_pages %}
  {% assign article_path = article.path | remove_first: '/' %}
  {% assign path_parts = article_path | split: '/' %}
  {% assign article_name = path_parts | last %}
  {% assign extension = article_name | slice: -3, 3 %}
  {% assign prefix = article_name | slice: 0, 9 %}
  {% if path_parts.size == 1 and extension == '.md' and article_name != 'README.md' and prefix != 'category-' %}
  <li><a href="{{ article.url | relative_url }}">{{ article_name | remove: '.md' | escape }}</a></li>
  {% endif %}
{% endfor %}
</ul>
