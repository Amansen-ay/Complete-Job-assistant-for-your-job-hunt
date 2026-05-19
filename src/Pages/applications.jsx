import './applications.css'
import Filter from '../assets/filter.svg'
import Amazon from '../assets/amazon.png'

function ApplicationTable() {
    return (
        <>
        <div className="application-table">
          <table>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Date Applied</th>
                    <th>Next step</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td className="service-and-logo">
                        <img src={Amazon} width="40px" height="40px"/>
                        <p>Adobe</p>
                    </td>
                    <td>UI/UX Designer</td>
                    <td>Offer</td>
                    <td>10 May 2025</td>
                    <td>Offer Received</td>
                    <td>Placeholder</td>
                </tr>
                <tr>
                    <td className="service-and-logo">
                        <img src={Amazon} width="40px" height="40px"/>
                        <p>Spotify</p>
                    </td>
                    <td>Product Designer</td>
                    <td>Interview</td>
                    <td>8 May 2025</td>
                    <td>Interview on 12 May</td>
                    <td>Placeholder</td>
                </tr>
                <tr>
                    <td className="service-and-logo">
                        <img src={Amazon} width="40px" height="40px" />
                        <p>Amazon</p>
                    </td>
                    <td>Frontend Developer</td>
                    <td>Interview</td>
                    <td>20 May 2025</td>
                    <td>Interview on 25 May</td>
                    <td>placeholder</td>
                </tr>
                <tr>
                    <td className="service-and-logo">
                        <img src={Amazon} width="40px" height="40px"/>
                        <p>Google</p>
                    </td>
                    <td>Software Engineer</td>
                    <td>applied</td>
                    <td>18 May 2025</td>
                    <td>—</td>
                    <td>Placeholder</td>
                </tr>
                <tr>
                    <td className="service-and-logo">
                        <img src={Amazon} width="40px" height="40px"/>
                        <p>Netflix</p>
                    </td>
                    <td>SDE intern</td>
                    <td>Assesment</td>
                    <td>16 May 2025</td>
                    <td>Assesment on 22 May</td>
                    <td>Placeholder</td>
                </tr>
                <tr>
                    <td className="service-and-logo">
                        <img src={Amazon} width="40px" height="40px"/>
                        <p>Microsoft</p>
                    </td>
                    <td>Frontend Developer</td>
                    <td>Rejected</td>
                    <td>15 May 2025</td>
                    <td>—</td>
                    <td>Placeholder</td>
                </tr>

            </tbody>

          </table>

          <div className="pagination-container">
           <p>Showing 1 to 6 of 24 Applications</p>
           <h3>Pagination placeholder</h3>
          </div>
        </div>
        </>
    )
}


export default function Applications() {
    return (
        <> 
        <div>
            <header className="appliation-navs-container" >
                <div className="application-navs">
                    <p>All Applications</p>
                    <p>Applied</p>
                    <p>Interview</p>
                    <p>Assesment</p>
                    <p>Offers</p>
                    <p>Rejected</p> 
                </div>

                <div className="filter-and-addJob">
                    <div><img src={Filter} />
                    <p>Filter</p>
                    </div>
                    <button> + Add New Job</button>
                </div>
            
            </header>

            <div className="application-table-container">
                <ApplicationTable/>
            </div>
        </div>
        </>
    )
}