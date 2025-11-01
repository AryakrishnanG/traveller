import { useParams, useNavigate } from 'react-router-dom';
import { blogsData } from '../data/blogsData';

function BlogDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const blog = blogsData.find(b => b.id === parseInt(id));

    if (!blog) {
        return (
            <div className="container">
                <h2>Blog not found</h2>
                <button className="btn-back" onClick={() => navigate('/')}>
                    ← Back to Blogs
                </button>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="blog-detail">
                <img src={blog.image} alt={blog.title} className="blog-detail-image" />
                <h1 className="blog-detail-title">{blog.title}</h1>
                <div className="blog-meta">
                    <span>👁️ {blog.views}</span>
                    <span>📅 {blog.date}</span>
                </div>
                <div className="blog-detail-content">
                    <p>{blog.content}</p>
                </div>
                <div className="action-buttons">
                    <button className="btn-back" onClick={() => navigate('/')}>
                        ← Back to Blogs
                    </button>
                    <button className="btn-review" onClick={() => navigate(`/reviews/${blog.id}`)}>
                        Add Review ⭐
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BlogDetailPage;
