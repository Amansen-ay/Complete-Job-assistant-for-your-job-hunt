import './dataCards.css'

export default function DataCard({name,number,progress}){
    return (
        <>
        <div style={{width:"120px",height:"120px",padding:"10px", backgroundColor: "white",borderRadius: "12px",boxShadow: "0 10px 30px rgba(0,0,0,0.1)"}}>
            <p style={{marginBottom:"10px"}}>{name}</p>
            <h1 style={{marginBottom:"10px"}}>{number}</h1>
            <p style={{color:name==="Rejections"?"red":"green"}}>{progress}</p>
        </div>
        </>
    )
}

export function ProgressCard () {
    return (
    <>
    <div style={{width:"100%",height:"120px",padding:"10px",backgroundColor:"white",marginTop:"20px",backgroundColor: "white",borderRadius: "12px",boxShadow: "0 10px 30px rgba(0,0,0,0.1)"}}>
        <h3 style={{marginBottom:"20px"}}>Application Progress</h3>
        <div style={{marginLeft:"20px"}}>
            <p style={{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"green",display:"inline-block"}}></p>
            
            <span>—————————</span>
            <p style={{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"blue",display:"inline-block"}}></p>
            <span>—————————</span>
            <p style={{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"green",display:"inline-block"}}></p>
            <span>—————————</span>
            <p style={{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"yellow",display:"inline-block"}}></p>
            <span>—————————</span>
            <p style={{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"red",display:"inline-block"}}></p>

        </div>
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <span >Applied</span><span>Screening</span><span >interview</span><span >Offer</span><span >Rejected</span>
        </div>
    </div>
    </>
    )
}
        
