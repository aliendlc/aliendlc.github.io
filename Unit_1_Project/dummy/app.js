$(() => {
let hull = 50
let explrPts = 35
let gas = 25
// let enemy = hull -(Math.floor(Math.Random()*30))

  let $planet1 = {
      img: 'planet.jpg',
      gas: 'gas += 2',
      explPts: 'explPts += 5',
      hull: ''
  }

$planetArray = []
$modalArray = []
$('form').on('click', (event) => {
    event.preventDefault
    // $('.board').clear();
    $('form').off()

    $.when(
    $.ajax(
      {
        url:'https://swapi.co/api/planets/',

        type: 'GET',
        dataType: 'json',

      }
    ),
    $.ajax(

      {

        url:'https://swapi.co/api/planets/?page=2',

        type: 'GET',
        dataType: 'json',

      }
    )
  ).then(
      (data) => {
          // console.log(data.results);
          for (let i = 0; i < 10; i++){

              $planet = $('<button>');
              $planet.attr('class', 'openModal'+ i)
              $planet.attr('alt', i)
              $planet.text(i + 1)

              $planetMod = $('<div>');
              $planetMod.attr('class', 'modal')
              $planetMod.attr('id', 'modal-textbox')
              $planet.append($planetMod)

              $nameLabel = $('<h4>')
              $nameLabel.text('Planet Name:')
              $planetModname = $('<h5>');
              // $planetModname.text('Name');
              $planetModname.html(data.results[i].name);
              $nameLabel.append($planetModname)

              $terrainLabel = $('<h4>');
              $terrainLabel.text('Terrain:')
              $planetModTerrain = $('<h5>');
              // $planetModTerrain.text('Terrain');
              $planetModTerrain.html(data.results[i].terrain);
              $terrainLabel.append($planetModTerrain)

              $popLabel = $('<h4>');
              $popLabel.text('Climate:')
              $planetModPop = $('<h5>');
              // $planetModPop.text('Population');
              $planetModPop.html(data.results[i].population);
              $popLabel.append($planetModPop)

              $climateLabel = $('<h4>');
              $climateLabel.text('Population:')
              $planetModClimate = $('<h5>');
              $planetModClimate.html(data.results[i].climate);
              $climateLabel.append($planetModClimate)


              $planetMod.append($nameLabel);
              $planetMod.append($terrainLabel);
              $planetMod.append($climateLabel);
              $planetMod.append($popLabel);

              $modA = $('<a>');
              $modA.text('Choose Next Planet');
              $modA.attr('id', 'close')
              $modA.attr('href', '#')
              $planetMod.append($modA)

              $planetMod.hide();
              //
              $modalArray.push($planetMod)
              $('body').append($planetMod);


              // $planetPop = data.results[i].population
              // $planetTerr = data.results[i].terrain
              // $planetDiam = data.results[i].diameter

              const $dd = $('<dd>');
              $dd.html(data.results[i].name)
              $planet.append($dd)
              $('.board').append($planet)

              // $planet.append($planetName);
              // $planet.append($planetPop);
              // $planet.append($planetTerr);
              // $planet.append($planetDiam);
              // console.log($Planetname);
        }
        $('.openModal0').on('click',(event) => {
          console.log('hi');
          console.log(event.currentTarget);
          const openModal = () => {
              // event.currentTarget(css('display', 'block'));
              console.log($modalArray);
              $modalArray[0].show()
          };
          openModal();
        });
        $('.openModal1').on('click',(event) => {
            console.log('hi');
            console.log(event.currentTarget);
            const openModal = () => {
                // event.currentTarget(css('display', 'block'));
                console.log($modalArray);
                $modalArray[1].show()
            };
            openModal();
        });
        $('.openModal2').on('click',(event) => {
            console.log('hi');
            console.log(event.currentTarget);
            const openModal = () => {
                  // event.currentTarget(css('display', 'block'));
            console.log($modalArray);
            $modalArray[2].show()
            };
            openModal();
        });
        $('.openModal3').on('click',(event) => {
          console.log('hi');
          console.log(event.currentTarget);
          const openModal = () => {
              // event.currentTarget(css('display', 'block'));
              console.log($modalArray);
              $modalArray[3].show()
          };
          openModal();
        });
        $('.openModal4').on('click',(event) => {
          console.log('hi');
          console.log(event.currentTarget);
          const openModal = () => {
              // event.currentTarget(css('display', 'block'));
              console.log($modalArray);
              $modalArray[4].show()
          };
          openModal();
        });
        $('.openModal5').on('click',(event) => {
          console.log('hi');
          console.log(event.currentTarget);
          const openModal = () => {
              // event.currentTarget(css('display', 'block'));
              console.log($modalArray);
              $modalArray[5].show();
          };
          openModal();
        });
        $('.openModal6').on('click',(event) => {
          console.log('hi');
          console.log(event.currentTarget);
          const openModal = () => {
              // event.currentTarget(css('display', 'block'));
              console.log($modalArray);
              $modalArray[6].show()
          };
          openModal();
        });
        $('.openModal7').on('click',(event) => {
          console.log('hi');
          console.log(event.currentTarget);
          const openModal = () => {
              // event.currentTarget(css('display', 'block'));
              console.log($modalArray);
              $modalArray[7].show();
          };
          openModal();
        });
        $('.openModal8').on('click',(event) => {
          console.log('hi');
          console.log(event.currentTarget);
          const openModal = () => {
              // event.currentTarget(css('display', 'block'));
              console.log($modalArray);
              $modalArray[8].show();
          };
          openModal();
        });
        $('.openModal9').on('click',(event) => {
          console.log('hi');
          console.log(event.currentTarget);
          const openModal = () => {
              // event.currentTarget(css('display', 'block'));
              console.log($modalArray);
              $modalArray[9].show();

          };
          openModal();
        });
        $('#close').on('click',(event) => {
          console.log('hi');
          console.log(event.currentTarget);
          const closeModal = () => {
              // event.currentTarget(css('display', 'block'));
              console.log($modalArray);
              $planetMod.modal('hide')

          };
          closeModal();
        });
          const changePts =(planet) => {
              gas -= 1
              gas = planet.gas
              explPts = planet.explPts
              hull = planet.hull
          }
        // })
    //
    //
    //
    //
    //
    //   })
    // });
    // .then(
    //   (data) => {
          console.log(data.results);
          for (let i = 0; i < 10; i++){

              $planet = $('<button>');
              $planet.attr('class', 'openModal'+ i)
              $planet.attr('alt', i)
              $planet.text(i + 10)

              $planetMod = $('<div>');
              $planetMod.attr('class', 'modal')
              $planetMod.attr('id', 'modal-textbox')
              $planet.append($planetMod)

              $nameLabel = $('<h4>')
              $nameLabel.text('Planet Name:')
              $planetModname = $('<h5>');
              // $planetModname.text('Name');
              $planetModname.html(data.results[i].name);
              $nameLabel.append($planetModname)

              $terrainLabel = $('<h4>');
              $terrainLabel.text('Terrain:')
              $planetModTerrain = $('<h5>');
              // $planetModTerrain.text('Terrain');
              $planetModTerrain.html(data.results[i].terrain);
              $terrainLabel.append($planetModTerrain)

              $popLabel = $('<h4>');
              $popLabel.text('Climate:')
              $planetModPop = $('<h5>');
              // $planetModPop.text('Population');
              $planetModPop.html(data.results[i].population);
              $popLabel.append($planetModPop)

              $climateLabel = $('<h4>');
              $climateLabel.text('Population:')
              $planetModClimate = $('<h5>');
              $planetModClimate.html(data.results[i].climate);
              $climateLabel.append($planetModClimate)


              $planetMod.append($nameLabel);
              $planetMod.append($terrainLabel);
              $planetMod.append($climateLabel);
              $planetMod.append($popLabel);

              $modA = $('<a>');
              $modA.text('Choose Next Planet');
              $modA.attr('id', 'close')
              $modA.attr('href', '#')
              $planetMod.append($modA)

              $planetMod.hide();
              //
              $modalArray.push($planetMod)
              $('body').append($planetMod);


              // $planetPop = data.results[i].population
              // $planetTerr = data.results[i].terrain
              // $planetDiam = data.results[i].diameter

              const $dd = $('<dd>');
              $dd.html(data.results[i].name)
              $planet.append($dd)
              $('.board').append($planet)

              // $planet.append($planetName);
              // $planet.append($planetPop);
              // $planet.append($planetTerr);
              // $planet.append($planetDiam);
              // console.log($Planetname);
        }
        $('.openModal10').on('click',(event) => {
          console.log('hi');
          console.log(event.currentTarget);
          const openModal = () => {
              // event.currentTarget(css('display', 'block'));
              console.log($modalArray);
              $modalArray[10].show()
          };
          openModal();
        });
        $('.openModal11').on('click',(event) => {
            console.log('hi');
            console.log(event.currentTarget);
            const openModal = () => {
                // event.currentTarget(css('display', 'block'));
                console.log($modalArray);
                $modalArray[11].show()
            };
            openModal();
        });
        $('.openModal12').on('click',(event) => {
            console.log('hi');
            console.log(event.currentTarget);
            const openModal = () => {
                  // event.currentTarget(css('display', 'block'));
            console.log($modalArray);
            $modalArray[12].show()
            };
            openModal();
        });
        $('.openModal13').on('click',(event) => {
          console.log('hi');
          console.log(event.currentTarget);
          const openModal = () => {
              // event.currentTarget(css('display', 'block'));
              console.log($modalArray);
              $modalArray[13].show()
          };
          openModal();
        });
        $('.openModal14').on('click',(event) => {
          console.log('hi');
          console.log(event.currentTarget);
          const openModal = () => {
              // event.currentTarget(css('display', 'block'));
              console.log($modalArray);
              $modalArray[14].show()
          };
          openModal();
        });
        $('.openModal15').on('click',(event) => {
          console.log('hi');
          console.log(event.currentTarget);
          const openModal = () => {
              // event.currentTarget(css('display', 'block'));
              console.log($modalArray);
              $modalArray[15].show();
          };
          openModal();
        });
        $('.openModal16').on('click',(event) => {
          console.log('hi');
          console.log(event.currentTarget);
          const openModal = () => {
              // event.currentTarget(css('display', 'block'));
              console.log($modalArray);
              $modalArray[16].show()
          };
          openModal();
        });
        $('.openModal17').on('click',(event) => {
          console.log('hi');
          console.log(event.currentTarget);
          const openModal = () => {
              // event.currentTarget(css('display', 'block'));
              console.log($modalArray);
              $modalArray[17].show();
          };
          openModal();
        });
        $('.openModal18').on('click',(event) => {
          console.log('hi');
          console.log(event.currentTarget);
          const openModal = () => {
              // event.currentTarget(css('display', 'block'));
              console.log($modalArray);
              $modalArray[18].show();
          };
          openModal();
        });
        $('.openModal19').on('click',(event) => {
          console.log('hi');
          console.log(event.currentTarget);
          const openModal = () => {
              // event.currentTarget(css('display', 'block'));
              console.log($modalArray);
              $modalArray[19].show();

          };
          openModal();
        });
        $('#close').on('click',(event) => {
          console.log('hi');
          console.log(event.currentTarget);
          const closeModal = () => {
              // event.currentTarget(css('display', 'block'));
              console.log($modalArray);
              $planetMod.modal('hide')

          };
          closeModal();
        });

        // })





      })
    });

});
