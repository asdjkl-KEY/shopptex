let search = document.getElementById('search');
search.ispress = false;
let divSearch = document.getElementById('contain-search');
let searchQuit = document.getElementById('search-quit');
search.addEventListener('click', (e) => {
    e.preventDefault();
    if(!search.ispress) {
        divSearch.style.animation = 'aparecer 0.8s forwards';
        return search.ispress = true;
    }
});
searchQuit.addEventListener('click', (e) => {
    e.preventDefault();
    if(search.ispress) {
        divSearch.style.animation = 'desaparecer 0.8s forwards';
        return search.ispress = false;
    }
});

let topBar = document.getElementById('top-menu');
topBar.ispress = false;
topBar.addEventListener('click', (e) => {
    e.preventDefault();
    let nav = document.getElementById('navbar');
    if(!topBar.ispress) {
        nav.style.animation = 'navDown 0.8s forwards';
        return topBar.ispress = true;
    } else {
        nav.style.animation = 'navUp 0.8s forwards';
        return topBar.ispress = false;
    }
});
