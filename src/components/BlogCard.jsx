import { useNavigate } from 'react-router-dom';

function BlogCard({ blog }) {
    const navigate = useNavigate();

    return (
        <div className="blog-card" onClick={() => navigate(`/blog/${blog.id}`)}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
                <div className="blog-meta">
                    <span>👁️ {blog.views}</span>
                    <span>📅 {blog.date}</span>
                </div>
                <h3 className="blog-title">{blog.title}</h3>
                <button className="btn-secondary" onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/blog/${blog.id}`);
                }}>
                    Read More
                </button>
            </div>
        </div>
    );
}

export default BlogCard;
