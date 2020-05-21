const luvut = document.querySelectorAll('#luvut span');

function isoinLuku() {
    suurin = -Infinity;
    luvut.forEach(luku => {txt=luku.innerText; numero=parseInt(txt); if(numero > suurin){suurin = numero}});
    let tulos = `Toteuta laskenta ${arguments.callee.name}`;
    return suurin;
}

function pieninLuku() {
    pienin = Infinity;
    luvut.forEach(luku => {txt=luku.innerText; numero=parseInt(txt); if(numero < pienin){pienin = numero}});
    let tulos = `Toteuta laskenta ${arguments.callee.name}`;
    return pienin;
}

function lukujenMaara() {
    let tulos = luvut.length;
    return tulos;
}

function rmSumma() {
    let tulos = `Toteuta laskenta ${arguments.callee.name}`;
    return tulos;
}

function rrSumma() {
    let tulos = `Toteuta laskenta ${arguments.callee.name}`;
    return tulos;
}

function kokoSumma() {
    let summa = 0;
    luvut.forEach(luku => {txt=luku.innerText; num=parseInt(txt); summa +=num;})
    let tulos = `Toteuta laskenta ${arguments.callee.name}`;
    return summa;
}

/*
oooo                                  .o8   o8o  
`888                                 "888   `"'  
 888  oooo   .ooooo.   .ooooo.   .oooo888  oooo  
 888 .8P'   d88' `88b d88' `88b d88' `888  `888  
 888888.    888   888 888   888 888   888   888  
 888 `88b.  888   888 888   888 888   888   888  
o888o o888o `Y8bod8P' `Y8bod8P' `Y8bod88P" o888o 
                                                 
                                                 
                                                 
            oooo  oooo            
            `888  `888            
oooo    ooo  888   888   .ooooo.  
 `88.  .8'   888   888  d88' `88b 
  `88..8'    888   888  888ooo888 
   `888'     888   888  888    .o 
    .8'     o888o o888o `Y8bod8P' 
.o..P'                            
`Y8P'                             
      
*/











































































































































































































































////////////////////////////////////////// STOP
//////////////////////// EI ENEMPAA
/////////////// HUS POIS
//////// NOTHING TO SEE HERE
//// ;)

const oikeatVastaukset = {
    'isoinLuku': 'NjY1',
    'pieninLuku': 'MA==',
    'lukujenMaara': 'NjAwMA==',
    'rmSumma': 'MTc5NjU4Mg==',
    'rrSumma': 'MjA1MzA0',
    'kokoSumma': 'MjAwMTg4Ng=='

}
document.querySelectorAll('td').forEach(td => { 
    td.innerText = window[td.id]();
    td.className = btoa(td.innerText) == oikeatVastaukset[td.id] ? 'jep' : 'noup';
});
