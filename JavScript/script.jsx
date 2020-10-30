function menuBar() {
  var menuBar = document.getElementById('menuBar')
  var overlay = document.getElementById('overlay')
  menuBar.classList.toggle('onMenubar');
  overlay.classList.toggle('overlayStyle');

}



function HeadCategory() {

  const datalists = [

    {

      id: 1,
      barng: 'Belanja'
    },
    {

      id: 2,
      barng: 'TagihanAir'
    },
    {

      id: 3,
      barng: 'TagihanRumah'
    },
    {

      id: 4,
      barng: 'Featured'
    },
    {

      id: 5,
      barng: 'Imfestasi'
    },
    {

      id: 6,
      barng: 'Asuransi'
    },
    {

      id: 7,
      barng: 'Pajak'
    },
    {

      id: 8,
      barng: 'Listrik'
    },
    {

      id: 9,
      barng: 'football'
    },
    {

      id: 10,
      barng: 'Game'
    },
    {

      id: 11,
      barng: 'LCD'
    },
    {

      id: 12,
      barng: 'LED'
    },
    {

      id: 13,
      barng: 'Basket'
    },
    {

      id: 14,
      barng: 'Raket'
    },
    {

      id: 15,
      barng: 'PipPipPipCalonMantu:v'
    }


  ];
  const datalistsz = datalists.map((list) => {
    return (

      <span key={list.id}>{list.barng}</span>
    )
  })
  return (
    datalistsz
  )
}

ReactDOM.render(<HeadCategory />, document.getElementById('head-category'));

