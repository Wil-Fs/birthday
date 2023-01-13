AOS.init();

const eventDate = new Date("Oct 02, 2023 23:00:00");
const eventTimeStamp = eventDate.getTime();

const countHours = setInterval(() => {
    
    const now = new Date();
    const actualTimeStamp = now.getTime();

    const timeLeft = eventTimeStamp - actualTimeStamp;

    const dayInMs = 1000 * 60 * 60 * 24;
    const hoursInMs = 1000 * 60 * 60;
    const minuteinMs = 1000 * 60;

    const dayUntilEvent = Math.floor(timeLeft / dayInMs);
    const hoursUntilEvent = Math.floor((timeLeft % dayInMs) / hoursInMs);
    const minutesUntilEvent = Math.floor((timeLeft % hoursInMs) / minuteinMs);
    const secondsUntilEvent = Math.floor((timeLeft % minuteinMs) / 1000);

    document.getElementById('time').innerHTML = `${dayUntilEvent} Dias, ${hoursUntilEvent} Horas, ${minutesUntilEvent} Min, ${secondsUntilEvent}s`;


}, 1000);