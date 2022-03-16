"use strict";

import { animate } from "./helpers";

const calc = (price = 100) => {
    const calcBlock = document.querySelector(".calc-block");
    const calcType = document.querySelector(".calc-type");
    const calcSquare = document.querySelector(".calc-square");
    const calcCount = document.querySelector(".calc-count");
    const calcDay = document.querySelector(".calc-day");
    const total = document.getElementById("total");

    let intervalId;

    const countCalc = () => {
        const calcTypeValue = Number(calcType.options[calcType.selectedIndex].value);
        const calcSquareValue = Number(calcSquare.value);

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcCount.value > 1) {
            calcCountValue += Number(calcCount.value) / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        } else {
            totalValue = 0;
        }

        return totalValue;
    };

    calcBlock.addEventListener("change", (e) => {
        if (e.target === calcType || e.target === calcSquare || e.target === calcCount || e.target === calcDay) {
            total.textContent = 0;
            let totalValue = countCalc();
            let i = 0;

            animate({
                duration: 500,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    //from i to totalValue
                    let result = (totalValue - i) * progress + i;

                    total.textContent = Math.floor(result);
                },
            });
        }
    });
};

export default calc;
