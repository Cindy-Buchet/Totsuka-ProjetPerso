


let header = new Headers();
    header.set("Content-type","application/json")

    fetch('https://spreadsheets.google.com/feeds/list/1KAjY4xdLEkC26gtne5fz-fK5AAZU1f8gc-hpPvpCJeo/od6/public/values?alt=json',{
        headers:header
    }).then(blob => {
        return blob.json();
    }).then(value => {
        let mydata = value;
        let test = mydata.feed.entry;
          
            
    
    let getObject = JSON.parse(localStorage.getItem('stock'));
    console.log(getObject);

    let pnom = document.querySelector(".profil-nom");
    let ptotal = document.querySelector(".profil-total");
    let pclan = document.querySelector(".profil-clan");

    pnom.innerHTML = getObject.gsx$nom.$t;
    ptotal.innerHTML = getObject.gsx$total.$t + " points";
    pclan.innerHTML = getObject.gsx$clan.$t;


    }).catch(error => {
        console.log(error)
    })

