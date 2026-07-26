let swlInflationOn = true;
let swlAgeOn = true;

function swlToggleInflation() {
  swlInflationOn = !swlInflationOn;
  document.getElementById('swl-inflation-switch').classList.toggle('on', swlInflationOn);
  document.getElementById('swl-inflation-row').classList.toggle('show', swlInflationOn);
  swlCalc();
}

function swlToggleAge() {
  swlAgeOn = !swlAgeOn;
  document.getElementById('swl-age-switch').classList.toggle('on', swlAgeOn);
  document.getElementById('swl-age-row').classList.toggle('show', swlAgeOn);
  swlCalc();
}

function swlUpdateSlider(id, valId, suffix) {
  const el = document.getElementById(id);
  const val = document.getElementById(valId);
  const pct = (el.value - el.min) / (el.max - el.min) * 100;
  el.style.setProperty('--pct', pct + '%');
  val.textContent = el.value + suffix;
}

// Returns {months, depleted, milestones[{year,balance}]} for a given return rate.
function swlSimulate(P, W, annualReturn, inflationOn, inflationRate, capMonths) {
  const monthlyReturn = annualReturn / 12;
  let balance = P;
  let withdrawal = W;
  const milestones = [];
  let month = 0;
  while (balance > 0 && month < capMonths) {
    balance = balance * (1 + monthlyReturn) - withdrawal;
    month++;
    if (month % 60 === 0) milestones.push({ year: month / 12, balance: Math.max(0, balance) });
    if (inflationOn && month % 12 === 0) withdrawal *= (1 + inflationRate);
  }
  return { months: month, depleted: balance <= 0, milestones };
}

function swlCalc() {
  const P = parseFloat(document.getElementById('swl-balance').value) || 0;
  const W = parseFloat(document.getElementById('swl-withdrawal').value) || 0;
  const returnRate = (parseFloat(document.getElementById('swl-return-rate').value) || 5) / 100;
  const inflationRate = swlInflationOn ? (parseFloat(document.getElementById('swl-inflation-rate').value) || 3) / 100 : 0;
  const currentAge = swlAgeOn ? (parseFloat(document.getElementById('swl-current-age').value) || 65) : null;

  const panel = document.getElementById('swl-results-panel');
  if (P <= 0 || W <= 0) { panel.classList.remove('show'); return; }
  panel.classList.add('show');

  const CAP = 1200; // 100 years
  const main = swlSimulate(P, W, returnRate, swlInflationOn, inflationRate, CAP);

  const neverRuns = !main.depleted;
  document.getElementById('swl-m-duration').textContent = neverRuns ? '100+ yrs' : fmtM(main.months);

  if (currentAge !== null) {
    document.getElementById('swl-m-age-label').textContent = 'Age when funds run out';
    if (neverRuns) {
      document.getElementById('swl-m-age').textContent = '—';
    } else {
      const ageOut = currentAge + main.months / 12;
      document.getElementById('swl-m-age').textContent = Math.floor(ageOut);
    }
  } else {
    document.getElementById('swl-m-age-label').textContent = 'Add your age to see this';
    document.getElementById('swl-m-age').textContent = '—';
  }

  const initialWithdrawalRate = P > 0 ? (W * 12 / P) * 100 : 0;
  document.getElementById('swl-m-rate').textContent = initialWithdrawalRate.toFixed(1) + '%';

  // Banner: compare vs 4% rule
  const banner = document.getElementById('swl-rate-banner');
  const bannerLabel = document.getElementById('swl-rate-label');
  const bannerSub = document.getElementById('swl-rate-sub');
  const bannerVal = document.getElementById('swl-rate-val');
  bannerVal.textContent = initialWithdrawalRate.toFixed(1) + '%';
  if (initialWithdrawalRate <= 4.2) {
    banner.style.background = '#f0fff4';
    bannerLabel.textContent = 'Within the traditional 4% guideline';
    bannerLabel.style.color = '#166534';
    bannerVal.style.color = '#166534';
    bannerSub.textContent = 'Your starting withdrawal rate is at or below the commonly used 4% benchmark for a multi-decade retirement.';
  } else if (initialWithdrawalRate <= 6) {
    banner.style.background = '#fff7ed';
    bannerLabel.textContent = 'Above the traditional 4% guideline';
    bannerLabel.style.color = '#9a3412';
    bannerVal.style.color = '#9a3412';
    bannerSub.textContent = 'This withdrawal rate is higher than the standard benchmark — reasonable for a shorter time horizon, riskier for a long one.';
  } else {
    banner.style.background = '#fef2f2';
    bannerLabel.textContent = 'Well above the traditional 4% guideline';
    bannerLabel.style.color = '#b91c1c';
    bannerVal.style.color = '#b91c1c';
    bannerSub.textContent = 'At this rate, your savings are being drawn down quickly relative to standard long-retirement benchmarks.';
  }

  // Scenario comparison: conservative / moderate / optimistic return assumptions
  const scenarios = [
    { label: 'Conservative (2%)', rate: 0.02 },
    { label: 'Moderate (5%)', rate: 0.05 },
    { label: 'Optimistic (7%)', rate: 0.07 },
  ];
  const tbody = document.getElementById('swl-scenario-body');
  tbody.innerHTML = '';
  scenarios.forEach(s => {
    const r = swlSimulate(P, W, s.rate, swlInflationOn, inflationRate, CAP);
    const durationText = r.depleted ? fmtM(r.months) : '100+ yrs';
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${s.label}</td><td style="font-weight:600">${durationText}</td>`;
    tbody.appendChild(tr);
  });

  // Milestones (from main scenario)
  const milestoneList = document.getElementById('swl-milestones');
  milestoneList.innerHTML = '';
  if (main.milestones.length === 0) {
    milestoneList.innerHTML = '<div style="color:var(--gray-500);font-size:0.9rem">Your balance is projected to be depleted before the 5-year mark.</div>';
  } else {
    main.milestones.slice(0, 8).forEach(m => {
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--gray-100)';
      row.innerHTML = `<span class="stat-row-label" style="max-width:none">Year ${m.year}</span><span class="stat-row-val">${fmt(m.balance)}</span>`;
      milestoneList.appendChild(row);
    });
  }
}
