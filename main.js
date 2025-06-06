// const date= new Date();
// const year=date.getFullYear();
// const day=date.getDate();
// const month=date.getMonth()+1; // Months are zero-based in JavaScript
// const hours=date.getHours();
// const minutes=date.getMinutes();
// const seconds=date.getSeconds();
// const formattedDay=`${String(day).padStart(2,'0')}-${String(month).padStart(2,'0')}-${year}`
// console.log(formattedDay)
const clock=document.getElementById('clock-display')
const dateDisplay=document.getElementById('date-display');
const dayName=document.querySelector('h1');
const weekdays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function updateTime(){
    const now= new Date();

    let hours=String(now.getHours()).padStart(2,'0');
    let minutes=String(now.getMinutes()).padStart(2,'0');
    let seconds=String(now.getSeconds()).padStart(2,'0');
    let formattedTime=`${hours}:${minutes}:${seconds}`;
    clock.innerHTML=formattedTime;
}
setInterval(updateTime,1000);
updateTime();


function showDate(){
    const now = new Date();
    let day=String(now.getDay()).padStart(2,'0');
    let month=String(now.getMonth()+1).padStart(2,'0');
    let year=now.getFullYear();
    let formattedDay=`${day}-${month}-${year}`
    dateDisplay.innerHTML=formattedDay;
    for(let i=0;i<weekdays.length;i++){
        if(now.getDay()===i){
            dayName.innerText=weekdays[i]
            break;
        }
    }
}
showDate();
