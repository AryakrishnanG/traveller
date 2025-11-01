import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ReviewPage from './pages/ReviewPage';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<BlogListPage />} />
                <Route path="/blog/:id" element={<BlogDetailPage />} />
                <Route path="/reviews/:id" element={<ReviewPage />} />
            </Routes>
        </Router>
    );
}

export default App;
