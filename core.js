
function scrollToId(id){setTimeout(()=>{const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth'});},60);}
function toggleFaq(btn){const item=btn.closest('.faq-item'),isOpen=item.classList.contains('open');document.querySelectorAll('.faq-item.open').forEach(el=>{el.classList.remove('open');const b=el.querySelector('.faq-q');if(b)b.setAttribute('aria-expanded','false');});if(!isOpen){item.classList.add('open');btn.setAttribute('aria-expanded','true');}else{btn.setAttribute('aria-expanded','false');}}
function fmt(n){return'$'+Math.round(n).toLocaleString();}
function fmtM(n){const y=Math.floor(n/12),m=n%12;return y>0?(m>0?`${y}y ${m}m`:`${y}y`):`${n}mo`;}
function payoffDate(months){const d=new Date();d.setMonth(d.getMonth()+months);return d.toLocaleDateString('en-US',{month:'long',year:'numeric'});}
(function(){var STORAGE_KEY='dfp_cookie_consent';function getConsent(){try{return localStorage.getItem(STORAGE_KEY);}catch(e){return null;}}
function setConsent(value){try{localStorage.setItem(STORAGE_KEY,value);}catch(e){}}
function buildBanner(){var banner=document.createElement('div');banner.id='cookie-consent-banner';banner.setAttribute('role','region');banner.setAttribute('aria-label','Cookie consent');banner.style.cssText='position:fixed;left:0;right:0;bottom:0;z-index:9999;'+'background:var(--navy,#0B1F3A);color:#fff;'+'padding:16px 20px;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:16px;'+'box-shadow:0 -4px 20px rgba(0,0,0,.15);font-family:var(--font-body,"DM Sans",sans-serif);font-size:14px;line-height:1.5';var text=document.createElement('p');text.style.cssText='margin:0;max-width:640px;color:rgba(255,255,255,.85)';text.innerHTML='We use cookies, including from Google, to serve ads and analyze traffic. '+'By using this site, you agree to our use of cookies. '+'<a href="/privacy-policy/" style="color:#fff;text-decoration:underline" aria-label="Learn more about our cookie and privacy policy">Learn more</a>';var actions=document.createElement('div');actions.style.cssText='display:flex;gap:10px;flex-shrink:0';var declineBtn=document.createElement('button');declineBtn.type='button';declineBtn.textContent='Decline';declineBtn.style.cssText='background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);'+'color:rgba(255,255,255,.85);font-size:13px;font-weight:500;padding:9px 18px;border-radius:8px;'+'cursor:pointer;font-family:inherit';var acceptBtn=document.createElement('button');acceptBtn.type='button';acceptBtn.textContent='Accept';acceptBtn.style.cssText='background:var(--green,#0DBF7E);border:none;color:var(--navy,#0B1F3A);'+'font-size:13px;font-weight:600;padding:9px 20px;border-radius:8px;cursor:pointer;font-family:inherit';function dismiss(value){setConsent(value);banner.style.transition='opacity .2s ease, transform .2s ease';banner.style.opacity='0';banner.style.transform='translateY(8px)';setTimeout(function(){if(banner.parentNode)banner.parentNode.removeChild(banner);},200);}
declineBtn.addEventListener('click',function(){dismiss('declined');});acceptBtn.addEventListener('click',function(){dismiss('accepted');});actions.appendChild(declineBtn);actions.appendChild(acceptBtn);banner.appendChild(text);banner.appendChild(actions);return banner;}
function initCookieBanner(){if(getConsent())return;var banner=buildBanner();document.body.appendChild(banner);}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initCookieBanner);}else{initCookieBanner();}})();(function(){function animateCount(el){var target=parseFloat(el.getAttribute('data-count-to'));if(isNaN(target))return;var prefix=el.getAttribute('data-prefix')||'';var suffix=el.getAttribute('data-suffix')||'';var duration=900;var startTime=null;function step(timestamp){if(!startTime)startTime=timestamp;var progress=Math.min((timestamp-startTime)/duration,1);var eased=1-Math.pow(1-progress,3);var current=Math.round(eased*target);el.textContent=prefix+current+suffix;if(progress<1){requestAnimationFrame(step);}else{el.textContent=prefix+target+suffix;}}
requestAnimationFrame(step);}
function initStatCounters(){var stats=document.querySelectorAll('.stat-num[data-count-to]');if(!stats.length)return;if(!('IntersectionObserver'in window)){stats.forEach(animateCount);return;}
var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){animateCount(entry.target);observer.unobserve(entry.target);}});},{threshold:0.5});stats.forEach(function(el){observer.observe(el);});}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initStatCounters);}else{initStatCounters();}})();
function heroCalc(){if(!document.getElementById('hc-debt'))return;const debt=+document.getElementById('hc-debt').value||0;const rate=+document.getElementById('hc-rate').value||0;const pay=+document.getElementById('hc-pay').value||0;if(!pay||!debt||debt<0||pay<0||rate<0){document.getElementById('hc-months').textContent='—';document.getElementById('hc-interest').textContent='Enter your numbers';return;}
if(rate===0){const n=Math.ceil(debt/pay);document.getElementById('hc-months').textContent=fmtM(n);document.getElementById('hc-interest').textContent='No interest';return;}
const r=rate/100/12;if(pay<=debt*r){document.getElementById('hc-months').textContent='∞';document.getElementById('hc-interest').textContent='Payment too low to pay off';return;}
const ratio=(debt*r)/pay;if(ratio<=0||ratio>=1){document.getElementById('hc-months').textContent='—';document.getElementById('hc-interest').textContent='Check your numbers';return;}
const n=Math.ceil(-Math.log(1-ratio)/Math.log(1+r));if(!isFinite(n)||n<=0){document.getElementById('hc-months').textContent='—';document.getElementById('hc-interest').textContent='Check your numbers';return;}
const interest=pay*n-debt;document.getElementById('hc-months').textContent=fmtM(n);document.getElementById('hc-interest').textContent='$'+Math.round(Math.max(0,interest)).toLocaleString()+' interest';}

