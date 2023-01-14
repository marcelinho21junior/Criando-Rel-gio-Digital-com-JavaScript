const hour = document.querySelector('#hour');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');
const msg = document.querySelector('#msg');

setInterval(() => {
    let date  = new Date();
    let dhour = date.getHours();
    let dmin = date.getMinutes();
    let dsec = date.getSeconds();

    hour.innerHTML = `${formatTime(dhour)}`;
    min.innerHTML = `${formatTime(dmin)}`;
    sec.innerHTML = `${formatTime(dsec)}`;
    if(dhour >= 0 && dhour < 6){
        msg.innerHTML = `Boa Madrugada!`
        document.body.style.background = '#303030';
    }else if(dhour >= 6 && dhour < 12){
        msg.innerHTML = `Bom dia!`
        document.body.style.background = 'blue';
    }
    else if(dhour >= 12 && dhour < 18){
        msg.innerHTML = `Boa tarde!`
        document.body.style.background = 'rgb(255, 255, 91)';
    }else{
        msg.innerHTML = `Boa noite!`
        document.body.style.background = 'gray';
    }
}, 1000);

function formatTime(time){
    return time < 10 ? '0' + time : time
}
