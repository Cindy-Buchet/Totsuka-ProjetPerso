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
    let ppres = document.querySelector(".profil-pres");

    pnom.innerHTML = getObject.gsx$nom.$t;
    Zero(getObject.gsx$total.$t, ptotal);
    pclan.innerHTML = getObject.gsx$clan.$t;
    Zero(getObject.gsx$pendu.$t, ppendu);
    
    
    if(getObject.gsx$img.$t == ""){
        pimg.src = "https://image.flaticon.com/icons/png/512/55/55089.png";
    } else{
        pimg.src = getObject.gsx$img.$t;
    }
  
    let clan = getObject.gsx$clan.$t;

    if (clan == "Akatsuki"){
        pclan.src = "assets/img/akatsuki.png";
        
    } else if ( clan == "Senju"){
       pclan.src = "assets/img/senju.png";
         
    }  else if ( clan == "Uchiha"){
        pclan.src = "assets/img/uchiha.png";
         
    }  else if ( clan == "Uzumaki"){
        pclan.src = "assets/img/uzumaki.png";
         
    } 
    