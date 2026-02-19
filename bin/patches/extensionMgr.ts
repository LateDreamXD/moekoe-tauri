import { readFileSync, writeFileSync } from 'fs';

const originalRawtext = readFileSync('./src/components/ExtensionManager.vue', 'utf-8');

const patchedRawtext = originalRawtext.replace("{{ t('web-cha-jian-ti-shi') }}", '当前版本暂不支持插件');

try { writeFileSync('./src/components/ExtensionManager.vue', patchedRawtext); }
catch { /** do noth. */ }
