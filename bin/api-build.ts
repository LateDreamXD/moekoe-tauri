import { existsSync, renameSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import { execSync } from 'child_process';

const timer = Date.now();
let platform: string;

switch (process.platform) {
	case 'win32':
		platform = 'win';
		break;
	case 'linux':
		if (process.arch === 'arm64')
			platform = 'linux-arm64';
		else
			platform = 'linux';
		break;
	case 'darwin':
		platform = 'macos';
		break;
	default:
		throw new Error(`unsupported platform: ${process.platform}`);
}

console.log(`building api for ${platform}...`);

try {
	const apiPath = resolve(process.cwd(), 'core', 'api');

	const ext = platform === 'win' ? '.exe' : '';
	const apiBinName = `app_${platform}${process.arch === 'arm64' ? '-arm64' : ''}${ext}`;
	const rustInfo = execSync('rustc -vV');
	// @ts-ignore
	const targetTriple = /host: (\S+)/g.exec(rustInfo)[1];
	if (!targetTriple)
		console.error('无法确定平台目标三元组');
	try {
		mkdirSync(resolve(process.cwd(), 'src-tauri/binaries'), { recursive: true });
	} catch { /** just ignore */ }

	if(!existsSync(resolve(process.cwd(), `src-tauri/binaries/api-${targetTriple}${ext}`))) {
		execSync(`npm run pkg${platform}`, { cwd: apiPath });
		renameSync(resolve(apiPath, 'bin', apiBinName), resolve(process.cwd(), `src-tauri/binaries/api-${targetTriple}${ext}`));
	}
	console.log(`api for ${platform} built in ${Date.now() - timer}ms`);
} catch (error) {
	console.error(`error building api for ${platform}:`, error);
	process.exit(1);
}