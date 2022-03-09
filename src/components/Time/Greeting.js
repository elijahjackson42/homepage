import './Greeting.css'

let today = new Date();
let hour=today.getHours();

let greet = () =>{
    if(hour<3){
        return ("Well you're up late");
    }else if(hour<10){
        return ("Good morning!");
    }else if(hour < 12){
        return("G'day!")
    }else if(hour<16){
        return("Good afternoon!");
    }else if(hour< 19){
        return("Good evening!");
    }else{
        return("Goodnight.");
    }
}




const Greeting = () => {
    return ( 
        <div className='greeting'>
            <h1>{greet()}</h1>
        </div>
     );
}
 
export default Greeting;