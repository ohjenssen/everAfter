const userInfo = JSON.parse(localStorage.getItem('userinfo'));
const weddingInfo = JSON.parse(localStorage.getItem('weddinginfo'));

const titleContainer = document.querySelector('#brudepar');
const dateContainer = document.querySelector('#dato');

titleContainer.innerText = `${weddingInfo.ditNavn} & ${weddingInfo.partnersNavn}`
dateContainer.innerText = `Dato: ${weddingInfo.date}`;