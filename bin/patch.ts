import { resolve } from 'path';
import { readdirSync } from 'fs';
import { execSync } from 'child_process';

const corePath = resolve(process.cwd(), 'core');
const timer = Date.now();
console.log('appling patches...');

try {
	for (const path of readdirSync(resolve(process.cwd(), 'patches'))) {
		const patchFilePath = resolve(process.cwd(), 'patches', path);
		execSync(`git apply ${patchFilePath}`, { cwd: corePath });
	}
	console.log(`patches applied in ${Date.now() - timer}ms`);
} catch (error) {
	console.error('error applying patches:', error);
	process.exit(1);
}

