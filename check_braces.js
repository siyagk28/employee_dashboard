const fs = require('fs');
const lines = fs.readFileSync('c:\\Users\\aditi\\Documents\\SiyaK\\employee_dashboard\\employee-dashboard\\src\\Components\\Dashboard.jsx', 'utf8').split('\n');
let count = 0;
lines.forEach((line, i) => {
  const opens = (line.match(/\{/g) || []).length;
  const closes = (line.match(/\}/g) || []).length;
  const prev = count;
  count += opens - closes;
  if (opens !== 0 || closes !== 0) {
    console.log(`Line ${i+1}: ${opens} opens, ${closes} closes, running: ${prev} -> ${count}`);
  }
});
console.log(`Final count: ${count}`);
