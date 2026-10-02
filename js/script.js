const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
if(menu) menu.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});
document.querySelectorAll('#main-nav a').forEach(a => a.addEventListener('click', () => {
  if (window.innerWidth <= 850) nav.style.display = 'none';
}));
document.getElementById('year').textContent = new Date().getFullYear();

function handleForm(event){
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const msg = document.getElementById('form-message');
  // PLACEHOLDER: troque esta demonstração pela integração com Formspree, Tally, CRM ou seu backend.
  msg.textContent = `Obrigado, ${data.get('nome')}. O formulário está em modo demonstração. Configure o envio antes de publicar.`;
  form.reset();
  return false;
}
function placeholderLink(event){
  event.preventDefault();
  alert('Substitua este link pelo perfil oficial antes de publicar.');
  return false;
}
