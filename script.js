// Get array of elements
const tiles = document.querySelectorAll('.accordion__title');
const titles = document.querySelectorAll('.accordion__title');


tiles.forEach(tile => {
    tile.addEventListener('click',()=>{
        tile.nextElementSibling.classList.toggle('active');
        tile.lastElementChild.classList.toggle('invert');
        });
    })
    
