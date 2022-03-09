import './Countdown.css';

const Countdown = (props) => {
    
    let today= new Date();
    let countdownDate= props.date;
    
    //console.log(today.getTime())
    let timeUntil=countdownDate.getTime()-today.getTime();
    let differenceInDays=timeUntil/(1000 * 3600 * 24);
    let differenceInDaysRounded=Math.ceil(differenceInDays);
    
    return ( 
        <div className='countdown-box'>
            <p className='countdown-title'>{props.title} :</p>
            <p className='countdown-days'>{differenceInDaysRounded}</p>        
        </div>
     );
}
 
export default Countdown;