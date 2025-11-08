import { resolve } from 'node:path';
import copy from 'bun-copy-plugin';

const projectDir = import.meta.dir;
const srcDir = resolve(projectDir, 'src');
const distDir = resolve(projectDir, 'dist');

export default {
  entrypoints: [resolve(srcDir, 'index.jsx'), resolve(srcDir, 'info.jsx')],
  plugins: [copy(`${resolve(Bun.resolveSync('vditor', projectDir), '..')}/`, resolve(distDir, 'vditor/dist'))],
};
