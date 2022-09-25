import { Container,Row, Col, Button } from 'react-bootstrap';
import '../index.css'
import './CompoFive.css'
function CompoFive() {
    return (
      <div>

        <div style={{marginBlock:'10%' ,backgroundImage:`url('')` ,
         backgroundRepeat:'no-repeat', backgroundSize:'cover', position:'relative'}}>

            <div style={{textAlign:"center",color:'#3e200b'}}>
                <p className='MenuNav fs-1' style={{lineHeight:'0%'}}>RESERVATION</p>
                <p className='font-link fs-1'>BOOK YOUR TABLE</p>
            </div>

            {/* // IMAGES */}
            
                 {/* Burger */}

                <div style={{position:'absolute',left:'10px',transform: 'rotate(-20deg)'}}>
                    <img style={{width:'40%'}} src="https://www.pngmart.com/files/16/Bacon-Cheese-Burger-PNG-Clipart.png"/>
                </div>

                {/* Ketchup */}

                <div style={{position:'absolute',right:'2%', width:'15%',transform: 'rotate(10deg)', overflow:'hidden'}}>
                    <img style={{width:'100%', height:'100%'}} src="https://www.pngmart.com/files/5/Ketchup-PNG-File.png"/>
                </div>

                {/* Plate */}
                <div style={{position:'absolute',right:'2%', bottom:'0', width:'15%',transform: 'rotate(10deg)', overflow:'hidden'}}>
                    <img style={{width:'100%', height:'100%'}} src="https://www.pngmart.com/files/1/Burger-And-French-Fries-PNG.png"/>
                </div>


            {/* FORM */}

            <Container className='MenuNav fs-4' style={{marginTop:'5%'}}>

                <Row>
                    <Col className='mb-3 me-3' style={{padding:'0', textAlign:'end'}}><input type="text" name="user" placeholder="NAME" style={{margin:'1%' , padding:'2%',  paddingInlineEnd:'35%'}}/></Col>
                    <Col className='mb-3 me-3' style={{padding:'0'}}><input type="text" name="user" placeholder="EMAIL" style={{margin:'1%' ,  padding:'2%',  paddingInlineEnd:'35%'}}/></Col>
                </Row>
                <Row>
                    <Col className='mb-3 me-3' style={{padding:'0', textAlign:'end'}}><input type="text" name="user" placeholder="DATE" style={{margin:'1%' ,  padding:'2%',  paddingInlineEnd:'35%'}}/></Col>
                    <Col className='mb-3 me-3' style={{padding:'0'}}><input type="text" name="user" placeholder="TIME" style={{margin:'1%' ,  padding:'2%',  paddingInlineEnd:'35%'}}/></Col>
                </Row>
                <Row>
                    <Col className='mb-3 me-3' style={{padding:'0',textAlign:'end'}}><input type="text" name="user" placeholder="PEOPLE" style={{margin:'1%' , padding:'2%',  paddingInlineEnd:'35%'}}/></Col>
                    {/* <Col className='font-link mb-3 me-3' style={{padding:'0'}}><Button type="text" name="user" placeholder="FIND A TABLE" style={{margin:'1%' ,  padding:'2%',  paddingInline:'16%', backgroundColor:'#de1d1e', border:'0px', borderRadius:'5px'}}>FIND A TABLE</Button></Col> */}
                    <Col className='font-link mb-3 me-3' style={{padding:'0'}}><Button variant="danger" style={{margin:'1%' ,padding:'3%', paddingInline:'22.5%'}}>FIND A TABLE</Button></Col>
                </Row>


{/*                        
                       <input type="text" name="user" placeholder="EMAIL" style={{margin:'1%' , padding:'1%',  paddingInlineEnd:'15%'}}/>

                       <br/>
                       <input type="text" name="user" placeholder="DATE" style={{margin:'1%' , padding:'1%',  paddingInlineEnd:'15%'}}/>
                       <input type="text" name="user" placeholder="TIME" style={{margin:'1%' , padding:'1%',  paddingInlineEnd:'15%'}}/>

                       <br/>
                       <input type="text" name="user" placeholder="PEOPLE" style={{margin:'1%' , padding:'1%',  paddingInlineEnd:'15%'}}/>
                       <input type="button" name="user" placeholder="PEOPLE" style={{margin:'1%' , padding:'1%',  paddingInlineEnd:'15%'}}/>
                        */}

                       

            </Container>

            
        

        </div>
       
      </div>
    );
  }
  
  export default CompoFive;