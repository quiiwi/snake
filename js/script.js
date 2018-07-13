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
    var Q = 15;
    var xFinal, yFinal;

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
                clearInterval(boucle); //lorsque je sors de la grille de jeu la boucle principale s'arrête
            }
            if(directionHB<0 || directionGD<0){
                clearInterval(boucle); //lorsque je sors de la grille de jeu la boucle principale s'arrête
            }

            if(directionHB == yFinal && directionGD == xFinal){
                creerpomme();
                Q += 10;
                $('.pomme:first').remove();
            }

            
            
            creerqueue();
            supprimequeue();

            

            //return x = directionHB;
        }

        var boucle = setInterval(moveGlob, 50);




        //LA FONCTION CREER LA QUEUE DU SERPENT

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
            clearInterval(boucle); // le bouton pour arrêter le jeu
        });


        //LA FONCTION SUPPRIMER LA QUEUE DU SERPENT

        function supprimequeue(){
        //     var Q = document.querySelectorAll(".queue").fontSize;
            Q--; //Q est initialement == à 10, à chaque tour de boucle Q - 1 et lorsque Q == 1 on supprime la première div qui a été crée
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
                if(vers == deplacementHaut||vers ==deplacementBas||vers==deplacementGauche){ // la touche gauche ne s'active que lorsque le serpent se déplace vers le haut/bas/gauche
                    vers = deplacementGauche;
                }else{vers=deplacementDroite};
            break;
            case 38: //touche haut
                if(vers== deplacementGauche||vers==deplacementDroite||vers==deplacementHaut){ // la touche haut ne s'active que lorsque le serpent se déplace vers le haut/droite/gauche
                vers = deplacementHaut;
                }else{vers=deplacementBas}
            break;
            case 39: //touche droite
                if(vers==deplacementBas||vers==deplacementHaut||vers==deplacementDroite){ // la touche droite ne s'active que lorsque le serpent se déplace vers le haut/droite/bas
                vers = deplacementDroite;
                }else{vers=deplacementGauche}
            break;
            case 40: //touche bas
                if(vers==deplacementDroite||vers==deplacementGauche||vers==deplacementBas){ // la touche bas ne s'active que lorsque le serpent se déplace vers le gauche/droite/bas
                vers = deplacementBas;
                }else{ver= deplacementHaut};
            break;
        }
    }


    function creerpomme(){
        var random = Math.random()*1000000000;
        var randomEntier = random | 0;
        randomEntierString = randomEntier.toString();
        console.log(random);
        console.log(randomEntier);
        console.log(randomEntierString[3],randomEntierString[4],randomEntierString[5],randomEntierString[6]);

        var x1 = randomEntierString[3];
        var x2 = randomEntierString[4];

        var y1 = randomEntierString[5];
        var y2 = randomEntierString[6];

        console.log(x1,x2,y1,y2);

        var x = x1 + x2;
        console.log(x);
        var y = y1 + y2;
        console.log(y);

        xFinal = x*5;
        yFinal = y*5;
       


        var newDiv2 = document.createElement('div'); // créer une nouvelle div
        newDiv2.setAttribute('class','pomme'); //lui donner une class .queue
        newDiv2.style.left = xFinal + 'px' ; //lui attribue la position par rapport au left
        newDiv2.style.top = yFinal + 'px' ; //lui attribue la position par rapport au top
        // newDiv.setAttribute('font-size',7 +'px'); //lui donne une valeur de i = 7
        // newDiv.setAttribute('i', -1);
        grillage.appendChild(newDiv2); //indique que newdiv(".queue") est un enfant de #grillage


        var currentDiv = document.getElementById('.queue');
        document.body.insertBefore(grillage,currentDiv);

    };
    
    creerpomme();
    console.log(xFinal, yFinal);
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