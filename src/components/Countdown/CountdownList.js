import Card from "../UI/Card";
import Countdown from "./Countdown";
import "./CountdownList.css"

const CountdownList = () => {
    return ( 
        <Card className="countdown-list-container">
            <Countdown date={new Date('2022-3-12')} title="Spring Break"/>
            <Countdown date={new Date('2022-4-11')} title="Pansmark Start"/>
            <Countdown date={new Date('2022-4-17')} title="190"/>
            <Countdown date={new Date('2022-5-9')} title="Turn 25"/>
            <Countdown date={new Date('2022-5-22')} title="185"/>
            <Countdown date={new Date('2022-5-26')} title="Summer Start"/>
            <Countdown date={new Date('2022-6-26')} title="180"/>
            <Countdown date={new Date('2022-6-31')} title="Time left to Finish Cert"/>
            <Countdown date={new Date('2022-7-31')} title="175"/>
            <Countdown date={new Date('2022-9-3')} title="School Start"/>
            <Countdown date={new Date('2022-9-4')} title="170"/>
            <Countdown date={new Date('2022-10-9')} title="165"/>
            <Countdown date={new Date('2022-11-13')} title="160"/>
            <Countdown date={new Date('2024-5-26')} title="Japan"/>
            <Countdown date={new Date('2027-5-9')} title="Turn 30"/>
            <Countdown date={new Date('2032-5-9')} title="Turn 35 (Be married by here)"/>
            <Countdown date={new Date('2027-5-9')} title="Turn 40"/>
            <Countdown date={new Date('2053-5-26')} title="Naturaly Good Days Left (50)"/>
            <Countdown date={new Date('2057-5-9')} title="Turn 60"/>
            <Countdown date={new Date('2067-5-9')} title="Late Retirement (70)"/>
            <Countdown date={new Date('2077-5-9')} title="Turn 80"/>
            <Countdown date={new Date('2087-5-9')} title="Natural Death (90)"/>
            <Countdown date={new Date('2097-5-9')} title="Turn 100"/>
            <Countdown date={new Date('2100-1-1')} title="My 3rd Century 2100"/>
            <Countdown date={new Date('2121-5-9')} title="Advanced Teach Death (125)"/>
        </Card>
     );
}
 
export default CountdownList;