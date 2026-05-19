import cases from '../../assets/cases.svg'

export default function FeatureCrad({img,cardName,discription,bgc}) {
    return (
        <>
       <div style={{width:"250px",height:"200px",backgroundColor:"white",padding:"20px",borderRadius: "12px",boxShadow: "0 10px 30px rgba(0,0,0,0.1)"}}>
       <img src={img} style={{padding:"15px",backgroundColor:bgc,borderRadius:"15px"}}/>
       <h3 style={{marginTop:"10px",marginBottom:"10px"}}>{cardName}</h3>
       <p>{discription}</p>
       </div>
        </>
    )
}
