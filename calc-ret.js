function retToggleSS(){retSSOn=!retSSOn;document.getElementById('ret-ss-switch').classList.toggle('on',retSSOn);document.getElementById('ret-ss-row').classList.toggle('show',retSSOn);retCalc();}

function retUpdateSlider(id,valId,suffix){const el=document.getElementById(id);const val=document.getElementById(valId);const pct=(el.value-el.min)/(el.max-el.min)*100;el.style.setProperty('--pct',pct+'%');val.textContent=el.value+suffix;}

function retFV(P,PMT,annualRate,years){const n=Math.max(0,Math.round(years*12));const rm=annualRate/12;if(n===0)return P;if(Math.abs(rm)<1e-9){return P+PMT*n;}const growth=Math.pow(1+rm,n);return P*growth+PMT*((growth-1)/rm);}

function retCalc(){
  const curAge=parseFloat(document.getElementById('ret-current-age').value)||30;
  const retAge=parseFloat(document.getElementById('ret-retire-age').value)||65;
  const years=Math.max(0,retAge-curAge);
  const P=parseFloat(document.getElementById('ret-current-savings').value)||0;
  const PMT=parseFloat(document.getElementById('ret-monthly-contribution').value)||0;
  const returnRate=(parseFloat(document.getElementById('ret-return-rate').value)||7)/100;
  const inflation=(parseFloat(document.getElementById('ret-inflation-rate').value)||3)/100;
  const withdrawalRate=(parseFloat(document.getElementById('ret-withdrawal-rate').value)||4)/100;
  const monthlySpendToday=parseFloat(document.getElementById('ret-monthly-spending').value)||0;
  const ssMonthlyToday=retSSOn?(parseFloat(document.getElementById('ret-ss-monthly').value)||0):0;

  const panel=document.getElementById('ret-results-panel');
  if(years<=0||monthlySpendToday<=0){panel.classList.remove('show');return;}
  panel.classList.add('show');

  // Projected nest egg (future dollars) via future value of savings + contributions
  const FV=retFV(P,PMT,returnRate,years);
  const totalContributions=P+PMT*years*12;
  const totalGrowth=Math.max(0,FV-totalContributions);
  const inflationFactor=Math.pow(1+inflation,years);
  const FVToday=FV/inflationFactor;

  // Required portfolio, computed directly in today's dollars (inflation cancels out)
  const annualSpendToday=monthlySpendToday*12;
  const annualSSToday=ssMonthlyToday*12;
  const netAnnualNeedToday=Math.max(0,annualSpendToday-annualSSToday);
  const requiredPortfolioToday=netAnnualNeedToday/withdrawalRate;
  const requiredPortfolioFuture=requiredPortfolioToday*inflationFactor;

  const surplusToday=FVToday-requiredPortfolioToday;
  const monthlyIncomeSupportedToday=(FVToday*withdrawalRate)/12;

  // --- Render top metrics ---
  document.getElementById('ret-m-future').textContent=fmt(FV);
  document.getElementById('ret-m-today').textContent=fmt(FVToday);
  document.getElementById('ret-m-years').textContent=years.toFixed(0);

  // --- Target banner ---
  const banner=document.getElementById('ret-target-banner');
  const bannerLabel=document.getElementById('ret-target-label');
  const bannerVal=document.getElementById('ret-target-val');
  const bannerSub=document.getElementById('ret-target-sub');
  banner.classList.add('show');
  if(surplusToday>=0){
    banner.style.background='rgba(13,191,126,.12)';
    banner.style.borderColor='rgba(13,191,126,.25)';
    bannerLabel.style.color='#09a06a';
    bannerVal.style.color='#09a06a';
    bannerLabel.textContent='🎉 On track — projected surplus';
    bannerVal.textContent='+'+fmt(surplusToday);
    bannerSub.style.color='#3D4460';
  }else{
    banner.style.background='#fff0f0';
    banner.style.borderColor='#ffc7c7';
    bannerLabel.style.color='#c0392b';
    bannerVal.style.color='#c0392b';
    bannerLabel.textContent='⚠️ Projected shortfall';
    bannerVal.textContent='-'+fmt(Math.abs(surplusToday));
    bannerSub.style.color='#3D4460';
  }
  bannerSub.textContent='Target needed: '+fmt(requiredPortfolioToday)+' (today\'s dollars) · Projected: '+fmt(FVToday);

  document.getElementById('ret-monthly-income').textContent=fmt(monthlyIncomeSupportedToday)+'/mo';
  document.getElementById('ret-monthly-goal').textContent=fmt(monthlySpendToday)+'/mo';

  // --- Contribution vs growth breakdown ---
  document.getElementById('ret-c-contrib').textContent=fmt(totalContributions);
  document.getElementById('ret-c-growth').textContent=fmt(totalGrowth);
  const contribPct=totalContributions+totalGrowth>0?Math.round(totalContributions/(totalContributions+totalGrowth)*100):0;
  document.getElementById('ret-contrib-bar').style.width=contribPct+'%';
  document.getElementById('ret-growth-bar').style.width=(100-contribPct)+'%';

  // --- Scenario comparison table (withdrawal rate sensitivity) ---
  const scenarios=[{label:'Conservative',rate:0.037},{label:'Standard (4% rule)',rate:0.04},{label:'Confident',rate:0.047}];
  const tbody=document.getElementById('ret-scenario-body');
  tbody.innerHTML=scenarios.map(function(s){
    const req=netAnnualNeedToday/s.rate;
    const diff=FVToday-req;
    const status=diff>=0?'<span style="color:var(--green-dark);font-weight:600">Surplus '+fmt(diff)+'</span>':'<span style="color:#c0392b;font-weight:600">Short '+fmt(Math.abs(diff))+'</span>';
    return '<tr><td class="label-cell">'+s.label+' ('+(s.rate*100).toFixed(1)+'%)</td><td>'+fmt(req)+'</td><td>'+status+'</td></tr>';
  }).join('');

  // --- Milestones every 5 years ---
  const milestoneList=document.getElementById('ret-milestones');
  let milestoneHTML='';
  let checkpoint=5;
  while(checkpoint<years){
    const age=curAge+checkpoint;
    const val=retFV(P,PMT,returnRate,checkpoint);
    milestoneHTML+='<div class="ef-milestone"><div class="ef-milestone-icon">📍</div><div><div class="ef-milestone-label">Age '+age+'</div><div class="ef-milestone-sub">'+checkpoint+' years from now</div></div><div class="ef-milestone-val">'+fmt(val)+'</div></div>';
    checkpoint+=5;
  }
  milestoneHTML+='<div class="ef-milestone"><div class="ef-milestone-icon">🏁</div><div><div class="ef-milestone-label">Age '+retAge+' (retirement)</div><div class="ef-milestone-sub">'+years+' years from now</div></div><div class="ef-milestone-val">'+fmt(FV)+'</div></div>';
  milestoneList.innerHTML=milestoneHTML;

  // --- Sidebar summary ---
  document.getElementById('ret-sw-projected').textContent=fmt(FVToday);
  document.getElementById('ret-sw-target').textContent=fmt(requiredPortfolioToday);
  document.getElementById('ret-sw-income').textContent=fmt(monthlyIncomeSupportedToday)+'/mo';
  document.getElementById('ret-sw-status').textContent=surplusToday>=0?'On track':'Shortfall';
  document.getElementById('ret-sw-status').style.color=surplusToday>=0?'var(--green-dark)':'#c0392b';
}

var retSSOn=false;

document.addEventListener('DOMContentLoaded',function(){
  ['ret-return-rate','ret-inflation-rate','ret-withdrawal-rate'].forEach(function(id){
    const el=document.getElementById(id);
    if(el){const pct=(el.value-el.min)/(el.max-el.min)*100;el.style.setProperty('--pct',pct+'%');}
  });
  retCalc();
});
