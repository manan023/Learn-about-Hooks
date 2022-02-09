import React, {useState, useEffect}from 'react';
import "./style.css"

export const UseEffect = () => {


    const initialData= 0;

    // useState Hook
    const [myNum, setMyNum] = useState(initialData);

    // useEffect Hook
    useEffect(() => {
        document.title= `Chats(${myNum})`;
    },/*[] Array dependency if we use this only one time we call when we start or reload the website */);

 
    return (
        <div>
            <div>
                <div className="center_div">
                    <p>{myNum}</p>
                    <div className="button2" onClick={()=>setMyNum(myNum + 1)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        INCR
                    </div>
                </div>
            </div>
        </div>
    );
};
