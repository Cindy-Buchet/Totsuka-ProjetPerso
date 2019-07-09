let card = document.querySelector("#template");
let members = card.content.querySelector("#templateMembers");

let aka = document.querySelector(".akatsuki");
let sen = document.querySelector(".senju");
let uch = document.querySelector(".uchiha");
let uzu = document.querySelector(".uzumaki");


    fetch('https://spreadsheets.google.com/feeds/list/1KAjY4xdLEkC26gtne5fz-fK5AAZU1f8gc-hpPvpCJeo/od6/public/values?alt=json').then(blob => {
        return blob.json();
    }).then(value => {
        let mydata = value;
        let test = mydata.feed.entry;

        for (let i = 0; i < test.length; i++){
            let a = document.importNode(members, true);
            let clic = a.querySelector(".card");
            clic.id = "membres"+ i;
            let nom = a.querySelector(".card-title");
            let total = a.querySelector(".card-text");

            let list__el = "";

            let clan = test[i].gsx$clan.$t;

            if (clan == "Akatsuki" && test[i].gsx$nom.$t != ""){
                nom.innerHTML = test[i].gsx$nom.$t;
                total.innerHTML = test[i].gsx$total.$t + " points";
                aka.appendChild(a);   
            } else if ( clan == "Senju" && test[i].gsx$nom.$t != ""){
                nom.innerHTML = test[i].gsx$nom.$t;
                total.innerHTML = test[i].gsx$total.$t + " points";
                sen.appendChild(a);
                 
            }  else if ( clan == "Uchiha" && test[i].gsx$nom.$t != ""){
                nom.innerHTML = test[i].gsx$nom.$t;
                total.innerHTML = test[i].gsx$total.$t + " points";
                uch.appendChild(a);
                 
            }  else if ( clan == "Uzumaki" && test[i].gsx$nom.$t != ""){
                nom.innerHTML = test[i].gsx$nom.$t;
                total.innerHTML = test[i].gsx$total.$t + " points";
                uzu.appendChild(a);
                 
            }    
            list__el =  a.querySelector("#membres"+i);
                
                list__el.addEventListener('click', function(){
                    
                    localStorage.setItem('stock', JSON.stringify(test[i]));
                    window.location.href = 'profil.html';
    
                });
            
        // Ouvrir page profil.html au clic 
     
        
           /* list__el.addEventListener('click', function(){

                let json__members = JSON.stringify(test[i]);
                console.log(json__members);
                //window.sessionStorage.setItem(test[y], json__members);

                //window.location.href = 'profil.html';

            });   */ 
                
        }

               
            



    }).catch(error => {
        console.log(error)
    })

