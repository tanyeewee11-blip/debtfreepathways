function qsSet(params){
  const url=new URL(window.location.href);
  Object.entries(params).forEach(([k,v])=>v!==null&&v!==undefined?url.searchParams.set(k,v):url.searchParams.delete(k));
  history.replaceState(null,'',url.toString());
}

function qsGet(key,fallback){
  const v=new URLSearchParams(window.location.search).get(key);
  return v!==null?v:fallback;
}

function setVal(id,val){const el=document.getElementById(id);if(el&&val!==null)el.value=val;}

/* ── Debt Payoff ── */
function dpSaveQS(){
  qsSet({
    balance:document.getElementById('dp-balance')?.value,
    rate:document.getElementById('dp-rate')?.value,
    payment:document.getElementById('dp-payment')?.value,
    extra:document.getElementById('dp-extra')?.value,
    type:document.getElementById('dp-type')?.value
  });
}
function dpRestoreQS(){
  if(!document.getElementById('dp-balance'))return;
  const p=new URLSearchParams(window.location.search);
  if(!p.has('balance'))return;
  setVal('dp-balance',p.get('balance'));
  setVal('dp-rate',p.get('rate'));
  setVal('dp-payment',p.get('payment'));
  setVal('dp-extra',p.get('extra'));
  setVal('dp-type',p.get('type'));
  dpCalc();
}

/* ── Mortgage ── */
function mgSaveQS(){
  qsSet({
    price:document.getElementById('mg-price')?.value,
    down:document.getElementById('mg-down')?.value,
    rate:document.getElementById('mg-rate')?.value,
    term:document.getElementById('mg-term')?.value,
    extra:document.getElementById('mg-extra')?.value,
    tax:document.getElementById('mg-tax')?.value,
    insurance:document.getElementById('mg-insurance')?.value
  });
}
function mgRestoreQS(){
  if(!document.getElementById('mg-price'))return;
  const p=new URLSearchParams(window.location.search);
  if(!p.has('price'))return;
  setVal('mg-price',p.get('price'));
  setVal('mg-down',p.get('down'));
  setVal('mg-rate',p.get('rate'));
  setVal('mg-term',p.get('term'));
  setVal('mg-extra',p.get('extra'));
  setVal('mg-tax',p.get('tax'));
  setVal('mg-insurance',p.get('insurance'));
  mgCalc();
}

/* ── Loan Amortization ── */
function laSaveQS(){
  qsSet({
    amount:document.getElementById('la-amount')?.value,
    rate:document.getElementById('la-rate')?.value,
    term:document.getElementById('la-term')?.value,
    extra:document.getElementById('la-extra')?.value,
    start:document.getElementById('la-start')?.value
  });
}
function laRestoreQS(){
  if(!document.getElementById('la-amount'))return;
  const p=new URLSearchParams(window.location.search);
  if(!p.has('amount'))return;
  setVal('la-amount',p.get('amount'));
  setVal('la-rate',p.get('rate'));
  setVal('la-term',p.get('term'));
  setVal('la-extra',p.get('extra'));
  setVal('la-start',p.get('start'));
  laCalc();
}

/* ── Interest Rate Comparator ── */
function ircSaveQS(){
  qsSet({
    amount:document.getElementById('irc-amount')?.value,
    term:document.getElementById('irc-term')?.value,
    arate:document.getElementById('irc-a-rate')?.value,
    alabel:document.getElementById('irc-a-label')?.value,
    brate:document.getElementById('irc-b-rate')?.value,
    blabel:document.getElementById('irc-b-label')?.value
  });
}
function ircRestoreQS(){
  if(!document.getElementById('irc-amount'))return;
  const p=new URLSearchParams(window.location.search);
  if(!p.has('amount'))return;
  setVal('irc-amount',p.get('amount'));
  setVal('irc-term',p.get('term'));
  setVal('irc-a-rate',p.get('arate'));
  setVal('irc-a-label',p.get('alabel'));
  setVal('irc-b-rate',p.get('brate'));
  setVal('irc-b-label',p.get('blabel'));
  ircCalc();
}

