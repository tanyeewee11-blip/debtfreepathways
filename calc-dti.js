function dtiCalc() {
  const income = parseFloat(document.getElementById('dti-income').value) || 0;
  const housing = parseFloat(document.getElementById('dti-housing').value) || 0;
  const car = parseFloat(document.getElementById('dti-car').value) || 0;
  const student = parseFloat(document.getElementById('dti-student').value) || 0;
  const cc = parseFloat(document.getElementById('dti-cc').value) || 0;
  const other = parseFloat(document.getElementById('dti-other').value) || 0;

  const panel = document.getElementById('dti-results-panel');
  if (income <= 0) { panel.classList.remove('show'); return; }
  panel.classList.add('show');

  const totalDebt = housing + car + student + cc + other;
  const ratio = totalDebt / income * 100;
  const frontEndRatio = housing / income * 100;

  document.getElementById('dti-m-ratio').textContent = ratio.toFixed(1) + '%';
  document.getElementById('dti-m-debt').textContent = fmt(totalDebt) + '/mo';
  document.getElementById('dti-m-front').textContent = frontEndRatio.toFixed(1) + '%';

  const banner = document.getElementById('dti-tier-banner');
  const label = document.getElementById('dti-tier-label');
  const sub = document.getElementById('dti-tier-sub');
  const val = document.getElementById('dti-tier-val');
  val.textContent = ratio.toFixed(1) + '%';

  let tier, color, bg, text;
  if (ratio <= 20) {
    tier = 'Excellent'; color = '#166534'; bg = '#f0fff4';
    text = 'A DTI this low typically qualifies for the best rates and terms across nearly any loan program.';
  } else if (ratio <= 36) {
    tier = 'Good'; color = '#166534'; bg = '#f0fff4';
    text = 'This is within the conservative 36% guideline most conventional lenders prefer to see.';
  } else if (ratio <= 43) {
    tier = 'Borderline'; color = '#9a3412'; bg = '#fff7ed';
    text = 'This is above the conservative guideline but often still within range for FHA and other flexible loan programs (up to 43-45%).';
  } else {
    tier = 'High'; color = '#b91c1c'; bg = '#fef2f2';
    text = 'This is above most standard lending guidelines. Paying down existing debt would meaningfully improve approval odds and terms.';
  }
  label.textContent = tier + ' DTI';
  label.style.color = color;
  val.style.color = color;
  banner.style.background = bg;
  sub.textContent = text;

  // Breakdown bars
  const items = [
    { label: 'Housing (rent/mortgage)', v: housing },
    { label: 'Car loan(s)', v: car },
    { label: 'Student loans', v: student },
    { label: 'Credit card minimums', v: cc },
    { label: 'Other loans', v: other },
  ].filter(i => i.v > 0);
  const breakdown = document.getElementById('dti-breakdown');
  breakdown.innerHTML = '';
  items.forEach(item => {
    const pct = totalDebt > 0 ? (item.v / totalDebt * 100) : 0;
    const row = document.createElement('div');
    row.style.cssText = 'margin-bottom:12px';
    row.innerHTML = `
      <div style="display:flex;justify-content:space-between;font-size:0.85rem;margin-bottom:4px">
        <span style="color:var(--gray-600)">${item.label}</span>
        <span style="font-weight:600;color:var(--gray-800)">${fmt(item.v)}/mo</span>
      </div>
      <div style="height:8px;background:var(--gray-100);border-radius:99px;overflow:hidden">
        <div style="height:100%;width:${pct}%;background:#1A6FE8;border-radius:99px"></div>
      </div>`;
    breakdown.appendChild(row);
  });

  // Threshold comparison table
  const tbody = document.getElementById('dti-threshold-body');
  const thresholds = [
    { label: 'Conventional loans', max: 36 },
    { label: 'FHA loans', max: 43 },
    { label: 'Some VA / flexible programs', max: 50 },
  ];
  tbody.innerHTML = '';
  thresholds.forEach(t => {
    const fits = ratio <= t.max;
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${t.label} (up to ${t.max}%)</td><td style="font-weight:600;color:${fits ? 'var(--green-dark,#09a06a)' : 'var(--red,#e84040)'}">${fits ? 'Within range' : 'Above range'}</td>`;
    tbody.appendChild(tr);
  });
}
