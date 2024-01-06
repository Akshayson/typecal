import { Button } from "react-bootstrap";

const Buttoncomp = (props) =>{
    //  const isEven =parseTnt(props.btName) % 2 == 0 ? 'success' :'primary'
      return(
         // <button style={{margin:"20px"}}><h1>{props.btName}</h1></button>
          <Button style={{margin: "20px"}} as="a" variant={props.btObj.btColor}>
              {props.btObj.btName}
          </Button>
      )
  }
  export default Buttoncomp;