import '../index.css'

import { Col, Container, Row } from "react-bootstrap";
import { GiHamburger } from "react-icons/gi";
import {HiLocationMarker} from 'react-icons/hi';
import {GrMail} from 'react-icons/gr';
import {AiFillInstagram} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'



function CompoSix() {
    return (
      <div style={{marginBottom:'5%'}}>
  
        <Container style={{ padding:'5% 5% 2% 5%', backgroundImage:`linear-gradient(rgba(12, 12, 12, 0.6), rgba(0, 0, 0, 0.6)),url('https://t4.ftcdn.net/jpg/01/76/49/61/360_F_176496123_9WmtYPKKWYwk1P75WKZLLW6Lz74VaS5a.jpg')` ,
         backgroundRepeat:'no-repeat',backgroundSize:'cover', 
         boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px', color:'white'}}>
          <Row>

            <Col>
            <p  className='Brand-font fs-1' style={{fontWeight:'900', fontSize:'30px'}} href="#home"> <GiHamburger className='fs-1' size={100} style={{marginRight:'5%'}}/><span>BURGER HOUSE</span></p>
            </Col>
            <Col>
            
            </Col>

          </Row>
          <Row>

            <Col md={6}>
            <div style={{paddingTop:'4%'}}>
            
                <p style={{maxWidth:'55ch'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut euismod euismod nisi, id tempus nunc. Fusce quis erat at 
                    sem ultricies blandit. Etiam consectetur felis ut metus 
                    eleifend ultrices.Mauris hendrerit nunc odio, a varius ipsum convallis quis. 
                    In eros nisi, porta quis dictum quis.
                </p>
                
            </div>
            </Col>
            <Col xs={12} md={6}>
                <Container className='m-5'>
                    <Row>
                        
                        <Col>
                            <HiLocationMarker size={50} className='me-4'/>
                            <span>MAIN ROAD, BUILDING NAME, COUNTRY</span>
                        </Col>
                        
                    </Row>
                    <Row>
                        
                        <Col>
                            <GrMail  size={50} className=' me-4'/>
                            <span>INFO@COMPANYNAME.COM</span>
                        </Col>
                        
                    </Row>
                    </Container>

                 
            </Col>

          </Row>
          <Row>

            <Col><div style={{paddingTop:'20%'}}><span>@COMPANY NAME 2020 ALL RIGHTS RESERVED</span></div>
            </Col>
            <Col>
            {/* <div style={{paddingTop:'20%'}}><span style={{color:'black', backgroundColor:'white'}}></span></div> */}
            <div style={{paddingTop:'20%', textAlign:'end'}}>
                 <span className='m-1' ><AiFillInstagram size={30} style={{backgroundColor:'white', color:'black', borderRadius:'50%'}}/></span>
                 <span className='m-1'> <BsFacebook size={30}/></span>
                 <span className='m-1'><AiFillTwitterCircle size={35}/></span>
                 <span className='m-1'> <IoLogoWhatsapp size={35}/></span>
                 </div>
                 
                  
                  
            </Col>

          </Row>
        </Container>
       
      </div>
    );
  }
  
  export default CompoSix;