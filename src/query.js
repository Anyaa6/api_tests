// const url = "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1";

export default async function retrieveContent(url) {
  
	const response = await fetch(url);
	return response.json();
  }
  