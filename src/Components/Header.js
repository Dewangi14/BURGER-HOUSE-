import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { GiHamburger } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";

import '../index.css'


function Header() {
  return (
    <div style={{color:'#3f200c'}}>

        <Navbar bg="transparent" expand="lg">
            <Container style={{paddingTop:'0.5rem'}}>
                <Navbar.Brand  className='Brand-font' style={{fontWeight:'900', fontSize:'30px'}} href="#home"> <GiHamburger size={70} style={{marginRight:'10%', color:'#3f200c'}}/>BURGER HOUSE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                    <Nav.Link href="#home" style={{color:'#3f200c', fontWeight:'900'}}><MdDeliveryDining size={50}/> Express Delivery +1 234 567 890</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Navbar bg="transparent" expand="lg" style={{padding:'0'}}>
            <Container>
    
                <Nav className="justify-content-end" style={{ width: "100%", fontWeight:'900'}}>
                    <div className="d-flex flex-row-reverse MenuNav ">
                        <div style={{cursor:'pointer'}} class="me-2 font">C&nbsp; O&nbsp; N&nbsp; T&nbsp; A&nbsp; C&nbsp; T &nbsp; &nbsp; &nbsp;  U&nbsp; S</div>
                        <div style={{cursor:'pointer'}} class="me-5">O&nbsp; U&nbsp; R &nbsp; &nbsp; &nbsp;  S&nbsp; T&nbsp; O&nbsp; R&nbsp; Y&nbsp; </div>
                        <div style={{cursor:'pointer'}} class="me-5">M&nbsp; E&nbsp; N&nbsp; U</div>
                        <div style={{cursor:'pointer'}} class="me-5">H&nbsp; O&nbsp; M&nbsp; E</div>
                    </div>
                </Nav>
               
            </Container>
        </Navbar>

        
        



</div>

 
      
       
    
    
  );
}

export default Header;