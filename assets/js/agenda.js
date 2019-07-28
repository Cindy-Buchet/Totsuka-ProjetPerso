fetch('https://spreadsheets.google.com/feeds/list/1m_yWTlrWu7xhaEXh5QCSk8HpppKr_c3Aq8wRraicYwA/od6/public/values?alt=json').then(blob => {
    return blob.json();
}).then(value => {
    
    let mydata = value;
    let joursTab = mydata.feed.entry;
    console.log(joursTab);

  function func1(a) {
    for (let i = 0; i < joursTab.length; i++){
        
        if(arguments[0] == joursTab[i].gsx$jour.$t){
        let gsvar = joursTab[i].gsx$jour.$t;
        
    }
    }
  }

  function GetActivities(a) {
    for (let i = 0; i < joursTab.length; i++){
        
        if(arguments[0] == joursTab[i].gsx$jour.$t){
        let act1 = joursTab[i].gsx$activite1.$t;
        let act2 = joursTab[i].gsx$activite2.$t;
        let act3 = joursTab[i].gsx$activite3.$t;
        
        return act1,act2,act3;
    }
    }
  }

  
  
  function func2(a) {
    let selectClass = document.querySelectorAll(".jours");
    for (let z = 0; z < selectClass.length; z++){
        if((arguments[0]) == selectClass[z].innerHTML){
        
        let calendarvar = selectClass[z].innerHTML;
        
        }
        }
    
    }
    
    let selectClass = document.querySelectorAll(".jours");
    for (let r = 0; r < selectClass.length; r++){
        
        let var1 = func1(r);
        let var2 = func2(r);
        let activite = GetActivities(r);

        if (var1 == var2){
            let newP = document.createElement('p');
            newP.innerHTML = activite;
            selectClass[r].appendChild(newP);

        }
        


    }


    
  

}).catch(error => {
    console.log(error)
})