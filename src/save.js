 const btArr = [
    {
      btName :1,
      btColor : 'primary'
    },
    {
      btName :2,
      btColor : 'secondary'
    },
    {
      btName :3,
      btColor : 'warning'
    },
    {
      btName :4,
      btColor : 'primary'
    },
    {
      btName :5,
      btColor : 'info'
    },
    {
      btName :6,
      btColor : 'secondary'
    }
  ];
  console.log(typeof btArr)
  
  
  return (
    <div>
      {btArr.map( (btObj) => {
        console.log('num',btObj)
        return <Buttoncomp btObj={btObj}/>
      })
      }
      
      <div>
        <div>
          <input className='inputClass' type="text" value={0} />

        </div>
      </div>
      

      <h1 className={styless.title}>hello</h1>

    </div>

 
  );
}