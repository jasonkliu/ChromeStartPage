// Update the clock in 24 hour time (such as 21:52)
function updateClock() {
    Date.getMinutesTwoDigits = function() {
        var min = now.getMinutes();
        if (min < 10) return ("0" + min.toString());
        else return min.toString();
    }

    Date.getHoursTwoDigits = function() {
        var hr = now.getHours();
        return hr;
    }

    Date.getDDMMYY = function() {
        var dd = now.getDate();
        var mm = now.getMonth() + 1;
        var yyyy = now.getFullYear();
        if (dd < 10) {
          dd = '0' + dd
        }
        if (mm < 10) {
          mm = '0' + mm
        }
        yyyy = mm + '/' + dd + '/' + yyyy;
        return yyyy;
    }

    //time = Date.getHoursTwoDigits() + ':' + Date.getMinutesTwoDigits() + ' ~ ' + Date.getDDMMYY();
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

window.onload = updateClock
