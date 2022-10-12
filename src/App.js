import React from "react";
import ClickCounter from "./ClickCounter";
import ClickTracker from "./ClickTracker";
import Counter from "./Counter";
import Hello from "./Hello";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import {Welcome} from "./Welcome";

export class App extends React.Component {
    render(){
        return(
            <div>
               <Hello />
               <Welcome name={<strong>Selene</strong>} />
               <Counter />
               <ClickCounter />
               <ClickTracker />
               <InteractiveWelcome />
               <Login />
            </div> 
        );
    }   
}

// export default function App() {
//     return (
//         <div>
//             <Hello />
//             <Welcome name="Selene" />
//         </div>
//     );
// }