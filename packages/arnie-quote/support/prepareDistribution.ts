#!/usr/bin/env -S npx ts-node

import * as path from 'path';
import { copyFileIfExistsSync, updateFileSync } from './common';

export function prepareDistribution() {
  const rootPath = path.dirname(__dirname);
  const distPath = path.join(rootPath, 'dist');

  // Copy package.json into dist, then update it
  const packageJsonFileName = path.join(rootPath, 'package.json');
  const distPackageJsonFileName = path.join(distPath, 'package.json');
  copyFileIfExistsSync(packageJsonFileName, distPackageJsonFileName);
  updateFileSync(distPackageJsonFileName, content => {
    const pkg = JSON.parse(content);
    delete pkg.private;
    delete pkg.scripts;
    delete pkg.devDependencies;
    pkg.main = pkg.main.replace(/^src\//, '').replace(/\.ts$/, '.js');
    pkg.types = pkg.types.replace(/^src\//, '');
    return JSON.stringify(pkg, null, '  ');
  });

  // Copy README into dist
  copyFileIfExistsSync(path.join(rootPath, 'README.md'), path.join(distPath, 'README.md'));

  // Copy CHANGE_LOG into dist
  copyFileIfExistsSync(path.join(rootPath, 'CHANGELOG.md'), path.join(distPath, 'CHANGELOG.md'));
}

if (!module.parent) {
  prepareDistribution();
}