function toggleMobileMenu(){const btn=document.getElementById('nav-hamburger');const menu=document.getElementById('nav-mobile-menu');btn.classList.toggle('open');menu.classList.toggle('open');}
function closeMobileMenu(){document.getElementById('nav-hamburger').classList.remove('open');document.getElementById('nav-mobile-menu').classList.remove('open');}
document.addEventListener('click',function(e){const btn=document.getElementById('nav-hamburger');const menu=document.getElementById('nav-mobile-menu');if(!btn.contains(e.target)&&!menu.contains(e.target)){btn.classList.remove('open');menu.classList.remove('open');}})
function newsletterSubmit(e){
  e.preventDefault();
  const btn=document.getElementById('newsletter-btn');
  const email=document.getElementById('newsletter-email').value.trim();
  const success=document.getElementById('newsletter-success');
  if(!email)return;
  btn.disabled=true;
  btn.textContent='Subscribing...';

  const MAILCHIMP_URL='https://gmail.us17.list-manage.com/subscribe/post?u=13ee9faad15c1ec950a1636a5&id=c14a1a25f2&f_id=002ec2e1f0';

  const iframe=document.createElement('iframe');
  iframe.name='mc-iframe-'+Date.now();
  iframe.style.display='none';
  document.body.appendChild(iframe);

  const form=document.createElement('form');
  form.method='POST';
  form.action=MAILCHIMP_URL;
  form.target=iframe.name;

  const emailInput=document.createElement('input');
  emailInput.type='email';
  emailInput.name='EMAIL';
  emailInput.value=email;
  form.appendChild(emailInput);

  const honeypot=document.createElement('input');
  honeypot.type='text';
  honeypot.name='b_13ee9faad15c1ec950a1636a5_c14a1a25f2';
  honeypot.tabIndex=-1;
  honeypot.value='';
  form.appendChild(honeypot);

  document.body.appendChild(form);
  form.submit();

  setTimeout(function(){
    document.getElementById('newsletter-form').style.display='none';
    if(success)success.style.display='block';
    document.body.removeChild(form);
    setTimeout(function(){document.body.removeChild(iframe);},2000);
  },1000);
}

// Auto-trigger heroCalc on homepage load
if(document.getElementById('hc-debt'))heroCalc();

// Wire heroCalc to input events
(function(){
  var fields=['hc-debt','hc-rate','hc-pay'];
  fields.forEach(function(id){
    var el=document.getElementById(id);
    if(el)el.addEventListener('input',heroCalc);
  });
})();
