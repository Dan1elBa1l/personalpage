const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
const targetDir = path.join(outDir, 'personalpage');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir);
}

const files = fs.readdirSync(outDir);
files.forEach(file => {
  if (file.match(/\.(png|ico)$/)) {
    fs.copyFileSync(path.join(outDir, file), path.join(targetDir, file));
  }
});

console.log('Bilder wurden nach out/personalpage/ kopiert.'); 