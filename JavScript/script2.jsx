function HeadLeft() {
  const HeadLefts = [

    {

      id: 1,
      barng: 'Product'
    },
    {

      id: 2,
      barng: 'Product'
    },
    {

      id: 3,
      barng: 'Product'
    },
    {

      id: 4,
      barng: 'Product'
    },
    {

      id: 5,
      barng: 'Product'
    },
    {

      id: 6,
      barng: 'Product'
    },
    {

      id: 7,
      barng: 'Product'
    },
    {

      id: 8,
      barng: 'Product'
    },
    {

      id: 9,
      barng: 'Product'
    },
    {

      id: 10,
      barng: 'Product'
    },
    {

      id: 11,
      barng: 'Product'
    },
    {

      id: 12,
      barng: 'Product'
    },
    {

      id: 13,
      barng: 'Product'
    },
    {

      id: 14,
      barng: 'Product'
    },
    {

      id: 15,
      barng: 'Product'
    }


  ];
  const datalistsz = HeadLeft.map((list) => {
    return (

      <span key={list.id}>{list.barng}</span>
    )
  })
  return (
    datalistsz
  )
}

ReactDOM.render(<HeadLeft />, document.getElementsByClassName('head-left'));
