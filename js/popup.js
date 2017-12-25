const URL = 'https://www.mapquestapi.com/directions/v2/route?key=' + API_KEY + '&from=' + FROM_ADDR + '&to=' + TO_ADDR + '&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false';

function determineUnits(time) {
    time = Math.round(time / 60); // Convert from seconds to minutes
    if (time > 60) {
        var hours = time/60,
            minutes = time % 60;
        return hours + ' hour(s) ' + minutes + ' minutes';
    }
    return time + ' minutes';
}

function updateTravelTime() {
    $.ajax( URL, {
        method: 'POST',
        dataType: 'json'
    } )
        .done(function(data) {
            var typicalTime = determineUnits(data.route.time),
                currentTime = determineUnits(data.route.realTime);
            document.getElementById('currentTime').innerText = currentTime;
            document.getElementById('typicalTime').innerText = typicalTime;
        })
        .fail(function(error) {
            document.getElementById('error').style.display = '';
            document.getElementById('currentTime').style.display = 'none';
            document.getElementById('typicalTime').style.display = 'none';
        });
}

document.addEventListener('DOMContentLoaded', function () {
    updateTravelTime();

    // Handler for refresh button click event
    document.getElementById('refresh').addEventListener('click', function () {

    });
});