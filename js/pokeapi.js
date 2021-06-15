$("#berriesList").click(() => {

    clickSuivantBaies("https://pokeapi.co/api/v2/berry/")
})

function clickSuivantBaies(url) {
    console.log(url)
    let myUrl = new URL(url)
    // console.log(myUrl)
    let offset = myUrl.searchParams.get("offset")
    if (offset === null) offset = 0
    $.get(myUrl.origin + myUrl.pathname + "?offset=" + offset, (data) => {
        console.log(data)
        let affRes = ""
        affRes += "<div class='contenerList'>"
        affRes += "<h1>Liste des baies</h1>"
        affRes += "<div id='tabList'>"
        for (let i in data.results) {
            affRes += "<div class='ligneList' onClick='clickDetailBaies(\""  + data.results[i].url + "\")'>"
            affRes += "<div>" + ((+offset) + (+i) + 1) + "</div>"
            affRes += "<div>" + data.results[i].name + "</div>"
            affRes += "</div>"
        }
        affRes += "<div class='contenerBout'>"
        if (data.previous === null) {
            affRes += "<div></div>"
        }
        else {
            affRes += "<div class='bout' onClick='clickSuivantBaies(\"" + data.previous + "\")'>précédent</div>"
        }
        if (data.next === null) {
            affRes += "<div></div>"
        }
        else {
            affRes += "<div class='bout' onClick='clickSuivantBaies(\"" + data.next + "\")'>suivant</div>"
        }
        affRes += "</div></div></div>"
        $("#body").html(affRes)
    })
}

function clickDetailBaies(url) {
    $.get(url, (data) => {
    
        $("#detElem").html(JSON.stringify(data))
    })
}


//---------- PARTIE CONTEST-------------

$("#contestsList").click(() => {

    clickSuivantContest("https://pokeapi.co/api/v2/contest-type/")
})

function clickSuivantContest(url) {
    console.log(url)
    let myUrl = new URL(url)
    // console.log(myUrl)
    let offset = myUrl.searchParams.get("offset")
    if (offset === null) offset = 0
    $.get(myUrl.origin + myUrl.pathname + "?offset=" + offset, (data) => {
        console.log(data)
        let affRes = ""
        affRes += "<div class='contenerList'>"
        affRes += "<h1>Liste des Compétitions</h1>"
        affRes += "<div id='tabList'>"
        for (let i in data.results) {
            affRes += "<div class='ligneList' onClick='clickDetailContest(\""  + data.results[i].url + "\")'>"
            affRes += "<div>" + ((+offset) + (+i) + 1) + "</div>"
            affRes += "<div>" + data.results[i].name + "</div>"
            affRes += "</div>"
        }
        affRes += "<div class='contenerBout'>"
        if (data.previous === null) {
            affRes += "<div></div>"
        }
        else {
            affRes += "<div class='bout' onClick='clickSuivantContest(\"" + data.previous + "\")'>précédent</div>"
        }
        if (data.next === null) {
            affRes += "<div></div>"
        }
        else {
            affRes += "<div class='bout' onClick='clickSuivantContest(\"" + data.next + "\")'>suivant</div>"
        }
        affRes += "</div></div></div>"
        $("#body").html(affRes)
    })
}

function clickDetailContest(url) {
    $.get(url, (data) => {
    
        $("#detElem").html(JSON.stringify(data))
    })
}

//---------- PARTIE Encouters-------------

$("#encountersList").click(() => {

    clickSuivantEncounter("https://pokeapi.co/api/v2/encounter-method/")
})

function clickSuivantEncounter(url) {
    console.log(url)
    let myUrl = new URL(url)
    // console.log(myUrl)
    let offset = myUrl.searchParams.get("offset")
    if (offset === null) offset = 0
    $.get(myUrl.origin + myUrl.pathname + "?offset=" + offset, (data) => {
        console.log(data)
        let affRes = ""
        affRes += "<div class='contenerList'>"
        affRes += "<h1>Liste des moyens de rencontres</h1>"
        affRes += "<div id='tabList'>"
        for (let i in data.results) {
            affRes += "<div class='ligneList' onClick='clickDetailEncounter(\""  + data.results[i].url + "\")'>"
            affRes += "<div>" + ((+offset) + (+i) + 1) + "</div>"
            affRes += "<div>" + data.results[i].name + "</div>"
            affRes += "</div>"
        }
        affRes += "<div class='contenerBout'>"
        if (data.previous === null) {
            affRes += "<div></div>"
        }
        else {
            affRes += "<div class='bout' onClick='clickSuivantEncounter(\"" + data.previous + "\")'>précédent</div>"
        }
        if (data.next === null) {
            affRes += "<div></div>"
        }
        else {
            affRes += "<div class='bout' onClick='clickSuivantEncounter(\"" + data.next + "\")'>suivant</div>"
        }
        affRes += "</div></div></div>"
        $("#body").html(affRes)
    })
}

