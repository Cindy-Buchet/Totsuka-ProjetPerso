let card = document.querySelector("#template");
let members = card.content.querySelector("#templateMembers");

let aka = document.querySelector(".akatsuki");


let header = new Headers();
    header.set("Content-type","application/json")

    fetch('https://spreadsheets.google.com/feeds/list/1KAjY4xdLEkC26gtne5fz-fK5AAZU1f8gc-hpPvpCJeo/od6/public/values?alt=json',{
        headers:header
    }).then(blob => {
        return blob.json();
    }).then(value => {
        let mydata = value;
        let test = mydata.feed.entry;

        for (let i = 0; i < test.length; i++){
            let a = document.importNode(members, true);
            let nom = a.querySelector("#nom");
            let total = a.querySelector(".card-text");

            let clan = test[i].gsx$clan.$t;
            if(test[i].gsx$nom.$t == ""){
                i-1;
            }

            if (clan == "Akatsuki"){
                nom.innerHTML = test[i].gsx$nom.$t;
                console.log(test[i].gsx$nom.$t);
                total.innerHTML = test[i].gsx$total.$t + " points";
                aka.appendChild(a);

            } 
            /* else if ( clan == "Senju"){
                let sen = document.querySelector(".senju");
                sen.innerHTML += '<h2>' + test[i].gsx$nom.$t + '</h2><p>Total: '+ test[i].gsx$total.$t + " points</p>";
            
            }
            */
            
        }

        
        

    }).catch(error => {
        console.log(error)
    })