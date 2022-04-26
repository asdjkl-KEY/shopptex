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


function thumbnail() {
    let collages = [
    {id: "first", thumbnail: "thumbnail1"},
    {id: "second", thumbnail: "thumbnail2"},
    {id: "third", thumbnail: "thumbnail3"},
    {id: "fourth", thumbnail: 'thumbnail4'},
    {id: "fiveth", thumbnail: "thumbnail5"}
];
    for (collage of collages) {
        let element = document.getElementById(collage.id);
        let thumbnail = document.getElementById(collage.thumbnail);
        element.addEventListener('mouseover', () => {
            thumbnail.style.width = '105%';
            thumbnail.style.height = '105%';
            thumbnail.style.marginLeft = '-2.5%';
            thumbnail.style.marginTop = '-2.5%';
        });
        element.addEventListener('mouseout', () => {
            thumbnail.style.width = '100%';
            thumbnail.style.height = '100%';
            thumbnail.style.marginLeft = '0%';
            thumbnail.style.marginTop = '0%';
        })
    }
}
thumbnail();

function animateOnScroll() {
    let grid = document.getElementById('mais-vendido');

    function cargarComponentes() {
        grid.style.animation = 'unopaque 2s forwards';
    }

    const observator = new IntersectionObserver(cargarComponentes, {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 1.0
    });

    observator.observe(grid)
}
animateOnScroll();