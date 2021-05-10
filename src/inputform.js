import './inputform.css';
const Inputform = ({Inputbox,searchChange,days,hours,mins,secs})=>{
    return(
        
        <div id="div1"><h1 id="h11">--TIMER--</h1>   
        <div className="dis">
            <h1>{days} days {hours} hrs {mins} mins {secs} secs</h1>
            <div>
                <input type="datetime-local" onChange={searchChange}/><br></br>
                <br></br>
                <button id="but" onClick={Inputbox}>Submit</button>
            </div>

        </div>
        </div>
         
    )
}
export default Inputform;