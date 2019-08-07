let condi = "";
    function Zero(acti,data,listeul){
        let NouLi = document.createElement('li');
        if (data != 0){
            condi = " points";
        } else{
            condi = " point";
        }
    
        if (data != ""){
            NouLi.innerHTML = "<span>" + acti + ":</span> " + data + condi;
        } else{
            NouLi.innerHTML = "<span>" + acti + ":</span> " + 0 + condi;
        }
    
        listeul.appendChild(NouLi);
    }


    
    let getObject = JSON.parse(localStorage.getItem('stock'));

    console.log(getObject);
   let TypeAct = [
        [getObject.gsx$bac.$t, "Jeux", "BAC"],
        [getObject.gsx$bénévolat.$t, "Long terme", "Bénévolat"],
        [getObject.gsx$blindtest.$t,"Jeux","Blind test"],
        [getObject.gsx$burgerquiz.$t, "Jeux de société", "Burger Quiz"],
        [getObject.gsx$cestquicestoùcestquoi.$t,"Phrase","C'est qui/quoi/où?"],
        [getObject.gsx$culturegeek.$t,"Jeux de société","Culture Geek"],
        [getObject.gsx$dessinàthème.$t, "Autre", "Dessin à thème"],
        [getObject.gsx$fakenews.$t, "Phrase", "Fake News"],
        [getObject.gsx$indix.$t, "Jeux de société","Indix"],
        [getObject.gsx$invitationdiscord.$t, "Autre","Invitation Discord"],
        [getObject.gsx$jeuxmessenger.$t, "Jeux","Jeux Messenger"],
        [getObject.gsx$limitelimite.$t, "Jeux de société","Limite limite"],
        [getObject.gsx$loupgarou.$t, "Bot Discord","Loup Garou"],
        [getObject.gsx$pendu.$t, "Bot Discord","Pendu"],
        [getObject.gsx$phraseavecmot.$t, "Phrase","Phrase avec mot"],
        [getObject.gsx$plato.$t, "Jeux","Plato"],
        [getObject.gsx$pokéduel.$t, "Tournoi","Pokéduel"],
        [getObject.gsx$publicité.$t, "Phrase","Publicité"],
        [getObject.gsx$putaclick.$t, "Phrase","Putaclick"],
        [getObject.gsx$quiz.$t, "Jeux","Quiz"],
        [getObject.gsx$skribbl.$t, "Jeux","Skribbl"],
        [getObject.gsx$sypnosisfilmdhorreur.$t, "Phrase","Sypnosis film d'horreur"],
        [getObject.gsx$teabot.$t, "Bot Discord","Tea bot"],
        [getObject.gsx$tournoi5ttt.$t, "Tournoi","Tournoi 5TTT"],
        [getObject.gsx$tournoifootball.$t, "Tournoi","Tournoi football"],
        [getObject.gsx$tournoipuissance4.$t, "Tournoi","Tournoi puissance 4"],
        [getObject.gsx$trouvelobjet.$t, "Jeux de société","Trouver l'objet"],
        [getObject.gsx$trouverbonnombre.$t, "Bot Discord","Trouver bon nombre"],
        [getObject.gsx$ttmc.$t, "Jeux de société","TTMC"],
        [getObject.gsx$vocal.$t, "Autre","Vocal"]
    ];
    

    document.title = "Profil de " + getObject.gsx$nom.$t;
    let pnom = document.querySelector(".profil-nom");
    let ptotal = document.querySelector(".profil-total");
    let pclan = document.querySelector(".profil-clan");
    let pimg = document.querySelector(".profil-img");
    let ppres = document.querySelector(".profil-pres");
    let actJeuxSoc = document.querySelector(".profil-jeuxsociete");
    let actJeux = document.querySelector(".profil-jeux");
    let actBot = document.querySelector(".profil-bot");
    let actAutre = document.querySelector(".profil-autre");
    let actPhrase = document.querySelector(".profil-phrase");
    let actTournoi = document.querySelector(".profil-tournoi");
    

    pnom.innerHTML = getObject.gsx$nom.$t;
    pclan.innerHTML = getObject.gsx$clan.$t;

    
        if (getObject.gsx$total.$t != 0){
            condi = " points";
        } else{
            condi = " point";
        }
    
        if (getObject.gsx$total.$t != ""){
            ptotal.innerHTML = getObject.gsx$total.$t + condi;
        } else{
            ptotal.innerHTML = 0 + condi;
        }
    
        

    for (let i = 0; i < TypeAct.length; i++){
        if (TypeAct[i][1] == "Jeux de société"){
            Zero(TypeAct[i][2], TypeAct[i][0], actJeuxSoc);
        } else if (TypeAct[i][1] == "Bot Discord"){
            Zero(TypeAct[i][2], TypeAct[i][0], actBot);
        } else if (TypeAct[i][1] == "Jeux"){
            Zero(TypeAct[i][2], TypeAct[i][0], actJeux);
        } else if (TypeAct[i][1] == "Autre"){
            Zero(TypeAct[i][2], TypeAct[i][0], actAutre);
        } else if (TypeAct[i][1] == "Phrase"){
            Zero(TypeAct[i][2], TypeAct[i][0], actPhrase);
        } else if (TypeAct[i][1] == "Tournoi"){
            Zero(TypeAct[i][2], TypeAct[i][0], actTournoi);
        }
    }
    
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
    