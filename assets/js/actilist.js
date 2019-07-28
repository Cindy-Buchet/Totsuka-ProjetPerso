


fetch('https://spreadsheets.google.com/feeds/list/1m_yWTlrWu7xhaEXh5QCSk8HpppKr_c3Aq8wRraicYwA/od6/public/values?alt=json').then(blob => {
    return blob.json();
}).then(value => {
    
    let days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    let mydata = value;
    let joursTab = mydata.feed.entry;
    //console.log(joursTab);

    
        let TabMembers = [];
        
        for (let m = 0; m<joursTab.length; m++){
            
            let day = joursTab[m].gsx$jour.$t;
            let acti1 = joursTab[m].gsx$activite1.$t;
            let acti2 = joursTab[m].gsx$activite2.$t;
            let acti3 = joursTab[m].gsx$activite3.$t;
            
            
            let NewTab = [];
          
            NewTab.push(day);
            NewTab.push(acti1);
            NewTab.push(acti2);
            NewTab.push(acti3);
            TabMembers.push(NewTab);

        }

        for(index = 0; index < TabMembers.length; index++){
            console.log("Le " + TabMembers[index][0] + " Aout." + "Les activitées sont : " + TabMembers[index][1]+ " " + TabMembers[index][2]+ " " +TabMembers[index][3]);
        }


        for (let i = 0; i < joursTab.length; i++){
            mois = joursTab[i].gsx$mois.$t;
            console.log(mois);

            
                
            let card = document.querySelector(".card");
            let nom = document.querySelector(".card-header");
            let text = document.querySelector(".card-text");
            let text2 = document.querySelector(".card-text2");
            let text3 = document.querySelector(".card-text3");
            
            nom.innerHTML = TabMembers[i][0] + " " + mois;
            text.innerHTML = TabMembers[i][1];
            text2.innerHTML = TabMembers[i][2];
            text3.innerHTML = TabMembers[i][3];
                
           

            /* 
            console.log(TabMembers[i][0]); // 1
            console.log(TabMembers[i][1]); // dormir
            console.log(TabMembers[i][2]); // jouer
            console.log(TabMembers[i][3]); // pleurer
            console.log(TabMembers[i]); // [ "1", "dormir", "jouer", "pleurer" ]
            */
           

            
        }
     
        
    
    
    

    


    
}).catch(error => {
    console.log(error)
})