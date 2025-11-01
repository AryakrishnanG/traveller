import ReviewSection from './ReviewSection';
import './App.css';

function App() {
    return (
        <div className="app">
            <ReviewSection 
                blogId={1} 
                blogTitle="BASED ON YOUR EXPERIENCE" 
            />
        </div>
    );
}

export default App;
