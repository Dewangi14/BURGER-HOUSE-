import '../index.css'

import { Col, Container, Row } from "react-bootstrap";


function CompoFour() {
    return (
      <div >
  
        <Container style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'}}>
          <Row>
            <Col sm={12} md={6}>
               <div style={{padding:'10%'}}>

                   <p className='MenuNav fs-1' style={{lineHeight:'0%'}}>DISCOVER</p>

                   <p className='font-link fs-1' style={{color:'#3e200b'}}>UPCOMING EVENTS</p><br/>

                   <p style={{color:'#8d8d8d'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Ut euismod euismod nisi, id tempus nunc. Fusce quis erat at 
                    sem ultricies blandit. Etiam consectetur felis ut metus eleifend
                     ultrices. Mauris hendrerit nunc odio, a varius ipsum convallis
                      quis. In eros nisi, porta quis dictum quis, bibendum eget turpis. 
                      Cras pulvinar magna dolor, a imperdiet massa gravida eget. 
                      Ut eu quam eu massa convallis porttitor sit amet rutrum mi. 
                      Proin viverra pulvinar sem in molestie.</p><br/><br/>
                      <div>
                        <button className='me-2' style={{borderRadius:"50%", height:'15px',width:'15px', border:'0px white solid ', backgroundColor:'#ffbe3c'}}></button>
                        <button className='me-2' style={{borderRadius:"50%", height:'15px',width:'15px', border:'0px white solid ', backgroundColor:'#dedede'}}></button>
                        <button style={{borderRadius:"50%", height:'15px',width:'15px', border:'0px white solid ', backgroundColor:'#dedede'}}></button>
                      </div>
               </div>
            </Col>
                
            <Col sm={12} md={6}>
                <div style={{height:'100%', width:'100%', padding:'3%'}}>
                  <img style={{height:'100%', width:'100%'}} src='https://img.freepik.com/premium-photo/front-view-burger-with-french-fries_23-2148235045.jpg?w=2000'/>
                </div>
            </Col>
          </Row>
        </Container>
       
      </div>
    );
  }
  
  export default CompoFour;