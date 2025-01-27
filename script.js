const endDate = "4 February 2025 12:00:00 PM";
const valueSpans = document.querySelectorAll('.value');



function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if (diff < 0) {
        valueSpans.forEach(span => span.textContent = "00");
        return;
    }
    let days = Math.floor(diff / (60 * 60 * 24));
    let hours = Math.floor((diff / (60 * 60)) % 24);
    let minutes = Math.floor((diff / 60) % 60);
    let seconds = Math.floor(diff % 60);

    if (days < 10) days = '0' + days;
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    const timeValues = [days, hours, minutes, seconds];
    valueSpans.forEach((span, index) => {
        span.textContent = timeValues[index];
    });
}

setInterval(()=>{
    clock(); 
}, 1000); 
