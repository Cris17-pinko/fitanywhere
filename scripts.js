// Basic interactivity & placeholders for product checkout / form handling.
// Replace endpoints with your backend or third-party integration (Stripe/PayPal).

// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('year')?.textContent = new Date().getFullYear();
//   document.getElementById('year2')?.textContent = new Date().getFullYear();
//   document.getElementById('year3')?.textContent = new Date().getFullYear();
//   document.getElementById('year4')?.textContent = new Date().getFullYear();
//   document.getElementById('year5')?.textContent = new Date().getFullYear();
//   document.getElementById('year6')?.textContent = new Date().getFullYear();
// });

function toggleMobileNav(){
  const nav = document.querySelector('.main-nav');
  if(!nav) return;
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

// Lead magnet modal
function openLeadModal(){
  const m = document.getElementById('leadModal');
  if(!m) return;
  m.setAttribute('aria-hidden', 'false');
}
function closeLeadModal(){
  const m = document.getElementById('leadModal');
  if(!m) return;
  m.setAttribute('aria-hidden', 'true');
}

// Subscribe (simple demo) -- replace with API call to email provider
function subscribeLead(){
  const email = document.getElementById('lead-email')?.value || '';
  if(!email || !email.includes('@')){ alert('Please enter a valid email'); return; }
  // TODO: call your email marketing/api here
  alert('Thanks! Check your inbox for the 7-Day plan (demo).');
  document.getElementById('lead-email').value = '';
}

// modal subscribe
function subscribeFromModal(){
  const email = document.getElementById('modal-email')?.value || '';
  if(!email || !email.includes('@')){ alert('Please enter a valid email'); return; }
  alert('Thanks! PDF will be sent (demo).');
  closeLeadModal();
}

// mock download PDF
function downloadPDF(name){
  alert('If this were hooked to a server, you\'d download: ' + name);
}

// mock checkout function (replace with Stripe checkout)
function openCheckout(productId){
  // productId like 'gym-4wk' or 'home-4wk'
  // Replace with real integration
  alert('Open checkout for ' + productId + ' (demo).');
}

// contact form (demo) — replace with fetch to your backend
// function submitContact(e){
//   e.preventDefault();
//   const name = document.getElementById('name').value.trim();
//   const email = document.getElementById('email').value.trim();
//   const message = document.getElementById('message').value.trim();
//   if(!name || !email || !message){ alert('Please fill all fields'); return; }

//   // Example: send to your backend
//   // fetch('/api/contact', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({name,email,message})})
//   //   .then(r => r.json()).then(()=> alert('Message sent!'));

//   alert('Thanks, ' + name + '! Your message has been received (demo).');
//   document.getElementById('contactForm').reset();
// }

function submitContact(e) {
  e.preventDefault();

  const form = document.getElementById('contactForm');
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill all fields.');
    return;
  }

  fetch("https://formspree.io/f/xanrdkla", {
    method: "POST",
    body: new FormData(form)
  })
  .then(response => {
    if (response.ok) {
      alert("Your message has been sent!");
      form.reset();
    } else {
      alert("Error sending message.");
    }
  })
  .catch(() => alert("Network error."));
}