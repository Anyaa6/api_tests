/*
async function showContent() {
	let elt = document.createElement('div');
	elt.innerHTML = "<h1>'haha super'</h1>";

    document.getElementsByTagName('body')[0].appendChild(elt);
}

showContent();
*/
import retrieveContent from './query.js';

async function showContent() {
  try {
    // const content = await retrieveContent("https://api.intra.42.fr/oauth/authorize?client_id=cb5d05be1ac2154f40f538f219bd033a2260da6ab0faf656b16521861af6f194&redirect_uri=https%3A%2F%2Fwww.google.fr%2F&response_type=code");
    const content = await retrieveContent("https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1");

	console.log(content);
    let elt = document.createElement('div');
    elt.innerHTML = content.join('<br />');

    document.getElementsByTagName('body')[0].appendChild(elt);
  } catch (e) {
    console.log('Error', e);
  }
}

showContent();