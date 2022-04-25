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
        nav.style.animation = 'navDown 1s forwards';
        return topBar.ispress = true;
    } else {
        nav.style.animation = 'navUp 3s forwards';
        return topBar.ispress = false;
    }
});


function mainAnimation () {
    let veicle = '';
    let motorcycle = document.getElementById('motorcycle');
    let truck = document.getElementById('truck');
    let plane = document.getElementById('plane');
    motorcycle.style.animation = 'veicleMove cubic-bezier(0,0,1,1) 8s'
    motorcycle.addEventListener('animationend', () => {
        motorcycle.style.animation = 'none';
        truck.style.animation = 'veicleMove cubic-bezier(0,0,1,1) 8s';
    });
    truck.addEventListener('animationend', () => {
        truck.style.animation = 'none';
        plane.style.animation = 'planeMove cubic-bezier( 0, 0, 1, 1 ) 8s';
    });
    plane.addEventListener('animationend', () => {
        plane.style.animation = 'none';
        motorcycle.style.animation = 'veicleMove cubic-bezier(0,0,1,1) 8s'
    });
}
mainAnimation();