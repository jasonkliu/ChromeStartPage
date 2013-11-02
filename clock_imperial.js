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
                if (hr >= 13) {
                   hr = hr-12;
                }
                if (hr == 0) {
                   hr = 12;
                }
                return hr;
            }
            Date.getMerid = function()
            {
                var hr = now.getHours();
                var merid = "am";
                if (hr >= 13) {
                   hr = hr-12;
                   merid = "pm";
                }
                return merid;
            }
            Date.getDDMMYY = function()
            {
                var dd = now.getDate();
                var mm = now.getMonth()+1;
                var yyyy = now.getFullYear();
                if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} yyyy = mm+'/'+dd+'/'+yyyy;
                return yyyy;
            }
            var now = new Date(),

            //Combinining Date.getHoursTwoDigits and Date.getMerid
            //var hours = Date.getHoursTwoDigits();
            //var hrs = hours.hr;
            //var merids = hours.merid;
            //time = Date.getMerid() + Date.getHoursTwoDigits();

            time = Date.getHoursTwoDigits() + ':' + Date.getMinutesTwoDigits() + Date.getMerid() + ' ~ ' + Date.getDDMMYY();
            document.getElementById('time').innerHTML = ["", time].join('');
            setTimeout(updateClock, 1000);
        }
        
window.onload=updateClock