/* ── Debt Avalanche vs Snowball ── */
function daSaveQS(){
  const rows=document.querySelectorAll('.da-debt-row');
  const debts=[];
  rows.forEach(r=>{
    const n=r.querySelector('.da-name')?.value||'';
    const b=r.querySelector('.da-balance')?.value||'';
    const rt=r.querySelector('.da-rate')?.value||'';
    const m=r.querySelector('.da-minpay')?.value||'';
    debts.push([n,b,rt,m].join('|'));
  });
  qsSet({
    budget:document.getElementById('da-budget')?.value,
    debts:debts.join(';')
  });
}
function daRestoreQS(){
  if(!document.getElementById('da-budget'))return;
  const p=new URLSearchParams(window.location.search);
  if(!p.has('budget'))return;
  setVal('da-budget',p.get('budget'));
  const debtsParam=p.get('debts');
  if(debtsParam){
    const debts=debtsParam.split(';');
    const list=document.getElementById('da-debt-list');
    if(!list)return;
    const existingRows=list.querySelectorAll('.da-debt-row');
    debts.forEach((d,i)=>{
      const [n,b,rt,m]=d.split('|');
      let row=existingRows[i];
      if(!row){
        // click add button to create extra rows
        const addBtn=document.getElementById('da-add-debt');
        if(addBtn)addBtn.click();
        row=list.querySelectorAll('.da-debt-row')[i];
      }
      if(!row)return;
      const nameEl=row.querySelector('.da-name');
      const balEl=row.querySelector('.da-balance');
      const rateEl=row.querySelector('.da-rate');
      const minEl=row.querySelector('.da-minpay');
      if(nameEl)nameEl.value=n;
      if(balEl)balEl.value=b;
      if(rateEl)rateEl.value=rt;
      if(minEl)minEl.value=m;
    });
  }
  daCalc();
}

/* ── Emergency Fund ── */
function efSaveQS(){
  qsSet({
    housing:document.getElementById('ef-housing')?.value,
    food:document.getElementById('ef-food')?.value,
    transport:document.getElementById('ef-transport')?.value,
    utilities:document.getElementById('ef-utilities')?.value,
    insurance:document.getElementById('ef-insurance')?.value,
    other:document.getElementById('ef-other')?.value,
    months:document.getElementById('ef-months')?.value,
    savings:document.getElementById('ef-savings')?.value,
    existing:document.getElementById('ef-existing')?.value
  });
}
function efRestoreQS(){
  if(!document.getElementById('ef-housing'))return;
  const p=new URLSearchParams(window.location.search);
  if(!p.has('housing'))return;
  ['housing','food','transport','utilities','insurance','other','months','savings','existing'].forEach(k=>{
    setVal('ef-'+k,p.get(k));
  });
  efCalc();
}

/* ── Auto-wire: save QS on any input change, restore on load ── */
document.addEventListener('DOMContentLoaded',function(){
  // Restore from URL on page load
  dpRestoreQS();
  mgRestoreQS();
  laRestoreQS();
  ircRestoreQS();
  daRestoreQS();
  efRestoreQS();

  // Save to URL whenever any input/select changes (each save fn checks if its inputs exist)
  document.addEventListener('input',function(){
    dpSaveQS();mgSaveQS();laSaveQS();ircSaveQS();daSaveQS();efSaveQS();
  });
  document.addEventListener('change',function(){
    dpSaveQS();mgSaveQS();laSaveQS();ircSaveQS();daSaveQS();efSaveQS();
  });
});

/* ═══════════════════════════════════════
   NEWSLETTER FORM
   Swap the action URL below with your
   Mailchimp/ConvertKit/Brevo endpoint.
═══════════════════════════════════════ */
async function newsletterSubmit(e){
  e.preventDefault();
  const btn=document.getElementById('newsletter-btn');
  const email=document.getElementById('newsletter-email').value.trim();
  const success=document.getElementById('newsletter-success');
  if(!email)return;
  btn.disabled=true;
  btn.textContent='Subscribing...';

  try{
    // ── REPLACE THIS URL with your Mailchimp/ConvertKit/Brevo endpoint ──
    const res=await fetch('https://api.web3forms.com/submit',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        access_key:'7a4e7076-bf45-4ac9-81f2-af3e70dbcc9b',
        subject:'New newsletter subscriber: '+email,
        email:email,
        message:'Newsletter signup from DebtFreePathways'
      })
    });
    const data=await res.json();
    if(data.success){
      document.getElementById('newsletter-form').style.display='none';
      if(success)success.style.display='block';
    } else {throw new Error('failed');}
  } catch(err){
    btn.disabled=false;
    btn.textContent='Subscribe — it\'s free';
    alert('Something went wrong. Please try again.');
  }
}