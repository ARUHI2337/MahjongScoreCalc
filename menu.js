// 메뉴바 링크에 마우스 커서가 올라갔을 때 액티브 효과 적용
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    link.classList.add('active');
  });
});

// 링크 밖으로 커서가 벗어나면 원래 위치했던 "등록" 링크에 액티브 효과 적용
const registerLink = document.querySelector('nav a.active');
document.addEventListener('mouseout', event => {
  const toElement = event.relatedTarget;
  if (toElement && !toElement.closest('nav')) {
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    registerLink.classList.add('active');
  }
});