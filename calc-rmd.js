// IRS Uniform Lifetime Table (Table III), Treas. Reg. §1.401(a)(9)-9, effective 2022+ — unchanged through 2026.
var RMD_TABLE={
  72:27.4,73:26.5,74:25.5,75:24.6,76:23.7,77:22.9,78:22.0,79:21.1,80:20.2,
  81:19.4,82:18.5,83:17.7,84:16.8,85:16.0,86:15.2,87:14.4,88:13.7,89:12.9,
  90:12.2,91:11.5,92:10.8,93:10.1,94:9.5,95:8.9,96:8.4,97:7.8,98:7.3,99:6.8,
  100:6.4,101:6.0,102:5.6,103:5.2,104:4.9,105:4.6,106:4.3,107:4.1,108:3.9,
  109:3.7,110:3.5,111:3.4,112:3.3,113:3.1,114:3.0,115:2.9,116:2.8,117:2.7,
  118:2.5,119:2.3,120:2.0
};

function rmdDivisor(age){
  const a=Math.round(age);
  if(a<=72)return RMD_TABLE[72];
  if(a>=120)return RMD_TABLE[120];
  return RMD_TABLE[a];
}

function rmdCalc(){
  const age=parseFloat(document.getElementById('rmd-current-age').value)||73;
  const balance=parseFloat(document.getElementById('rmd-balance').value)||0;
  const growthRate=(parseFloat(document.getElementById('rmd-growth-rate').value)||5)/100;
  const spouseYounger=document.getElementById('rmd-spouse-switch').classList.contains('on');

  const panel=document.getElementById('rmd-results-panel');
  if(balance<=0||age<73){panel.classList.remove('show');return;}
  panel.classList.add('show');

  const divisor=rmdDivisor(age);
  const thisYearRMD=balance/divisor;
  const pctOfBalance=(thisYearRMD/balance)*100;

  document.getElementById('rmd-m-amount').textContent=fmt(thisYearRMD);
  document.getElementById('rmd-m-divisor').textContent=divisor.toFixed(1);
  document.getElementById('rmd-m-pct').textContent=pctOfBalance.toFixed(1)+'%';

  const spouseNote=document.getElementById('rmd-spouse-note');
  spouseNote.style.display=spouseYounger?'block':'none';

  const banner=document.getElementById('rmd-target-banner');
  const bannerLabel=document.getElementById('rmd-target-label');
  const bannerSub=document.getElementById('rmd-target-sub');
  banner.classList.add('show');
  bannerLabel.textContent='📋 This year\'s RMD: '+fmt(thisYearRMD);
  bannerSub.textContent='Based on a prior year-end balance of '+fmt(balance)+' divided by a distribution period of '+divisor.toFixed(1)+' for age '+Math.round(age)+'.';
  banner.style.background='rgba(26,111,232,.10)';
  banner.style.borderColor='rgba(26,111,232,.22)';
  bannerLabel.style.color='#1A6FE8';
  bannerSub.style.color='#3D4460';

  // --- Projection table: next 10 years ---
  const tbody=document.getElementById('rmd-projection-body');
  let rows='';
  let curBalance=balance;
  let curAge=Math.round(age);
  for(let i=0;i<10;i++){
    const div=rmdDivisor(curAge);
    const rmdAmt=curBalance/div;
    const pct=(rmdAmt/curBalance)*100;
    rows+='<tr><td class="label-cell">Age '+curAge+'</td><td>'+fmt(curBalance)+'</td><td>'+div.toFixed(1)+'</td><td>'+fmt(rmdAmt)+'</td><td>'+pct.toFixed(1)+'%</td></tr>';
    // Balance after RMD, grown at expected rate for next year's projection
    const remaining=curBalance-rmdAmt;
    curBalance=Math.max(0,remaining*(1+growthRate));
    curAge+=1;
  }
  tbody.innerHTML=rows;

  // --- Sidebar summary ---
  document.getElementById('rmd-sw-amount').textContent=fmt(thisYearRMD);
  document.getElementById('rmd-sw-divisor').textContent=divisor.toFixed(1);
  document.getElementById('rmd-sw-pct').textContent=pctOfBalance.toFixed(1)+'%';
}

function rmdToggleSpouse(){
  const sw=document.getElementById('rmd-spouse-switch');
  sw.classList.toggle('on');
  rmdCalc();
}

function rmdUpdateSlider(id,valId,suffix){const el=document.getElementById(id);const val=document.getElementById(valId);const pct=(el.value-el.min)/(el.max-el.min)*100;el.style.setProperty('--pct',pct+'%');val.textContent=el.value+suffix;}

document.addEventListener('DOMContentLoaded',function(){
  ['rmd-growth-rate'].forEach(function(id){
    const el=document.getElementById(id);
    if(el){const pct=(el.value-el.min)/(el.max-el.min)*100;el.style.setProperty('--pct',pct+'%');}
  });
  if(document.getElementById('rmd-current-age'))rmdCalc();
});
