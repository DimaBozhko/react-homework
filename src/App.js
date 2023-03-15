import {Routes, Route, NavLink} from "react-router-dom";
import { useState, createContext } from "react";
import Counter from "./components/Counter/Counter";
import Card from "./components/Card/Card";
import ToDoList from "./components/ToDoList/ToDoList";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import NotFound from "./pages/NotFoun";
import Widget from "./components/Widget/Widget";

export const Context = createContext();

const App = () => {
    const user = {
        name: "alex",
        age: "25",
        id: 1
    }

    return (
        <div>
            <nav>
                <NavLink className="nav-item" to="/">Home</NavLink>
                <NavLink className="nav-item" to="/about">About</NavLink>
                <NavLink className="nav-item" to="/Posts">Posts</NavLink>
                <NavLink className="nav-item" to="/Counter">Counter</NavLink>
                <NavLink className="nav-item" to="/Card">Card</NavLink>
                <NavLink className="nav-item" to="/ToDoList">To Do List</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/posts" element={<Posts/>}></Route>
                <Route path="/posts/:id" element={<Post/>}></Route>
                <Route path="/counter" element={<Counter/>}></Route>
                <Route path="/card" element={                
                    <Card 
                        urlCard="img/card-photo.jpg"
                        urlAuthorImg = "img/card-author.png" 
                        urlRating = "img/card-rating.png" 
                        urlStudents = "img/card-students.png"
                        urlModules = "img/card-modules.png"
                        urlDuration = "img/card-duration.png"
                        title = "UX Design : How To Implement Usability Testing"
                        author = "Alfredo Rhiel Madsen"
                        rating = "4.5"
                        students = "500 Student"
                        level = "Beginer"
                        modules = "5 Modul"
                        duration = "1h 30m"
                    >
                    </Card> }>
                </Route>
                <Route path="/ToDoList" element={<ToDoList/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
            <Context.Provider value = {user}>
                <Widget />
            </Context.Provider>
        </div>   
    )    
}

export default App;
