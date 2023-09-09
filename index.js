const elem=document.querySelector(".time");
const para=document.createElement('p');
para.innerHTML="Time and time waits for no one.";
elem.appendChild(para);


function time()
{
    const currentTime=new Date();
    const hour=currentTime.getHours();
    const minutes=currentTime.getMinutes();
    const seconds=currentTime.getSeconds();
    const month = currentTime.getMonth();
    const date= currentTime.getDate();
    const year = currentTime.getFullYear();
    const day=currentTime.getDay();
    const formattedhour = hour % 12 || 12;
    const amOrPm = hour < 12 ? 'AM' : 'PM';
    const mname= ["January","February","March","April","May","June","July","August","September","October","November","December"]
    
    const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = weekdayNames[day];
    const monthOfyear=mname[month];
    console.log(dayOfWeek);
    console.log(monthOfyear);
    console.log(date);
    console.log(year);
    
    const timeDisplay = document.getElementById("time-display");
    timeDisplay.textContent = `${formattedhour}:  ${minutes}:  ${seconds}  ${amOrPm}`;
    const timeDate = document.getElementById("date");
    timeDate.textContent = `${dayOfWeek},  ${monthOfyear}  ${date}  ${year}`;
}
setInterval(time, 1000);
time();
document.querySelector('.hamburger-menu').addEventListener('click', function () {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
});