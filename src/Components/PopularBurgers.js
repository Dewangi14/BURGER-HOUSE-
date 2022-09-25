import { Row, Col, Card, Stack } from "react-bootstrap";

function CompoTwo() {
    return (
      <div className="mt-5">

        <div style={{marginInline:'5%', marginBottom:'5%'}}>

            <Row>
                <Col sm={12} md={6} >

                    <Card style={{ width: '100%', height: '100%',borderRadius:'10px'}}>
                        <div style={{ position:'relative', height:'100%', width: '100%'}}>
                            <img src="https://img.freepik.com/premium-photo/close-up-burger-with-stone-background_23-2148273030.jpg?w=2000" style={{height:'100%', width:'100%',borderRadius:'10px'}}/>
                            <div className="MenuNav" style={{position:'absolute' , top:'2rem', marginLeft:'2rem', color: 'white'}}>

                                <p className="fs-3"  >
                                    TRY IT TODAY
                                </p>
                                <p className="fs-1" style={{lineHeight:'0%', fontWeight:'900'}}>
                                    MOST POPULAR BURGER
                                </p>

                            </div>
                        </div>
                    </Card>
                
                </Col>
                
                <Col sm={12} md={6} style={{height:'23rem'}}>


                        <Row  style={{height:'55%'}}>
                            
                            <Col>
                                    <div style={{width:'100%', height:'100%',borderRadius:'5px', position:'relative', backgroundImage:`url(https://media.istockphoto.com/photos/big-sandwich-hamburger-burger-with-turkey-meat-tomato-bacon-and-picture-id1249520546?k=20&m=1249520546&s=612x612&w=0&h=fiU2_iE7PtrSH73kVKIVSZl-1J2aOjHH-pLY-xRs-p8=)`}}>

                                        {/* <img src="https://media.istockphoto.com/photos/craft-burger-is-cooking-on-black-background-consist-sauce-salsa-red-picture-id1314441835?k=20&m=1314441835&s=612x612&w=0&h=j3ff6ApfcuFOEQ64lrcICbXcRRbES1sns8tNmS2JGKM=" 
                                        style={{height:'100%', width:'100%',borderRadius:'5px'}}/> */}

                                            <div className="MenuNav" style={{position:'absolute' , top:'2rem', marginLeft:'2rem', color: 'white'}}>

                                                <p className="fs-3">
                                                    TRY IT TODAY
                                                </p>
                                                <p className="fs-1" style={{lineHeight:'0', maxWidth:'200px',fontWeight:'900'}}>
                                                    MORE FUN 
                                                </p>
                                                <p className="fs-1" style={{lineHeight:'35px', maxWidth:'200px',fontWeight:'900'}}>
                                                    MORE TASTE
                                                </p>

                                            </div>

                                    </div>
                            </Col>

                        </Row>
                                    
                            
                            <Row className="pt-4" style={{height:'60%'}}>
                                <Col>
                                <div style={{width:'100%', height:'100%',borderRadius:'5px', position:'relative', backgroundImage:`linear-gradient(rgba(12, 12, 12, 0.2), rgba(0, 0, 0, 0.3)),url('https://media.istockphoto.com/photos/burger-and-french-fries-panorama-fast-food-panoramic-banner-picture-id1343692967?k=20&m=1343692967&s=612x612&w=0&h=tZ3jma1Ce_QKHrKaOI1VMvYB9htkAYCrasVtcS31bTk=')`}}>

                                    {/* <img src="https://media.istockphoto.com/photos/burger-and-french-fries-panorama-fast-food-panoramic-banner-picture-id1343692967?k=20&m=1343692967&s=612x612&w=0&h=tZ3jma1Ce_QKHrKaOI1VMvYB9htkAYCrasVtcS31bTk=" 
                                    style={{height:'100%', width:'100%',borderRadius:'5px'}}/> */}

                                        <div className="MenuNav" style={{position:'absolute' , top:'2rem', marginLeft:'2rem', color: 'white'}}>

                                                <p className="fs-3">
                                                    TRY IT TODAY
                                                </p>
                                                <p className="fs-1" style={{lineHeight:'0', maxWidth:'200px',fontWeight:'900'}}>
                                                   FRESH &nbsp; CHILLI
                                                </p>
                                              

                                        </div>


                                </div>
                                </Col>
                            </Row>

               

                       

                   {/* *************************************** */}
                   

                    {/* <Row>

                        <Col sm={12}>

                            <Card style={{ width: '100%', height: '50%'}}>
                            <div style={{position:'relative', height:'100%', width: '100%'}}>
                                <img src="https://thumbs.dreamstime.com/b/street-food-burger-fries-sauce-cola-street-food-burger-fries-sauce-cola-rustic-background-106720374.jpg" style={{height:'100%', width:'100%'}}/>
                                <div style={{position:'absolute' , top:'1rem', marginLeft:'1rem', color: 'white'}}>

                                    <p>
                                        TRY IT TODAY
                                    </p>
                                    <p>
                                        MOST POPULAR BURGER
                                    </p>

                                </div>
                            </div>
                            </Card>

                        </Col>
                        
                    </Row>
                    <Row>

                    <Col sm={12}>

                        <Card style={{ width: '100%', height: '50%'}}>
                        <div style={{position:'relative', height:'100%', width: '100%'}}>
                            <img src="https://thumbs.dreamstime.com/b/street-food-burger-fries-sauce-cola-street-food-burger-fries-sauce-cola-rustic-background-106720374.jpg" style={{height:'100%', width:'100%'}}/>
                            <div style={{position:'absolute' , top:'1rem', marginLeft:'1rem', color: 'white'}}>

                                <p>
                                    TRY IT TODAY
                                </p>
                                <p>
                                    MOST POPULAR BURGER
                                </p>

                            </div>
                        </div>
                        </Card>

                    </Col>

                    </Row> */}

                </Col>
            </Row>

        </div>
       
    </div>
    );
  }
  
  export default CompoTwo;