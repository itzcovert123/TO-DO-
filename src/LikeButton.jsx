import { useState } from "react";

export default function LikeButton() {
    const [liked, setLiked] = useState(false);
    let [count, setCount] = useState(0); // just for practice

    function toggle() {
        setLiked(!liked); 
        setCount(count + 1);
    }
    let likestyle = { color: 'red' };

    return (
        <>
            <p onClick={toggle}> Count : {count}</p>
            {liked ? (
                <>
                    <p style={likestyle} onClick={toggle}>
                        <i className="fa-solid fa-heart"></i>
                    </p>
                </>
            ) : (
                <p onClick={toggle}>
                    <i className="fa-regular fa-heart"></i>
                </p>
            )}
        </>
    );
}