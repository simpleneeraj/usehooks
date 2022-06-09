import React from 'react';


// type keyCodeType=[]
/**
 * Custom Hook for Keyboard Events
 * @param keyCode 
 * @param callback 
 * @returns 
 */
const useKeyboard = (keyCode: unknown, callback: any) => {
    const callbackRef = React.useRef(callback)

    React.useEffect(() => {
        callbackRef.current = callback
    }, [])

    function keyHandler(event: KeyboardEvent) {
        if (event.key === keyCode) {
            callbackRef.current(event)
            // Multiple Keys
            console.log("Return", event.ctrlKey && event.key === 'Enter');
        }
        // event.preventDefault()
    }

    React.useEffect(() => {
        document.addEventListener('keydown', keyHandler)
        return () => document.removeEventListener('keydown', keyHandler)
    }, [keyCode])
    // Return Values
    return callback

}
export default useKeyboard;



// console.log("Code", event.code);
// console.log("Key", event.key);