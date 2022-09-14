import React,{useState} from "react"
import '../style/app.css'
import cake from '../assets/cake.jpg'
import cross from '../assets/icon@2x.png'


const ROIapp=()=>{
    const[show,setshow] = useState(false);
    
    const[icon,seticon] = useState(<i class="bi bi-pencil" ></i>)

    const changeicon = ()=>{
       
        seticon(<i class="bi bi-check2"></i>)
    }

    return(
        <>
            <div className="box">
                <h1 className="cal">ROI Calculator</h1>
                    <a href="close">
                        <button type="button" class="btn-close" aria-label="Close" id='crossicon' ></button>
                    </a>
                    
                 <img src={cake} className='ck' ></img>
                 <span className="ck1">Cake</span>
                 <span className="back"></span>
                 <div className="knob">
                    <span className="USD">USD</span>
                 </div>
                 <div className="rectangle">
                    <span className="TX">2.10000 CAKE</span>
                 </div>
                 <span>
                    <button className="b1">USE BALANCE</button>
                    <button className="b2">$1000</button>
                    <button className="b3">$100</button>
                 </span>

                 <span>
                    <h3 className="no1">~ $20.82</h3>
                 </span>

                 <div>
                    <h3 className="tf">Timeframe</h3>
                 </div>
                 <span>
                    <button className="b4">1 Day</button>
                    <button className="b5">7 Days</button>
                    <button className="b6">36 Days</button>
                    <button className="b7">1 Year</button>
                    <button className="b8">5 Years</button>

                 </span>

                 <div>
                    <h3 className="EAA">Enable Accelerated APY</h3>
                 </div>

                 <span className="back2"></span>
                    <div className="knob2"></div>

                <div>
                    <h3 className="ST">Select Tier</h3>
                </div>

                <span>
                    <button className="b9">Tier 1</button>
                    <button className="b10">Tier 2</button>
                    <button className="b11">Tier 3</button>
                    <button className="b12">Tier 4</button>
                    <button className="b13">Tier 5</button>

                </span>

                <div>
                    <h3 className="RACR">ROI at Current Rates</h3>
                </div>

                <div className="rectangle2">
                    <span className="pencil" >
                    <i  onClick={changeicon} >{icon}</i>
                    </span>
                    <span className="TX1">100.0 USD </span>
                 </div>

                 <div >
                    <span className="TX2">~ 3CAKE + 10 DON</span>
                 </div>

                <div>
                    <button className="b14">Apply</button>
                    <button className="b15">Cancel</button>

                </div>


                <span className="sp" >

                    <button  type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample" onClick={()=>{setshow(!show)} } className='hd'>
                        {show== true? <span className="h">Hide details</span>   : <span className='sd'>Show details</span>  }
                            <i class="bi bi-chevron-down" id="icon2"></i>
                         

                    </button>

                    {
                        show && <div class="collapse" id="collapseExample" className="div" >
                       
                        <span className="apy" >APY</span>
                        <span className="no" >63.34%</span>
                        <ul className="ul">
                            <li>Calculated based on current rates</li>
                            <li>All fugures are estimates provided for your convenience only,<br></br>
and by no means represent guaranted returns.</li>
                        </ul>
            
                        </div>
                    }

                </span>

               
                    
                    
            


            </div>


        
        </>
    )
}

export default ROIapp;