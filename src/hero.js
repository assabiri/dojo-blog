import { useState } from "react";

const Hero = () => {
    const [color, setColor] = useState("white");
    const [Hi, setHi] = useState(true);

    const handleClick = () => {
        setHi(!Hi); // Update Hi state
        console.log(color);
        console.log(Hi);
        
        if (!Hi) {  // Use the updated Hi value in the next render
            setColor("white");
        } else {
            setColor("red");
        }
    }

    return (
        <>
            <button style={{ backgroundColor: color }} onClick={handleClick}>Click me</button>
        </>
    );
}

export default Hero;
