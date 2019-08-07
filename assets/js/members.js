// TEMPLATE MEMBRES
let card = document.querySelector("#template");
let members = card.content.querySelector("#templateMembers");


let aka = document.querySelector(".akatsuki");
let sen = document.querySelector(".senju");
let uch = document.querySelector(".uchiha");
let uzu = document.querySelector(".uzumaki");
let ajou = "";
let inputvalue ="";

    fetch('https://spreadsheets.google.com/feeds/list/1KAjY4xdLEkC26gtne5fz-fK5AAZU1f8gc-hpPvpCJeo/od6/public/values?alt=json').then(blob => {
        return blob.json();
    }).then(value => {
        
        let mydata = value;
        let test = mydata.feed.entry;
        // Classement
        function TopMembers(){
            let TabMembers = [];
            
            for (let m = 0; m<test.length; m++){
                let memb = test[m].gsx$nom.$t;
                let pts = test[m].gsx$total.$t;
                let NewTab = [];
                NewTab.push(memb);
                NewTab.push(pts);
                TabMembers.push(NewTab);

                TabMembers.sort(function(a, b) {
                    return b[1] - a[1];
                  });
                
            }

        }

        TopMembers();
        

        let PaUch = document.querySelector(".total-uch");
        let PtsUchiha = 0;

        let PaUzu = document.querySelector(".total-uzu");
        let PtsUzu = 0;
        
        let PaAkat = document.querySelector(".total-aka");
        let PtsAkat = 0;
        
        let PaSenju = document.querySelector(".total-sen");
        let PtsSenju = 0;
        
        // Boucle pour afficher tout le monde
        for (let i = 0; i < test.length; i++){
            let a = document.importNode(members, true);
            let clic = a.querySelector(".card");
            clic.id = "membres"+ i;
            let nom = a.querySelector(".card-title");
            let total = a.querySelector(".card-text");
            let im = a.querySelector(".card-img");
            if(test[i].gsx$img.$t == ""){
                im.src = "https://image.flaticon.com/icons/png/512/55/55089.png";
            } else{
                im.src = test[i].gsx$img.$t;
            }
            
            let list__el = "";

            // Afficher point(s) selon le nombre
            function Point(data,clas,addition){
                if (data == 0){
                    condi = " point";
                } else{
                    condi = " points";
                }
      
                if (data === ""){
                    clas.innerHTML += 0 + condi;
                } else{
                    clas.innerHTML += data + condi;
                }
            }

            let clan = test[i].gsx$clan.$t;

            // Mettre dans son clan
            if (clan == "Akatsuki" && test[i].gsx$nom.$t != ""){
                nom.innerHTML = test[i].gsx$nom.$t;
                Point(test[i].gsx$total.$t,total);
                PtsAkat = PtsAkat + parseInt(test[i].gsx$total.$t);
                aka.appendChild(a);
            } else if ( clan == "Senju" && test[i].gsx$nom.$t != ""){
                nom.innerHTML = test[i].gsx$nom.$t;
                Point(test[i].gsx$total.$t,total);
                PtsSenju = PtsSenju + parseInt(test[i].gsx$total.$t);
                sen.appendChild(a);
                 
            }  else if ( clan == "Uchiha" && test[i].gsx$nom.$t != ""){
                nom.innerHTML = test[i].gsx$nom.$t;
                Point(test[i].gsx$total.$t,total);
                PtsUchiha = PtsUchiha + parseInt(test[i].gsx$total.$t);
                uch.appendChild(a);
                 
            }  else if ( clan == "Uzumaki" && test[i].gsx$nom.$t != ""){
                nom.innerHTML = test[i].gsx$nom.$t;
                Point(test[i].gsx$total.$t,total);
                PtsUzu = PtsUzu + parseInt(test[i].gsx$total.$t);
                uzu.appendChild(a);
            }


            // Enregistrer sur le local la personne
            list__el =  a.querySelector("#membres"+i);
                
                list__el.addEventListener('click', function(){
                    
                    localStorage.setItem('stock', JSON.stringify(test[i]));
                    window.location.href = 'profil.html';
    
                });
            
            

            }   

            PaAkat.innerHTML = PtsAkat + " points";
            PaSenju.innerHTML = PtsSenju + " points";
            PaUch.innerHTML = PtsUchiha + " points";
            PaUzu.innerHTML = PtsUzu + " points";
            



    }).catch(error => {
        console.log(error)
    })

