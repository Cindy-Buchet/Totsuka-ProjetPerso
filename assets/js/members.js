let header = new Headers();
    header.set("Content-type","application/json")

    fetch('https://spreadsheets.google.com/feeds/list/1KAjY4xdLEkC26gtne5fz-fK5AAZU1f8gc-hpPvpCJeo/od6/public/values?alt=json',{
        headers:header
    }).then(blob => {
        return blob.json();
    }).then(value => {
        let mydata = value;
        let test = mydata.feed.entry;
        console.log(test);

        for (let i = 0; i < test.length - 2; i++){
            let ajouttest = document.querySelector(".results");
            ajouttest.innerHTML += '<h1>' + test[i].gsx$_cn6ca.$t + '</h1><p>Total: '+ test[i].gsx$total.$t + " points</p>";
        }

        
        

    }).catch(error => {
        console.log(error)
    })