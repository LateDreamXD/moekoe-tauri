import { execSync } from 'child_process';
import { resolve } from 'path';

const corePath = resolve(process.cwd(), 'core');
const timer = Date.now();
console.log('start building...');
execSync('pnpm build', { cwd: corePath });
console.log(`build webui completed in ${Date.now() - timer}ms`);
