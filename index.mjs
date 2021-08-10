import { generateFonts } from 'fantasticon';

generateFonts({
  inputDir: './icons', // (required)
  outputDir: './dist', // (required)
}).then(results => console.log(results));
