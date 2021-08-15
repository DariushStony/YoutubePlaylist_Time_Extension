const playListTitleObject = document.getElementById("title").firstElementChild.firstElementChild;
const timeObjects = document.querySelectorAll("span#text");
const times = [];

for (let timeObject of timeObjects) {
    let timeString = (timeObject.innerText).toString().replace("\n", "").trim();
    times.push(timeString);
}

function calculateDuration(_times) {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    _times.forEach(time => {
        if (time.length >= 7) {
            hours += parseInt(time.slice(0, time.indexOf(":")));
            minutes += parseInt(time.slice(time.indexOf(":") + 1, time.indexOf(":")));
        }
        else {
            minutes += parseInt(time.slice(0, time.indexOf(":")));
        }
        seconds += parseInt(time.slice(time.indexOf(":") + 1));
    });

    let tmpSecondsSum = 0;
    let tmpMinutesSum = 0;
    let tmpHoursSum = 0;

    tmpSecondsSum = Math.trunc(seconds % 60);
    tmpMinutesSum += Math.trunc(minutes + (seconds / 60));
    tmpHoursSum += Math.trunc(hours + (tmpMinutesSum / 60));
    tmpMinutesSum = Math.trunc(tmpMinutesSum % 60);

    const duration = {
        hour: tmpHoursSum,
        minute: tmpMinutesSum,
        second: tmpSecondsSum
    };

    return duration;
}

const duration = calculateDuration(times);
playListTitleObject.innerText += ` ${duration.hour}:${duration.minute}:${duration.second}`;



