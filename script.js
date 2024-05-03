const fufuQuizData = [
    {
        imageUrl: 'images/fufu/neutral/rouge.png',
        name: 'Rouge the Bat',
        from: 'Sonic The Hedgehog',
        correctAnswer: 'neutral',
    },
    {
        imageUrl: 'images/fufu/hated/tai_lung.png',
        name: 'Tai Lung',
        from: 'Kung Fu Panda',
        correctAnswer: 'hated',
    },
    {
        imageUrl: 'images/fufu/hated/foxy.png',
        name: 'Foxy',
        from: 'Five Nights At Freddys',
        correctAnswer: 'hated',
    },
    {
        imageUrl: 'images/fufu/neutral/blaidd.jpg',
        name: 'Blaidd',
        from: 'Elden Ring',
        correctAnswer: 'neutral',
    },
    {
        imageUrl: 'images/fufu/loved/nick_wilde.jpg',
        name: 'Nick Wilde',
        from: 'Zootopia',
        correctAnswer: 'loved',
    },
    {
        imageUrl: 'images/fufu/neutral/coco_bandicoot.png',
        name: 'Coco Bandicoot',
        from: 'Crash Bandicoot',
        correctAnswer: 'neutral',
    },
    {
        imageUrl: 'images/fufu/neutral/sandy_cheeks.png',
        name: 'Sandy Cheeks',
        from: 'Spongebob Squarepants',
        correctAnswer: 'neutral',
    },
    {
        imageUrl: 'images/fufu/hated/beast_titan.jpg',
        name: 'Beast Titan',
        from: 'Attack on Titan',
        correctAnswer: 'hated',
    },
    {
        imageUrl: 'images/fufu/neutral/lopunny.png',
        name: 'Lopunny',
        from: 'Pokemon',
        correctAnswer: 'neutral',
    },
    {
        imageUrl: 'images/fufu/neutral/lola_bunny.jpg',
        name: 'Lola Bunny',
        from: 'Space Jam',
        correctAnswer: 'neutral',
    },
    {
        imageUrl: 'images/fufu/neutral/loona.png',
        name: 'Loona',
        from: 'Helluva Boss',
        correctAnswer: 'neutral',
    },
    {
        imageUrl: 'images/fufu/neutral/judy_hopps.png',
        name: 'Judy Hopps',
        from: 'Zootopia',
        correctAnswer: 'neutral',
    },
    {
        imageUrl: 'images/fufu/loved/theonewhowaits.jpg',
        name: 'The One Who Waits',
        from: 'Cult of the Lamb',
        correctAnswer: 'loved',
    },
    {
        imageUrl: 'images/fufu/loved/scar.jpg',
        name: 'Scar',
        from: 'Lion King',
        correctAnswer: 'loved',
    },
    {
        imageUrl: 'images/fufu/hated/stella.png',
        name: 'Stella',
        from: 'Helluva Boss',
        correctAnswer: 'hated',
    },
    {
        imageUrl: 'images/fufu/loved/maliketh.jpg',
        name: 'Maliketh',
        from: 'Elden Ring',
        correctAnswer: 'loved',
    },
    {
        imageUrl: 'images/fufu/neutral/bowser.png',
        name: 'Bowser',
        from: 'Super Mario',
        correctAnswer: 'neutral',
    },
    {
        imageUrl: 'images/fufu/neutral/shadow.png',
        name: 'Shadow the Hedgehog',
        from: 'Sonic the Hedgehog',
        correctAnswer: 'neutral',
    },
    {
        imageUrl: 'images/fufu/loved/cynder.png',
        name: 'Cynder',
        from: 'Spyro The Dragon',
        correctAnswer: 'loved',
    },
    {
        imageUrl: 'images/fufu/loved/neferpitou.jpg',
        name: 'Neferpitou',
        from: 'Hunter x Hunter',
        correctAnswer: 'loved',
    },
    {
        imageUrl: 'images/fufu/loved/grimm.jpg',
        name: 'Grimm',
        from: 'Hollow Knight',
        correctAnswer: 'loved',
    },
    {
        imageUrl: 'images/fufu/hated/welfin.jpg',
        name: 'Welfin',
        from: 'Hunter x Hunter',
        correctAnswer: 'hated',
    },
    {
        imageUrl: 'images/fufu/loved/haida.png',
        name: 'Haida',
        from: 'Aggretsuko',
        correctAnswer: 'loved',
    },
    {
        imageUrl: 'images/fufu/loved/husk.jpg',
        name: 'Husk',
        from: 'Hazbin Hotel',
        correctAnswer: 'loved',
    },
    {
        imageUrl: 'images/fufu/loved/carrot.jpg',
        name: 'Carrot',
        from: 'One Piece',
        correctAnswer: 'loved',
    },
];
const motherQuizData = [
    {
        imageUrl: 'images/mother/neutral/toriel.png',
        name: 'Toriel',
        from: 'Undertale',
        correctAnswer: 'neutral',
    },
    {
        imageUrl: 'images/mother/loved/lola_bunny.jpg',
        name: 'Lola Bunny',
        from: 'Space Jam',
        correctAnswer: 'loved',
    },
    {
        imageUrl: 'images/mother/neutral/oogway.jpg',
        name: 'Master Oogway',
        from: 'Kung Fu Panda',
        correctAnswer: 'neutral',
    },
    {
        imageUrl: 'images/mother/neutral/crash_bandicoot.png',
        name: 'Crash Bandicoot',
        from: 'Crash Bandicoot',
        correctAnswer: 'neutral',
    },
    {
        imageUrl: 'images/mother/loved/goofy.png',
        name: 'Goofy',
        from: 'Mickey Mouse',
        correctAnswer: 'loved',
    },
    {
        imageUrl: 'images/mother/loved/bowser.png',
        name: 'Bowser',
        from: 'Super Mario',
        correctAnswer: 'loved',
    },
    {
        imageUrl: 'images/mother/hated/foxy_loxy.png',
        name: 'Foxy Loxy',
        from: 'Chicken Little',
        correctAnswer: 'hated',
    },
    {
        imageUrl: 'images/mother/loved/simba.png',
        name: 'Simba',
        from: 'Lion King',
        correctAnswer: 'loved',
    },
    {
        imageUrl: 'images/mother/neutral/renamon.png',
        name: 'Renamon',
        from: 'Digimon',
        correctAnswer: 'neutral',
    },
    {
        imageUrl: 'images/mother/loved/isabelle.png',
        name: 'Isabelle',
        from: 'Animal Crossing',
        correctAnswer: 'loved',
    },
    {
        imageUrl: 'images/mother/hated/reaper_leviathan.png',
        name: 'Reaper Leviathan',
        from: 'Subnautica',
        correctAnswer: 'hated',
    },
    {
        imageUrl: 'images/mother/neutral/red_XIII.png',
        name: 'Red XIII',
        from: 'Final Fantasy 7',
        correctAnswer: 'neutral',
    },
    {
        imageUrl: 'images/mother/loved/nick_wilde.jpg',
        name: 'Nick Wilde',
        from: 'Zootopia',
        correctAnswer: 'loved',
    },
    {
        imageUrl: 'images/mother/loved/blaidd.jpg',
        name: 'Blaidd',
        from: 'Elden Ring',
        correctAnswer: 'loved',
    },
    {
        imageUrl: 'images/mother/neutral/fox_mccloud.png',
        name: 'Fox McCloud',
        from: 'Star Fox',
        correctAnswer: 'neutral',
    },
    {
        imageUrl: 'images/mother/neutral/lovander.png',
        name: 'Lovander',
        from: 'Palworld',
        correctAnswer: 'neutral',
    },
    {
        imageUrl: 'images/mother/neutral/vaporeon.png',
        name: 'Vaporeon',
        from: 'Pokemon',
        correctAnswer: 'neutral',
    },
    {
        imageUrl: 'images/mother/neutral/moto_moto.jpg',
        name: 'Moto Moto',
        from: 'Madagascar',
        correctAnswer: 'neutral',
    },
    {
        imageUrl: 'images/mother/hated/guardian_ape.png',
        name: 'Guardian Ape',
        from: 'Sekiro',
        correctAnswer: 'hated',
    },
    {
        imageUrl: 'images/mother/neutral/toothless.jpg',
        name: 'Toothless',
        from: 'How to Train Your Dragon',
        correctAnswer: 'neutral',
    },
    {
        imageUrl: 'images/mother/loved/beedrill.png',
        name: 'Beedrill',
        from: 'Pokemon',
        correctAnswer: 'loved',
    },
    {
        imageUrl: 'images/mother/hated/foxy.png',
        name: 'Foxy',
        from: 'Five Nights At Freddys',
        correctAnswer: 'hated',
    },
    {
        imageUrl: 'images/mother/loved/rouge.png',
        name: 'Rouge the Bat',
        from: 'Sonic the Hedgehog',
        correctAnswer: 'loved',
    },
    {
        imageUrl: 'images/mother/loved/death.jpg',
        name: 'Death',
        from: 'Puss in Boots 2',
        correctAnswer: 'loved',
    },
    {
        imageUrl: 'images/mother/hated/movie_sonic.jpg',
        name: 'Sonic (Movie)',
        from: 'Sonic the Hedgehog Movie ',
        correctAnswer: 'hated',
    },
];

let selectedPlayer = null;
let currentQuestion = 0;
let score = 0;
let quizData = [];

document.addEventListener("DOMContentLoaded", function() {
    const fufuButton = document.getElementById('fufu-button');
    const motherButton = document.getElementById('mother-button');
    const startButton = document.getElementById('start-button');
  
    fufuButton.addEventListener('click', function (){
        selectedPlayer = 'fufu';
        quizData = fufuQuizData;
        storeQuizData();
        storeSelectedPlayer()
    });
    motherButton.addEventListener('click', function (){
        selectedPlayer = 'mother';
        quizData = motherQuizData;
        storeQuizData();
        storeSelectedPlayer()
    });

    startButton.addEventListener('click', function (){
        if (selectedPlayer === 'fufu' || selectedPlayer === 'mother'){
            window.location.href = "quizPage.html";
        }
    });

});

function storeQuizData() {
    sessionStorage.setItem('quizData', JSON.stringify(quizData));
}
function storeSelectedPlayer() {
    sessionStorage.setItem('selectedPlayer', selectedPlayer);
}
