#!/usr/bin/env -S npx ts-node

import * as path from 'path';
import { updateFileSync } from './common';
import { prepareDistribution } from './prepareDistribution';

const [, , version] = process.argv;

if (!version) {
  console.error('Version not specified');
  process.exit(1);
}

const rootPath = path.dirname(__dirname);
const packageJsonFileName = path.join(rootPath, 'package.json');

updateFileSync(packageJsonFileName, content => {
  const pkg = JSON.parse(content);
  pkg.version = version;
  return JSON.stringify(pkg, null, '  ');
});

prepareDistribution();
