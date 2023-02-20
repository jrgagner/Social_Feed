import React, {useState} from "react";


const LikeButton = (props) => {
    
    const [buttonClass, setButtonClass] = useState('inactive');

    function changeToLike(event) {
        if(buttonClass === 'inactive'){
            setButtonClass('liked')
        }
        else {
            setButtonClass('inactive')
        }}
            
    return(
        <div>
            <button className={buttonClass} onClick={changeToLike}>Like</button>
        </div>
    );
};

export default LikeButton

