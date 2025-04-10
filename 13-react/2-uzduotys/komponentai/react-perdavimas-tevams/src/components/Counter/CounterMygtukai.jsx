const CounterMygtukai = (props) => {

    const onButtonClick = (value) => {
        props.addValue(value)
    }

    return (
        <div>
            <h3>Mygtukai</h3>
            {/* <button onClick={() => onButtonClick(1)}>1</button>
            <button onClick={() => onButtonClick(3)} >3</button>
            <button onClick={() => onButtonClick(5)}>5</button> */}
            {

                props.buttons.map((button, i) => (<button key={i} onClick={() => onButtonClick(button.value)}>{button.text}</button>))

            }

                </div>
            );
        };

export default CounterMygtukai;
