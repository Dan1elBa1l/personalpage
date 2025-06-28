const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');

// Prüfe, ob die Bilder im out-Verzeichnis vorhanden sind
const files = fs.readdirSync(outDir);
const imageFiles = files.filter(file => file.match(/\.png$/));

console.log('Verfügbare Bilder im out-Verzeichnis:');
imageFiles.forEach(file => {
  console.log(`- ${file}`);
});

console.log('Bilder sind bereit für das Deployment.'); 