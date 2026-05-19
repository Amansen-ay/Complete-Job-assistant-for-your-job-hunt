import Navbar from './Page1/nav.jsx'
import Page1 from './Page1/page1.jsx'
import Page2 from './Page2/page2.jsx'

export default function Hompage() {
    return (
        <div style={{marginTop:"10px"}}>
            <Navbar/>
            <Page1/>
            <Page2/>
        </div>
    )
}