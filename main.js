/* ═══════════════════════════════════════
   PAGE META DATA
═══════════════════════════════════════ */
const PAGE_META = {
  'home': {
    title: 'DebtFreePathways — Free Debt Payoff & Mortgage Calculators',
    description: 'Free personal finance calculators to pay off debt faster, calculate mortgage payments, compare loan rates, and build your emergency fund. No sign-up required.',
    canonical: 'https://debtfreepathways.com/',
    navLabel: 'Home',
    schema: null
  },
  'debt-payoff': {
    title: 'Debt Payoff Calculator — Free, No Sign-Up | DebtFreePathways',
    description: 'Calculate exactly when you\'ll be debt-free and how much interest you\'ll save. Free debt payoff calculator with avalanche & snowball strategies. No sign-up required.',
    canonical: 'https://debtfreepathways.com/debt-payoff-calculator/',
    navLabel: 'Debt Payoff Calculator',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Debt Payoff Calculator",
      "url": "https://debtfreepathways.com/debt-payoff-calculator/",
      "description": "Calculate exactly when you'll be debt-free and how much interest you'll save with avalanche and snowball strategies.",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "featureList": ["Debt payoff timeline", "Avalanche vs Snowball comparison", "Extra payment savings", "Amortization schedule"],
      "provider": { "@type": "Organization", "name": "DebtFreePathways", "url": "https://debtfreepathways.com/" }
    }
  },
  'mortgage': {
    title: 'Mortgage Calculator — Free Monthly Payment & Amortization | DebtFreePathways',
    description: 'Calculate your monthly mortgage payment, total interest, and view a full amortization schedule. Includes PMI, taxes, insurance, HOA. Free, no sign-up.',
    canonical: 'https://debtfreepathways.com/mortgage-calculator/',
    navLabel: 'Mortgage Calculator',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Mortgage Calculator",
      "url": "https://debtfreepathways.com/mortgage-calculator/",
      "description": "Calculate monthly mortgage payments, total interest, and view full amortization schedules for any home loan.",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "featureList": ["Monthly payment calculation", "Amortization schedule", "PMI calculator", "Extra payment comparison", "Affordability meter"],
      "provider": { "@type": "Organization", "name": "DebtFreePathways", "url": "https://debtfreepathways.com/" }
    }
  },
  'loan-amortization': {
    title: 'Loan Amortization Calculator — Free Schedule & Breakdown | DebtFreePathways',
    description: 'See exactly how every loan payment splits between principal and interest, month by month. Free amortization calculator for auto, personal, student, and mortgage loans.',
    canonical: 'https://debtfreepathways.com/loan-amortization-calculator/',
    navLabel: 'Loan Amortization Calculator',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Loan Amortization Calculator",
      "url": "https://debtfreepathways.com/loan-amortization-calculator/",
      "description": "See exactly how every loan payment splits between principal and interest, month by month, for any loan type.",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "featureList": ["Full amortization schedule", "Principal vs interest breakdown", "Extra payment savings", "Multiple loan types", "Exact payoff date"],
      "provider": { "@type": "Organization", "name": "DebtFreePathways", "url": "https://debtfreepathways.com/" }
    }
  },
  'interest-rate-comparator': {
    title: 'Interest Rate Comparator — Compare Two Loans Side by Side | DebtFreePathways',
    description: 'Compare two loans side by side. See which interest rate saves you more money over time. Free loan comparison calculator — no sign-up required.',
    canonical: 'https://debtfreepathways.com/interest-rate-comparator/',
    navLabel: 'Interest Rate Comparator',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Interest Rate Comparator",
      "url": "https://debtfreepathways.com/interest-rate-comparator/",
      "description": "Compare two loans side by side to find which interest rate saves you the most money over time.",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "featureList": ["Side-by-side loan comparison", "Total interest savings", "Monthly payment comparison", "Payoff timeline chart", "Break-even analysis"],
      "provider": { "@type": "Organization", "name": "DebtFreePathways", "url": "https://debtfreepathways.com/" }
    }
  },
  'debt-avalanche': {
    title: 'Debt Avalanche vs Snowball Calculator — Free Strategy Comparison | DebtFreePathways',
    description: 'Compare Avalanche vs Snowball debt repayment strategies. See which saves you more money or pays off faster. Free multi-debt calculator — no sign-up required.',
    canonical: 'https://debtfreepathways.com/debt-avalanche-vs-snowball/',
    navLabel: 'Debt Avalanche vs Snowball',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Debt Avalanche vs Snowball Calculator",
      "url": "https://debtfreepathways.com/debt-avalanche-vs-snowball/",
      "description": "Compare Avalanche and Snowball debt repayment strategies side by side. See which saves the most money or pays off fastest.",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "featureList": ["Avalanche vs Snowball comparison", "Multi-debt support", "Payoff order visualisation", "Total interest savings", "Balance over time chart"],
      "provider": { "@type": "Organization", "name": "DebtFreePathways", "url": "https://debtfreepathways.com/" }
    }
  },
  'emergency-fund': {
    title: 'Emergency Fund Calculator — Free Savings Goal Planner | DebtFreePathways',
    description: 'Calculate exactly how much you need in your emergency fund and how long it will take to save it. Free emergency fund calculator — no sign-up required.',
    canonical: 'https://debtfreepathways.com/emergency-fund-calculator/',
    navLabel: 'Emergency Fund Calculator',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Emergency Fund Calculator",
      "url": "https://debtfreepathways.com/emergency-fund-calculator/",
      "description": "Calculate how much emergency fund you need and build a personalised savings plan to reach your goal.",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "featureList": ["Emergency fund goal calculation", "Monthly expense breakdown", "Savings timeline", "Milestone tracker", "Coverage month selector"],
      "provider": { "@type": "Organization", "name": "DebtFreePathways", "url": "https://debtfreepathways.com/" }
    }
  },
  'about': { title: 'About — DebtFreePathways', description: 'Free personal finance calculators built for real people. No sign-up, no data collected.', canonical: 'https://debtfreepathways.com/about/', navLabel: 'About' },
  'contact': { title: 'Contact — DebtFreePathways', description: 'Get in touch with DebtFreePathways.', canonical: 'https://debtfreepathways.com/contact/', navLabel: 'Contact' },
  'privacy': { title: 'Privacy Policy — DebtFreePathways', description: 'DebtFreePathways does not collect or store any personal or financial data.', canonical: 'https://debtfreepathways.com/privacy-policy/', navLabel: 'Privacy Policy' },
  'terms': { title: 'Terms of Use — DebtFreePathways', description: 'Terms and conditions for using DebtFreePathways.', canonical: 'https://debtfreepathways.com/terms-of-use/', navLabel: 'Terms of Use' },
  'disclaimer': { title: 'Disclaimer — DebtFreePathways', description: 'Calculator results are estimates for informational purposes only, not financial advice.', canonical: 'https://debtfreepathways.com/disclaimer/', navLabel: 'Disclaimer' },
  'blog': { title: 'Blog — DebtFreePathways', description: 'Personal finance tips and guides to help you get debt-free faster.', canonical: 'https://debtfreepathways.com/blog/', navLabel: 'Blog' },
  'blog-debt-avalanche-vs-snowball': { title: 'Debt Avalanche vs Debt Snowball: Which Method Is Right for You? — DebtFreePathways', description: 'Both methods work — but one could save you thousands more.', canonical: 'https://debtfreepathways.com/blog/debt-avalanche-vs-snowball/', navLabel: 'Blog' },
  'blog-emergency-fund': { title: 'How Much Should You Have in Your Emergency Fund? — DebtFreePathways', description: "Three months or six? Here's how to calculate the right amount for your situation.", canonical: 'https://debtfreepathways.com/blog/emergency-fund/', navLabel: 'Blog' },
  'blog-extra-mortgage-payments': { title: 'What Happens When You Pay Extra on Your Mortgage? — DebtFreePathways', description: "Even $100 extra per month can save you tens of thousands. Here's how it works.", canonical: 'https://debtfreepathways.com/blog/extra-mortgage-payments/', navLabel: 'Blog' }
};

/* ═══════════════════════════════════════
   PAGE ROUTING
═══════════════════════════════════════ */
function showPage(id) {
  const urlMap = {
    'home': '/',
    'debt-payoff': '/debt-payoff-calculator/',
    'mortgage': '/mortgage-calculator/',
    'loan-amortization': '/loan-amortization-calculator/',
    'interest-rate-comparator': '/interest-rate-comparator/',
    'debt-avalanche': '/debt-avalanche-vs-snowball/',
    'emergency-fund': '/emergency-fund-calculator/',
    'about': '/about/',
    'contact': '/contact/',
    'privacy': '/privacy-policy/',
    'terms': '/terms-of-use/',
    'disclaimer': '/disclaimer/',
    'blog': '/blog/',
    'blog-debt-avalanche-vs-snowball': '/blog/debt-avalanche-vs-snowball/',
    'blog-emergency-fund': '/blog/emergency-fund/',
    'blog-extra-mortgage-payments': '/blog/extra-mortgage-payments/',
  };
  window.location.href = urlMap[id] || '/';
}
function scrollToId(id) {
  setTimeout(() => { const el = document.getElementById(id); if(el) el.scrollIntoView({behavior:'smooth'}); }, 60);
}
function toggleFaq(btn) {
  const item = btn.closest('.faq-item'), isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if(!isOpen) item.classList.add('open');
}

