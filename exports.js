import * as fs  from 'fs';
// import { readFileSync } from 'fs';
const sowpods = fs.readFileSync('sowpods.txt','utf-8');
export const sowWords = sowpods.split('\n');