function clickDetailEncounter(url) {
    $.get(url, (data) => {
    
        $("#detElem").html(JSON.stringify(data))
    })
}

// ----- PARTIE EVOLUTION  ------------


$("#evolutionList").click(() => {

    clickSuivantEvol("https://pokeapi.co/api/v2/evolution-chain/")
})

function clickSuivantEvol(url) {
    console.log(url)
    let myUrl = new URL(url)
    // console.log(myUrl)
    let offset = myUrl.searchParams.get("offset")
    if (offset === null) offset = 0
    $.get(myUrl.origin + myUrl.pathname + "?offset=" + offset, (data) => {
        console.log(data)
        let affRes = ""
        affRes += "<div class='contenerList'>"
        affRes += "<h1>Liste Evolution </h1>"
        affRes += "<div id='tabList'>"
        for (let i in data.results) {
            affRes += "<div class='ligneList' onClick='clickDetailEvol(\""  + data.results[i].url + "\")'>"
            affRes += "<div>" + ((+offset) + (+i) + 1) + "</div>"
            affRes += "<div>" + ((+offset) + (+i) + 1)+ "</div>"
            affRes += "</div>"
        }
        affRes += "<div class='contenerBout'>"
        if (data.previous === null) {
            affRes += "<div></div>"
        }
        else {
            affRes += "<div class='bout' onClick='clickSuivantEvol(\"" + data.previous + "\")'>précédent</div>"
        }
        if (data.next === null) {
            affRes += "<div></div>"
        }
        else {
            affRes += "<div class='bout' onClick='clickSuivantEvol(\"" + data.next + "\")'>suivant</div>"
        }
        affRes += "</div></div></div>"
        $("#body").html(affRes)
    })
}

function clickDetailEvol(url) {
    $.get(url, (data) => {
    
        $("#detElem").html(JSON.stringify(data))
    })
}

// ----- PARTIE GAMES  ------------

$("#gamesList").click(() => {

    clickSuivantG("https://pokeapi.co/api/v2/version/")
})

function clickSuivantG(url) {
    console.log(url)
    let myUrl = new URL(url)
    // console.log(myUrl)
    let offset = myUrl.searchParams.get("offset")
    if (offset === null) offset = 0
    $.get(myUrl.origin + myUrl.pathname + "?offset=" + offset, (data) => {
        console.log(data)
        let affRes = ""
        affRes += "<div class='contenerList'>"
        affRes += "<h1>Liste des Jeux </h1>"
        affRes += "<div id='tabList'>"
        for (let i in data.results) {
            affRes += "<div class='ligneList' onClick='clickDetailG(\""  + data.results[i].url + "\")'>"
            affRes += "<div>" + ((+offset) + (+i) + 1) + "</div>"
            affRes += "<div>"+'Version : ' + data.results[i].name + "</div>"
            affRes += "</div>"
        }
        affRes += "<div class='contenerBout'>"
        if (data.previous === null) {
            affRes += "<div></div>"
        }
        else {
            affRes += "<div class='bout' onClick='clickSuivantG(\"" + data.previous + "\")'>précédent</div>"
        }
        if (data.next === null) {
            affRes += "<div></div>"
        }
        else {
            affRes += "<div class='bout' onClick='clickSuivantG(\"" + data.next + "\")'>suivant</div>"
        }
        affRes += "</div></div></div>"
        $("#body").html(affRes)
    })
}

function clickDetailG(url) {
    $.get(url, (data) => {
    
        $("#detElem").html(JSON.stringify(data))
    })
}


// ----- PARTIE ITEMS  ------------

$("#itemsList").click(() => {

    clickSuivantItem("https://pokeapi.co/api/v2/item/")
})

