fetch('https://spreadsheets.google.com/feeds/list/1m_yWTlrWu7xhaEXh5QCSk8HpppKr_c3Aq8wRraicYwA/od6/public/values?alt=json').then(blob => {
    return blob.json();
}).then(value => {
    
    let mydata = value;
    let joursTab = mydata.feed.entry;
    //console.log(joursTab);
        
        //récuprération du mois via la case du sheet fixé manuellement
        let mois = joursTab[0].gsx$mois.$t;
        //console.log(mois);
    
        //création du tab qui va contenir les ["jour","activite1","activite2","activité3"]
        let TabMembers = [];
        
        for (let m = 0; m<joursTab.length; m++){
            //recupération du jours
            let day = joursTab[m].gsx$jour.$t;
            
            //recupération des infos de l'activité 1
            let acti1 = joursTab[m].gsx$activite1.$t;
            let heure1 = joursTab[m].gsx$heure1.$t;
            let orga1 = joursTab[m].gsx$par1.$t;

            //récupération des infos de l'activité 2
            let acti2 = joursTab[m].gsx$activite2.$t;
            let heure2 = joursTab[m].gsx$heure2.$t;
            let orga2 = joursTab[m].gsx$par2.$t;

            //récupération des infos de l'activité 3
            let acti3 = joursTab[m].gsx$activite3.$t;
            let heure3 = joursTab[m].gsx$heure2.$t;
            let orga3 = joursTab[m].gsx$par3.$t;

            //création du tab pour récupérer tout les infos en un tab
            let NewTab = [];
            
            //push du jour
            NewTab.push(day); //TabMembers[index][0]

            function PushTab(donnee1, donnee2, donnee3){
                NewTab.push(donnee1); // Activité 
                NewTab.push(donnee2); // Heure
                NewTab.push(donnee3); // Par
            }
            PushTab(acti1, heure1, orga1);
            PushTab(acti2, heure2, orga2);
            PushTab(acti3, heure3, orga3);

            TabMembers.push(NewTab);

        }
        
        //parcours du tableau et création des cards
        for(index = 0; index < TabMembers.length; index++){
            
            //on affiche que les jours ou il y a des activités
            if ( TabMembers[index][1] == "" && TabMembers[index][2] == "" && TabMembers[index][3] == "" ){
                //possibilité d'afficher "aucune activité" sur le jours"
                let Cardcontainer = document.getElementById('card-container');
            


            let col = document.createElement('div');
            col.className = 'col-12 col-md-4 col-lg-3';

            let card = document.createElement('div');
            card.className = 'card bg-light mb-3';

            

            let cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            //Card Title : ici jour + mois 
            let title = document.createElement('h5');
            title.innerText = TabMembers[index][0] + " " +  mois;
            title.className = 'card-header text-center';

            let text = document.createElement('p');
            text.innerText = "\n Aucune activité n'est organisé pour ce jour.";
            text.className = 'card-text text-center';
            
            
            card.appendChild(title);
            cardBody.appendChild(text);
            card.appendChild(cardBody);
            col.appendChild(card);
            Cardcontainer.appendChild(col);
            }else{

                // on vérifie qu'il y a une activité et seulement si c'est le  cas on affiche la card
                if (TabMembers[index][1] != "" && TabMembers[index][2] != "" && TabMembers[index][3] != "" ) {
                let Cardcontainer = document.getElementById('card-container');
                

                let col = document.createElement('div');
                col.className = 'col-12 col-md-4 col-lg-3';

                let card = document.createElement('div');
                card.className = 'card bg-light mb-3';

                

                let cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                //Card Title : ici jour + mois 
                let title = document.createElement('h5');
                title.innerText = TabMembers[index][0] + " " +  mois;
                title.className = 'card-header text-center';
                card.appendChild(title);

                let ListUl = document.createElement("ul");

                function CreatLi(Tab1, Tab2, Tab3){
                    let text = document.createElement('li');
                    text.innerHTML = "<p><span>" + Tab1 + "</span> à " + Tab2 + "</p><p>Organisé par " + Tab3 + "</p>";
                    ListUl.appendChild(text); 
                }
                
                CreatLi(TabMembers[index][1], TabMembers[index][2],TabMembers[index][3]); 

                if (TabMembers[index][4] != "" && TabMembers[index][5] != "" && TabMembers[index][6] != "" ){
                    CreatLi(TabMembers[index][4], TabMembers[index][5],TabMembers[index][6]); 
                }
                
                if (TabMembers[index][7] != "" && TabMembers[index][8] != "" && TabMembers[index][9] != "" ){
                    CreatLi(TabMembers[index][7], TabMembers[index][8],TabMembers[index][9]); 
                }

                cardBody.appendChild(ListUl);
                
                card.appendChild(cardBody);
                col.appendChild(card);
                Cardcontainer.appendChild(col);
                }
        }
                
        }
}).catch(error => {
    console.log(error)
})