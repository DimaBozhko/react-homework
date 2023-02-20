
import Counter from "./components/counter/counter";
import Card from "./components/card/card";
import Posts from "./components/posts/posts";
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
        </div>   
    )    
}

export default App;
