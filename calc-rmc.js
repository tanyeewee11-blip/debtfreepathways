function rmcUpdateSlider(id, valId, suffix) {
  const el = document.getElementById(id);
  const val = document.getElementById(valId);
  const pct = (el.value - el.min) / (el.max - el.min) * 100;
  el.style.setProperty('--pct', pct + '%');
  val.textContent = el.value + suffix;
}

const RMC_ANNUAL_MIP = 0.5; // fixed by FHA, not user-adjustable

function rmcProject(homeValue, loanBalance, rate, appreciation, years) {
  const monthlyGrowth = (rate + RMC_ANNUAL_MIP) / 100 / 12;
  const monthlyApprec = appreciation / 100 / 12;
  let balance = loanBalance;
  let home = homeValue;
  const milestones = [];
  let crossoverYear = null;
  for (let m = 1; m <= years * 12; m++) {
    balance = balance * (1 + monthlyGrowth);
    home = home * (1 + monthlyApprec);
    if (crossoverYear === null && balance >= home) crossoverYear = Math.round(m / 12 * 10) / 10;
    if (m % 60 === 0) {
      milestones.push({ year: m / 12, balance, home, equity: Math.max(0, home - balance) });
    }
  }
  return { milestones, crossoverYear, finalBalance: balance, finalHome: home };
}

function rmcCalc() {
  const homeValue = parseFloat(document.getElementById('rmc-home-value').value) || 0;
  const loanBalance = parseFloat(document.getElementById('rmc-loan-balance').value) || 0;
  const rate = parseFloat(document.getElementById('rmc-rate').value) || 7;
  const appreciation = parseFloat(document.getElementById('rmc-appreciation').value) || 3;

  const panel = document.getElementById('rmc-results-panel');
  if (homeValue <= 0) { panel.classList.remove('show'); return; }
  panel.classList.add('show');

  const YEARS = 25;
  const r = rmcProject(homeValue, loanBalance, rate, appreciation, YEARS);

  // Focus year for the top metric strip: 10 years
  const tenYear = r.milestones.find(m => m.year === 10) || r.milestones[r.milestones.length - 1];
  document.getElementById('rmc-m-balance10').textContent = fmt(tenYear.balance);
  document.getElementById('rmc-m-equity10').textContent = fmt(tenYear.equity);
  document.getElementById('rmc-m-crossover').textContent = r.crossoverYear ? (r.crossoverYear + ' yrs') : `25+ yrs`;

  const note = document.getElementById('rmc-crossover-note');
  if (r.crossoverYear) {
    note.textContent = `At this rate, your loan balance is projected to reach your home's value around year ${r.crossoverYear} — after that point, the non-recourse feature means you or your heirs would never owe more than the home is worth, regardless of how large the balance grows.`;
  } else {
    note.textContent = `At this rate, your loan balance isn't projected to reach your home's full value within 25 years — your estimated equity stays positive throughout this projection.`;
  }

  const tbody = document.getElementById('rmc-milestone-body');
  tbody.innerHTML = '';
  r.milestones.forEach(m => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>Year ${m.year}</td><td>${fmt(m.balance)}</td><td>${fmt(m.home)}</td><td style="font-weight:600;color:${m.equity > 0 ? 'var(--green-dark,#09a06a)' : 'var(--red,#e84040)'}">${fmt(m.equity)}</td>`;
    tbody.appendChild(tr);
  });
}
