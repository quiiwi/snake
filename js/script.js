var snake = document.querySelector('#snake');
        
    var directionHB = 0;
    var directionGD = 0;
    var deplacementBas = 'jebougeverslebas $';
    var deplacementHaut = 'jebougeversleHaut $';
    var deplacementGauche = 'jebougeverslaGauche $';
    var deplacementDroite = 'jebougeverslaDroite $';
    var vers = deplacementDroite;

    document.querySelector('#lancer').addEventListener('click', function() {

        function moveGlob(){

            console.log(vers,directionHB,directionGD);

            if (vers === deplacementBas){
                directionHB += +5;
                snake.style.top = directionHB + 'px';
            } else if (vers === deplacementGauche){
                directionGD += -5;
                snake.style.left = directionGD +'px';
            } else if (vers === deplacementDroite){
                directionGD += +5;
                snake.style.left = directionGD + 'px';
            }else if (vers === deplacementHaut){
                directionHB += -5;
                snake.style.top = directionHB + 'px';
            }
            
            if(directionHB>=500 || directionGD>=500){
                clearInterval(boucle);
            }
            if(directionHB<0 || directionGD<0){
                clearInterval(boucle);
            }

            creerqueue();
        }

        var boucle = setInterval(moveGlob, 1000);

        function creerqueue(){
            var newDiv = document.createElement('div');
            newDiv.setAttribute('class','queue');
            newDiv.setAttribute('top', directionHB);
            var currentDiv = document.getElementById('frillage');
            document.body.insertBefore(newDiv,currentDiv);
        }
    });
    


   

    document.onkeydown = function(e){
        switch(e.keyCode){
            case 37:
                vers = deplacementGauche;
            break;
            case 38:
                vers = deplacementHaut;
            break;
            case 39:
                vers = deplacementDroite;
            break;
            case 40:
                vers = deplacementBas;
            break;
        }
    }


// var i = 0;



// document.querySelector('#lancer').addEventListener('click', function() {
//     i++;
//     console.log(i);
    
// });



// var boucle = setInterval(maFonction, 1000); 







// function creerSnake(){
//     var newDiv = document.createElement('div');
//     newDiv.setAttribute('class', 'queue$');
// }