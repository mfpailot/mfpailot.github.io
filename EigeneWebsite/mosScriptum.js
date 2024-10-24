

const bg = document.body;

const knopf = document.getElementById('change_color');

knopf.onclick = () => {

   let aktuelle_farbe = window.getComputedStyle(bg).backgroundColor;
  

        if (aktuelle_farbe === 'rgb(206, 171, 69)' ){

           // aktuelle_farbe = '#7F1A1A';
            document.body.style.backgroundColor = '#7f1a1a';


        } else {

           // aktuelle_farbe = '#CEAB45';
            document.body.style.backgroundColor = '#ceab45';

        }
    };