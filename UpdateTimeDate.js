function updateDateTime() {
    var currentDate = new Date();
    var options = {weekday: 'long',year: 'numeric', month: 'long', day: 'numeric', hours: 'numeric', minutes: 'numeric', seconds: 'numeric', timeZoneNames: 'short' };
    var formattedDate = currentDate.toLocaleDateString('en-Us',options);

    document.getElementById('datetime').textContent = formattedDate;
}


    setInterval(updateDateTime,1000);
    updateDateTime();