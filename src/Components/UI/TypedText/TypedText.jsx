import React, {useEffect} from 'react';
import Typed from 'typed.js';

// Component to display an instruction

const TypedText = ({text}) => {
    useEffect(() => {

        // Options for the Typed object
        const options = {
            strings: text,
            typeSpeed: 100,
            smartBackspace: true,
            cursorChar: '',
            loop: true,
            loopCount: Infinity,
            startDelay: 500,
            backSpeed: 50,
        };

        // New Typed instance
        const typed = new Typed('#instruction', options);

        // Destroy Typed instance on unmounting the component to prevent memory leaks
        return () => {
            typed.destroy();
        };
    }, [text]);

    return (    
    
        <section id='instruction'></section>
    );
};

export default TypedText;