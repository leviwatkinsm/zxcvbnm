document.addEventListener('DOMContentLoaded', () => {
  const search = document.querySelector('[data-article-search]');
  const list = document.querySelector('[data-article-list]');
  const clear = document.querySelector('[data-clear-search]');
  const status = document.querySelector('[data-search-status]');
  const empty = document.querySelector('[data-empty-state]');
  if (!search || !list || !clear || !status || !empty) return;

  const items = Array.from(list.querySelectorAll('li'));
  const update = () => {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    for (const item of items) {
      const matches = item.textContent.toLocaleLowerCase().includes(query);
      item.hidden = !matches;
      if (matches) visible += 1;
    }
    clear.hidden = query.length === 0;
    empty.hidden = visible !== 0;
    status.textContent = query ? `找到 ${visible} 篇相关文章` : `共 ${items.length} 篇文章`;
  };

  search.addEventListener('input', update);
  clear.addEventListener('click', () => {
    search.value = '';
    update();
    search.focus();
  });
  update();
});
