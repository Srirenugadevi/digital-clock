function updateTime() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // If hour is 0, set it to 12
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    const dateString = now.toDateString();
    
    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

setInterval(updateTime, 1000);
updateTime();
