const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
    mainNav.querySelectorAll('a').forEach(item => item.classList.remove('active'));
    link.classList.add('active');
  });
});

const scentButtons = document.querySelectorAll('.scent');
const selectedScent = document.querySelector('#selectedScent');
const orderScent = document.querySelector('#orderScent');

scentButtons.forEach(button => {
  button.addEventListener('click', () => {
    scentButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    selectedScent.textContent = button.dataset.scent;
    orderScent.value = button.dataset.scent;
  });
});

document.querySelector('#orderForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const order = {
    name: data.get('name'),
    phone: data.get('phone'),
    product: data.get('product'),
    scent: data.get('scent'),
    quantity: data.get('quantity'),
    address: data.get('address'),
    note: data.get('note')
  };
  const message = document.querySelector('#formMessage');
  message.textContent = `Cảm ơn ${order.name}! Thông tin đơn hàng đã được ghi nhận trên trang demo. Để nhận đơn thật, cần kết nối form với email hoặc máy chủ.`;
  message.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
