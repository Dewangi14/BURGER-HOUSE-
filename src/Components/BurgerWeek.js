import '../index.css';

import Header from "./Header";
function CompoOne() {
  return (
    <div className='pb-3 mb-5' style={{backgroundColor:'rgba(255,195,65,255)'}}>


        <Header/>

        <div class="d-flex m-5">

            {/* BURGER WEEK text */}

                <div class="p-4 w-50 mt-4">
                    <div  className='MenuNav fs-4' style={{border: '2px dashed #3f200c', width:'58%' , textAlign:'center', }}>
                        IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS
                    </div>
                    <div  className="font-link xs={fs-3}"  style={{fontWeight:'900', fontSize:'100px', color:'#3f200c', textShadow: '0.03em 0.03em 0.05em white'}}>
                        BURGER<br/>
                        <p style={{fontWeight:'900', fontSize:'60px'}}>WEEK</p>
                    </div>
                </div>

            

                     {/* Burger-Fries-Coke Image */}

                    <div class="p-5 w-50" style={{position:'relative'}}>
                        <div style={{width:'100%', height:'100%'}}>
                        <img style={{height:'100%', width:'100%'}} src='https://png2.cleanpng.com/sh/17a8893a775841e1a466c9c251c4f08b/L0KzQYm3VMEyN5V6fZH0aYP2gLBuTfhidZN6itlucj3pgrb1gBgubqNufeU2Y3jodcTsgwVzb5Z3RdVxaXPudbA0kBFvbKhuRdh7ZX7meH7tkvlme146edVtY0m4cbS9VfVlPF81TKIBOEGzRoK8UsM1O2Y9TqgDMUK4PsH1h5==/kisspng-hamburger-french-fries-cheeseburger-chicken-sandwi-french-fries-5acdc95ac65ed4.0406810615234358668125.png'/>
                        </div>

                        {/* Red Rate Card */}
                        
                        <div className='Brand-font' style={{position:'absolute', bottom:'3%',right:'80%', backgroundColor:'#de1d1e',
                         padding:'2%', width:'25%', height:'30%', borderRadius:'50%',
                         boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>

                            <div style={{border:'white 2px dashed', borderRadius:'50%',
                            padding:'10%', height:'100%', color:'white', textAlign:'center'}}>
                            
                            <span className='' style={{fontWeight:'900', fontSize:'50px'}}>$5</span>
                            <span className='MenuNav fs-2'>.49</span> 
                            <div className='MenuNav fs-2' style={{lineHeight:'20px'}}>O&nbsp; N&nbsp; L&nbsp; Y&nbsp;</div>

                            </div>
                            

                        </div>
                </div>
        </div>

       

      
     
    </div>
  );
}

export default CompoOne;