let condi = "";
    function Zero(data,clas){
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
    
    let getObject = JSON.parse(localStorage.getItem('stock'));
    console.log(getObject);

    document.title = "Profil de " + getObject.gsx$nom.$t;
    let pnom = document.querySelector(".profil-nom");
    let ptotal = document.querySelector(".profil-total");
    let pclan = document.querySelector(".profil-clan");
    let pimg = document.querySelector(".profil-img");
    let ppendu = document.querySelector(".profil-pendu");

    pnom.innerHTML = getObject.gsx$nom.$t;
    Zero(getObject.gsx$total.$t, ptotal);
    pclan.innerHTML = getObject.gsx$clan.$t;
    Zero(getObject.gsx$pendu.$t, ppendu);
    
    let clan = getObject.gsx$clan.$t;
    if (clan == "Akatsuki"){
        pimg.src = "assets/img/akatsuki.png";
        
    } else if ( clan == "Senju"){
       pimg.src = "assets/img/senju.png";
         
    }  else if ( clan == "Uchiha"){
        pimg.src = "assets/img/uchiha.png";
         
    }  else if ( clan == "Uzumaki"){
        pimg.src = "assets/img/uzumaki.png";
         
    }    
