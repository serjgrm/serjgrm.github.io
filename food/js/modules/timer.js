function timer (){
    function timerFill (){
        const timeRemain = new Date('2022-10-12').getTime() - new Date().getTime();
        document.querySelector("#days").textContent = Math.floor((timeRemain / (1000 * 60 * 60 * 24))),
        document.querySelector('#hours').textContent = Math.floor((timeRemain / (1000 * 60 * 60) % 24)),
        document.querySelector('#minutes').textContent = Math.floor((timeRemain / (1000 / 60)) % 60),
        document.querySelector('#seconds').textContent = Math.floor((timeRemain / 1000) % 60);
        if (timeRemain <= 0){
            clearInterval(timer);
            document.querySelector('.promotion__timer').classList.add('hide');
        }
    }
    const timer = setInterval(timerFill,1000);
}
export default timer;


