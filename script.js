const toggle = document.getElementById('themeToggle');

function applyMode(mode) {
  if (mode === 'dark') {
    document.documentElement.classList.add('dark-mode');
    toggle.setAttribute('aria-pressed', 'true');
  } else {
    document.documentElement.classList.remove('dark-mode');
    toggle.setAttribute('aria-pressed', 'false');
  }
}

function toggleMode() {
  const isDark = document.documentElement.classList.contains('dark-mode');
  const newMode = isDark ? 'light' : 'dark';
  localStorage.setItem('mode', newMode);
  applyMode(newMode);
}

toggle.addEventListener('click', toggleMode);

// Sync system preference if no saved choice
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (!localStorage.getItem('mode')) {
    applyMode(e.matches ? 'dark' : 'light');
  }
});
