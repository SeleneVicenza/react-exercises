import React from "react";
import ClickCounter from "./ClickCounter";
import ClickTracker from "./ClickTracker";
import Container from "./Container";
import Counter from "./Counter";
import Hello from "./Hello";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import Sum from "./Sum";
import TodoList from "./TodoList";
import UncontrolledLogin from "./UncontrolledLogin";
import Welcome from "./Welcome";

// onCounterChange = (count) =>{
//     console.log(count)
// }


    

// export function App() {
//         return (
//             <div>
//                 <Hello />
//                 <Container title="my app">
                    

//                 </Container>
//                 <Welcome name={<strong>Selene</strong>} />
//                 <Counter />
//                 <ClickCounter onCounterChange={(count) =>{return console.log(count)}}/>
//                 <ClickTracker />
//                 <InteractiveWelcome />
//                 <Login />
//                 <UncontrolledLogin />
//                 <TodoList render={(items, remove) => {
//                     const element = items.map((item, index) => {
//                         return (<div>
//                             <li key={index}>{item}</li>
//                             <button onClick={() => remove(index)}>Remove</button>
//                         </div>)
//                     })
//                     return <ul>{element}</ul>
//                 }} />
                
//                 <Sum />

//             </div>
//         );
// }


export function App() {
    return (
        <div>
            <Hello />
            <Welcome name="Selene" />
            <ClickCounter onCounterChange={(count) =>{return console.log(count)}}/>
        </div>
    );
}