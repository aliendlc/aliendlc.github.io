$(() => {


  let $planet1 = {
      img: 'planet.jpg',
      gas: 'gas += 2',
      explPts: 'explPts += 5',
      hull: ''
  }

$planetArray = []
$('form').on('click', (event) => {
    event.preventDefault

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
              $planet.attr('class', 'openModal')
              $planet.attr('alt', i)
              $planet.text(i + 1)

              $planetMod = $('<div>');
              $planetMod.attr('id', 'modal-textbox')
              $planet.append($planetMod)
              $planetModname = $('<h5>');
              $planetModname.text('Name');
              $planetMod.append($planetModname);
              $modA = $('<a>');
              $modA.text('Choose Next Planet');
              $modA.attr('id', 'close')
              $planetMod.append($modA)
              $planetModname.html(data.results[i].name);
              $planetMod.hide();
              //
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
        $('.openModal').on('click',(event) => {
          console.log('hi');
          console.log(event.currentTarget);
          const openModal = () => {
              // event.currentTarget(css('display', 'block'));
              $planetMod.show(event.currentTarget);
          };
          openModal();
          const changePts =(planet) => {
              gas -= 1
              gas = planet.gas
              explPts = planet.explPts
              hull = planet.hull
          }
        })





      })
    });

});
