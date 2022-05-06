
const newyears = "1 Jan 2023";

function countdown () {
    const newYearDate = new Date(newyears);
    const currentDate = new Date();
    const leftTotalseconds = (newYearDate-currentDate)/1000;

    const countDownDays = Math.floor(leftTotalseconds/60/60/24);
    const countDownHours = Math.floor(leftTotalseconds/60/60) ; /* without Modulo */
    const countDownMinutes = Math.floor(leftTotalseconds/60/60) ;  /* without Modulo */
    const countDownSeconds = Math.floor(leftTotalseconds/60) ;  /* without Modulo */
    
    console.log("Days "+countDownDays,
    "Hours "+countDownHours,
    "Minutes "+countDownMinutes,
    "Seconds "+countDownSeconds)
}

setInterval(() => {
    countdown()
}, 1000);