function clickSuivantItem(url) {
    console.log(url)
    let myUrl = new URL(url)
    // console.log(myUrl)
    let offset = myUrl.searchParams.get("offset")
    if (offset === null) offset = 0
    $.get(myUrl.origin + myUrl.pathname + "?offset=" + offset, (data) => {
        console.log(data)
        let affRes = ""
        affRes += "<div class='contenerList'>"
        affRes += "<h1>Liste des objets</h1>"
        affRes += "<div id='tabList'>"
        for (let i in data.results) {
            affRes += "<div class='ligneList' onClick='clickDetailItem(\""  + data.results[i].url + "\")'>"
            affRes += "<div>" + ((+offset) + (+i) + 1) + "</div>"
            affRes += "<div>" + data.results[i].name + "</div>"
            affRes += "</div>"
        }
        affRes += "<div class='contenerBout'>"
        if (data.previous === null) {
            affRes += "<div></div>"
        }
        else {
            affRes += "<div class='bout' onClick='clickSuivantItem(\"" + data.previous + "\")'>précédent</div>"
        }
        if (data.next === null) {
            affRes += "<div></div>"
        }
        else {
            affRes += "<div class='bout' onClick='clickSuivantItem(\"" + data.next + "\")'>suivant</div>"
        }
        affRes += "</div></div></div>"
        $("#body").html(affRes)
    })
}

function clickDetailItem(url) {
    $.get(url, (data) => {
    
        $("#detElem").html(JSON.stringify(data))
    })
}
// ----- PARTIE LOCATION  ------------


$("#locationsList").click(() => {

    clickSuivantLocation("https://pokeapi.co/api/v2/location/")
})

function clickSuivantLocation(url) {
    console.log(url)
    let myUrl = new URL(url)
    // console.log(myUrl)
    let offset = myUrl.searchParams.get("offset")
    if (offset === null) offset = 0
    $.get(myUrl.origin + myUrl.pathname + "?offset=" + offset, (data) => {
        console.log(data)
        let affRes = ""
        affRes += "<div class='contenerList'>"
        affRes += "<h1>Liste des Locations </h1>"
        affRes += "<div id='tabList'>"
        for (let i in data.results) {
            affRes += "<div class='ligneList' onClick='clickDetailLocation(\""  + data.results[i].url + "\")'>"
            affRes += "<div>" + ((+offset) + (+i) + 1) + "</div>"
            affRes += "<div>" + data.results[i].name + "</div>"
            affRes += "</div>"
        }
        affRes += "<div class='contenerBout'>"
        if (data.previous === null) {
            affRes += "<div></div>"
        }
        else {
            affRes += "<div class='bout' onClick='clickSuivantLocation(\"" + data.previous + "\")'>précédent</div>"
        }
        if (data.next === null) {
            affRes += "<div></div>"
        }
        else {
            affRes += "<div class='bout' onClick='clickSuivantLocation(\"" + data.next + "\")'>suivant</div>"
        }
        affRes += "</div></div></div>"
        $("#body").html(affRes)
    })
}

function clickDetailLocation(url) {
    $.get(url, (data) => {
    
        $("#detElem").html(JSON.stringify(data))
    })
}
// ----- PARTIE MACHINES  ------------

$("#machinesList").click(() => {

    clickSuivantMa("https://pokeapi.co/api/v2/machine/")
})

function clickSuivantMa(url) {
    console.log(url)
    let myUrl = new URL(url)
    // console.log(myUrl)
    let offset = myUrl.searchParams.get("offset")
    if (offset === null) offset = 0
    $.get(myUrl.origin + myUrl.pathname + "?offset=" + offset, (data) => {
        console.log(data)
        let affRes = ""
        affRes += "<div class='contenerList'>"
        affRes += "<h1>Liste des Machines</h1>"
        affRes += "<div id='tabList'>"
        for (let i in data.results) {
            affRes += "<div class='ligneList' onClick='clickDetailMa(\""  + data.results[i].url + "\")'>"
            affRes += "<div>" + ((+offset) + (+i) + 1) + "</div>"
            affRes += "<div>" +'N° ' + ((+offset) + (+i) + 1) + "</div>"
            affRes += "</div>"
        }
        affRes += "<div class='contenerBout'>"
        if (data.previous === null) {
            affRes += "<div></div>"
        }
        else {
            affRes += "<div class='bout' onClick='clickSuivantMa(\"" + data.previous + "\")'>précédent</div>"
        }
        if (data.next === null) {
            affRes += "<div></div>"
        }
        else {
            affRes += "<div class='bout' onClick='clickSuivantMa(\"" + data.next + "\")'>suivant</div>"
        }
        affRes += "</div></div></div>"
        $("#body").html(affRes)
    })
}

