function applyUserCss() {
      const userCss = document.getElementById('user-css').value;
      const style = document.createElement('style');
      style.innerHTML = userCss;
      document.head.appendChild(style);
    }