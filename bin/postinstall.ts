import { execSync } from 'child_process';
import { resolve } from 'path';

const corePath = resolve(process.cwd(), 'core');
const timer = Date.now();
console.log('running postinstall...');

execSync('git submodule update --init --recursive', { cwd: corePath });
execSync('npm run install-all', { cwd: corePath });

console.log(`postinstall completed in ${Date.now() - timer}ms`);