/* ═══════════════════════════════════════
   SHARED HELPERS
═══════════════════════════════════════ */
function fmt(n) { return '$'+Math.round(n).toLocaleString(); }
function fmtM(n) { const y=Math.floor(n/12),m=n%12; return y>0?(m>0?`${y}y ${m}m`:`${y}y`):`${n}mo`; }
function payoffDate(months) {
  const d = new Date(); d.setMonth(d.getMonth()+months);
  return d.toLocaleDateString('en-US',{month:'long',year:'numeric'});
}
function calcAmort(balance, annualRate, paymentMonthly) {
  if (!paymentMonthly || !balance) return null;
  const r = annualRate/100/12;
  if (r > 0 && paymentMonthly <= balance*r) return null;
  const sched = [];
  let bal = balance, totalInterest = 0;
  const loanAmount = balance;
  while (bal > 0.005 && sched.length < 720) {
    const intChg = r > 0 ? bal*r : 0;
    const prin = Math.min(paymentMonthly - intChg, bal);
    if (prin <= 0) return null;
    totalInterest += intChg;
    bal = Math.max(0, bal - prin);
    sched.push({ month:sched.length+1, payment:Math.min(paymentMonthly, prin+intChg), principal:prin, interest:intChg, balance:bal, equity:loanAmount-bal+0, totalInterest });
  }
  return sched;
}
function drawDonutSvg(svgId, principal, interest) {
  const svg = document.getElementById(svgId);
  const total = principal + interest;
  const prinAngle = (principal/total)*360;
  const cx=80,cy=80,r=62,sw=22;
  function arc(s,e,color){const toRad=d=>(d-90)*Math.PI/180;const x1=cx+r*Math.cos(toRad(s)),y1=cy+r*Math.sin(toRad(s));const x2=cx+r*Math.cos(toRad(e)),y2=cy+r*Math.sin(toRad(e));const lg=e-s>180?1:0;return `<path d="M${x1} ${y1} A${r} ${r} 0 ${lg} 1 ${x2} ${y2}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round"/>`;}
  const g=4;
  svg.innerHTML=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#EFF1F7" stroke-width="${sw}"/>`+arc(g/2,prinAngle-g/2,'#0DBF7E')+arc(prinAngle+g/2,360-g/2,'#e84040');
}
function drawBarChartEl(elId, sched) {
  const el = document.getElementById(elId);
  const years = {};
  sched.forEach(row => {
    const yr = Math.ceil(row.month/12);
    if (!years[yr]) years[yr] = {principal:0,interest:0};
    years[yr].principal += row.principal;
    years[yr].interest  += row.interest;
  });
  const keys = Object.keys(years).map(Number);
  const maxVal = Math.max(...keys.map(k=>years[k].principal+years[k].interest));
  const chartH = 140;
  el.innerHTML = keys.map(yr => {
    const p=years[yr].principal,i=years[yr].interest,total=p+i;
    const pH=Math.round((p/maxVal)*chartH),iH=Math.round((i/maxVal)*chartH);
    return `<div class="bar-group"><div class="bar-stack" style="height:${pH+iH}px" title="Year ${yr}: Principal ${fmt(p)}, Interest ${fmt(i)}"><div class="bar-seg-int" style="height:${iH}px"></div><div class="bar-seg-pri" style="height:${pH}px"></div></div><div class="bar-label">Y${yr}</div></div>`;
  }).join('');
}
function drawTimelineCanvas(canvasId, sched, schedExtra) {
  const canvas = document.getElementById(canvasId);
  const wrap = canvas.parentElement;
  canvas.width = wrap.clientWidth || 500;
  canvas.height = 160;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  const W=canvas.width,H=canvas.height;
  const pad={top:12,right:12,bottom:28,left:56};
  const cW=W-pad.left-pad.right,cH=H-pad.top-pad.bottom;
  const maxBal = sched[0].balance+sched[0].interest+sched[0].principal;
  const totalM = sched.length;
  ctx.strokeStyle='#EFF1F7';ctx.lineWidth=1;
  [0.25,0.5,0.75,1].forEach(f=>{
    const y=pad.top+(1-f)*cH;
    ctx.beginPath();ctx.moveTo(pad.left,y);ctx.lineTo(pad.left+cW,y);ctx.stroke();
    ctx.fillStyle='#8B93AA';ctx.font='10px DM Sans,sans-serif';ctx.textAlign='right';
    ctx.fillText('$'+Math.round(maxBal*f/1000)+'K',pad.left-6,y+4);
  });
  ctx.fillStyle='#8B93AA';ctx.font='10px DM Sans,sans-serif';ctx.textAlign='center';
  [0,0.25,0.5,0.75,1].forEach(f=>{
    const m=Math.round(f*totalM);
    const x=pad.left+f*cW;
    ctx.fillText(fmtM(m),x,H-4);
  });
  function drawLine(sc, color) {
    ctx.beginPath();ctx.strokeStyle=color;ctx.lineWidth=2.5;ctx.lineJoin='round';ctx.lineCap='round';
    const pts=[{x:0,y:maxBal},...sc.map(r=>({x:r.month,y:r.balance}))];
    const tot=sc.length;
    pts.forEach((pt,i)=>{const x=pad.left+(pt.x/tot)*cW;const y=pad.top+(1-pt.y/maxBal)*cH;i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);});
    ctx.stroke();
    ctx.lineTo(pad.left+cW,pad.top+cH);ctx.lineTo(pad.left,pad.top+cH);ctx.closePath();
    ctx.fillStyle=color+'22';ctx.fill();
  }
  drawLine(sched,'#1A6FE8');
  if(schedExtra) drawLine(schedExtra,'#0DBF7E');
}

/* ═══════════════════════════════════════
   HERO CALC
═══════════════════════════════════════ */
function heroCalc() {
  const debt=+document.getElementById('hc-debt').value||0;
  const rate=+document.getElementById('hc-rate').value||0;
  const pay=+document.getElementById('hc-pay').value||0;
  if(!pay||!debt){document.getElementById('hc-months').textContent='—';document.getElementById('hc-interest').textContent='Enter your numbers';return;}
  if(rate===0){const n=Math.ceil(debt/pay);document.getElementById('hc-months').textContent=fmtM(n);document.getElementById('hc-interest').textContent='No interest';return;}
  const r=rate/100/12;
  if(pay<=debt*r){document.getElementById('hc-months').textContent='∞';document.getElementById('hc-interest').textContent='Payment too low';return;}
  const n=Math.ceil(-Math.log(1-(debt*r)/pay)/Math.log(1+r));
  const interest=pay*n-debt;
  document.getElementById('hc-months').textContent=fmtM(n);
  document.getElementById('hc-interest').textContent='$'+Math.round(interest).toLocaleString()+' interest';
}

/* ═══════════════════════════════════════
   DEBT PAYOFF CALCULATOR
═══════════════════════════════════════ */
let dpSched=null,dpSchedExtra=null,dpTableVisible=false,dpTableViewMode='monthly';
let dpExtraOn=false;

function syncRateSlider(val){document.getElementById('dp-rate').value=val;document.getElementById('rate-slider-val').textContent=parseFloat(val).toFixed(1)+'%';const pct=((val-1)/(36-1))*100;document.getElementById('rate-slider').style.setProperty('--pct',pct+'%');dpCalc();}
function syncSliderFromInput(){const val=+document.getElementById('dp-rate').value||0;const c=Math.min(36,Math.max(1,val));document.getElementById('rate-slider').value=c;document.getElementById('rate-slider-val').textContent=val.toFixed(1)+'%';const pct=((c-1)/(36-1))*100;document.getElementById('rate-slider').style.setProperty('--pct',pct+'%');}
function toggleExtra(){dpExtraOn=!dpExtraOn;document.getElementById('extra-switch').classList.toggle('on',dpExtraOn);document.getElementById('extra-input-row').classList.toggle('show',dpExtraOn);dpCalc();}

function dpCalc(){
  syncSliderFromInput();
  const balance=+document.getElementById('dp-balance').value||0;
  const rate=+document.getElementById('dp-rate').value||0;
  const payment=+document.getElementById('dp-payment').value||0;
  const extra=dpExtraOn?(+document.getElementById('dp-extra').value||0):0;
  dpSched=calcAmort(balance,rate,payment);
  dpSchedExtra=extra>0?calcAmort(balance,rate,payment+extra):null;
  const panel=document.getElementById('results-panel');
  if(!dpSched){panel.classList.remove('show');return;}
  panel.classList.add('show');
  const totalInterest=dpSched[dpSched.length-1].totalInterest;
  const totalPaid=balance+totalInterest;
  const months=dpSched.length;
  const prinPct=Math.round((balance/totalPaid)*100);
  const intPct=100-prinPct;
  document.getElementById('res-months').textContent=fmtM(months);
  document.getElementById('res-interest').textContent=fmt(totalInterest);
  document.getElementById('res-total').textContent=fmt(totalPaid);
  document.getElementById('res-date').textContent=payoffDate(months);
  document.getElementById('progress-pct-label').textContent=prinPct+'%';
  document.getElementById('progress-int-label').textContent=intPct+'%';
  document.getElementById('progress-bar').style.width=prinPct+'%';
  document.getElementById('leg-principal').textContent=fmt(balance);
  document.getElementById('leg-interest').textContent=fmt(totalInterest);
  document.getElementById('leg-principal-pct').textContent=prinPct+'% of total';
  document.getElementById('leg-interest-pct').textContent=intPct+'% of total';
  document.getElementById('donut-center-val').textContent=fmt(totalPaid);
  drawDonutSvg('donut-svg',balance,totalInterest);
  document.getElementById('dp-countdown-widget').style.display='block';
  document.getElementById('dp-cw-months').textContent=months;
  document.getElementById('dp-cw-date').textContent=payoffDate(months);
  const mw=document.getElementById('dp-motive-widget');
  mw.style.display='block';
  const ir=totalInterest/balance;
  let msg='';
  if(ir>1)msg=`You're set to pay <strong>${fmt(totalInterest)}</strong> in interest — more than your original balance! An extra $100/month could save thousands.`;
  else if(ir>0.5)msg=`You'll pay <strong>${fmt(totalInterest)}</strong> in interest. Paying a little extra each month makes a big difference.`;
  else msg=`You're managing this debt efficiently — only <strong>${fmt(totalInterest)}</strong> in interest. Keep it up!`;
  document.getElementById('dp-motive-text').innerHTML=msg;
  const sb=document.getElementById('savings-banner');
  const cc=document.getElementById('compare-card');
  if(dpSchedExtra){
    const intExtra=dpSchedExtra[dpSchedExtra.length-1].totalInterest;
    const mExtra=dpSchedExtra.length;
    const saved=totalInterest-intExtra;
    const mSaved=months-mExtra;
    document.getElementById('savings-val').innerHTML=`${fmt(saved)} &nbsp;·&nbsp; ${mSaved} months sooner`;
    sb.classList.add('show');cc.classList.add('show');
    document.getElementById('cmp-pay-std').textContent=fmt(payment);
    document.getElementById('cmp-pay-ext').textContent=fmt(payment+extra);
    document.getElementById('cmp-time-std').textContent=fmtM(months);
    document.getElementById('cmp-time-ext').textContent=fmtM(mExtra);
    document.getElementById('cmp-time-save').textContent=mSaved>0?`${mSaved}mo faster`:'—';
    document.getElementById('cmp-int-std').textContent=fmt(totalInterest);
    document.getElementById('cmp-int-ext').textContent=fmt(intExtra);
    document.getElementById('cmp-int-save').textContent=fmt(saved);
    document.getElementById('cmp-total-std').textContent=fmt(totalPaid);
    document.getElementById('cmp-total-ext').textContent=fmt(balance+intExtra);
    document.getElementById('cmp-total-save').textContent=fmt(totalPaid-(balance+intExtra));
    document.getElementById('tl-leg-extra').style.display='flex';
  } else {sb.classList.remove('show');cc.classList.remove('show');document.getElementById('tl-leg-extra').style.display='none';}
  drawBarChartEl('dp-bar-chart',dpSched);
  drawTimelineCanvas('dp-timeline-canvas',dpSched,dpSchedExtra);
  document.getElementById('dp-table-card').classList.add('show');
  if(dpTableVisible) dpBuildTable();
}
function dpSwitchTab(tab){
  const tabs=['donut','bar','timeline'];
  document.querySelectorAll('#page-debt-payoff .chart-tab').forEach((t,i)=>t.classList.toggle('active',tabs[i]===tab));
  document.querySelectorAll('#page-debt-payoff .chart-panel').forEach((p,i)=>p.classList.toggle('active',['dp-tab-donut','dp-tab-bar','dp-tab-timeline'][i]==='dp-tab-'+tab));
  if(tab==='timeline'&&dpSched) drawTimelineCanvas('dp-timeline-canvas',dpSched,dpSchedExtra);
}
function dpSwitchTableView(v){dpTableViewMode=v;document.getElementById('dp-view-monthly').classList.toggle('active',v==='monthly');document.getElementById('dp-view-yearly').classList.toggle('active',v==='yearly');if(dpTableVisible)dpBuildTable();}
function dpToggleTable(){dpTableVisible=!dpTableVisible;document.getElementById('dp-table-scroll').style.display=dpTableVisible?'block':'none';document.getElementById('dp-table-toggle-btn').textContent=dpTableVisible?'Hide ↑':'Show ↓';if(dpTableVisible)dpBuildTable();}
function dpBuildTable(){
  if(!dpSched)return;
  const tbody=document.getElementById('dp-amort-body');
  tbody.innerHTML='';
  if(dpTableViewMode==='monthly'){
    let lastYr=0;
    dpSched.forEach(row=>{
      const yr=Math.ceil(row.month/12);
      if(yr!==lastYr){const yrow=document.createElement('tr');yrow.className='yr-header';yrow.innerHTML=`<td colspan="5">Year ${yr}</td>`;tbody.appendChild(yrow);lastYr=yr;}
      const tr=document.createElement('tr');
      tr.innerHTML=`<td class="muted">${row.month}</td><td>${fmt(row.payment)}</td><td class="col-principal">${fmt(row.principal)}</td><td class="col-interest">${fmt(row.interest)}</td><td class="col-balance">${fmt(row.balance)}</td>`;
      tbody.appendChild(tr);
    });
  } else {
    const years={};
    dpSched.forEach(row=>{const yr=Math.ceil(row.month/12);if(!years[yr])years[yr]={totalPay:0,totalPrin:0,totalInt:0,endBal:0};years[yr].totalPay+=row.payment;years[yr].totalPrin+=row.principal;years[yr].totalInt+=row.interest;years[yr].endBal=row.balance;});
    Object.keys(years).forEach(yr=>{const d=years[yr];const tr=document.createElement('tr');tr.className='yr-summary';tr.innerHTML=`<td class="yr-label">Year ${yr}</td><td>${fmt(d.totalPay)}</td><td class="col-principal">${fmt(d.totalPrin)}</td><td class="col-interest">${fmt(d.totalInt)}</td><td class="col-balance">${fmt(d.endBal)}</td>`;tbody.appendChild(tr);});
  }
}

