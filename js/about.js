document.addEventListener('DOMContentLoaded', function () {
  // 스크롤 애니메이션 옵션
  const observerOptions = {
    threshold: 0.2
  };

  // Intersection Observer 초기화
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // 서비스 아이템과 타임라인 아이템에 Observer 적용
  const serviceItems = document.querySelectorAll('.service-item');
  const timelineItems = document.querySelectorAll('.timeline-item');
  [...serviceItems, ...timelineItems].forEach(item => observer.observe(item));

  // 초기 타임라인 아이템 가시성 체크
  const checkInitialVisibility = () => {
    timelineItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        item.classList.add('visible');
      }
    });
  };
  checkInitialVisibility();

  // 헤더 투명도 및 가시성 제어
  const header = document.querySelector('.header');
  header.classList.add('header-transparent');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      header.classList.remove('header-transparent');
      header.classList.add('header-visible');
    } else {
      header.classList.add('header-transparent');
      header.classList.remove('header-visible');
    }
  });

  // 모바일 메뉴 관련 요소
  const mobileMenuBtn = document.querySelector('.mobile-menu-button');
  const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileMenuLinks = document.querySelectorAll('.mobile-nav-menu a');

  // 모바일 메뉴 열기/닫기 함수
  const openMobileMenu = () => {
    mobileMenu.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    header.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    header.classList.remove('menu-open');
    document.body.style.overflow = '';
  };

  // 모바일 메뉴 이벤트 리스너 등록
  mobileMenuBtn.addEventListener('click', openMobileMenu);
  mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
  mobileMenuOverlay.addEventListener('click', closeMobileMenu);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMobileMenu();
  });
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // 리사이즈 이벤트 처리
  let resizeTimeout;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (window.innerWidth > 768) closeMobileMenu();
    }, 250);
  });
});
