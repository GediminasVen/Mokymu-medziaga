const ProgramavimoKalba = (props) => {

    const onClickItems = (language) => {
        console.log(language)
        props.kalbosPasirinkimas(language)
    }

    
        return (
            <div>
            <button onClick={() => onClickItems('Javascript')}>Javascript</button>
            <button onClick={() => onClickItems('PHP')}>PHP</button>
            <button onClick={() => onClickItems('C#')}>C#</button>
            <button onClick={() => onClickItems('None')}>None</button>
            
            </div>
        )
    }
    
    export default ProgramavimoKalba