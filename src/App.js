import {Routes, Route, NavLink} from "react-router-dom";
// import Counter from "./components/Counter/Counter";
// import Card from "./components/Card/Card";
// import Posts from "./components/Posts/Posts";
// import ToDoList from "./components/ToDoList/ToDoList";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import NotFound from "./pages/NotFoun";

const App = () => {
    return (
        <div>
                <nav>
                    <NavLink className="nav-item" to="/">Home</NavLink>
                    <NavLink className="nav-item" to="/about">About</NavLink>
                    <NavLink className="nav-item" to="/Posts">Pages</NavLink>
                </nav>
                {/* <Counter></Counter> 
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
                </Card>  
                <Posts></Posts>
                <ToDoList 
                    textLable ="Введіть завдання на день"              
                /> */}
            <Routes>


                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/posts" element={<Posts/>}></Route>
                <Route path="/posts/:id" element={<Post/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </div>   
    )    
}

export default App;