function clickDetailMa(url) {
    $.get(url, (data) => {
    
        $("#detElem").html(JSON.stringify(data))
    })
}
// ----- PARTIE MOVES  ------------

$("#movesList").click(() => {

    clickSuivantMov("https://pokeapi.co/api/v2/move/")
})

function clickSuivantMov(url) {
    console.log(url)
    let myUrl = new URL(url)
    // console.log(myUrl)
    let offset = myUrl.searchParams.get("offset")
    if (offset === null) offset = 0
    $.get(myUrl.origin + myUrl.pathname + "?offset=" + offset, (data) => {
        console.log(data)
        let affRes = ""
        affRes += "<div class='contenerList'>"
        affRes += "<h1>Liste des mouvements </h1>"
        affRes += "<div id='tabList'>"
        for (let i in data.results) {
            affRes += "<div class='ligneList' onClick='clickDetailMov(\""  + data.results[i].url + "\")'>"
            affRes += "<div>" + ((+offset) + (+i) + 1) + "</div>"
            affRes += "<div>" + data.results[i].name + "</div>"
            affRes += "</div>"
        }
        affRes += "<div class='contenerBout'>"
        if (data.previous === null) {
            affRes += "<div></div>"
        }
        else {
            affRes += "<div class='bout' onClick='clickSuivantMov(\"" + data.previous + "\")'>précédent</div>"
        }
        if (data.next === null) {
            affRes += "<div></div>"
        }
        else {
            affRes += "<div class='bout' onClick='clickSuivantMov(\"" + data.next + "\")'>suivant</div>"
        }
        affRes += "</div></div></div>"
        $("#body").html(affRes)
    })
}

function clickDetailMov(url) {
    $.get(url, (data) => {
    
        $("#detElem").html(JSON.stringify(data))
    })
}
// ----- PARTIE POKEMON  ------------

$("#pokemonList").click(() => {

    clickSuivantPoke("https://pokeapi.co/api/v2/pokemon/")
})

function clickSuivantPoke(url) {
    console.log(url)
    let myUrl = new URL(url)
    // console.log(myUrl)
    let offset = myUrl.searchParams.get("offset")
    if (offset === null) offset = 0
    $.get(myUrl.origin + myUrl.pathname + "?offset=" + offset, (data) => {
        console.log(data)
        let affRes = ""
        affRes += "<div class='contenerList'>"
        affRes += "<h1>Liste des moyens de rencontres</h1>"
        affRes += "<div id='tabList'>"
        for (let i in data.results) {
            affRes += "<div class='ligneList' onClick='clickDetailPoke(\""  + data.results[i].url + "\")'>"
            affRes += "<div>" + ((+offset) + (+i) + 1) + "</div>"
            affRes += "<div>" + data.results[i].name + "</div>"
            affRes += "</div>"
        }
        affRes += "<div class='contenerBout'>"
        if (data.previous === null) {
            affRes += "<div></div>"
        }
        else {
            affRes += "<div class='bout' onClick='clickSuivantPoke(\"" + data.previous + "\")'>précédent</div>"
        }
        if (data.next === null) {
            affRes += "<div></div>"
        }
        else {
            affRes += "<div class='bout' onClick='clickSuivantPoke(\"" + data.next + "\")'>suivant</div>"
        }
        affRes += "</div></div></div>"
        $("#body").html(affRes)
    })
}

function clickDetailPoke(url) {
    $.get(url, (data) => {
    console.log(data)

    let affDet=""
    affDet += "<div class='contenerList'>"
    affDet += "<h1>Infos Complémentaires</h1>"
    affDet += "<div id='tabList'>"

      affDet += " <p> Poids :  "+data.weight+" Kgs   </p>"
      affDet += "<p>  Taille : "+data.height+ " m  </p>"
      $("#detElem").html(affDet)
       
})
}
