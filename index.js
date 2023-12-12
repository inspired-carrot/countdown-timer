`use strict`;

(function(){
    
    var currentYear = new Date().getFullYear();
    var newYearTime = new Date(`1 Jan ${currentYear + 1} 00:00:00`);

    function updateCountdown() {
        var currentTime = new Date();
        var differenceInTime = newYearTime - currentTime;

        var daysDiff = Math.floor(differenceInTime / 1000 / 60 / 60 / 24);
        var hoursDiff = Math.floor(differenceInTime / 1000 / 60 / 60) % 24;
        var minutesDiff = Math.floor(differenceInTime / 1000 / 60) % 60;
        var secondsDiff = Math.floor(differenceInTime / 1000) % 60;

        $('#days > span').text(daysDiff)
        $('#hours > span').text(hoursDiff);
        $('#minutes > span').text(minutesDiff);
        $('#seconds > span').text(secondsDiff);
    }

    setInterval(function(){
        updateCountdown();   
    }, 1000);

})();