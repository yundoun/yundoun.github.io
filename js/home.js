// home.js 파일 수정사항
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

  // 헤더 관련 변수 선언
  const header = document.querySelector('.header');
  const mobileMenuBtn = document.querySelector('.mobile-menu-button');
  const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

  // 헤더 스크롤 상태 관리 함수
  function updateHeaderState() {
    if (!header.classList.contains('menu-open')) {
      if (window.scrollY > 10) {
        header.classList.remove('header-transparent');
        header.classList.add('header-visible');
      } else {
        header.classList.add('header-transparent');
        header.classList.remove('header-visible');
      }
    }
  }

  // 초기 헤더 상태 설정
  header.classList.add('header-transparent');

  // 스크롤 이벤트
  window.addEventListener('scroll', updateHeaderState);

  function openMobileMenu() {
    // 우선 transition을 제거
    header.style.transition = 'none';

    // 즉시 투명 상태로 변경
    header.classList.remove('header-visible');
    header.classList.add('header-transparent');
    header.classList.add('menu-open');

    // 다음 프레임에서 오버레이 표시
    requestAnimationFrame(() => {
      mobileMenu.classList.add('active');
      mobileMenuOverlay.classList.add('active');

      // transition 복구
      requestAnimationFrame(() => {
        header.style.transition = '';
      });
    });

    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');

    // transition이 완료된 후 헤더 상태 업데이트
    const transitionDuration = parseFloat(getComputedStyle(mobileMenuOverlay).transitionDuration) * 1000;

    setTimeout(() => {
      header.classList.remove('menu-open');
      updateHeaderState();
    }, transitionDuration);

    document.body.style.overflow = '';
  }

  // 이벤트 리스너 등록
  mobileMenuBtn.addEventListener('click', openMobileMenu);
  mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
  mobileMenuOverlay.addEventListener('click', closeMobileMenu);

  // ESC 키로 메뉴 닫기
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMobileMenu();
    }
  });

  // 모바일 메뉴 내부 링크 클릭 시 메뉴 닫기
  const mobileMenuLinks = document.querySelectorAll('.mobile-nav-menu a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // 리사이즈 이벤트 처리
  let timeoutId;
  window.addEventListener('resize', function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      if (window.innerWidth > 768) {
        closeMobileMenu();
      }
    }, 250);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2초
        const steps = 20;
        const increment = target / steps;
        let current = 0;

        const updateCounter = () => {
          current += increment;
          if (current < target) {
            counter.textContent = Math.ceil(current);
            setTimeout(updateCounter, duration / steps);
          } else {
            counter.textContent = target;
          }
        };

        updateCounter();
        observer.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));
});

