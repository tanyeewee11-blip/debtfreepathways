let hacFrontEnd = 28;
let hacBackEnd = 36;

function hacUpdateSlider(id, valId, suffix) {
  const el = document.getElementById(id);
  const val = document.getElementById(valId);
  const pct = (el.value - el.min) / (el.max - el.min) * 100;
  el.style.setProperty('--pct', pct + '%');
  val.textContent = el.value + suffix;
}

// Core affordability math: solves for max home price given a max monthly
// housing payment budget, down payment, and financing/tax/insurance inputs.
function hacSolve(maxHousing, downPayment, rate, termYears, taxRate, annualIns, hoa) {
  const r = rate / 100 / 12;
  const n = termYears * 12;
  const factor = r === 0 ? 1 / n : r / (1 - Math.pow(1 + r, -n));
  const insMonthly = annualIns / 12;
  const denom = factor + (taxRate / 100 / 12);
  let price = (maxHousing + downPayment * factor - insMonthly - hoa) / denom;
  price = Math.max(downPayment, price);
  const loan = price - downPayment;
  const PI = loan * factor;
  const tax = price * taxRate / 100 / 12;
  return { price, loan, PI, tax, insMonthly, hoa };
}

function hacCalc() {
  const annualIncome = parseFloat(document.getElementById('hac-income').value) || 0;
  const monthlyDebts = parseFloat(document.getElementById('hac-debts').value) || 0;
  const downPayment = parseFloat(document.getElementById('hac-down').value) || 0;
  const rate = parseFloat(document.getElementById('hac-rate').value) || 6.5;
  const termYears = parseFloat(document.getElementById('hac-term').value) || 30;
  const taxRate = parseFloat(document.getElementById('hac-tax').value) || 1.1;
  const annualIns = parseFloat(document.getElementById('hac-ins').value) || 1500;
  const hoa = parseFloat(document.getElementById('hac-hoa').value) || 0;

  const panel = document.getElementById('hac-results-panel');
  if (annualIncome <= 0) { panel.classList.remove('show'); return; }
  panel.classList.add('show');

  const monthlyIncome = annualIncome / 12;
  const maxFront = monthlyIncome * hacFrontEnd / 100;
  const maxBack = monthlyIncome * hacBackEnd / 100 - monthlyDebts;
  const maxHousing = Math.max(0, Math.min(maxFront, maxBack));
  const binding = maxFront < maxBack ? 'front' : 'back';

  const r = hacSolve(maxHousing, downPayment, rate, termYears, taxRate, annualIns, hoa);

  document.getElementById('hac-m-price').textContent = fmt(r.price);
  document.getElementById('hac-m-payment').textContent = fmt(maxHousing) + '/mo';
  document.getElementById('hac-m-loan').textContent = fmt(r.loan);

  const bindingNote = document.getElementById('hac-binding-note');
  if (monthlyIncome > 0) {
    bindingNote.textContent = binding === 'front'
      ? `Limited by the 28% housing-payment guideline (your other debts aren't the constraint here).`
      : `Limited by the ${hacBackEnd}% total-debt guideline — your existing monthly debts are reducing how much house you can afford.`;
  }

  // Payment breakdown bars
  const total = r.PI + r.tax + r.insMonthly + r.hoa;
  const items = [
    { label: 'Principal & interest', val: r.PI, color: '#0DBF7E' },
    { label: 'Property tax', val: r.tax, color: '#1A6FE8' },
    { label: 'Home insurance', val: r.insMonthly, color: '#F5A623' },
  ];
  if (r.hoa > 0) items.push({ label: 'HOA', val: r.hoa, color: '#8B5CF6' });

  const breakdown = document.getElementById('hac-breakdown');
  breakdown.innerHTML = '';
  items.forEach(item => {
    const pct = total > 0 ? (item.val / total * 100) : 0;
    const row = document.createElement('div');
    row.style.cssText = 'margin-bottom:12px';
    row.innerHTML = `
      <div style="display:flex;justify-content:space-between;font-size:0.85rem;margin-bottom:4px">
        <span style="color:var(--gray-600)">${item.label}</span>
        <span style="font-weight:600;color:var(--gray-800)">${fmt(item.val)}/mo</span>
      </div>
      <div style="height:8px;background:var(--gray-100);border-radius:99px;overflow:hidden">
        <div style="height:100%;width:${pct}%;background:${item.color};border-radius:99px"></div>
      </div>`;
    breakdown.appendChild(row);
  });

  // Scenario comparison: conservative / standard / aggressive DTI assumptions
  const scenarios = [
    { label: 'Conservative (28/36)', front: 28, back: 36 },
    { label: 'Standard (31/43, FHA-style)', front: 31, back: 43 },
    { label: 'Aggressive (33/45)', front: 33, back: 45 },
  ];
  const tbody = document.getElementById('hac-scenario-body');
  tbody.innerHTML = '';
  scenarios.forEach(s => {
    const mf = monthlyIncome * s.front / 100;
    const mb = monthlyIncome * s.back / 100 - monthlyDebts;
    const mh = Math.max(0, Math.min(mf, mb));
    const sr = hacSolve(mh, downPayment, rate, termYears, taxRate, annualIns, hoa);
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${s.label}</td><td style="font-weight:600">${fmt(sr.price)}</td>`;
    tbody.appendChild(tr);
  });
}
