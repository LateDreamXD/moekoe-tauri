import { resolve } from 'path';

const corePath = process.cwd();
const timer = Date.now();
console.log('start patching...');

require(resolve(corePath, '../bin/patches/extensionMgr.ts'));
require(resolve(corePath, '../bin/patches/package.ts'));

console.log(`patching completed in ${Date.now() - timer}ms`);
