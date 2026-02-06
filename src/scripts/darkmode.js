document.addEventListener('DOMContentLoaded', () => {
  const darkmodeButton = document.getElementById('darkmode-button');
  if (!darkmodeButton) return;

  function setTheme(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  darkmodeButton.addEventListener('click', () => {
    const isDark = !document.documentElement.classList.contains('dark');
    setTheme(isDark);
  });
});
