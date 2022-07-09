const sprite = document.querySelector('.sprite-jonatas');

const jump = () => {
    sprite.classList.add('jump');
    
    setTimeout(() => {
        sprite.classList.remove('jump');
        
    }, 1000);
}

document.addEventListener('keydown', jump);