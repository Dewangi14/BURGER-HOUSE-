
import '../index.css';
import {Card} from 'react-bootstrap';
import {CardGroup} from 'react-bootstrap';
import {Button} from 'react-bootstrap'

function CompoThree() {
  return (
    <div style={{marginBottom:'10%', marginInline:'1.5%'}}>

      <div style={{textAlign:'center'}}>
        <center>
     
        <div className='p-2 MenuNav fs-2' style={{backgroundColor:'#ffc039' , width:'20%', fontWeight:'600'}}>ALWAYS TASTY BURGER</div><br/>
        <div className='font-link fs-1' style={{color:'#3e200b'}}>CHOOSE &amp; ENJOY </div><br/>
        <div style={{textAlign:'center', maxWidth:'110ch'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas 
          pulvinar risus, vel suscipit nulla. Sed volutpat leo sed ex pulvinar 
          ultrices. Quisque sed felis rutrum, consectetur lacus eu, vehicula quam.
          Sed gravida venenatis quam vitae sagittis. 
        </div>     
        </center>
      </div>
      <br/><br/>



<center>
    <CardGroup>
      <Card style={{border:'0'}}>
        <Card.Img variant="top" src="https://www.pngmart.com/files/16/Bacon-Cheese-Burger-PNG-Clipart.png" />
        <Card.Body>
          <Card.Title className='MenuNav fs-1' style={{fontWeight:'900'}}>LOREM IPSUM DOLOR</Card.Title>
          <Card.Text style={{color:'#8d8d8d'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
          </Card.Text>
        </Card.Body>
        <Card.Footer className='font-link' style={{border:'0', backgroundColor:'white'}}>
        <Button  style={{ padding:'3%', paddingInline:'12%', borderRadius:'0'}} variant="danger">ORDER NOW</Button>
        </Card.Footer>
      </Card>

      <Card style={{border:'0',}}>
        <Card.Img style={{height:"100%"}} variant="top" src="https://s.yimg.com/uu/api/res/1.2/9CJ4b0lNgMrV.p5rUEld_g--~B/aD05MDA7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/evening_standard_239/30a54a6979a6d8ab822c76d9d9e01441" />
        {/* https://ampmstore.in/wp-content/uploads/2018/08/Panner-Burger.png */}
        <Card.Body>
          <Card.Title className='MenuNav fs-1' style={{fontWeight:'900'}}>LOREM IPSUM DOLOR</Card.Title>
          <Card.Text style={{color:'#8d8d8d'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
          </Card.Text>
        </Card.Body>
        <Card.Footer className='font-link' style={{border:'0', backgroundColor:'white'}}>
        <Button  style={{ padding:'3%', paddingInline:'12%', borderRadius:'0'}} variant="danger">ORDER NOW</Button>
        </Card.Footer>
      </Card>

      <Card style={{border:'0'}}>
        <Card.Img variant="top" src="https://www.pngmart.com/files/16/Bacon-Cheese-Burger-PNG-Clipart.png" />
        <Card.Body>
          <Card.Title className='MenuNav fs-1' style={{fontWeight:'900'}}>LOREM IPSUM DOLOR</Card.Title>
          <Card.Text style={{color:'#8d8d8d'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
          </Card.Text>
        </Card.Body>
        <Card.Footer className='font-link' style={{border:'0', backgroundColor:'white'}}>
        <Button  style={{ padding:'3%', paddingInline:'12%', borderRadius:'0'}} variant="danger">ORDER NOW</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
    </center>
     
    </div>
  );
}

export default CompoThree;