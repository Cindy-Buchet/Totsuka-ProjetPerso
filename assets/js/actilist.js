


fetch('https://spreadsheets.google.com/feeds/list/1m_yWTlrWu7xhaEXh5QCSk8HpppKr_c3Aq8wRraicYwA/od6/public/values?alt=json').then(blob => {
    return blob.json();
}).then(value => {
    
    let days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
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

            //push des act
            NewTab.push(acti1); //TabMembers[index][1]
            NewTab.push(acti2); //TabMembers[index][2]
            NewTab.push(acti3); //TabMembers[index][3]

            //push des heures
            NewTab.push(heure1); //TabMembers[index][4]
            NewTab.push(heure2); //TabMembers[index][5]
            NewTab.push(heure3); //TabMembers[index][6]

            //push des organisateurs
            NewTab.push(orga1); //TabMembers[index][7]
            NewTab.push(orga2); //TabMembers[index][8]
            NewTab.push(orga3); //TabMembers[index][9]

            TabMembers.push(NewTab);

        }
        
        //parcours du tableau et création des cards
        for(index = 0; index < TabMembers.length; index++){
            
            //on affiche que les jours ou il y a des activités
            if ( TabMembers[index][1] == "" && TabMembers[index][2] == "" && TabMembers[index][3] == "" ){
                //possibilité d'afficher "aucune activité" sur le jours"
                let Cardcontainer = document.getElementById('card-container');
            

            let raw = document.createElement('div');
            raw.className = 'row';

            let col = document.createElement('div');
            col.className = 'col-12';

            let card = document.createElement('div');
            card.className = 'card bg-light mb-3';

            

            let cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            //Card Title : ici jour + mois 
            let title = document.createElement('h5');
            title.innerText = TabMembers[index][0] + " " +  mois;
            title.className = 'card-header text-center';

            let text = document.createElement('h5');
            text.innerText = "\n Aucune activité n'est organisé pour ce jour.";
            text.className = 'card-text text-center';
            
            
            cardBody.appendChild(title);
            cardBody.appendChild(text);
            card.appendChild(cardBody);
            col.appendChild(card);
            raw.appendChild(col);
            Cardcontainer.appendChild(raw);
            }else{

                // on vérifie que tout les champs du sheet sont remplis et seulement si c'est le  cas on affiche la card.
                if (TabMembers[index][1] != "" && TabMembers[index][2] != "" && TabMembers[index][3] != "" && TabMembers[index][4] != "" && TabMembers[index][5] != ""  && TabMembers[index][6] != "" && TabMembers[index][7] != "" && TabMembers[index][8] != "" && TabMembers[index][9] != "") {
                let Cardcontainer = document.getElementById('card-container');
                

                let raw = document.createElement('div');
                raw.className = 'row';

                let col = document.createElement('div');
                col.className = 'col-12';

                let card = document.createElement('div');
                card.className = 'card bg-light mb-3';

                

                let cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                //Card Title : ici jour + mois 
                let title = document.createElement('h5');
                title.innerText = TabMembers[index][0] + " " +  mois;
                title.className = 'card-header text-center';

                let text = document.createElement('h5');
                text.innerText = "\n Première acitivité : " + TabMembers[index][1] + " organisé à " + TabMembers[index][4] + " par " + TabMembers[index][7];
                text.className = 'card-text';

                let text2 = document.createElement('h5');
                text2.innerText = "\n Première acitivité : " + TabMembers[index][2] + " organisé à " + TabMembers[index][5] + " par " + TabMembers[index][8];
                text2.className = 'card-text';

                let text3 = document.createElement('h5');
                text3.innerText = "\n Première acitivité : " + TabMembers[index][3] + " organisé à " + TabMembers[index][6] + " par " + TabMembers[index][9];
                text3.className = 'card-text';
                
                
                cardBody.appendChild(title);
                cardBody.appendChild(text);
                cardBody.appendChild(text2);
                cardBody.appendChild(text3);
                card.appendChild(cardBody);
                col.appendChild(card);
                raw.appendChild(col);
                Cardcontainer.appendChild(raw);
                }
        }
                
        }
}).catch(error => {
    console.log(error)
})