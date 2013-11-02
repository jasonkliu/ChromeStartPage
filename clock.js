        function updateClock() 
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
                return hr;
            }
            Date.getDDMMYY = function()
            {
                var dd = now.getDate();
                var mm = now.getMonth()+1;
                var yyyy = now.getFullYear();
                if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} yyyy = dd+'/'+mm+'/'+yyyy;
                return yyyy;
            }
            var now = new Date(),
            time = Date.getHoursTwoDigits() + ':' + Date.getMinutesTwoDigits() + ' ~ ' + Date.getDDMMYY();
            document.getElementById('time').innerHTML = ["", time].join('');
            setTimeout(updateClock, 1000);
        }
        
window.onload=updateClock
