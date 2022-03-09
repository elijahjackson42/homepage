import './TimeTable.css'
import Timer from './Timer.js'
import Greeting from './Greeting';
const Header = (props) => {
    return ( 
        <div className='time-table'>
            <Greeting/>
            <Timer name="Japan" zone="Japan"/>
            <Timer name="Texas" zone="US/Central"/>
        </div>
     );
}
 
export default Header;