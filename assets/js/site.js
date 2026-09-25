const menuButton=document.querySelector('.menu-toggle');
const mobileMenu=document.querySelector('#mobile-menu');
function setMenu(open){if(!menuButton||!mobileMenu)return;menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close menu':'Open menu');mobileMenu.hidden=!open;document.body.classList.toggle('menu-open',open)}
menuButton?.addEventListener('click',()=>setMenu(menuButton.getAttribute('aria-expanded')!=='true'));
mobileMenu?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',event=>{if(event.key==='Escape')setMenu(false)});
const header=document.querySelector('[data-header]');
window.addEventListener('scroll',()=>header?.classList.toggle('is-scrolled',window.scrollY>12),{passive:true});
document.querySelectorAll('[data-year]').forEach(el=>{el.textContent=new Date().getFullYear()});
const revealItems=document.querySelectorAll('.reveal');
if('IntersectionObserver'in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver((entries,current)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');current.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -30px'});revealItems.forEach(item=>observer.observe(item))}else{revealItems.forEach(item=>item.classList.add('is-visible'))}
const form=document.querySelector('[data-enquiry-form]');
form?.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const subject=`Website enquiry — ${data.get('service')||'General legal enquiry'}`;const body=[`Name: ${data.get('name')||''}`,`Email: ${data.get('email')||''}`,`Telephone: ${data.get('telephone')||'Not provided'}`,`Preferred contact: ${data.get('preferred_contact')||'Email'}`,`Service: ${data.get('service')||'Not specified'}`,'','Enquiry:',`${data.get('enquiry')||''}`].join('\n');const status=form.querySelector('[data-form-status]');if(status)status.textContent='Opening your email app with the enquiry prepared.';window.location.href=`mailto:andande.law@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`});
