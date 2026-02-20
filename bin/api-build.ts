import { execSync } from 'child_process';
import { resolve } from 'path';

const timer = Date.now();
const apiPath = resolve(process.cwd(), 'core/api');

const os = (() => {switch (process.platform) {
	case 'win32':
		return 'win';
	case 'linux':
		if (process.arch === 'arm64')
			return 'linux-arm64';
		return 'linux';
	case 'darwin':
		return 'macos';
	default:
		throw new Error(`unsupported platform: '${process.platform}'`);
}})();

console.log(`building api server for ${os}...`);

execSync(`npm run pkg${os}`, { cwd: apiPath });
console.log(`api server build completed in ${Date.now() - timer}ms`);
