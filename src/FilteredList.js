import { useMemo } from "react"

const persons = [
    { name: 'anna', id: '1234', age: 12 },
    { name: 'massimo', id: '1235', age: 24 },
    { name: 'sara', id: '1244', age: 19 }
]

export default function FilteredList() {


    const filteredList = useMemo(() => {
        return persons.filter((i) => i.age >= 18)
    }, [persons])

    return (
        <div>
            <h1>maggiorenni: </h1>
            <ul>
                {filteredList.map((item, id) => {return (<li key={id}>{item.name} {item.age}</li>)})}
            </ul>
        </div>

    )
}