document.addEventListener('DOMContentLoaded', function() {
    const notifBtn = document.querySelector('.btn-notif');
    const notifPopup = document.querySelector('.notif-popup');
  
    notifBtn.addEventListener('click', function() {
      if (notifPopup.style.display === 'block') {
        notifPopup.style.display = 'none';
      } else {
        notifPopup.style.display = 'block';
        const rect = notifBtn.getBoundingClientRect();
        notifPopup.style.top = rect.bottom + 'px';
        notifPopup.style.left = rect.left + 'px';
      }
    });
  
    document.addEventListener('click', function(event) {
      if (!notifBtn.contains(event.target) && !notifPopup.contains(event.target)) {
        notifPopup.style.display = 'none';
      }
    });
  });
  