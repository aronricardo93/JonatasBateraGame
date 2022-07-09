const sprite = document.querySelector('.sprite-jonatas');
const obstaculo = document.querySelector('.obstaculo');

const jump = () => {
    sprite.classList.add('jump');
    
    setTimeout(() => {
        sprite.classList.remove('jump');
        
    }, 1000);
}

const loop = setInterval(() => {
    const obstaculoPosition = obstaculo.offsetLeft;
    const spritePosition = +window.getComputedStyle(sprite).bottom.replace('px', '');

    if(obstaculoPosition <= 320 && obstaculoPosition > 0 && spritePosition < 50){
        obstaculo.style.animation = 'none';
        obstaculo.style.left = `${obstaculoPosition}px`;
        
        sprite.style.animation = 'none';
        sprite.style.bottom = `${spritePosition}px`;
    }
}, 10);

document.addEventListener('keydown', jump);