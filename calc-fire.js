function fireUpdateSlider(id,valId,suffix){const el=document.getElementById(id);const val=document.getElementById(valId);const pct=(el.value-el.min)/(el.max-el.min)*100;el.style.setProperty('--pct',pct+'%');val.textContent=el.value+suffix;}

function fireFV(P,PMT,annualRate,years){const n=Math.max(0,Math.round(years*12));const rm=annualRate/12;if(n===0)return P;if(Math.abs(rm)<1e-9){return P+PMT*n;}const growth=Math.pow(1+rm,n);return P*growth+PMT*((growth-1)/rm);}

// Solve for years needed to reach a target future value, given monthly compounding.
function fireYearsToTarget(P,PMT,annualRate,target){
  if(target<=P)return 0;
  const rm=annualRate/12;
  if(Math.abs(rm)<1e-9){
    if(PMT<=0)return Infinity;
    const n=(target-P)/PMT;
    return n/12;
  }
  const denom=P*rm+PMT;
  if(denom<=0)return Infinity;
  const g=(target*rm+PMT)/denom;
  if(g<=1)return 0;
  const n=Math.log(g)/Math.log(1+rm);
  return n/12;
}

function fireCalc(){
  const curAge=parseFloat(document.getElementById('fire-current-age').value)||30;
  const P=parseFloat(document.getElementById('fire-current-assets').value)||0;
  const PMT=parseFloat(document.getElementById('fire-monthly-contribution').value)||0;
  const annualSpendToday=parseFloat(document.getElementById('fire-annual-spending').value)||0;
  const returnRate=(parseFloat(document.getElementById('fire-return-rate').value)||7)/100;
  const withdrawalRate=(parseFloat(document.getElementById('fire-withdrawal-rate').value)||4)/100;

  const panel=document.getElementById('fire-results-panel');
  if(annualSpendToday<=0){panel.classList.remove('show');return;}
  panel.classList.add('show');

  const fireNumber=annualSpendToday/withdrawalRate;
  const yearsToFire=fireYearsToTarget(P,PMT,returnRate,fireNumber);
  const fireAge=isFinite(yearsToFire)?Math.round((curAge+yearsToFire)*10)/10:null;
  const progressPct=fireNumber>0?Math.min(100,Math.round((P/fireNumber)*1000)/10):0;

  document.getElementById('fire-m-number').textContent=fmt(fireNumber);
  document.getElementById('fire-m-years').textContent=isFinite(yearsToFire)?yearsToFire.toFixed(1):'—';
  document.getElementById('fire-m-age').textContent=fireAge!==null?fireAge:'—';

  const bar=document.getElementById('fire-progress-bar');
  const barLabel=document.getElementById('fire-progress-label');
  bar.style.width=progressPct+'%';
  barLabel.textContent=progressPct+'% of the way to your FIRE number';

  const banner=document.getElementById('fire-target-banner');
  const bannerLabel=document.getElementById('fire-target-label');
  const bannerSub=document.getElementById('fire-target-sub');
  banner.classList.add('show');
  if(isFinite(yearsToFire)){
    bannerLabel.textContent='🔥 Your FIRE number: '+fmt(fireNumber);
    if(yearsToFire<0.05){
      bannerSub.textContent='Your current assets already meet or exceed this number — you\'ve effectively reached FIRE at this spending level.';
    }else{
      bannerSub.textContent='At this savings rate and return, you could reach it in about '+yearsToFire.toFixed(1)+' years — around age '+fireAge+'.';
    }
    banner.style.background='rgba(13,191,126,.12)';
    banner.style.borderColor='rgba(13,191,126,.25)';
    bannerLabel.style.color='#09a06a';
    bannerSub.style.color='#3D4460';
  }else{
    bannerLabel.textContent='🔥 Your FIRE number: '+fmt(fireNumber);
    bannerSub.textContent='At your current contribution rate, this number is not reachable through savings and growth alone — try increasing your monthly contribution.';
    banner.style.background='#fff0f0';
    banner.style.borderColor='#ffc7c7';
    bannerLabel.style.color='#c0392b';
    bannerSub.style.color='#3D4460';
  }

  // --- FIRE variant comparison table ---
  const scenarios=[
    {label:'Lean FIRE',spend:40000},
    {label:'Your number',spend:annualSpendToday},
    {label:'Fat FIRE',spend:100000}
  ];
  const tbody=document.getElementById('fire-scenario-body');
  tbody.innerHTML=scenarios.map(function(s){
    const num=s.spend/withdrawalRate;
    const yrs=fireYearsToTarget(P,PMT,returnRate,num);
    const yrsLabel=isFinite(yrs)?yrs.toFixed(1)+' yrs':'—';
    const highlight=s.label==='Your number'?' style="background:rgba(13,191,126,.06)"':'';
    return '<tr'+highlight+'><td class="label-cell">'+s.label+' ('+fmt(s.spend)+'/yr)</td><td>'+fmt(num)+'</td><td>'+yrsLabel+'</td></tr>';
  }).join('');

  // --- Milestones every 5 years until FIRE ---
  const milestoneList=document.getElementById('fire-milestones');
  let milestoneHTML='';
  if(isFinite(yearsToFire)&&yearsToFire>0){
    let checkpoint=5;
    while(checkpoint<yearsToFire){
      const age=curAge+checkpoint;
      const val=fireFV(P,PMT,returnRate,checkpoint);
      milestoneHTML+='<div class="ef-milestone"><div class="ef-milestone-icon">📍</div><div><div class="ef-milestone-label">Age '+age.toFixed(0)+'</div><div class="ef-milestone-sub">'+checkpoint+' years from now</div></div><div class="ef-milestone-val">'+fmt(val)+'</div></div>';
      checkpoint+=5;
    }
    milestoneHTML+='<div class="ef-milestone"><div class="ef-milestone-icon">🔥</div><div><div class="ef-milestone-label">Age '+fireAge+' (FIRE)</div><div class="ef-milestone-sub">'+yearsToFire.toFixed(1)+' years from now</div></div><div class="ef-milestone-val">'+fmt(fireNumber)+'</div></div>';
  }else{
    milestoneHTML='<div class="ef-milestone"><div class="ef-milestone-icon">⚠️</div><div><div class="ef-milestone-label">Not currently reachable</div><div class="ef-milestone-sub">Increase your monthly contribution or expected return</div></div></div>';
  }
  milestoneList.innerHTML=milestoneHTML;

  // --- Sidebar summary ---
  document.getElementById('fire-sw-number').textContent=fmt(fireNumber);
  document.getElementById('fire-sw-years').textContent=isFinite(yearsToFire)?yearsToFire.toFixed(1)+' yrs':'—';
  document.getElementById('fire-sw-progress').textContent=progressPct+'%';
}

document.addEventListener('DOMContentLoaded',function(){
  ['fire-return-rate','fire-withdrawal-rate'].forEach(function(id){
    const el=document.getElementById(id);
    if(el){const pct=(el.value-el.min)/(el.max-el.min)*100;el.style.setProperty('--pct',pct+'%');}
  });
  if(document.getElementById('fire-current-age'))fireCalc();
});
