// @ts-nocheck
// cwd is core
import { readFileSync, writeFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));
console.log('patching package.json...');

let originalDevScript = packageJson.scripts.dev.split('&');
if (originalDevScript.length === 3) {
	originalDevScript.pop(); // drop electron dev script
	packageJson.scripts.dev = originalDevScript.join('&').trim();
}

// drop electron and builder
delete packageJson.devDependencies['electron'];
delete packageJson.devDependencies['electron-builder'];

// write back to file
try {
	writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
	console.log('package.json patched successfully');
} catch (err) {
	console.error('error patching package.json:', err);
	process.exit(1);
}