/* ═══════════════════════════════════════
   MORTGAGE CALCULATOR
═══════════════════════════════════════ */
let mgSched=null,mgSchedExtra=null,mgOptionalOn=false,mgExtraOn=false;
let mgTableVisible=false,mgTableViewMode='monthly',mgActiveTab='breakdown';

function mgSetType(type, btn) {
  document.querySelectorAll('.loan-type-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  const configs={fixed30:{rate:6.8,term:30},fixed15:{rate:6.1,term:15},arm5:{rate:6.3,term:30},custom:{rate:null,term:null}};
  const c=configs[type];
  if(c.rate!==null){document.getElementById('mg-rate').value=c.rate;document.getElementById('mg-term').value=c.term;}
  mgCalc();
}
function mgDownChange(){
  const price=+document.getElementById('mg-price').value||0;
  const down=+document.getElementById('mg-down').value||0;
  if(price>0){const pct=(down/price*100).toFixed(1);document.getElementById('mg-down-pct').textContent=pct+'%';}
  // suggest PMI if <20%
  const pct=price>0?down/price:1;
  if(pct<0.2&&mgOptionalOn){
    const loanAmt=price-down;
    const suggestedPMI=Math.round(loanAmt*0.008/12);
    document.getElementById('mg-pmi').value=suggestedPMI;
  }
  mgCalc();
}
function mgSyncRateSlider(val){document.getElementById('mg-rate').value=val;document.getElementById('mg-rate-slider-val').textContent=parseFloat(val).toFixed(2)+'%';const pct=((val-1)/(15-1))*100;document.getElementById('mg-rate-slider').style.setProperty('--pct',pct+'%');mgCalc();}
function mgSyncSliderFromInput(){const val=+document.getElementById('mg-rate').value||0;const c=Math.min(15,Math.max(1,val));document.getElementById('mg-rate-slider').value=c;document.getElementById('mg-rate-slider-val').textContent=val.toFixed(2)+'%';const pct=((c-1)/(15-1))*100;document.getElementById('mg-rate-slider').style.setProperty('--pct',pct+'%');}
function mgToggleOptional(){mgOptionalOn=!mgOptionalOn;document.getElementById('mg-optional-switch').classList.toggle('on',mgOptionalOn);document.getElementById('mg-optional-row').classList.toggle('show',mgOptionalOn);mgCalc();}
function mgToggleExtra(){mgExtraOn=!mgExtraOn;document.getElementById('mg-extra-switch').classList.toggle('on',mgExtraOn);document.getElementById('mg-extra-row').classList.toggle('show',mgExtraOn);mgCalc();}

/* Monthly P&I via standard amortization formula */
function mgMonthlyPayment(principal, annualRate, termMonths) {
  if(annualRate===0) return principal/termMonths;
  const r=annualRate/100/12;
  return principal*r*Math.pow(1+r,termMonths)/(Math.pow(1+r,termMonths)-1);
}

function mgCalc(){
  mgSyncSliderFromInput();
  const price=+document.getElementById('mg-price').value||0;
  const down=+document.getElementById('mg-down').value||0;
  const rate=+document.getElementById('mg-rate').value||0;
  const termYrs=+document.getElementById('mg-term').value||30;
  const extra=mgExtraOn?(+document.getElementById('mg-extra').value||0):0;
  const tax=mgOptionalOn?(+document.getElementById('mg-tax').value||0):0;
  const insurance=mgOptionalOn?(+document.getElementById('mg-insurance').value||0):0;
  const pmi=mgOptionalOn?(+document.getElementById('mg-pmi').value||0):0;
  const hoa=mgOptionalOn?(+document.getElementById('mg-hoa').value||0):0;

  // Update down payment pct display
  if(price>0){document.getElementById('mg-down-pct').textContent=(down/price*100).toFixed(1)+'%';}

  const loanAmt=Math.max(0,price-down);
  if(!loanAmt||!price){document.getElementById('mg-results-panel').classList.remove('show');return;}

  const termMonths=termYrs*12;
  const piPayment=mgMonthlyPayment(loanAmt,rate,termMonths);
  const monthlyOther=(tax+insurance)/12+pmi+hoa;
  const totalMonthly=piPayment+monthlyOther;

  // Build amortization schedule
  mgSched=calcAmort(loanAmt,rate,piPayment);
  mgSchedExtra=extra>0?calcAmort(loanAmt,rate,piPayment+extra):null;

  if(!mgSched){document.getElementById('mg-results-panel').classList.remove('show');return;}
  document.getElementById('mg-results-panel').classList.add('show');

  const totalInterest=mgSched[mgSched.length-1].totalInterest;
  const totalPaid=loanAmt+totalInterest;
  const months=mgSched.length;
  const prinPct=Math.round((loanAmt/totalPaid)*100);
  const intPct=100-prinPct;

  // Metrics
  document.getElementById('mg-monthly-pi').textContent=fmt(piPayment);
  document.getElementById('mg-monthly-total').textContent=monthlyOther>0?fmt(totalMonthly):'—';
  document.getElementById('mg-total-interest').textContent=fmt(totalInterest);
  document.getElementById('mg-total-cost').textContent=fmt(totalPaid);
  document.getElementById('mg-payoff-date').textContent=payoffDate(months);
  document.getElementById('mg-progress-pct-label').textContent=prinPct+'%';
  document.getElementById('mg-progress-int-label').textContent=intPct+'%';
  document.getElementById('mg-progress-bar').style.width=prinPct+'%';

  // LTV meter
  const ltv=loanAmt/price;
  const ltvPct=Math.min(100,Math.round(ltv*100));
  document.getElementById('mg-ltv-needle').style.left=ltvPct+'%';
  const ltvStatus=document.getElementById('mg-ltv-status');
  if(ltv<=0.8){ltvStatus.textContent=`LTV: ${ltvPct}% — Excellent (no PMI required)`;ltvStatus.className='afford-status good';}
  else if(ltv<=0.9){ltvStatus.textContent=`LTV: ${ltvPct}% — Good (PMI may apply)`;ltvStatus.className='afford-status ok';}
  else{ltvStatus.textContent=`LTV: ${ltvPct}% — High (PMI required, consider larger down payment)`;ltvStatus.className='afford-status high';}

  // Sidebar countdown
  document.getElementById('mg-countdown-widget').style.display='block';
  document.getElementById('mg-cw-payment').textContent=fmt(piPayment);
  document.getElementById('mg-cw-payoff').textContent='Payoff: '+payoffDate(months);

  // Rate compare sidebar
  document.getElementById('mg-rate-compare').style.display='block';
  document.getElementById('mg-rc-your').textContent=rate.toFixed(2)+'%';
  const vs30=rate-6.8;
  document.getElementById('mg-rc-vs').textContent=(vs30>=0?'+':'')+vs30.toFixed(2)+'% vs avg';
  document.getElementById('mg-rc-vs').style.color=vs30>0?'#ff8585':vs30<0?'#0DBF7E':'rgba(255,255,255,.7)';

  // Motivational insight
  const mw=document.getElementById('mg-motive-widget');
  mw.style.display='block';
  const ir=totalInterest/loanAmt;
  let msg='';
  if(ir>1)msg=`Over the life of this loan, you'll pay <strong>${fmt(totalInterest)}</strong> in interest — more than the loan itself. Extra principal payments make a huge difference here.`;
  else if(ir>0.6)msg=`You're looking at <strong>${fmt(totalInterest)}</strong> total in interest. Even $100/mo extra could save you tens of thousands.`;
  else msg=`Great rate or term! You'll pay only <strong>${fmt(totalInterest)}</strong> in interest on a ${fmt(loanAmt)} loan.`;
  document.getElementById('mg-motive-text').innerHTML=msg;

  // Extra payment savings
  const sb=document.getElementById('mg-savings-banner');
  const cc=document.getElementById('mg-compare-card');
  if(mgSchedExtra){
    const intExtra=mgSchedExtra[mgSchedExtra.length-1].totalInterest;
    const mExtra=mgSchedExtra.length;
    const saved=totalInterest-intExtra;
    const mSaved=months-mExtra;
    const ySaved=Math.floor(mSaved/12);
    const remSaved=mSaved%12;
    const timeSave=ySaved>0?(remSaved>0?`${ySaved}y ${remSaved}m earlier`:`${ySaved}y earlier`):`${mSaved}mo earlier`;
    document.getElementById('mg-savings-val').innerHTML=`${fmt(saved)} &nbsp;·&nbsp; ${timeSave}`;
    sb.classList.add('show');cc.classList.add('show');
    document.getElementById('mg-cmp-pay-std').textContent=fmt(piPayment);
    document.getElementById('mg-cmp-pay-ext').textContent=fmt(piPayment+extra);
    document.getElementById('mg-cmp-time-std').textContent=fmtM(months);
    document.getElementById('mg-cmp-time-ext').textContent=fmtM(mExtra);
    document.getElementById('mg-cmp-time-save').textContent=timeSave;
    document.getElementById('mg-cmp-int-std').textContent=fmt(totalInterest);
    document.getElementById('mg-cmp-int-ext').textContent=fmt(intExtra);
    document.getElementById('mg-cmp-int-save').textContent=fmt(saved);
    document.getElementById('mg-cmp-total-std').textContent=fmt(totalPaid);
    document.getElementById('mg-cmp-total-ext').textContent=fmt(loanAmt+intExtra);
    document.getElementById('mg-cmp-total-save').textContent=fmt(totalPaid-(loanAmt+intExtra));
    document.getElementById('mg-tl-leg-extra').style.display='flex';
  } else {sb.classList.remove('show');cc.classList.remove('show');document.getElementById('mg-tl-leg-extra').style.display='none';}

  // Payment breakdown ring (pie of P&I + optional costs)
  drawMgRing(piPayment,monthlyOther,tax,insurance,pmi,hoa);

  // Year-by-year bar
  drawBarChartEl('mg-bar-chart',mgSched);

  // Balance timeline
  drawTimelineCanvas('mg-balance-canvas',mgSched,mgSchedExtra);

  // Table
  document.getElementById('mg-table-card').classList.add('show');
  if(mgTableVisible) mgBuildTable();
}

function drawMgRing(pi, other, tax, insurance, pmi, hoa) {
  const total = pi + other;
  const svg = document.getElementById('mg-ring-svg');
  document.getElementById('mg-ring-center').textContent = fmt(total);

  // Build segments
  const segments = [];
  segments.push({label:'Principal & Interest',val:pi,color:'#1A6FE8'});
  if(tax>0)  segments.push({label:'Property tax',val:tax/12,color:'#F5A623'});
  if(insurance>0) segments.push({label:'Insurance',val:insurance/12,color:'#7C3AED'});
  if(pmi>0)  segments.push({label:'PMI',val:pmi,color:'#E84040'});
  if(hoa>0)  segments.push({label:'HOA',val:hoa,color:'#0DBF7E'});

  // Draw ring svg
  const cx=80,cy=80,r=62,sw=22;
  const toRad=d=>(d-90)*Math.PI/180;
  let html=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#EFF1F7" stroke-width="${sw}"/>`;
  let startAngle=0;
  const gap=3;
  segments.forEach((seg,i)=>{
    const angle=(seg.val/total)*360;
    const s=startAngle+gap/2,e=startAngle+angle-gap/2;
    if(e>s){
      const x1=cx+r*Math.cos(toRad(s)),y1=cy+r*Math.sin(toRad(s));
      const x2=cx+r*Math.cos(toRad(e)),y2=cy+r*Math.sin(toRad(e));
      const lg=e-s>180?1:0;
      html+=`<path d="M${x1} ${y1} A${r} ${r} 0 ${lg} 1 ${x2} ${y2}" fill="none" stroke="${seg.color}" stroke-width="${sw}" stroke-linecap="round"/>`;
    }
    startAngle+=angle;
  });
  svg.innerHTML=html;

  // Legend
  const legend=document.getElementById('mg-ring-legend');
  legend.innerHTML=segments.map(seg=>{
    const pct=Math.round((seg.val/total)*100);
    return `<div class="ring-leg-item"><div class="ring-leg-left"><div class="ring-leg-dot" style="background:${seg.color}"></div><div class="ring-leg-name">${seg.label}</div></div><div style="text-align:right"><div class="ring-leg-val">${fmt(seg.val)}/mo</div><div class="ring-leg-pct">${pct}%</div></div></div>`;
  }).join('');
}

function mgSwitchTab(tab){
  mgActiveTab=tab;
  const tabs=['breakdown','bar','balance'];
  document.querySelectorAll('#page-mortgage .chart-tab').forEach((t,i)=>t.classList.toggle('active',tabs[i]===tab));
  document.querySelectorAll('#page-mortgage .chart-panel').forEach((p,i)=>p.classList.toggle('active',['mg-tab-breakdown','mg-tab-bar','mg-tab-balance'][i]==='mg-tab-'+tab));
  if(tab==='balance'&&mgSched) drawTimelineCanvas('mg-balance-canvas',mgSched,mgSchedExtra);
}
function mgSwitchTableView(v){mgTableViewMode=v;document.getElementById('mg-view-monthly').classList.toggle('active',v==='monthly');document.getElementById('mg-view-yearly').classList.toggle('active',v==='yearly');if(mgTableVisible)mgBuildTable();}
function mgToggleTable(){mgTableVisible=!mgTableVisible;document.getElementById('mg-table-scroll').style.display=mgTableVisible?'block':'none';document.getElementById('mg-table-toggle-btn').textContent=mgTableVisible?'Hide ↑':'Show ↓';if(mgTableVisible)mgBuildTable();}
function mgBuildTable(){
  if(!mgSched)return;
  const tbody=document.getElementById('mg-amort-body');
  tbody.innerHTML='';
  const loanAmt=Math.max(0,(+document.getElementById('mg-price').value||0)-(+document.getElementById('mg-down').value||0));
  if(mgTableViewMode==='monthly'){
    let lastYr=0;
    mgSched.forEach(row=>{
      const yr=Math.ceil(row.month/12);
      if(yr!==lastYr){const yrow=document.createElement('tr');yrow.className='yr-header';yrow.innerHTML=`<td colspan="6">Year ${yr}</td>`;tbody.appendChild(yrow);lastYr=yr;}
      const equity=loanAmt-row.balance;
      const tr=document.createElement('tr');
      tr.innerHTML=`<td class="muted">${row.month}</td><td>${fmt(row.payment)}</td><td class="col-principal">${fmt(row.principal)}</td><td class="col-interest">${fmt(row.interest)}</td><td class="col-balance">${fmt(row.balance)}</td><td class="col-principal">${fmt(equity)}</td>`;
      tbody.appendChild(tr);
    });
  } else {
    const years={};
    mgSched.forEach(row=>{const yr=Math.ceil(row.month/12);if(!years[yr])years[yr]={totalPay:0,totalPrin:0,totalInt:0,endBal:0};years[yr].totalPay+=row.payment;years[yr].totalPrin+=row.principal;years[yr].totalInt+=row.interest;years[yr].endBal=row.balance;});
    Object.keys(years).forEach(yr=>{
      const d=years[yr];
      const equity=loanAmt-d.endBal;
      const tr=document.createElement('tr');tr.className='yr-summary';
      tr.innerHTML=`<td class="yr-label">Year ${yr}</td><td>${fmt(d.totalPay)}</td><td class="col-principal">${fmt(d.totalPrin)}</td><td class="col-interest">${fmt(d.totalInt)}</td><td class="col-balance">${fmt(d.endBal)}</td><td class="col-principal">${fmt(equity)}</td>`;
      tbody.appendChild(tr);
    });
  }
}

/* ═══════════════════════════════════════
   INIT
═══════════════════════════════════════ */
/* ═══════════════════════════════════════
   LOAN AMORTIZATION CALCULATOR
═══════════════════════════════════════ */
let laSched=null,laSchedExtra=null,laTableVisible=false,laTableViewMode='monthly',laExtraOn=false,laActiveTab='breakdown';

// Set default start date to current month
(function(){
  const el=document.getElementById('la-start');
  if(el){const now=new Date();el.value=now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0');}
})();

const laPresets={
  personal:{amount:25000,term:'60',rate:9.5,hint:'Avg. personal loan amount'},
  auto:    {amount:35000,term:'60',rate:7.0,hint:'New car loan amount'},
  student: {amount:30000,term:'120',rate:5.5,hint:'Federal student loan balance'},
  mortgage:{amount:350000,term:'360',rate:6.8,hint:'Home loan principal'},
  business:{amount:50000,term:'60',rate:8.5,hint:'Small business loan'}
};

function laSetType(type, btn) {
  document.querySelectorAll('#la-type-tabs .loan-type-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  const p=laPresets[type];
  document.getElementById('la-amount').value=p.amount;
  document.getElementById('la-amount-hint').textContent=p.hint;
  document.getElementById('la-term').value=p.term;
  document.getElementById('la-rate').value=p.rate;
  syncLaRateSlider(p.rate);
}

function syncLaRateSlider(val){
  document.getElementById('la-rate').value=val;
  document.getElementById('la-rate-slider-val').textContent=parseFloat(val).toFixed(2)+'%';
  const pct=((val-0.5)/(36-0.5))*100;
  document.getElementById('la-rate-slider').style.setProperty('--pct',pct+'%');
  laCalc();
}
function syncLaSliderFromInput(){
  const val=+document.getElementById('la-rate').value||0;
  const c=Math.min(36,Math.max(0.5,val));
  document.getElementById('la-rate-slider').value=c;
  document.getElementById('la-rate-slider-val').textContent=val.toFixed(2)+'%';
  const pct=((c-0.5)/(36-0.5))*100;
  document.getElementById('la-rate-slider').style.setProperty('--pct',pct+'%');
  laCalc();
}
function laToggleExtra(){
  laExtraOn=!laExtraOn;
  document.getElementById('la-extra-switch').classList.toggle('on',laExtraOn);
  document.getElementById('la-extra-input-row').classList.toggle('show',laExtraOn);
  laCalc();
}

function laPayoffDateFromStart(months){
  const startEl=document.getElementById('la-start');
  let d=new Date();
  if(startEl&&startEl.value){const[y,m]=startEl.value.split('-');d=new Date(+y,+m-1,1);}
  d.setMonth(d.getMonth()+months);
  return d.toLocaleDateString('en-US',{month:'long',year:'numeric'});
}

function laCalcFixed(principal,annualRate,termMonths){
  if(!principal||!termMonths) return 0;
  if(annualRate===0) return principal/termMonths;
  const r=annualRate/100/12;
  return principal*r*Math.pow(1+r,termMonths)/(Math.pow(1+r,termMonths)-1);
}

function laBuildSched(principal,annualRate,termMonths,extraPayment){
  const payment=laCalcFixed(principal,annualRate,termMonths);
  if(!payment) return null;
  const r=annualRate/100/12;
  const sched=[];
  let bal=principal,totalInt=0;
  while(bal>0.005&&sched.length<termMonths+1){
    const intChg=r>0?bal*r:0;
    const regularPrin=Math.min(payment-intChg,bal);
    const extraPrin=Math.min(extraPayment,bal-regularPrin);
    const totalPrin=regularPrin+extraPrin;
    if(totalPrin<=0) break;
    totalInt+=intChg;
    bal=Math.max(0,bal-totalPrin);
    sched.push({month:sched.length+1,payment:intChg+totalPrin,principal:totalPrin,interest:intChg,balance:bal,totalInterest:totalInt});
  }
  return sched;
}

function laCalc(){
  const principal=+document.getElementById('la-amount').value||0;
  const rate=+document.getElementById('la-rate').value||0;
  const term=+document.getElementById('la-term').value||0;
  const extra=laExtraOn?(+document.getElementById('la-extra').value||0):0;

  laSched=laBuildSched(principal,rate,term,0);
  laSchedExtra=extra>0?laBuildSched(principal,rate,term,extra):null;

  const panel=document.getElementById('la-results-panel');
  if(!laSched){panel.classList.remove('show');return;}
  panel.classList.add('show');

  const payment=laCalcFixed(principal,rate,term);
  const totalInterest=laSched[laSched.length-1].totalInterest;
  const totalCost=principal+totalInterest;
  const intPct=Math.round((totalInterest/totalCost)*100);
  const months=laSched.length;

  document.getElementById('la-monthly').textContent=fmt(payment);
  document.getElementById('la-total-interest').textContent=fmt(totalInterest);
  document.getElementById('la-total-cost').textContent=fmt(totalCost);
  document.getElementById('la-interest-pct').textContent=intPct+'%';
  document.getElementById('la-payoff-date').textContent=laPayoffDateFromStart(months);
  document.getElementById('la-progress-bar').style.width=Math.round((principal/totalCost)*100)+'%';

  document.getElementById('la-donut-center').textContent=fmt(totalCost);
  drawDonutSvg('la-donut-svg',principal,totalInterest);
  document.getElementById('la-leg-principal').textContent=fmt(principal);
  document.getElementById('la-leg-principal-pct').textContent=Math.round((principal/totalCost)*100)+'% of total';
  document.getElementById('la-leg-interest').textContent=fmt(totalInterest);
  document.getElementById('la-leg-interest-pct').textContent=intPct+'% of total';

  drawBarChartEl('la-bar-chart',laSched);
  if(laActiveTab==='balance') drawTimelineCanvas('la-balance-canvas',laSched,laSchedExtra);

  // Sidebar
  document.getElementById('la-countdown-widget').style.display='block';
  document.getElementById('la-cw-payment').textContent=fmt(payment);
  document.getElementById('la-cw-payoff').textContent='Payoff: '+laPayoffDateFromStart(months);
  document.getElementById('la-interest-breakdown-widget').style.display='block';
  document.getElementById('la-sw-principal').textContent=fmt(principal);
  document.getElementById('la-sw-interest').textContent=fmt(totalInterest);
  document.getElementById('la-sw-pct').textContent=Math.round((totalInterest/principal)*100)+'%';
  document.getElementById('la-sw-monthly').textContent=fmt(payment)+'/mo';
  document.getElementById('la-motive-widget').style.display='block';

  // Motive text
  const motivePct=Math.round((totalInterest/principal)*100);
  let motiveMsg='';
  if(motivePct<15) motiveMsg=`Great deal — you'll pay only <strong>${motivePct}%</strong> of your principal in interest. Short term and low rate working in your favor.`;
  else if(motivePct<40) motiveMsg=`You'll pay <strong>${fmt(totalInterest)}</strong> in interest over the life of this loan. An extra $100/mo would save you significantly.`;
  else motiveMsg=`Interest adds up to <strong>${motivePct}%</strong> of your principal. Consider refinancing to a shorter term or lower rate if possible.`;
  document.getElementById('la-motive-text').innerHTML=motiveMsg;

  // Extra payments comparison
  if(laSchedExtra){
    const intExtra=laSchedExtra[laSchedExtra.length-1].totalInterest;
    const mExtra=laSchedExtra.length;
    const saved=totalInterest-intExtra;
    const timeSaved=fmtM(months-mExtra);
    document.getElementById('la-savings-banner').classList.add('show');
    document.getElementById('la-savings-int').textContent=fmt(saved);
    document.getElementById('la-savings-time').textContent=timeSaved;
    document.getElementById('la-savings-total').textContent='Save '+fmt(saved);
    document.getElementById('la-leg-extra-item').style.display='flex';
    document.getElementById('la-leg-extra-saved').textContent=fmt(saved)+' saved';
    document.getElementById('la-compare-card').classList.add('show');
    document.getElementById('la-cmp-time-std').textContent=fmtM(months);
    document.getElementById('la-cmp-time-ext').textContent=fmtM(mExtra);
    document.getElementById('la-cmp-time-save').textContent=timeSaved+' sooner';
    document.getElementById('la-cmp-int-std').textContent=fmt(totalInterest);
    document.getElementById('la-cmp-int-ext').textContent=fmt(intExtra);
    document.getElementById('la-cmp-int-save').textContent=fmt(saved);
    document.getElementById('la-cmp-total-std').textContent=fmt(totalCost);
    document.getElementById('la-cmp-total-ext').textContent=fmt(principal+intExtra);
    document.getElementById('la-cmp-total-save').textContent=fmt(saved);
    document.getElementById('la-tl-leg-extra').style.display='flex';
  } else {
    document.getElementById('la-savings-banner').classList.remove('show');
    document.getElementById('la-compare-card').classList.remove('show');
    document.getElementById('la-leg-extra-item').style.display='none';
    document.getElementById('la-tl-leg-extra').style.display='none';
  }

  document.getElementById('la-table-card').classList.add('show');
  if(laTableVisible) laBuildTable();
}

function laSwitchTab(tab){
  laActiveTab=tab;
  const tabs=['breakdown','bar','balance'];
  document.querySelectorAll('#page-loan-amortization .chart-tab').forEach((t,i)=>t.classList.toggle('active',tabs[i]===tab));
  document.querySelectorAll('#page-loan-amortization .chart-panel').forEach((p,i)=>p.classList.toggle('active',['la-tab-breakdown','la-tab-bar','la-tab-balance'][i]==='la-tab-'+tab));
  if(tab==='balance'&&laSched) drawTimelineCanvas('la-balance-canvas',laSched,laSchedExtra);
}
function laSwitchTableView(v){laTableViewMode=v;document.getElementById('la-view-monthly').classList.toggle('active',v==='monthly');document.getElementById('la-view-yearly').classList.toggle('active',v==='yearly');if(laTableVisible)laBuildTable();}
function laToggleTable(){laTableVisible=!laTableVisible;document.getElementById('la-table-scroll').style.display=laTableVisible?'block':'none';document.getElementById('la-table-toggle-btn').textContent=laTableVisible?'Hide ↑':'Show ↓';if(laTableVisible)laBuildTable();}
function laBuildTable(){
  if(!laSched)return;
  const tbody=document.getElementById('la-amort-body');
  tbody.innerHTML='';
  const principal=+document.getElementById('la-amount').value||0;
  if(laTableViewMode==='monthly'){
    let lastYr=0;
    laSched.forEach(row=>{
      const yr=Math.ceil(row.month/12);
      if(yr!==lastYr){const yrow=document.createElement('tr');yrow.className='yr-header';yrow.innerHTML=`<td colspan="6">Year ${yr}</td>`;tbody.appendChild(yrow);lastYr=yr;}
      const equity=principal-row.balance;
      const tr=document.createElement('tr');
      tr.innerHTML=`<td class="muted">${row.month}</td><td>${fmt(row.payment)}</td><td class="col-principal">${fmt(row.principal)}</td><td class="col-interest">${fmt(row.interest)}</td><td class="col-balance">${fmt(row.balance)}</td><td class="col-principal">${fmt(equity)}</td>`;
      tbody.appendChild(tr);
    });
  } else {
    const years={};
    laSched.forEach(row=>{const yr=Math.ceil(row.month/12);if(!years[yr])years[yr]={totalPay:0,totalPrin:0,totalInt:0,endBal:0};years[yr].totalPay+=row.payment;years[yr].totalPrin+=row.principal;years[yr].totalInt+=row.interest;years[yr].endBal=row.balance;});
    Object.keys(years).forEach(yr=>{
      const d=years[yr];const equity=principal-d.endBal;
      const tr=document.createElement('tr');tr.className='yr-summary';
      tr.innerHTML=`<td class="yr-label">Year ${yr}</td><td>${fmt(d.totalPay)}</td><td class="col-principal">${fmt(d.totalPrin)}</td><td class="col-interest">${fmt(d.totalInt)}</td><td class="col-balance">${fmt(d.endBal)}</td><td class="col-principal">${fmt(equity)}</td>`;
      tbody.appendChild(tr);
    });
  }
}

/* ═══════════════════════════════════════
   INTEREST RATE COMPARATOR
═══════════════════════════════════════ */
let ircActiveTab = 'bars';

function syncIrcSlider(loan, val) {
  document.getElementById('irc-' + loan + '-rate').value = parseFloat(val).toFixed(2);
  document.getElementById('irc-' + loan + '-rate-display').textContent = parseFloat(val).toFixed(2) + '%';
  const pct = ((val - 0.5) / (36 - 0.5)) * 100;
  document.getElementById('irc-' + loan + '-slider').style.setProperty('--pct', pct + '%');
  ircCalc();
}
function syncIrcFromInput(loan) {
  const val = +document.getElementById('irc-' + loan + '-rate').value || 0;
  const c = Math.min(36, Math.max(0.5, val));
  document.getElementById('irc-' + loan + '-slider').value = c;
  document.getElementById('irc-' + loan + '-rate-display').textContent = val.toFixed(2) + '%';
  const pct = ((c - 0.5) / (36 - 0.5)) * 100;
  document.getElementById('irc-' + loan + '-slider').style.setProperty('--pct', pct + '%');
  ircCalc();
}
function ircUpdateLabels() {
  const aLabel = document.getElementById('irc-a-label').value.trim() || 'Loan A';
  const bLabel = document.getElementById('irc-b-label').value.trim() || 'Loan B';
  document.getElementById('irc-a-name').textContent = aLabel;
  document.getElementById('irc-b-name').textContent = bLabel;
  ['col-a-name','col-b-name','th-a','th-b','legend-a-label','legend-b-label','tl-a-label','tl-b-label','ci-a-label','ci-b-label'].forEach(id => {
    const el = document.getElementById('irc-' + id);
    if (!el) return;
    if (id.includes('-a-')) el.textContent = aLabel;
    else el.textContent = bLabel;
  });
}

function ircPayment(principal, annualRate, months) {
  if (!principal || !months) return 0;
  if (annualRate === 0) return principal / months;
  const r = annualRate / 100 / 12;
  return principal * r * Math.pow(1 + r, months) / (Math.pow(1 + r, months) - 1);
}
function ircTotalInterest(principal, annualRate, months) {
  return ircPayment(principal, annualRate, months) * months - principal;
}
function ircBuildBalance(principal, annualRate, months) {
  const pmt = ircPayment(principal, annualRate, months);
  const r = annualRate / 100 / 12;
  const pts = [principal];
  let bal = principal;
  for (let i = 0; i < months; i++) {
    const int = r > 0 ? bal * r : 0;
    bal = Math.max(0, bal - (pmt - int));
    pts.push(bal);
  }
  return pts;
}
function ircBuildCumInt(principal, annualRate, months) {
  const pmt = ircPayment(principal, annualRate, months);
  const r = annualRate / 100 / 12;
  const pts = [0];
  let bal = principal, cum = 0;
  for (let i = 0; i < months; i++) {
    const int = r > 0 ? bal * r : 0;
    cum += int;
    bal = Math.max(0, bal - (pmt - int));
    pts.push(cum);
  }
  return pts;
}

function ircCalc() {
  const amount = +document.getElementById('irc-amount').value || 0;
  const term   = +document.getElementById('irc-term').value || 0;
  const rateA  = +document.getElementById('irc-a-rate').value || 0;
  const rateB  = +document.getElementById('irc-b-rate').value || 0;
  if (!amount || !term) return;

  ircUpdateLabels();
  const aLabel = document.getElementById('irc-a-label').value.trim() || 'Loan A';
  const bLabel = document.getElementById('irc-b-label').value.trim() || 'Loan B';

  const pmtA = ircPayment(amount, rateA, term);
  const pmtB = ircPayment(amount, rateB, term);
  const intA = ircTotalInterest(amount, rateA, term);
  const intB = ircTotalInterest(amount, rateB, term);
  const totalA = amount + intA;
  const totalB = amount + intB;
  const pctA = Math.round((intA / totalA) * 100);
  const pctB = Math.round((intB / totalB) * 100);

  const aWins = rateA <= rateB;
  const winLabel = aWins ? aLabel : bLabel;
  const savingsMonthly = Math.abs(pmtA - pmtB);
  const savingsTotal   = Math.abs(intA - intB);

  // Winner banner
  document.getElementById('irc-results-panel').classList.add('show');
  document.getElementById('irc-winner-title').textContent = winLabel + ' saves you more';
  document.getElementById('irc-winner-sub').textContent =
    fmt(savingsMonthly) + '/mo less · ' + fmt(savingsTotal) + ' total interest saved';
  document.getElementById('irc-winner-amount').textContent = fmt(savingsTotal);

  // Metric cols
  const markWinner = (idA, idB, valA, valB, lowerIsBetter = true) => {
    const elA = document.getElementById(idA), elB = document.getElementById(idB);
    elA.classList.remove('irc-winner'); elB.classList.remove('irc-winner');
    if (lowerIsBetter) { if (valA < valB) elA.classList.add('irc-winner'); else if (valB < valA) elB.classList.add('irc-winner'); }
    else { if (valA > valB) elA.classList.add('irc-winner'); else if (valB > valA) elB.classList.add('irc-winner'); }
  };

  document.getElementById('irc-a-monthly').textContent = fmt(pmtA);
  document.getElementById('irc-b-monthly').textContent = fmt(pmtB);
  document.getElementById('irc-a-interest').textContent = fmt(intA);
  document.getElementById('irc-b-interest').textContent = fmt(intB);
  document.getElementById('irc-a-total').textContent = fmt(totalA);
  document.getElementById('irc-b-total').textContent = fmt(totalB);
  document.getElementById('irc-a-pct').textContent = pctA + '%';
  document.getElementById('irc-b-pct').textContent = pctB + '%';
  markWinner('irc-a-monthly','irc-b-monthly', pmtA, pmtB);
  markWinner('irc-a-interest','irc-b-interest', intA, intB);
  markWinner('irc-a-total','irc-b-total', totalA, totalB);
  markWinner('irc-a-pct','irc-b-pct', pctA, pctB);

  // Diff col
  const diffFmt = (a, b, isMoney=true) => {
    const d = Math.abs(a - b);
    const el_id_base = a <= b ? 'irc-save' : 'irc-cost';
    return { text: isMoney ? fmt(d) : d.toFixed(1) + '%', cls: a <= b ? 'irc-save' : 'irc-cost' };
  };
  const setDiff = (id, a, b, isMoney=true) => {
    const el = document.getElementById(id);
    const { text, cls } = diffFmt(a, b, isMoney);
    el.textContent = text + (a <= b ? ' less' : ' more');
    el.className = 'irc-diff-box ' + cls;
  };
  setDiff('irc-diff-monthly', pmtA, pmtB);
  setDiff('irc-diff-interest', intA, intB);
  setDiff('irc-diff-total', totalA, totalB);
  setDiff('irc-diff-pct', pctA, pctB, false);

  // Table
  document.getElementById('irc-th-a').textContent = aLabel;
  document.getElementById('irc-th-b').textContent = bLabel;
  document.getElementById('irc-tbl-a-rate').textContent = rateA.toFixed(2) + '%';
  document.getElementById('irc-tbl-b-rate').textContent = rateB.toFixed(2) + '%';
  document.getElementById('irc-tbl-diff-rate').textContent = Math.abs(rateA - rateB).toFixed(2) + '% diff';
  document.getElementById('irc-tbl-a-monthly').textContent = fmt(pmtA);
  document.getElementById('irc-tbl-b-monthly').textContent = fmt(pmtB);
  document.getElementById('irc-tbl-diff-monthly').textContent = fmt(savingsMonthly) + '/mo';
  document.getElementById('irc-tbl-a-int').textContent = fmt(intA);
  document.getElementById('irc-tbl-b-int').textContent = fmt(intB);
  document.getElementById('irc-tbl-diff-int').textContent = fmt(savingsTotal) + ' saved';
  document.getElementById('irc-tbl-a-total').textContent = fmt(totalA);
  document.getElementById('irc-tbl-b-total').textContent = fmt(totalB);
  document.getElementById('irc-tbl-diff-total').textContent = fmt(savingsTotal);

  // Sidebar
  document.getElementById('irc-savings-widget').style.display = 'block';
  document.getElementById('irc-sw-savings').textContent = fmt(savingsTotal);
  document.getElementById('irc-sw-monthly-diff').textContent = fmt(savingsMonthly) + ' less per month';
  document.getElementById('irc-rate-widget').style.display = 'block';
  document.getElementById('irc-rw-diff').textContent = Math.abs(rateA - rateB).toFixed(2) + '%';
  document.getElementById('irc-rw-monthly').textContent = fmt(savingsMonthly) + '/mo';
  document.getElementById('irc-rw-total').textContent = fmt(savingsTotal);
  document.getElementById('irc-motive-widget').style.display = 'block';
  const savingsPct = Math.round((savingsTotal / Math.max(intA, intB)) * 100);
  let motiveMsg = '';
  if (savingsPct < 5) motiveMsg = `The two rates are very close — either loan is a solid deal. Focus on lender reputation and fees.`;
  else if (savingsPct < 30) motiveMsg = `Choosing the lower rate saves you <strong>${fmt(savingsTotal)}</strong> — worth negotiating for if you can.`;
  else motiveMsg = `Big difference! The lower rate saves <strong>${fmt(savingsTotal)}</strong> — that's <strong>${savingsPct}%</strong> less in interest. Definitely go with the better rate.`;
  document.getElementById('irc-motive-text').innerHTML = motiveMsg;

  // Charts
  ircDrawBarChart(aLabel, bLabel, pmtA, pmtB, intA, intB, amount);
  if (ircActiveTab === 'balance') ircDrawTwoLine('irc-balance-canvas', ircBuildBalance(amount, rateA, term), ircBuildBalance(amount, rateB, term));
  if (ircActiveTab === 'interest') ircDrawTwoLine('irc-interest-canvas', ircBuildCumInt(amount, rateA, term), ircBuildCumInt(amount, rateB, term));
}

function ircDrawBarChart(aLabel, bLabel, pmtA, pmtB, intA, intB, principal) {
  const el = document.getElementById('irc-bar-chart');
  const maxPmt = Math.max(pmtA, pmtB);
  const maxInt = Math.max(intA, intB);
  const maxTotal = Math.max(principal + intA, principal + intB);
  const BAR_MAX = 160;
  const bar = (val, max, color) =>
    `<div class="irc-bar-row"><div class="irc-bar-row-label" style="font-size:10px;color:var(--gray-400)">${''}</div><div class="irc-bar-fill" style="background:${color};width:${Math.round((val/max)*BAR_MAX)}px"></div><div class="irc-bar-val">${fmt(val)}</div></div>`;
  const group = (label, badge, pmtVal, intVal, totalVal, color) => `
    <div class="irc-bar-group">
      <div style="font-size:12px;font-weight:700;color:var(--navy);margin-bottom:8px">${label}</div>
      <div style="font-size:10px;color:var(--gray-400);margin-bottom:2px">Monthly</div>
      ${bar(pmtVal, maxPmt, color)}
      <div style="font-size:10px;color:var(--gray-400);margin:8px 0 2px">Total interest</div>
      ${bar(intVal, maxInt, color+'99')}
      <div style="font-size:10px;color:var(--gray-400);margin:8px 0 2px">Total cost</div>
      ${bar(totalVal, maxTotal, color+'55')}
    </div>`;
  el.innerHTML =
    group(aLabel, 'A', pmtA, intA, principal + intA, '#1A6FE8') +
    '<div style="width:1px;background:var(--gray-200);height:200px;align-self:center"></div>' +
    group(bLabel, 'B', pmtB, intB, principal + intB, '#F5A623');
}

function ircDrawTwoLine(canvasId, dataA, dataB) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.offsetWidth || 500, H = 200;
  canvas.width = W; canvas.height = H;
  ctx.clearRect(0, 0, W, H);
  const maxVal = Math.max(...dataA, ...dataB);
  const len = Math.max(dataA.length, dataB.length);
  const px = i => Math.round((i / (len - 1)) * (W - 40)) + 20;
  const py = v => Math.round(H - 20 - ((v / maxVal) * (H - 40)));
  const draw = (data, color) => {
    ctx.beginPath();
    ctx.strokeStyle = color; ctx.lineWidth = 2.5;
    data.forEach((v, i) => i === 0 ? ctx.moveTo(px(i), py(v)) : ctx.lineTo(px(i), py(v)));
    ctx.stroke();
  };
  draw(dataA, '#1A6FE8');
  draw(dataB, '#F5A623');
}

function ircSwitchTab(tab) {
  ircActiveTab = tab;
  const tabs = ['bars', 'balance', 'interest'];
  document.querySelectorAll('#page-interest-rate-comparator .chart-tab').forEach((t, i) => t.classList.toggle('active', tabs[i] === tab));
  document.querySelectorAll('#page-interest-rate-comparator .chart-panel').forEach((p, i) => p.classList.toggle('active', ['irc-tab-bars','irc-tab-balance','irc-tab-interest'][i] === 'irc-tab-' + tab));
  const amount = +document.getElementById('irc-amount').value || 0;
  const term   = +document.getElementById('irc-term').value || 0;
  const rateA  = +document.getElementById('irc-a-rate').value || 0;
  const rateB  = +document.getElementById('irc-b-rate').value || 0;
  if (tab === 'balance') ircDrawTwoLine('irc-balance-canvas', ircBuildBalance(amount, rateA, term), ircBuildBalance(amount, rateB, term));
  if (tab === 'interest') ircDrawTwoLine('irc-interest-canvas', ircBuildCumInt(amount, rateA, term), ircBuildCumInt(amount, rateB, term));
}

/* ═══════════════════════════════════════
   TOOL 5 — DEBT AVALANCHE VS SNOWBALL
═══════════════════════════════════════ */
function daUpdateRemoveButtons() {
  const btns = document.querySelectorAll('.da-remove-btn');
  const single = btns.length === 1;
  btns.forEach(b => { b.disabled = single; });
}

function daAddRow() {
  const list = document.getElementById('da-debt-list');
  const row = document.createElement('div');
  row.className = 'da-debt-row';
  row.innerHTML = `
    <div class="input-group"><label>Debt name</label><div class="input-wrap"><input type="text" class="da-name" value="New Debt" oninput="daCalc()"></div></div>
    <div class="input-group"><label>Balance ($)</label><div class="input-wrap has-prefix"><span class="input-prefix">$</span><input type="number" class="da-balance" value="5000" min="0" oninput="daCalc()"></div></div>
    <div class="input-group"><label>Interest rate (%)</label><div class="input-wrap has-suffix"><input type="number" class="da-rate" value="10" step="0.1" min="0" oninput="daCalc()"><span class="input-suffix">%</span></div></div>
    <div class="input-group"><label>Min. payment ($)</label><div class="input-wrap has-prefix"><span class="input-prefix">$</span><input type="number" class="da-minpay" value="100" min="0" oninput="daCalc()"></div></div>
    <button class="da-remove-btn" onclick="daRemoveRow(this)" title="Remove">×</button>`;
  list.appendChild(row);
  daUpdateRemoveButtons();
  daCalc();
}

function daRemoveRow(btn) {
  const rows = document.querySelectorAll('.da-debt-row');
  if (rows.length <= 1) return;
  btn.closest('.da-debt-row').remove();
  daUpdateRemoveButtons();
  daCalc();
}

function daGetDebts() {
  return Array.from(document.querySelectorAll('.da-debt-row')).map(r => ({
    name: r.querySelector('.da-name').value || 'Debt',
    balance: parseFloat(r.querySelector('.da-balance').value) || 0,
    rate: parseFloat(r.querySelector('.da-rate').value) || 0,
    minPay: parseFloat(r.querySelector('.da-minpay').value) || 0
  })).filter(d => d.balance > 0);
}

// Single simulate function used for both balance snapshots and cumulative interest
function daSimulate(debts, budget, trackCumInt) {
  let ds = debts.map(d => ({ ...d }));
  let totalInterest = 0, cumInt = 0, month = 0;
  const balanceSnaps = [], cumIntSnaps = [];
  while (ds.some(d => d.balance > 0.005) && month < 600) {
    month++;
    let remaining = budget;
    ds.forEach(d => {
      if (d.balance <= 0) return;
      const intChg = d.balance * (d.rate / 100 / 12);
      totalInterest += intChg; cumInt += intChg;
      d.balance += intChg;
      const pay = Math.min(d.minPay, d.balance);
      d.balance = Math.max(0, d.balance - pay);
      remaining -= pay;
    });
    const target = ds.find(d => d.balance > 0);
    if (target && remaining > 0) target.balance = Math.max(0, target.balance - Math.min(remaining, target.balance));
    ds.forEach(d => { if (d.balance <= 0 && !d.months) d.months = month; });
    balanceSnaps.push(ds.reduce((s, d) => s + d.balance, 0));
    cumIntSnaps.push(cumInt);
  }
  ds.forEach(d => { if (!d.months) d.months = month; });
  return { months: month, totalInterest, debts: ds, balanceSnaps, cumIntSnaps };
}

function daCalc() {
  daUpdateRemoveButtons();
  const debts = daGetDebts();
  const panel = document.getElementById('da-results-panel');
  const errEl = document.getElementById('da-budget-error');
  const minTotalEl = document.getElementById('da-min-total');
  if (!debts.length) { panel.classList.remove('show'); return; }

  const budget = parseFloat(document.getElementById('da-budget').value) || 0;
  const totalMin = debts.reduce((s, d) => s + d.minPay, 0);
  const totalBal = debts.reduce((s, d) => s + d.balance, 0);

  if (budget < totalMin) {
    panel.classList.remove('show');
    errEl.style.display = 'block';
    minTotalEl.textContent = fmt(totalMin);
    return;
  }
  errEl.style.display = 'none';

  const avDebts = [...debts].sort((a, b) => b.rate - a.rate);
  const sbDebts = [...debts].sort((a, b) => a.balance - b.balance);
  const avResult = daSimulate(avDebts, budget);
  const sbResult = daSimulate(sbDebts, budget);

  const avTotal = totalBal + avResult.totalInterest;
  const sbTotal = totalBal + sbResult.totalInterest;
  const intDiff = Math.abs(sbResult.totalInterest - avResult.totalInterest);
  const monthsDiff = Math.abs(sbResult.months - avResult.months);
  const avWins = avResult.totalInterest <= sbResult.totalInterest;

  panel.classList.add('show');

  document.getElementById('da-savings-title').textContent = avWins ? 'Avalanche saves you more money' : 'Snowball pays off faster';
  document.getElementById('da-savings-sub').textContent = avWins
    ? `Save ${fmt(intDiff)} in interest vs Snowball`
    : `${monthsDiff} month${monthsDiff !== 1 ? 's' : ''} faster than Avalanche`;
  document.getElementById('da-savings-amount').textContent = avWins ? fmt(intDiff) : fmtM(monthsDiff);

  document.getElementById('da-av-months').textContent = fmtM(avResult.months);
  document.getElementById('da-av-interest').textContent = fmt(avResult.totalInterest);
  document.getElementById('da-av-total').textContent = fmt(avTotal);
  document.getElementById('da-av-winner').style.display = avWins ? 'inline-flex' : 'none';

  document.getElementById('da-sb-months').textContent = fmtM(sbResult.months);
  document.getElementById('da-sb-interest').textContent = fmt(sbResult.totalInterest);
  document.getElementById('da-sb-total').textContent = fmt(sbTotal);
  document.getElementById('da-sb-winner').style.display = !avWins ? 'inline-flex' : 'none';

  function renderOrder(elId, sortedDebts, result) {
    document.getElementById(elId).innerHTML = sortedDebts.map((d, i) => {
      const found = result.debts.find(x => x.name === d.name);
      return `<div class="da-debt-item">
        <div class="da-debt-num">${i + 1}</div>
        <div class="da-debt-item-name">${d.name}</div>
        <div class="da-debt-item-meta">${fmtM(found?.months || 0)}</div>
      </div>`;
    }).join('');
  }
  renderOrder('da-av-order', avDebts, avResult);
  renderOrder('da-sb-order', sbDebts, sbResult);

  document.getElementById('da-strategy-widget').style.display = 'block';
  document.getElementById('da-motive-widget').style.display = 'block';
  document.getElementById('da-sw-count').textContent = debts.length;
  document.getElementById('da-sw-balance').textContent = fmt(totalBal);
  document.getElementById('da-sw-budget').textContent = fmt(budget);
  document.getElementById('da-sw-extra').textContent = fmt(budget - totalMin);
  document.getElementById('da-motive-text').textContent = avWins
    ? `Avalanche saves you ${fmt(intDiff)} in interest. Snowball can keep you motivated with quicker wins.`
    : `Both methods are very close. Snowball is faster — and the motivation boost may be worth the small extra cost.`;

  daDrawTwoLine('da-balance-canvas', avResult.balanceSnaps, sbResult.balanceSnaps, '#7C3AED', '#0DBF7E');
  daDrawTwoLine('da-interest-canvas', avResult.cumIntSnaps, sbResult.cumIntSnaps, '#7C3AED', '#0DBF7E');
}

function daDrawTwoLine(canvasId, seriesA, seriesB, colorA, colorB) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const dpr = window.devicePixelRatio || 1;
  const W = canvas.parentElement.offsetWidth || 600;
  const H = 200;
  canvas.width = W * dpr; canvas.height = H * dpr;
  canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, W, H);
  const maxLen = Math.max(seriesA.length, seriesB.length);
  const maxVal = Math.max(...seriesA, ...seriesB, 1);
  const pad = { t: 10, r: 16, b: 28, l: 52 };
  const cW = W - pad.l - pad.r, cH = H - pad.t - pad.b;
  ctx.strokeStyle = '#EFF1F7'; ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = pad.t + cH - (i / 4) * cH;
    ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(pad.l + cW, y); ctx.stroke();
    ctx.fillStyle = '#9CA3AF'; ctx.font = '10px sans-serif'; ctx.textAlign = 'right';
    ctx.fillText('$' + Math.round(maxVal * i / 4).toLocaleString(), pad.l - 4, y + 4);
  }
  function drawLine(series, color) {
    if (!series.length) return;
    ctx.strokeStyle = color; ctx.lineWidth = 2.5; ctx.lineJoin = 'round';
    ctx.beginPath();
    series.forEach((v, i) => {
      const x = pad.l + (i / (maxLen - 1 || 1)) * cW;
      const y = pad.t + cH - (v / maxVal) * cH;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();
  }
  drawLine(seriesA, colorA);
  drawLine(seriesB, colorB);
  ctx.fillStyle = '#9CA3AF'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
  for (let i = 0; i <= 4; i++) {
    const m = Math.round((i / 4) * (maxLen - 1));
    ctx.fillText(fmtM(m), pad.l + (i / 4) * cW, H - 4);
  }
}

function daSwitchTab(tab) {
  document.querySelectorAll('#page-debt-avalanche .chart-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.querySelectorAll('#page-debt-avalanche .chart-panel').forEach(p => p.classList.toggle('active', p.id === 'da-tab-' + tab));
  // Redraw active canvas now it's visible
  daCalc();
}

// Redraw charts on window resize
let daResizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(daResizeTimer);
  daResizeTimer = setTimeout(() => {
    const panel = document.getElementById('da-results-panel');
    if (panel && panel.classList.contains('show')) {
      const activeTab = document.querySelector('#page-debt-avalanche .chart-panel.active');
      if (activeTab) {
        const canvasId = activeTab.querySelector('canvas')?.id;
        if (canvasId) {
          // Re-run daCalc to redraw — debounced so it won't flood
          daCalc();
        }
      }
    }
  }, 200);
});

