$(() => {

let hull = 50
let explrPts = 35
let batt = 25
let hullDisplay = ''
let battDisplay = ''
let explrDisplay = ''
$('#hull').append(hull)
$('#batt').append(explrPts)
$('#explrPts').append(explrPts)

$('#openModal').hide();
$('#modal-textbox2').hide();

const $openBtn = $('#openModal');
const $modal = $('#modal');
const $closeBtn = $('.restart');
const $lost = $('#lost')


const openModal = () => {
  $modal.css('display', 'block');
}
const closeModal = () => {
  $modal.css('display', 'none');
}
$openBtn.on('click', openModal);

$('#xOut').on('click',(event) => {
      $('#instructions').hide();
})
$('#close').on('click',(event) => {

});

let sign = ''

let plusOrMin = () => {
    if(Math.random() <= .8){
        sign =  '+='
    }else{
        sign =  '-='
    }
}

let randHull ;
let randExplr;
let randBatt;
let randEnem = 0;

const chkStat = () => {
  pointsGen();
  randEnemGen();
  console.log(hull);
  $('#batt').text(batt)
  $('#hull').text(hull)
  $('#explrPts').text(explrPts)
  $('#planHull').text(hullDisplay)
  $('#planBatt').text(battDisplay)
  $('#planExplrPts').text(explrDisplay)
  $('#planEnemy').text(randEnemDisplay)
  if (hull <= 0){
      $('#modal-textbox2').show();
      $('button').off();
  }
    if(explrPts >= 200 && batt >= 150){
        console.log('yay');
        $('#openModal').show();
    }else{
      console.log('not yet');
    }
}


const pointsGen = () => {
     randHull = Math.floor(Math.random()*5);
     randExplr = Math.floor(Math.random()*20);
     randBatt = Math.floor(Math.random()*10);
     hull += randHull;
     explrPts += randExplr;
     batt += randBatt;
     hullDisplay = 'Hull + ' + randHull;
     battDisplay = 'Battery + ' + randBatt;
     explrDisplay = 'Explorer Points + ' + randExplr;
}
randEnemGen = () => {
   if(Math.random() <= .7){
       randEnem = 0;
       randEnemDisplay = 'Clear : No Enemy Present';
   }else{
       randEnem = 'hull - 15';
       hull -= 15;
       randEnemDisplay = 'Enemy Present: ' + randEnem;
      }
}


$planetImgArray = ['planet1.jpg',
'planet2.jpg','planet3.jpg','planet4.jpg','planet5.jpg','planet6.jpg','planet7.jpg','planet8.jpg','planet9.jpg','planet10.jpg'
]
$planetImgArray2 = ['planet11.jpg',
'planet12.jpg','planet13.jpg','planet14.jpg','planet15.jpg','planet16.jpg','planet17.jpg','planet18.jpg','planet19.jpg','planet20.jpg'
]

$modalArray = []
$modalArray2 = []






$('#100').on('click', (event) => {
    event.preventDefault
    $('#100').off()

    $.ajax(

      {
        url:'https://swapi.co/api/planets/',
        type: 'GET',
        dataType: 'json',

      }
    ).then(
      (data) => {
          console.log(data.results);
          for (let i = 0; i < 10; i++){

              $planet = $('<button>');
              $planet.attr('class', 'openModal'+ i)
              $planet.attr('id', 'planId')
              $planet.attr('alt', i)

              $planetMod = $('<div>');
              $planetMod.attr('class', 'window')
              $planetMod.attr('id', 'textbox')
              $planet.append($planetMod)

              $image = $('<img>')
              $image.attr('src', $planetImgArray[i])
              $image.css('max-width', '70%;')
              $image.css('max-height', '70%')
              $planetMod.append($image)
              $nameLabel = $('<h4>')
              $nameLabel.text('Planet Name:')
              $planetModname = $('<h5>');
              $planetModname.html(data.results[i].name);
              $nameLabel.append($planetModname)

              $terrainLabel = $('<h4>');
              $terrainLabel.text('Terrain:')
              $planetModTerrain = $('<h5>');
              $planetModTerrain.html(data.results[i].terrain);
              $terrainLabel.append($planetModTerrain)

              $popLabel = $('<h4>');
              $popLabel.text('Climate:');
              $planetModPop = $('<h5>');
              $planetModPop.html(data.results[i].climate);
              $popLabel.append($planetModPop)

              $climateLabel = $('<h4>');
              $climateLabel.text('Population:')
              $planetModClimate = $('<h5>');
              $planetModClimate.html(data.results[i].population);
              $climateLabel.append($planetModClimate)


              $planetMod.append($nameLabel);
              $planetMod.append($terrainLabel);
              $planetMod.append($climateLabel);
              $planetMod.append($popLabel);

              $modA = $('<button>');
              $modA.text('Choose Next Planet');
              $modA.attr('class', 'closed')

              $planetMod.append($modA)

              $planetMod.hide();

              $modalArray.push($planetMod)
              $('#display').append($planetMod);

              const $dd = $('<dd>');
              $dd.html(data.results[i].name)
              $planet.append($dd)
              // $dd.css('text-align:', 'center')
              $('.board').append($planet)
        }

        $('.openModal0').on('click',(event) => {
            $('.window').hide();
            chkStat();
            $modalArray[0].show()

        });

        $('.openModal1').on('click',(event) => {
            $('.window').hide();
            chkStat();
            $modalArray[1].show()
        });

        $('.openModal2').on('click',(event) => {
            $('.window').hide();
            chkStat();
            $modalArray[2].show()
        });

        $('.openModal3').on('click',(event) => {
              $('.window').hide();
              chkStat();
              $modalArray[3].show()
        });

        $('.openModal4').on('click',(event) => {
              $('.window').hide();
              chkStat();
              $modalArray[4].show()
        });

        $('.openModal5').on('click',(event) => {
              $('.window').hide();
              chkStat();
              $modalArray[5].show();
        });

        $('.openModal6').on('click',(event) => {
              $('.window').hide();
              chkStat();
              $modalArray[6].show()
        });

        $('.openModal7').on('click',(event) => {
              $('.window').hide();
              chkStat();
              $modalArray[7].show();
        });

        $('.openModal8').on('click',(event) => {
              $('.window').hide();
              chkStat();
              $modalArray[8].show();
        });

        $('.openModal9').on('click',(event) => {
              $('.window').hide();
              chkStat();
              $modalArray[9].show();
        });

        $('.closed').on('click',(event) => {
          $('.window').hide();
        });
      });
    });

$('#200').on('click', (event) => {
        event.preventDefault
        // $('.board').clear();
        $('#200').off()

    $.ajax(

      {

        url:'https://swapi.co/api/planets/?page=2',

        type: 'GET',
        dataType: 'json',

      }
    ).then(
      (data) => {
          console.log(data.results);
          for (let i = 0; i < 10; i++){

              $planet = $('<button>');
              $secSet = i + 11
              $planet.attr('class', 'openModal'+ $secSet)
              $planet.attr('alt', i)

              $planetMod = $('<div>');
              $planetMod.attr('class', 'window')
              $planetMod.attr('id', 'textbox')
              $planet.attr('id', 'planId')
              $planet.append($planetMod)

              $image = $('<img>')

              $image.attr('src', $planetImgArray2[i])
              $image.css('max-width', '100%;')
              $image.css('max-height', '100%')
              $planetMod.append($image)
              $nameLabel = $('<h4>')
              $nameLabel.text('Planet Name:')
              $planetModname = $('<h5>');
              $planetModname.html(data.results[i].name);
              $nameLabel.append($planetModname)

              $terrainLabel = $('<h4>');
              $terrainLabel.text('Terrain:')
              $planetModTerrain = $('<h5>');
              $planetModTerrain.html(data.results[i].terrain);
              $terrainLabel.append($planetModTerrain)

              $popLabel = $('<h4>');
              $popLabel.text('Climate:')
              $planetModPop = $('<h5>');
              $planetModPop.html(data.results[i].climate);
              $popLabel.append($planetModPop)

              $climateLabel = $('<h4>');
              $climateLabel.text('Population:')
              $planetModClimate = $('<h5>');
              $planetModClimate.html(data.results[i].population);
              $climateLabel.append($planetModClimate)


              $planetMod.append($nameLabel);
              $planetMod.append($terrainLabel);
              $planetMod.append($climateLabel);
              $planetMod.append($popLabel);

              $modA = $('<button>');
              $modA.text('Choose Next Planet');
              $modA.attr('class', 'closed')
              $planetMod.append($modA)

              $planetMod.hide();
              $modalArray2.push($planetMod)
              $('#display').append($planetMod);

              const $dd = $('<dd>');
              $dd.html(data.results[i].name)
              $planet.append($dd)
              $('.board').append($planet)

        }

        $('.openModal11').on('click',(event) => {
              $('.window').hide()
              chkStat();
              $modalArray2[0].show()
        });
        $('.openModal12').on('click',(event) => {
              $('.window').hide()
              chkStat();
              $modalArray2[1].show()
        });

        $('.openModal13').on('click',(event) => {
            $('.window').hide()
            chkStat();
            $modalArray2[2].show()
        });

        $('.openModal14').on('click',(event) => {
              $('.window').hide()
              chkStat();
              $modalArray2[3].show()
        });

        $('.openModal15').on('click',(event) => {
              $('.window').hide()
              chkStat();
              $modalArray2[4].show()
        });

        $('.openModal16').on('click',(event) => {
              $('.window').hide()
              chkStat();
              $modalArray2[5].show();
        });

        $('.openModal17').on('click',(event) => {
              $('.window').hide()
              chkStat();
              $modalArray2[6].show()
        });

        $('.openModal18').on('click',(event) => {
              $('.window').hide()
              chkStat();
              $modalArray2[7].show();
        });

        $('.openModal19').on('click',(event) => {
            $('.window').hide();
            chkStat();
            $modalArray2[8].show();
        });

        $('.openModal20').on('click',(event) => {
              $('.window').hide()
              chkStat();
              $modalArray2[9].show();
        });

        $('.closed').on('click',(event) => {
          $('.window').hide();
        });

      })

    })

});
