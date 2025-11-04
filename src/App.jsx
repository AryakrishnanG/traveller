import ReviewSection from './ReviewSection';
import ReadMore from './components/ReadMore';
import QuoteForm from './components/QuoteForm';
import './App.css';

function App() {
    return (
        <div className="app">
            <ReviewSection 
                blogId={1} 
                blogTitle="BASED ON YOUR EXPERIENCE" 
            />
             <div className="mt-10">
            <ReadMore
              text="We bring you handpicked holiday experiences that combine adventure, culture, and comfort. Our travel specialists ensure every trip is memorable — from luxurious getaways to budget-friendly escapes, crafted with care for every traveler."
              maxLength={180}
            />
           </div>
            <div className="flex justify-center items-center min-h-screen w-screen bg-gradient-to-br from-blue-100 to-orange-50">
              <QuoteForm/>
            </div>

        </div>
    );
}

export default App;
