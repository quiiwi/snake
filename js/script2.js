 //SECONDE VITESSE --------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------




  function vitessePro() {

    //LA FONCTION POUR BOUGER LE SERPENT
    function moveGlob1(){ 


        positionDesQueuesGD.push(directionGD);
        positionDesQueuesHB.push(directionHB);

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
            clearInterval(vitessPro); //lorsque je sors de la grille de jeu la boucle principale s'arrête

            alert('PERDU');

        }
        if(directionHB<0 || directionGD<0){
            clearInterval(vitessPro); //lorsque je sors de la grille de jeu la boucle principale s'arrête

            alert('PERDU');
        }

        if(directionHB == yFinal && directionGD == xFinal){

            creerpomme();

            Q += 10;

            $('.pomme:first').remove();

            score += 1000;

    

        }

        // checkscore();

        creerqueue();

        supprimequeue();

        checkqueue();

        $('#score').text(score);

        

        // console.log(score);
    }
    
  





    //LA FONCTION CREER LA QUEUE DU SERPENT
    function creerqueue(){ //ma fonction qui créer une .queue
        var newDiv = document.createElement('div'); // créer une nouvelle div
        newDiv.setAttribute('class','queue'); //lui donner une class .queue
        newDiv.style.left = directionGD + 'px' ; //lui attribue la position par rapport au left
        newDiv.style.top = directionHB + 'px' ; //lui attribue la position par rapport au top

        grillage.appendChild(newDiv); //indique que newdiv(".queue") est un enfant de #grillage


        var currentDiv = document.getElementById('.queue');
        document.body.insertBefore(grillage,currentDiv);
    }

    document.querySelector('#stopper').addEventListener('click', function() {
        clearInterval(vitessPro); // le bouton pour arrêter le jeu

    });


    //LA FONCTION SUPPRIMER LA QUEUE DU SERPENT
    function supprimequeue(){
        Q--; 

        if(Q==1){
            Q++;
            positionDesQueuesGD.shift();
            positionDesQueuesHB.shift(); //supprime la première position de queue

            $('.queue:first').remove(); // C'est plus facile en jQuery...... 
        }
    }

    function checkqueue(){

        for(var i = 0; i < positionDesQueuesGD.length; i++){


            if(positionDesQueuesGD[i] == directionGD && positionDesQueuesHB[i] == directionHB){
                clearInterval(vitessPro);
                alert('PERDU');
            }
        }
    }

    var vitessPro = setInterval(moveGlob1, 10);

   
};



  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------
  //FIN SECONDE VITESSE -----------------------------------------------------------------------