const daysEl = document.getElementById('days');
const hoursEl  = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl  = document.getElementById('seconds');



const newYears = '1 Jan 2022';


function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
   
    const seconds= (newYearsDate-currentDate)/1000;
    
    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600 % 24);
    const minutes = Math.floor((seconds/ 60)-(days*24*60)-(hours*60));
    const sec = Math.floor(seconds - days*24*60*60 - hours*60*60 - minutes*60);
    
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(sec);     

}
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}


setInterval(countdown, 1000);


