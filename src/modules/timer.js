'use strict';

const timer = (deadline) => {

    const timerDays = document.getElementById("timer-days");
    const timerHours = document.getElementById("timer-hours");
    const timerMinutes = document.getElementById("timer-minutes");
    const timerSeconds = document.getElementById("timer-seconds");

    const getTimeRemain = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemain = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemain / 60 / 60 / 24);
        let hours = Math.floor((timeRemain / 60 / 60) % 24);
        let minutes = Math.floor((timeRemain / 60) % 60);
        let seconds = Math.floor(timeRemain % 60);

        return { timeRemain, days, hours, minutes, seconds };
    };

    const updateClock = () => {
        let getTime = getTimeRemain();

        let addZero = (number) => {
            if (number.toString().length < 2) {
                return `0${number}`;
            } else {
                return number;
            }
        };

        timerDays.textContent = addZero(getTime.days);
        timerHours.textContent = addZero(getTime.hours);
        timerMinutes.textContent = addZero(getTime.minutes);
        timerSeconds.textContent = addZero(getTime.seconds);

        let idInterval = setInterval( () => {
            
            if(getTime.timeRemain > 0) {
                updateClock();
            } else {
                clearInterval(idInterval);
                timerDays.textContent = "00";
                timerHours.textContent = "00";
                timerMinutes.textContent = "00";
                timerSeconds.textContent = "00";
            }

        }, 1000);
        
    };

    updateClock();
    
};

export default timer;