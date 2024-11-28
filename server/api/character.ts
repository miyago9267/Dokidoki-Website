import { readFileSync } from 'fs';
import { join } from 'path';

export default defineEventHandler(() => {
	const dataPath = join(process.cwd(), 'data', 'character.json');
  return JSON.parse(readFileSync(dataPath, 'utf-8'));
});