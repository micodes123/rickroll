        const spinningDiscoGif = 'https://raw.githubusercontent.com/micodes123/rickroll/main/assets/spinningDiscoGif.webp'

        const brokenDisco = '/assets/image.gif';

        const image = document.getElementById('image');

        const turnOnButton =  document.getElementById("turn-on");

        const turnOffButton = document.getElementById("turn-off");

        const music = new Audio ('https://raw.githubusercontent.com/micodes123/rickroll/main/assets/music.mp3');

        


        turnOnButton
        .addEventListener("click",
             function(){ 
              image.setAttribute("src", spinningDiscoGif);
              music.play();
              document.body.classList.add("rick-rolled")
             });

        turnOffButton
        .addEventListener("click",
             function(){ 
              image.setAttribute("src",
               brokenDisco);
               music.pause();
               document.body.classList.remove("rick-rolled")
             });
