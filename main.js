const getRemaintTime = deadline => {
    let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000 )/ 1000,
    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
    remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

    return{
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
    }
};


const countdown = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem);

    const timerUpdate = setInterval(() => {
        let t = getRemaintTime(deadline);
        el.innerHTML = `${t.remainDays}d:${t.remainHours}hrs:${t.remainMinutes}mins:${t.remainSeconds}seg`;
        if (t.remainTime <= 1){
            clearInterval(timerUpdate);
            el.innerHTML = finalMessage;
        }
    }, 1000)
};

/*console.log(getRemaintTime('july 23 2024 00:00:00 GMT-0500'));*/

countdown('july 23 2024 00:00:00 GMT-0500', 'clock', '*****Felíz 25 Aniversario*****');

/*-----------------logo circulo----------------------*/



