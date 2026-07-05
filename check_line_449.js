const fs = require('fs');
const lines = fs.readFileSync('c:\\Users\\aditi\\Documents\\SiyaK\\employee_dashboard\\employee-dashboard\\src\\Components\\Dashboard.jsx', 'utf8').split('\n');
const line = lines[448]; // Line 449 (0-indexed)
console.log('Line 449:', line);
const opens = (line.match(/\{/g) || []).length;
const closes = (line.match(/\}/g) || []).length;
console.log(`Opens: ${opens}, Closes: ${closes}`);
