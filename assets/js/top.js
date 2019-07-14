// TEMPLATE TOP
let card2 = document.querySelector("#template-top");
let topmem = card2.content.querySelector("#templateMembers-top");

    fetch('https://spreadsheets.google.com/feeds/list/1KAjY4xdLEkC26gtne5fz-fK5AAZU1f8gc-hpPvpCJeo/od6/public/values?alt=json').then(blob => {
        return blob.json();
    }).then(value => {
        
        let mydata = value;
        let test = mydata.feed.entry;

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

            for (let x = 0; x <= 9; x++){
                let c = document.importNode(topmem, true);
                let toptitre = c.querySelector(".top-title");
                let toptotal = c.querySelector(".top-text");

                toptitre.innerHTML = TabMembers[x][0];
                toptotal.innerHTML = TabMembers[x][1];
                
                
                let select = document.querySelector(".classement");
                select.appendChild(c);
            }

        }

        TopMembers();
    

    }).catch(error => {
        console.log(error)
    })

