function fhaUpdateSlider(id, valId, suffix) {
  const el = document.getElementById(id);
  const val = document.getElementById(valId);
  const pct = (el.value - el.min) / (el.max - el.min) * 100;
  el.style.setProperty('--pct', pct + '%');
  val.textContent = el.value + suffix;
}

function amortPayment(principal, annualRate, years) {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (r === 0) return principal / n;
  return principal * r / (1 - Math.pow(1 + r, -n));
}

function fhaCalc() {
  const homePrice = parseFloat(document.getElementById('fha-price').value) || 0;
  const downPct = parseFloat(document.getElementById('fha-down').value) || 3.5;
  const rate = parseFloat(document.getElementById('fha-rate').value) || 6.5;
  const years = parseFloat(document.getElementById('fha-term').value) || 30;

  const panel = document.getElementById('fha-results-panel');
  if (homePrice <= 0) { panel.classList.remove('show'); return; }
  panel.classList.add('show');

  const down = homePrice * downPct / 100;
  const baseLoan = homePrice - down;
  const upfrontMIP = baseLoan * 0.0175;
  const financedLoan = baseLoan + upfrontMIP;
  const monthlyPI = amortPayment(financedLoan, rate, years);
  const annualMIPRate = 0.55;
  const monthlyMIP = baseLoan * annualMIPRate / 100 / 12;
  const totalMonthly = monthlyPI + monthlyMIP;
  const mipLifeOfLoan = downPct < 10;

  document.getElementById('fha-m-payment').textContent = fmt(totalMonthly) + '/mo';
  document.getElementById('fha-m-upfront-mip').textContent = fmt(upfrontMIP);
  document.getElementById('fha-m-loan').textContent = fmt(financedLoan);

  document.getElementById('fha-pi-val').textContent = fmt(monthlyPI) + '/mo';
  document.getElementById('fha-mip-val').textContent = fmt(monthlyMIP) + '/mo';

  const mipNote = document.getElementById('fha-mip-note');
  mipNote.textContent = mipLifeOfLoan
    ? `With less than 10% down, annual MIP applies for the life of the loan unless you refinance out of FHA later.`
    : `With 10% or more down, annual MIP cancels after 11 years.`;

  // Comparison vs conventional loan with PMI (same base loan, no upfront premium financed)
  const convPMIRate = downPct < 20 ? 0.75 : 0; // typical mid-range conventional PMI estimate
  const convMonthlyPI = amortPayment(baseLoan, rate, years);
  const convMonthlyPMI = baseLoan * convPMIRate / 100 / 12;
  const convTotal = convMonthlyPI + convMonthlyPMI;

  const tbody = document.getElementById('fha-compare-body');
  tbody.innerHTML = '';
  const rows = [
    { label: 'FHA loan (this scenario)', pi: monthlyPI, mi: monthlyMIP, total: totalMonthly },
    { label: 'Conventional loan (est. PMI)', pi: convMonthlyPI, mi: convMonthlyPMI, total: convTotal },
  ];
  rows.forEach(r => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${r.label}</td><td>${fmt(r.pi)}</td><td>${fmt(r.mi)}</td><td style="font-weight:600">${fmt(r.total)}/mo</td>`;
    tbody.appendChild(tr);
  });

  const compareNote = document.getElementById('fha-compare-note');
  if (downPct < 20) {
    const diff = totalMonthly - convTotal;
    compareNote.textContent = diff > 0
      ? `In this scenario, the FHA loan runs about ${fmt(Math.abs(diff))}/mo more than an estimated conventional loan with PMI — mainly due to the upfront MIP being financed into the loan.`
      : `In this scenario, the FHA loan runs about ${fmt(Math.abs(diff))}/mo less than an estimated conventional loan with PMI.`;
  } else {
    compareNote.textContent = `At 20% down, a conventional loan wouldn't require PMI at all, while FHA still requires the upfront MIP — conventional is very likely the better option at this down payment level if you qualify.`;
  }
}
