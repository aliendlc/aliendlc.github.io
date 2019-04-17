$(() => {
let hull = 50
let explrPts = 35
let batt = 25
$('#hull').append(hull)
$('#batt').append(batt)
$('#explrPts').append(explrPts)

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
let randEnem;

const pointsGen = () => {
     randHull = Math.floor(Math.random()*5);
     randExplr = Math.floor(Math.random()*20);
     randBatt = Math.floor(Math.random()*15);
     hull += randHull;
     explrPts += randExplr;
     batt += randBatt;
}
randEnemGen = () => {
   if(Math.random() <= .7){
       randEnem = 0
   }else{
       hull -= 15
      }
}
// pointsGen();
// alert(randEnem)


  let $planet1 = {
      img: 'planet.jpg',
      gas: 'gas += 2',
      explPts: 'explPts += 5',
      hull: ''
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
              $planet.attr('alt', i)

              $planetMod = $('<div>');
              $planetMod.attr('class', 'modal')
              $planetMod.attr('id', 'modal-textbox')
              $planet.append($planetMod)

              $image = $('<img>')
              $image.attr('src', $planetImgArray[i])
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
              $modA.attr('class', 'close')
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
            $('.modal').hide();
            pointsGen();
            randEnemGen();
            console.log(hull);
            $('#batt').text(batt)
            $('#hull').text(hull)
            $('#explrPts').text(explrPts)
            // $modalArray[0].append(pointsGen())
            $modalArray[0].show()

        });

        $('.openModal1').on('click',(event) => {
            $('.modal').hide();
            $modalArray[1].show()
        });

        $('.openModal2').on('click',(event) => {
            $('.modal').hide();
            $modalArray[2].show()
        });

        $('.openModal3').on('click',(event) => {
              $('.modal').hide();
              $modalArray[3].show()
        });

        $('.openModal4').on('click',(event) => {
              $('.modal').hide();
              $modalArray[4].show()
        });

        $('.openModal5').on('click',(event) => {
              $('.modal').hide();
              $modalArray[5].show();
        });

        $('.openModal6').on('click',(event) => {
              $('.modal').hide();
              $modalArray[6].show()
        });

        $('.openModal7').on('click',(event) => {
              $('.modal').hide();
              $modalArray[7].show();
        });

        $('.openModal8').on('click',(event) => {
              $('.modal').hide();
              $modalArray[8].show();
        });

        $('.openModal9').on('click',(event) => {
              $('.modal').hide();
              $modalArray[9].show();
        });

        $('.close').on('click',(event) => {
          $('.modal').hide();
        });
      })
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
              $planetMod.attr('class', 'modal')
              $planetMod.attr('id', 'modal-textbox')
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
              $modA.attr('class', 'close')
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
              $('.modal').hide()
              $modalArray2[0].show()
        });
        $('.openModal12').on('click',(event) => {
              $('.modal').hide()
              $modalArray2[1].show()
        });

        $('.openModal13').on('click',(event) => {
            $('.modal').hide()
            $modalArray2[2].show()
        });

        $('.openModal14').on('click',(event) => {
              $('.modal').hide()
              $modalArray2[3].show()
        });

        $('.openModal15').on('click',(event) => {
              $('.modal').hide()
              $modalArray2[4].show()
        });

        $('.openModal16').on('click',(event) => {
              $('.modal').hide()
              $modalArray2[5].show();
        });

        $('.openModal17').on('click',(event) => {
              $('.modal').hide()
              $modalArray[6].show()
        });

        $('.openModal18').on('click',(event) => {
              $('.modal').hide()
              $modalArray2[7].show();
        });

        $('.openModal19').on('click',(event) => {
            $('.modal').hide()
              $modalArray2[8].show();
        });

        $('.openModal20').on('click',(event) => {
              $('.modal').hide()
              $modalArray2[9].show();
        });

        $('.close').on('click',(event) => {
          $('.modal').hide();
        });

          const changePts =(planet) => {
              gas -= 1
              gas = planet.gas
              explPts = planet.explPts
              hull = planet.hull
          }
        // })
console.log($modalArray);


      })

      })
    // });

});
