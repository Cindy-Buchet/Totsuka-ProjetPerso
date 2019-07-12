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

    let pnom = document.querySelector(".profil-nom");
    let ptotal = document.querySelector(".profil-total");
    let pclan = document.querySelector(".profil-clan");
    let pimg = document.querySelector(".profil-img");
    let ppendu = document.querySelector(".profil-pendu");

    pnom.innerHTML = getObject.gsx$nom.$t;
    Zero(getObject.gsx$total.$t, ptotal);
    pclan.innerHTML = getObject.gsx$clan.$t;
    Zero(getObject.gsx$pendu.$t, ppendu);
    
    pimg.style.width = "100px";

    let clan = getObject.gsx$clan.$t;
    if (clan == "Akatsuki"){
        pimg.src = "assets/img/akatsuki.jpg";
        
    } else if ( clan == "Senju"){
       pimg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Symbole_du_clan_senju.svg/1280px-Symbole_du_clan_senju.svg.png";
         
    }  else if ( clan == "Uchiha"){
        pimg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Symbole_Uchiwa.svg/500px-Symbole_Uchiwa.svg.png";
         
    }  else if ( clan == "Uzumaki"){
        pimg.src = "https://wir.skyrock.net/wir/v1/resize/?c=isi&im=%2F6721%2F88246721%2Fpics%2F3173418769_1_3_h1W3xdJe.png&w=409";
         
    }    
