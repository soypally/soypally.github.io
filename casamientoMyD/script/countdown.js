const getRemainTime = deadline =>{
    let now = new Date(),
    remainTime = (new Date(deadline) - now +1000)/1000,
    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ('0'+ Math.floor(remainTime/ 60 % 60)).slice(-2),
    remainHours = ('0'+ Math.floor(remainTime/ 60 % 24)).slice(-2),
    remainDays = ('0' + Math.floor(remainTime/(3600*24))).slice(-2)
    
    return{
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
}

const countdown = (deadline, elem, finalMessage) =>{
    const el = document.getElementById(elem);

    const timerUpdate = setInterval( () =>{
        let t = getRemainTime(deadline);
        el.innerHTML =  `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}:s`;
        if (t.remainTime <=1){
            clearInterval(timerUpdate);
            el.innerHTML = finalMessage;
        }
    }, 1000)

};

//console.log(getRemainTime('Nov 20 2021 01:42:44 GMT-0300'))
countdown('Jan 15 2022 11:30:00 GMT-0300','clock','Llego el gran Dia!!')