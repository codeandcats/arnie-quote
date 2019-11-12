#!/usr/bin/env -S npx ts-node

import * as path from 'path';
import { updateFileSync } from './common';

const rootPath = path.dirname(__dirname);
const distPath = path.join(rootPath, 'dist');

// Strip out fields
updateFileSync(path.join(distPath, 'package.json'), content => {
  const pkg = JSON.parse(content);
  delete pkg.private;
  delete pkg.scripts;
  delete pkg.devDependencies;
  pkg.main = pkg.main.replace(/^src\//, '').replace(/\.ts$/, '.js');
  pkg.types = pkg.types.replace(/^src\//, '');
  return JSON.stringify(pkg, null, '  ');
});
