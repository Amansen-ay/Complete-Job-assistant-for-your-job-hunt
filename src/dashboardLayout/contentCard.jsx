import './contentCard.css'
import jobIcon from '../assets/job.svg'
import RiseArrow from '../assets/riseArrow.svg'

export default function Card({icon,number,header,bottomRecord,bgc}){
    return (
      <>
      
        <div className="contentCard" >
            <img src={icon} style={{backgroundColor:bgc}} />
            <div className="dataInCard">
              <h1>{number}</h1>
              <p>{header}</p>
              {/* <div className="bottomRecordContainer">
                <img src={RiseArrow}/> */}
              <p id="bottomRecord">{bottomRecord}</p>
              {/* </div> */}
                 
            </div>
                        
        </div>
      
      </>
    )
}