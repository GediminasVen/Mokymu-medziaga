import { useRef } from "react"
import './Search.css'
import Button from "../Button"

const Search = (props) => {
    let inputRef = useRef()
    let items = props.items

    const onClickSearch = () => {
        const enteredValue = inputRef.current.value.toLowerCase()

        const newData = items.filter(item => item.name.toLowerCase().includes(enteredValue))
        console.log(newData)

        //
        props.onSearchButtonClick(newData)


    }

    const onClickReset = () => {
        props.onResetButtonClick();
        inputRef.current.value = ''
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="search"/>
            <Button title='Search' action={onClickSearch} />
            {
                inputRef.current?.value.length > 0 && (            <Button title='Reset' action={onClickReset} />
                )
            }
            
        
        </div>
    )
}

export default Search