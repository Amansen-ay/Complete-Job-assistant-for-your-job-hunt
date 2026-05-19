import Amazon from '../assets/amazon.png'
import './dataTable.css'

function TableRow({service,role}) {
    return (
        <>
            <div className="tableRow">
                <div className="tableRowLeftPart">

                 <img src={Amazon} width="40px" height="40px" />

                 <div className="jobRole">
                  <h4>{service}</h4>
                  <p>{role}</p>   
                 </div>
                </div>
                
               
                <h4 id>Interview</h4>
               
                

                <p>20 May 2025</p>
                
            </div>  
        </>
    )
}

export default function datatable() {
    return (
        <>
        <div className="tableContainer">
            <header className="tableHeader">
             <h3>Recent Applications</h3>
             <p>View all</p>   
            </header    >
     
            <div id="strecher">
              <TableRow service={"Amazon"} role={"Frontend developer"}/> 
              <TableRow service={"Microsoft"} role={"Software Engineer"}/>
              <TableRow service={"Google"} role={"SDE intern"}/>
              <TableRow  className="lastChild" service={"Netflix"} role={"Full stack developer"}/> 
            </div>
            

            

            
            

        </div>
        </>
    )
}