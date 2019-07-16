// TEMPLATE MEMBRES
let card = document.querySelector("#act-template");
let members = card.content.querySelector("#act-contenu");
let newp = "";

let contenu = document.querySelector(".act-ol");

    fetch('https://spreadsheets.google.com/feeds/list/1DpP3QfTwWsQrjP5es24m_-AF3BIGsS0fWqcz9Ivi4F4/od6/public/values?alt=json').then(blob => {
        return blob.json();
    }).then(value => {
        
        let mydata = value;
        let test = mydata.feed.entry;

        
        // Boucle pour afficher les activités
        for (let i = 0; i < test.length; i++){
            let d = document.importNode(members, true);
            let clic = d.querySelector(".card");
            let im = d.querySelector(".act-img");
            let nom = d.querySelector(".act-nom");
            let descr = d.querySelector(".act-descri");
            let poin = d.querySelector(".act-points");
            let voc = d.querySelector(".act-vocal");
            let ecr = d.querySelector(".act-ecrit");

            nom.innerHTML = test[i].gsx$nom.$t;

            function NewP(val, cla, ele){
                if (val != ""){
                    newp = document.createElement(ele);
                    newp.innerHTML = val;
                    cla.appendChild(newp);
                }
            }
            // Description
            NewP(test[i].gsx$descri1.$t, descr, 'p');
            NewP(test[i].gsx$descri2.$t, descr, 'p');
            NewP(test[i].gsx$descri3.$t, descr, 'p');

            // Points
            NewP(test[i].gsx$points1.$t, poin, 'li');
            NewP(test[i].gsx$points2.$t, poin, 'li');
            NewP(test[i].gsx$points3.$t, poin, 'li');
            NewP(test[i].gsx$points4.$t, poin, 'li');
            NewP(test[i].gsx$points5.$t, poin, 'li');

            // Images
            if(test[i].gsx$img.$t == ""){
                im.src = "https://image.flaticon.com/icons/png/512/55/55089.png";
            } else{
                im.src = test[i].gsx$img.$t;
            }

            // Vocal
            voc.src = "assets/img/vocal.png";

            if (test[i].gsx$vocal.$t == "oui"){
                voc.style.backgroundColor = "green";
            } else{
                voc.style.backgroundColor = "grey";
                voc.style.opacity = "0.4";
            }

            // Ecrit 
            ecr.src = "assets/img/ecrit.png";
            if (test[i].gsx$ecrit.$t == "oui"){
                ecr.style.backgroundColor = "green";
            }else{
                ecr.style.backgroundColor = "grey";
                ecr.style.opacity = "0.4";
            }

            contenu.appendChild(d);
            
        }

    }).catch(error => {
        console.log(error)
    })

