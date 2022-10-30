import React, { useState } from "react";
import CarDetails from "./CarDetails";
import ClickCounter from "./ClickCounter";
import ClickTracker from "./ClickTracker";
import Container from "./Container";
import Counter from "./Counter";
import FilteredList from "./FilteredList";
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";
import Hello from "./Hello";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import Sum from "./Sum";
import TodoList from "./TodoList";
import UncontrolledLogin from "./UncontrolledLogin";
import Welcome from "./Welcome";
import { Routes, Route, Link } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";

// onCounterChange = (count) =>{
//     console.log(count)
// }


    

    export function App() {

        const [showComponent, setShowcomponent] = useState(true)
        function unmount() {
            setShowcomponent(s => !s)
        }

        return (
            <div>
                <Hello />
                <Container title="my app">
                    

                </Container>
                <Link to='/welcome'> To Welcome</Link>
                <Link to='/counter'> To Counter</Link>
                <Link to='/user:username'> To user</Link>
                <Routes>
                    <Route path='/' element={<Welcome />}/>
                    <Route path='/counter' element={<Counter />}/>
                    <Route path='/user:username' element={<ShowGithubUser />}/>
                    <Route path='*' element={<div>
                        <p>Error</p>
                        <Link to='/'>return to Home</Link>
                    </div>}/>
                </Routes>
                
                {/* <Welcome name={<strong>Selene</strong>} />
                <button onClick={unmount}>unmount</button>
                {showComponent && <Counter />}
                <ClickCounter />
                <ClickTracker />
                <InteractiveWelcome />
                <Login />
                <UncontrolledLogin />
                <TodoList render={(items, remove) => {
                    const element = items.map((item, index) => {
                        return (<div>
                            <li key={index}>{item}</li>
                            <button onClick={() => remove(index)}>Remove</button>
                        </div>)
                    })
                    return <ul>{element}</ul>
                }} />
                
                <Sum />
                <GithubUser username='SeleneVicenza'/>
                <GithubUserList/>
                <CarDetails />
                <FilteredList /> */}

            </div>
        );
}


// export default function App() {
//     return (
//         <div>
//             <Hello />
//             <Welcome name="Selene" />
//         </div>
//     );
// }