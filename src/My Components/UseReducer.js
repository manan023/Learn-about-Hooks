import React, { useReducer } from 'react'
import "./style.css"
export const UseReducer = () => {

    const reducer=(state, action)=>{
        if(action.type==="INCR"){
            state= state + 1;
            
        }
        if(state>0 && action.type==="DECR"){
            state= state-1;
        }
        return((state));   
    }

    const initialData= 5;
    const [state, dispatch] = useReducer(reducer, initialData)
    return (
        <>
            <div>
                <div className="center_div">
                    <p>{state}</p>
                    <div className="button2" onClick={()=>dispatch({type:"INCR"})}> {/*when we dispatch call reducer function*/}
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        INCR
                    </div>
                    <div className="button2" onClick={()=>dispatch({type:"DECR"})}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        DECR
                    </div>
                </div>
            </div>
        </>
    );
};
