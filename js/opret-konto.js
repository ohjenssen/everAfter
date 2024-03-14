const form = document.querySelector('.opret-konto-form');

function getEntries(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const listingInfo = Object.fromEntries(formData.entries());
    console.log(listingInfo);
    localStorage.setItem('userinfo', JSON.stringify(listingInfo));
    window.location.assign('/opret-bryllup.html');
}

form.addEventListener('submit', getEntries);