
import Counter from "./components/Counter/Counter";
import Card from "./components/Card/Card";
import Posts from "./components/Posts/Posts";
import ToDoList from "./components/ToDoList/ToDoList";

const App = () => {
    return (
        <div>
            <Counter></Counter> 
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
            />
        </div>   
    )    
}

export default App;
