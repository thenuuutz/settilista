const biisit = {
    "songs": [
        {
            "artist": "Wilson Pickett",
            "title": "In the midnight hour",
            "tags": [ "soul", "nostalgia" ],
            "length": 157
        },
        {
            "artist": "Sam & Dave",
            "title": "Hold on, I'm comin'",
            "tags": [ "soul", "nostalgia" ],
            "length": 154
        },
        {
            "artist": "James Brown",
            "title": "I got you (I feel good)",
            "tags": [ "soul", "klassikko" ],
            "length": 166
        },
        {
            "artist": "The Spencer Davis group",
            "title": "Gimme some lovin'",
            "tags": [ "soul", "menobiisi", "nostalgia" ],
            "length": 187
        },
        {
            "artist": "Earth, Wind and Fire",
            "title": "September",
            "tags": [ "disco", "funk", "menobiisi"],
            "length": 3600
        } 
    ]
};

function td(title) {
    let cell = document.createElement('td');
    cell.innerText = title;
    return cell;
}

function timePrint(seconds) {
    var minuutit = Math.floor(seconds/60);
    var loppusekunnit = seconds - minuutit * 60;
    if (loppusekunnit < 10){
        loppusekunnit = `0${loppusekunnit}`;
        if (minuutit >= 60){
            var tunnit = Math.floor(minuutit/60);
            var loppuminuutit = minuutit - tunnit * 60;
            if (loppuminuutit < 10){
                loppuminuutit = `0${loppuminuutit}`;
                minuutit = `${tunnit}:${loppuminuutit}`;
            }
        }
    }
    return `${minuutit}:${loppusekunnit}`;
}

function populateSongs() {
    let settilista = document.querySelector("#settilista");
    let totaltime = document.querySelector("#totaltime");
    let sekuntisumma = 0;
    biisit.songs.forEach(song => {
        let tr = document.createElement('tr');
        tr.appendChild(td(song.title));
        tr.appendChild(td(song.artist));
        tr.appendChild(td(timePrint(song.length)));
        tr.appendChild(td(song.tags.join(', ')));
        settilista.appendChild(tr);
        sekuntisumma = sekuntisumma+song.length;
    });
    totaltime.innerText = timePrint(sekuntisumma);
}
document.onready = populateSongs();