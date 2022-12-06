//npm install puppeteer

const puppeteer = require('puppeteer');

(async () => {
  //nuestro codigo
  console.log('lanzamos navegador');

  const browser = await puppeteer.launch({headless: false});

  const page = await browser.newPage();

  await page.goto('https://es.wikipedia.org/wiki/Node.js')

  console.log('cerramos navegador');
  //browser.close();
  console.log('navegador cerrado');
}) ();