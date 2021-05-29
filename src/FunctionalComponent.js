import {useState, useEffect, useRef} from 'react';
const FunctionalComponent = () => {
    const inputRef = useRef(null);
    const value = useRef(0);
    console.log('value', value)
    const[counter, setCounter] = useState(0);
    const[text, setText] = useState("");

    useEffect(() => {
        console.log('useEffect');
    }, [counter])
    // console.log('Functional Counter: ', counter);

    useEffect(() => {
        console.log('useEffect');
        return () => {console.log('func comp will unmount')}
    }, [counter])

    const increase = () => {
        setCounter(counter + 1);
        value.current = value.current + 1;
    }

    const changeBGColor = () => {
        inputRef.current.parentElement.style.backgroundColor = text;
    }

    const handleText = (e) => {
        setText(e.target.value);
    } 

    return (
        <div className="function">
            <h2>Functional Component</h2>
            <p>Counter: {counter}</p>
                <button onClick={() => increase()}>Increase</button>
                <hr />
                <input type="text" value={text} ref={inputRef} onChange={handleText}/>
                <button onClick={() => changeBGColor()}>BG Colors</button>
        </div>
    )
}

export default FunctionalComponent;
