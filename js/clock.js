// Update the clock in 24 hour time (such as 21:52)
function updateClock() {
    var now = new Date();
    var minutes = now.getMinutes();
    var date = now.getDate();
    var month = now.getMonth() + 1;  // Month is indexed at zero

    // Desired format: 22:38 ~ 06/22/2014
    time = now.getHours() + ':' + (minutes < 10 ? '0' + minutes : minutes)
      + ' ~ ' + (month < 10 ? '0' + month : month) + '/'
      + (date < 10 ? '0' + date : date) + '/' + now.getFullYear();

    document.getElementById('time').innerHTML = ["", time].join('');
    setTimeout(updateClock, 1000);
}

// Update the clock in 12 hour time (such as 9:52 PM)
function updateClockImperial() {
    var now = new Date();
    var minutes = now.getMinutes();
    var date = now.getDate();
    var month = now.getMonth() + 1;  // Month is indexed at zero
    var hours = now.getHours();

    var merid = "am";                // Parse am and pm hours
    if (hours > 12) {
      hours -= 12;
      merid = "pm";
    } else if (hours == 0) {
      hours = 12;
    }

    // Desired format: 10:38 pm ~ 06/22/2014
    time = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' '
      + merid + ' ~ ' + (month < 10 ? '0' + month : month) + '/'
      + (date < 10 ? '0' + date : date) + '/' + now.getFullYear();

    document.getElementById('time').innerHTML = ["", time].join('');
    setTimeout(updateClockImperial, 1000);
}

window.onload = updateClock;
