import theme from './constants.js'
function getCurrentTheme(){
    let x = document.querySelector('.dark')
    return x?1:0; 
}
function changeTheme(){
    let cTheme = getCurrentTheme();
    let body = document.querySelector(`.${theme['body'][cTheme]}`);
    let button  = document.querySelector(`.${theme['button'][cTheme]}`);
        body.classList.remove(theme['body'][cTheme])
        button.classList.remove(theme['button'][cTheme])
        body.classList.add(theme['body'][!cTheme + 0])
        button.classList.add(theme['button'][!cTheme + 0])
    
}
document.getElementById('switch').addEventListener('click',changeTheme);