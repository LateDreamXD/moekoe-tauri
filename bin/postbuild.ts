import { execSync } from 'child_process';
import { resolve } from 'path';

const corePath = resolve(process.cwd(), 'core');
console.log('postbuild running...');

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

execSync(`npm run build:api:${os}`, { cwd: corePath });
console.log(`api server executable builded for ${os}`);

console.log('postbuild completed');
