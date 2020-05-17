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
        },
        {
            "artist": "Otis Redding",
            "title": "Hard to handle",
            "tags": [ "soul", "nostalgia" ],
            "length": 142
        },
        {
            "artist": "Rolling Stones",
            "title": "Walking the dog",
            "tags": [ "rock", "nostalgia" ],
            "length": 189
        },
        {
            "artist": "Little Richard",
            "title": "Slippin' and Slidin'",
            "tags": [ "rock", "klassikko", "menobiisi" ],
            "length": 131
        },
        {
            "artist": "The Beatles",
            "title": "I saw her standing there",
            "tags": [ "rock", "klassikko" ],
            "length": 174
        },
        {
            "artist": "Mark Ronson feat. Bruno Mars",
            "title": "Uptown Funk",
            "tags": [ "funk", "pop", "2000-luku" ],
            "length": 270
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
    if (minuutit >= 60){
        var tunnit = Math.floor(minuutit/60);
        var loppuminuutit = minuutit - tunnit * 60;
        if (loppuminuutit < 10){
            loppuminuutit = `0${loppuminuutit}`;
        }
        minuutit = `${tunnit}:${loppuminuutit}`;
    }
    if (loppusekunnit < 10){
        loppusekunnit = `0${loppusekunnit}`;
        
    }
    return `${minuutit}:${loppusekunnit}`;
}

function populateSongs() {
    let settilista = document.querySelector("#settilista");
    let totaltime = document.querySelector("#totaltime");
    let sekuntisumma = 0;
    biisit.songs.forEach(song => {
        let tr = document.createElement('tr');
        let valinta = document.createElement('input');
        valinta.type = 'checkbox';
        let valinta_td = document.createElement('td');
        valinta_td.appendChild(valinta);
        tr.appendChild(valinta_td);
        tr.appendChild(td(song.title));
        tr.appendChild(td(song.artist));
        tr.appendChild(td(timePrint(song.length)));
        tr.appendChild(td(song.tags.join(', ')));
        settilista.appendChild(tr);
        sekuntisumma = sekuntisumma+song.length;
    });
    totaltime.innerText = timePrint(sekuntisumma);
}
function selectAll() {
    let onko_valittu = this.checked;
    let ruksit = document.querySelectorAll("input[type=checkbox]");
    ruksit.forEach(ruksi => {
        ruksi.checked = onko_valittu;
    })
}
document.onready = populateSongs();
const select_all = document.querySelector("#check");
select_all.onclick = selectAll;