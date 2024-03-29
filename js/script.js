// Set the date we're counting down to
var countDownDate = new Date("Mar 1, 2022 08:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    //     + minutes + "m " + seconds + "s ";
    var daysLeft = document.getElementById('daysLeft');
    daysLeft.innerHTML = days;
    var hoursLeft = document.getElementById('hoursLeft');
    hoursLeft.innerHTML = hours;
    var minutesLeft = document.getElementById('minutesLeft');
    minutesLeft.innerHTML = minutes;
    // var secondsLeft = document.getElementById('secondsLeft');
    // secondsLeft.innerHTML = seconds;


    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);