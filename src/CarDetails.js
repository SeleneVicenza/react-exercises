import { useEffect, useState, useRef} from "react"

export default function CarDetails({initialData = {mod: '', anno: '', col: ''}}) {
    const inputRef = useRef()
    const [data, setData] = useState(initialData)

    const handleSubmit = () => {
        setData({
            mod: inputRef.current.element.model.value,
            anno: inputRef.current.element.year.value,
            col: inputRef.current.element.color.value
        })
        console.log(data)
    }


    useEffect(() => {
        inputRef.current.reset()
    }, [data])

    

    return (
        <form ref={inputRef} onSubmit={handleSubmit}>
            <input name="model" placeholder="model" ></input>
            <input name="year" placeholder="year" ></input>
            <input name="color" placeholder="color" ></input>
            <button>Submit</button>
            <button>Reset</button>
            

        </form>
    )
}