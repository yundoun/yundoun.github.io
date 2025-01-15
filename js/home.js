// 스크롤 애니메이션
document.addEventListener('DOMContentLoaded', function () {
  const observerOptions = {
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  const serviceItems = document.querySelectorAll('.service-item');
  serviceItems.forEach(item => observer.observe(item));
});

// 헤더 애니메이션
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');

  // 초기 상태 설정
  header.classList.add('header-transparent');

  // 스크롤 이벤트 리스너
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {  // 스크롤이 10px 이상이면
      header.classList.remove('header-transparent');
      header.classList.add('header-visible');
    } else {  // 스크롤이 10px 미만이면
      header.classList.add('header-transparent');
      header.classList.remove('header-visible');
    }
  });
});