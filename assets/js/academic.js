(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const syncTheme = () => {
    const dark = root.dataset.theme === 'dark';
    toggle?.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  };
  if (toggle) {
    toggle.hidden = false;
    syncTheme();
    toggle.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('mengqi-theme', root.dataset.theme); } catch (_) {}
      syncTheme();
    });
  }
  const filters = document.querySelector('.paper-filters');
  if (filters) {
    filters.hidden = false;
    filters.addEventListener('click', event => {
      const button = event.target.closest('button[data-filter]');
      if (!button) return;
      const topic = button.dataset.filter;
      filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      let count = 0;
      document.querySelectorAll('.paper[data-topic]').forEach(paper => {
        paper.hidden = topic !== 'all' && paper.dataset.topic !== topic;
        if (!paper.hidden) count++;
      });
      document.querySelector('#paper-count').textContent = `${count} publication${count === 1 ? '' : 's'}`;
    });
  }
  document.querySelectorAll('.tldr-toggle').forEach(button => {
    const summary = document.getElementById(button.getAttribute('aria-controls'));
    if (!summary) return;
    summary.hidden = true;
    button.hidden = false;
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(expanded));
      summary.hidden = !expanded;
    });
  });
  const dialog = document.querySelector('.demo-dialog');
  const video = dialog?.querySelector('video');
  let trigger;
  if (dialog && typeof dialog.showModal === 'function') {
    document.querySelectorAll('.demo-trigger').forEach(button => {
      button.hidden = false;
      button.addEventListener('click', () => {
        trigger = button;
        video.src = button.dataset.video;
        dialog.showModal();
        video.play().catch(() => {});
      });
    });
    dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      if (event.target === dialog) {
        const r = dialog.getBoundingClientRect();
        if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
      }
    });
    dialog.addEventListener('close', () => {
      video.pause();
      video.removeAttribute('src');
      video.load();
      trigger?.focus();
    });
  }
})();