/* ═══════════════════════════════════════
   TOOL 6 — EMERGENCY FUND CALCULATOR
═══════════════════════════════════════ */
let efTargetMonths = 3;
let efExistingOn = false;

function efSetMonths(m, btn) {
  efTargetMonths = m;
  document.querySelectorAll('.ef-coverage-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('ef-months').value = m;
  // Hide custom tab if a preset was chosen
  document.getElementById('ef-custom-tab').style.display = 'none';
  efCalc();
}

function efSyncCustom() {
  const val = parseInt(document.getElementById('ef-months').value) || 3;
  efTargetMonths = val;
  // Check if val matches a preset
  const presets = [3, 6, 9, 12];
  const matchBtn = document.querySelector(`.ef-coverage-tab[data-months="${val}"]`);
  document.querySelectorAll('.ef-coverage-tab').forEach(t => t.classList.remove('active'));
  if (matchBtn) {
    matchBtn.classList.add('active');
    document.getElementById('ef-custom-tab').style.display = 'none';
  } else {
    const customTab = document.getElementById('ef-custom-tab');
    customTab.style.display = '';
    customTab.textContent = `${val} months`;
    customTab.classList.add('active');
  }
  efCalc();
}

function efToggleExisting() {
  efExistingOn = !efExistingOn;
  document.getElementById('ef-existing-switch').classList.toggle('on', efExistingOn);
  document.getElementById('ef-existing-row').classList.toggle('show', efExistingOn);
  efCalc();
}

function efResetState() {
  // Reset to defaults when re-entering the page
  efTargetMonths = 3;
  efExistingOn = false;
  document.getElementById('ef-existing-switch').classList.remove('on');
  document.getElementById('ef-existing-row').classList.remove('show');
  document.getElementById('ef-custom-tab').style.display = 'none';
  document.getElementById('ef-months').value = 3;
  document.querySelectorAll('.ef-coverage-tab').forEach((t, i) => t.classList.toggle('active', i === 0));
}

function efCalc() {
  const housing = parseFloat(document.getElementById('ef-housing').value) || 0;
  const food = parseFloat(document.getElementById('ef-food').value) || 0;
  const transport = parseFloat(document.getElementById('ef-transport').value) || 0;
  const utilities = parseFloat(document.getElementById('ef-utilities').value) || 0;
  const insurance = parseFloat(document.getElementById('ef-insurance').value) || 0;
  const other = parseFloat(document.getElementById('ef-other').value) || 0;
  const monthly = housing + food + transport + utilities + insurance + other;
  const months = efTargetMonths;
  const monthlySavings = parseFloat(document.getElementById('ef-savings').value) || 0;
  const existing = efExistingOn ? (parseFloat(document.getElementById('ef-existing').value) || 0) : 0;
  const panel = document.getElementById('ef-results-panel');
  if (monthly <= 0) { panel.classList.remove('show'); return; }

  const goal = monthly * months;
  const remaining = Math.max(0, goal - existing);
  const pct = Math.min(100, existing / goal * 100);
  const monthsToGoal = monthlySavings > 0 ? Math.ceil(remaining / monthlySavings) : null;

  panel.classList.add('show');
  efDrawRing(pct);
  document.getElementById('ef-ring-val').textContent = fmt(goal);
  document.getElementById('ef-monthly-exp').textContent = fmt(monthly);
  document.getElementById('ef-coverage-months').textContent = months + ' months';
  document.getElementById('ef-already-saved').textContent = fmt(existing);
  document.getElementById('ef-progress-pct').textContent = Math.round(pct) + '%';
  document.getElementById('ef-progress-fill').style.width = pct + '%';
  document.getElementById('ef-remaining-label').textContent = remaining > 0 ? fmt(remaining) + ' remaining' : '🎉 Goal reached!';

  if (monthsToGoal !== null) {
    document.getElementById('ef-timeline-title').textContent = remaining <= 0 ? '🎉 Goal already reached!' : 'You\'ll reach your goal in';
    document.getElementById('ef-timeline-sub').textContent = remaining <= 0 ? 'Great work — your emergency fund is fully funded.' : `Saving ${fmt(monthlySavings)}/month`;
    document.getElementById('ef-timeline-date').textContent = remaining <= 0 ? 'Done!' : fmtM(monthsToGoal);
  } else {
    document.getElementById('ef-timeline-title').textContent = 'Set a monthly savings amount';
    document.getElementById('ef-timeline-sub').textContent = 'Enter how much you can save each month to see your timeline';
    document.getElementById('ef-timeline-date').textContent = '—';
  }

  const cats = [
    { id: 'housing', val: housing }, { id: 'food', val: food },
    { id: 'transport', val: transport }, { id: 'utilities', val: utilities },
    { id: 'insurance', val: insurance }, { id: 'other', val: other }
  ];
  cats.forEach(c => {
    document.getElementById('ef-c-' + c.id).textContent = fmt(c.val);
    document.getElementById('ef-cp-' + c.id).textContent = monthly > 0 ? Math.round(c.val / monthly * 100) + '% of expenses' : '—';
  });

  const milestones = [
    { label: 'Starter fund', sub: '1 month of expenses', months: 1, icon: '🌱' },
    { label: '3-month fund', sub: 'Minimum recommended', months: 3, icon: '🛡️' },
    { label: '6-month fund', sub: 'Fully funded', months: 6, icon: '🏆' },
    { label: `${months}-month goal`, sub: 'Your personal target', months: months, icon: '🎯' }
  ];
  const seen = new Set();
  const uniqueMilestones = milestones.filter(m => { if (seen.has(m.months)) return false; seen.add(m.months); return true; });
  document.getElementById('ef-milestones').innerHTML = uniqueMilestones.map(m => {
    const mGoal = monthly * m.months;
    const mRemaining = Math.max(0, mGoal - existing);
    const mMonths = monthlySavings > 0 ? Math.ceil(mRemaining / monthlySavings) : null;
    const done = existing >= mGoal;
    return `<div class="ef-milestone">
      <div class="ef-milestone-icon">${m.icon}</div>
      <div><div class="ef-milestone-label">${m.label}</div><div class="ef-milestone-sub">${m.sub}</div></div>
      <div><div class="ef-milestone-val" style="${done ? 'color:var(--green-dark)' : ''}">${fmt(mGoal)}</div>
      <div class="ef-milestone-months">${done ? '✅ Done' : mMonths !== null ? 'In ' + fmtM(mMonths) : '—'}</div></div>
    </div>`;
  }).join('');

  document.getElementById('ef-summary-widget').style.display = 'block';
  document.getElementById('ef-motive-widget').style.display = 'block';
  document.getElementById('ef-sw-goal').textContent = fmt(goal);
  document.getElementById('ef-sw-monthly').textContent = fmt(monthly);
  document.getElementById('ef-sw-months').textContent = monthsToGoal !== null ? fmtM(monthsToGoal) : '—';
  document.getElementById('ef-sw-date').textContent = monthsToGoal !== null && remaining > 0 ? payoffDate(monthsToGoal) : remaining <= 0 ? 'Reached!' : '—';
  document.getElementById('ef-motive-text').textContent = remaining <= 0
    ? `Your emergency fund is fully funded at ${fmt(existing)}. Well done!`
    : monthsToGoal !== null
      ? `You need ${fmt(remaining)} more. At ${fmt(monthlySavings)}/month, you'll be there in ${fmtM(monthsToGoal)}.`
      : `Your goal is ${fmt(goal)}. Set a monthly savings amount to see your timeline.`;
}

function efDrawRing(pct) {
  const svg = document.getElementById('ef-ring-svg');
  const cx = 90, cy = 90, r = 70, sw = 14;
  function arc(s, e, color) {
    const toRad = d => (d - 90) * Math.PI / 180;
    const x1 = cx + r * Math.cos(toRad(s)), y1 = cy + r * Math.sin(toRad(s));
    const x2 = cx + r * Math.cos(toRad(e)), y2 = cy + r * Math.sin(toRad(e));
    const lg = e - s > 180 ? 1 : 0;
    return `<path d="M${x1} ${y1} A${r} ${r} 0 ${lg} 1 ${x2} ${y2}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round"/>`;
  }
  const angle = (pct / 100) * 360;
  const g = 3;
  let inner = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#EFF1F7" stroke-width="${sw}"/>`;
  if (angle > g) inner += arc(g / 2, Math.min(angle - g / 2, 359.9), '#0DBF7E');
  if (angle < 360 - g) inner += arc(Math.max(angle + g / 2, g), 360 - g / 2, '#EFF1F7');
  svg.innerHTML = inner;
}

// Init sliders
(function(){
  syncIrcSlider('a', 6.5);
  syncIrcSlider('b', 8.9);
})();
// Mobile menu
function toggleMobileMenu(){
  const btn=document.getElementById('nav-hamburger');
  const menu=document.getElementById('nav-mobile-menu');
  btn.classList.toggle('open');
  menu.classList.toggle('open');
}
function closeMobileMenu(){
  document.getElementById('nav-hamburger').classList.remove('open');
  document.getElementById('nav-mobile-menu').classList.remove('open');
}
// Close menu on outside click
document.addEventListener('click',function(e){
  const btn=document.getElementById('nav-hamburger');
  const menu=document.getElementById('nav-mobile-menu');
  if(!btn.contains(e.target)&&!menu.contains(e.target)){
    btn.classList.remove('open');
    menu.classList.remove('open');
  }
});

heroCalc();
(function(){const r=document.getElementById('dp-rate');if(r){const v=r.value||19.9;const pct=((v-1)/(36-1))*100;document.getElementById('rate-slider').style.setProperty('--pct',pct+'%');document.getElementById('rate-slider-val').textContent=parseFloat(v).toFixed(1)+'%';}})();
(function(){const r=document.getElementById('mg-rate');if(r){const v=r.value||6.8;const pct=((v-1)/(15-1))*100;document.getElementById('mg-rate-slider').style.setProperty('--pct',pct+'%');document.getElementById('mg-rate-slider-val').textContent=parseFloat(v).toFixed(2)+'%';}})();
(function(){const r=document.getElementById('la-rate');if(r){const v=r.value||7.5;const pct=((v-0.5)/(36-0.5))*100;document.getElementById('la-rate-slider').style.setProperty('--pct',pct+'%');document.getElementById('la-rate-slider-val').textContent=parseFloat(v).toFixed(2)+'%';}})();
// Init year spans across all footers
document.querySelectorAll('.yr').forEach(el => el.textContent = new Date().getFullYear());

// Init homepage JSON-LD (ItemList for all 6 tools)
document.getElementById('schema-page').textContent = JSON.stringify({
  "@context":"https://schema.org",
  "@type":"ItemList",
  "name":"Free Personal Finance Calculators",
  "description":"Free online calculators for debt payoff, mortgage, loan amortization, and more.",
  "url":"https://debtfreepathways.com/",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Debt Payoff Calculator","url":"https://debtfreepathways.com/debt-payoff-calculator/"},
    {"@type":"ListItem","position":2,"name":"Mortgage Calculator","url":"https://debtfreepathways.com/mortgage-calculator/"},
    {"@type":"ListItem","position":3,"name":"Loan Amortization Calculator","url":"https://debtfreepathways.com/loan-amortization-calculator/"},
    {"@type":"ListItem","position":4,"name":"Interest Rate Comparator","url":"https://debtfreepathways.com/interest-rate-comparator/"},
    {"@type":"ListItem","position":5,"name":"Debt Avalanche vs Snowball Calculator","url":"https://debtfreepathways.com/debt-avalanche-vs-snowball/"},
    {"@type":"ListItem","position":6,"name":"Emergency Fund Calculator","url":"https://debtfreepathways.com/emergency-fund-calculator/"}
  ]
});

/* ═══════════════════════════════════════
   MULTI-PAGE AUTO-INIT
   Detect current page from filename and run the right calculator
═══════════════════════════════════════ */
(function() {
  const path = window.location.pathname;
  const pageMap = {
    '/debt-payoff-calculator/': () => dpCalc(),
    '/mortgage-calculator/': () => mgCalc(),
    '/loan-amortization-calculator/': () => laCalc(),
    '/interest-rate-comparator/': () => ircCalc(),
    '/debt-avalanche-vs-snowball/': () => daCalc(),
    '/emergency-fund-calculator/': () => { efResetState(); efCalc(); }
  };
  if (pageMap[path]) {
    try { pageMap[path](); } catch(e) {}
  }
  // Show/hide nav-back button: hide only on home
  const navBack = document.getElementById('nav-back');
  if (navBack) {
    navBack.classList.toggle('show', path !== '/' && path !== '/index.html');
  }
})();
