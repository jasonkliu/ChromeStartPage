// Update the clock in 24 hour time (such as 21:52)
function updateClock() {
    var now = new Date();
    var minutes = now.getMinutes();
    var date = now.getDate()
    var month = now.getMonth() + 1
    time = now.getHours() + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ~ '
      + (month < 10 ? '0' + month : month) + '/' + (date < 10 ? '0' + date : date)
      + '/' + now.getFullYear();

    document.getElementById('time').innerHTML = ["", time].join('');
    setTimeout(updateClock, 1000);
}

// Update the clock in 12 hour time (such as 9:52 PM)

function updateClockImperial()
{
    Date.getMinutesTwoDigits = function()
    {
        var min = now.getMinutes();
        if (min < 10) return ("0" + min.toString());
        else return min.toString();
    }

    Date.getHoursTwoDigits = function()
    {
        var hr = now.getHours();
        var merid = "am";
        if (hr >= 13) {
           hr = hr-12;
           merid = "pm";
        }
        if (hr == 0) {
           hr = 12;
        }
        return [hr,merid];
    }
    Date.getDDMMYY = function()
    {
        var dd = now.getDate();
        var mm = now.getMonth()+1;
        var yyyy = now.getFullYear();
        if (dd < 10) {
          dd='0'+dd
        }
        if (mm < 10) {
          mm='0'+mm
        }
        yyyy = mm+'/'+dd+'/'+yyyy;
        return yyyy;
    }
    var now = new Date(),

    //Finding the hour and the merid(am/pm) from one function
    hours = Date.getHoursTwoDigits();
    var hrs = hours[0];
    var merids = hours[1];

    time = hrs + ':' + Date.getMinutesTwoDigits() + merids + ' ~ ' + Date.getDDMMYY();
    document.getElementById('time').innerHTML = ["", time].join('');
    setTimeout(updateClockImperial, 1000);
}

window.onload = updateClockImperial
