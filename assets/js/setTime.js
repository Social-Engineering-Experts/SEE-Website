const setTime = async () => {
    const startTime = new Date(Date.parse("04 Jun 2022 00:00:00 GMT+0800"));
    const endTime = new Date(Date.parse("06 Jun 2022 00:00:00 GMT+0800"));

    const ctfStart = document.getElementById("ctf-start");
    const ctfEnd = document.getElementById("ctf-end");
    if (!ctfStart || !ctfEnd)
        return;
    
    let country;
    await fetch("https://iplist.cc/api", {
        headers: {
            'Accept': 'application/json',
        }
    }).then(res => res.json()).then(res => {
        country = res.countrycode;
    });
    languageString = `${navigator.language}-${country}`;
    ctfStart.textContent = startTime.toLocaleString(languageString, {
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });
    ctfEnd.textContent = endTime.toLocaleString(languageString, {
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });
}

setTime();