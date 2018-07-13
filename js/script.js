    //LES VARIABLES

    var snake = document.querySelector('#snake');
    var grillage = document.querySelector('#grillage');
        
    var directionHB = 0;
    var directionGD = 0;
    var deplacementBas = 'jebougeverslebas $';
    var deplacementHaut = 'jebougeversleHaut $';
    var deplacementGauche = 'jebougeverslaGauche $';
    var deplacementDroite = 'jebougeverslaDroite $';
    var vers = deplacementDroite;
    var Q = 20;

    //LA FONCTION PRINCIPALE

    document.querySelector('#lancer').addEventListener('click', function() {

        function moveGlob(){ //ma fonction pour bouger le serpent


            console.log(vers,directionHB,directionGD); //TEST

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
            supprimequeue();

            //creerpomme();

            //return x = directionHB;
        }

        var boucle = setInterval(moveGlob, 100);

        function creerqueue(){ //ma fonction qui créer une .queue
            var newDiv = document.createElement('div'); // créer une nouvelle div
            newDiv.setAttribute('class','queue'); //lui donner une class .queue
            newDiv.style.left = directionGD + 'px' ; //lui attribue la position par rapport au left
            newDiv.style.top = directionHB + 'px' ; //lui attribue la position par rapport au top
            // newDiv.setAttribute('font-size',7 +'px'); //lui donne une valeur de i = 7
            // newDiv.setAttribute('i', -1);
            grillage.appendChild(newDiv); //indique que newdiv(".queue") est un enfant de #grillage


            var currentDiv = document.getElementById('.queue');
            document.body.insertBefore(grillage,currentDiv);
        }

        document.querySelector('#stopper').addEventListener('click', function() {
            clearInterval(boucle);
        });

        function supprimequeue(){
        //     var Q = document.querySelectorAll(".queue").fontSize;
            Q--;
            console.log(Q);
            if(Q==1){
                Q++;
                $('.queue:first').remove(); // C'est plus facile en jQuery......
            }
        }



       
    });
    

    // EVENEMENTS AUX TOUCHES DU CLAVIER

    document.onkeydown = function(e){
        switch(e.keyCode){
            case 37: //touche gauche
                if(vers == deplacementHaut||vers ==deplacementBas||vers==deplacementGauche){
                    vers = deplacementGauche;
                }else{vers=deplacementDroite};
            break;
            case 38: //touche haut
                if(vers== deplacementGauche||vers==deplacementDroite||vers==deplacementHaut){
                vers = deplacementHaut;
                }else{vers=deplacementBas}
            break;
            case 39: //touche droite
                if(vers==deplacementBas||vers==deplacementHaut||vers==deplacementDroite){
                vers = deplacementDroite;
                }else{vers=deplacementGauche}
            break;
            case 40: //touche bas
                if(vers==deplacementDroite||vers==deplacementGauche||vers==deplacementBas){
                vers = deplacementBas;
                }else{ver= deplacementHaut};
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