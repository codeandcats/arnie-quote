import * as fs from 'fs';

export function updateFileSync(fileName: string, transform: (content: string) => string): void {
  const content = fs.readFileSync(fileName, 'utf-8');
  const updatedContent = transform(content);
  fs.writeFileSync(fileName, updatedContent, 'utf-8');
}

export function copyFileIfExistsSync(fromFileName: string, toFileName: string) {
  if (fs.existsSync(fromFileName)) {
    fs.copyFileSync(fromFileName, toFileName);
  }
}
