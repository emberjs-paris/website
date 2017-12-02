const fs = require('fs');

const headers = process.argv.slice(2).join(' ');
const filename = './public/netlify.headers';

if (!headers) {
  throw new Error('You must pass headers string as first argument.');
}

fs.readFile(filename, 'utf-8', (err, content) => {
  console.log('Content-Security-Policy-Report-Only:', headers);
  content = content.replace(
    /Content-Security-Policy-Report-Only:.*/,
    `Content-Security-Policy-Report-Only: ${headers}`
  );
  fs.writeFileSync(filename, content);
});
