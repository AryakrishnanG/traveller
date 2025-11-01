import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogsData } from '../data/blogsData';

function ReviewPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const blog = blogsData.find(b => b.id === parseInt(id));

    const [reviews, setReviews] = useState([
        { id: 1, author: "Priya Sharma", rating: 5, text: "Amazing destination! Had a wonderful time.", comments: [{ author: "Admin", text: "Thank you for sharing!" }] },
        { id: 2, author: "Rahul Kumar", rating: 4, text: "Great experience overall, highly recommend.", comments: [] }
    ]);

    const [formData, setFormData] = useState({ author: "", rating: 0, text: "" });
    const [editingId, setEditingId] = useState(null);
    const [hoverRating, setHoverRating] = useState(0);
    const [commentTexts, setCommentTexts] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.author || !formData.text || formData.rating === 0) {
            alert("Please fill all fields and select a rating");
            return;
        }

        if (editingId) {
            setReviews(reviews.map(r => r.id === editingId ? { ...r, ...formData } : r));
            setEditingId(null);
        } else {
            setReviews([...reviews, { ...formData, id: Date.now(), comments: [] }]);
        }

        setFormData({ author: "", rating: 0, text: "" });
    };

    const handleEdit = (review) => {
        setFormData({ author: review.author, rating: review.rating, text: review.text });
        setEditingId(review.id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this review?")) {
            setReviews(reviews.filter(r => r.id !== id));
        }
    };

    const handleAddComment = (reviewId) => {
        const commentText = commentTexts[reviewId];
        if (!commentText || !commentText.trim()) return;

        setReviews(reviews.map(r => {
            if (r.id === reviewId) {
                return {
                    ...r,
                    comments: [...r.comments, { author: "Anonymous", text: commentText }]
                };
            }
            return r;
        }));

        setCommentTexts({ ...commentTexts, [reviewId]: "" });
    };

    if (!blog) {
        return <div className="container"><h2>Blog not found</h2></div>;
    }

    return (
        <div className="review-page">
            <div className="review-header">
                <h1>Reviews for: {blog.title}</h1>
                <button className="btn-back" onClick={() => navigate(`/blog/${id}`)}>
                    ← Back to Blog
                </button>
            </div>

            <div className="review-form">
                <h2>{editingId ? "Edit Review" : "Add Your Review"}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Your Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={formData.author}
                            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="form-group">
                        <label>Rating</label>
                        <div className="rating-input">
                            {[1, 2, 3, 4, 5].map(star => (
                                <span 
                                    key={star}
                                    className={`star ${star <= (hoverRating || formData.rating) ? 'active' : ''}`}
                                    onClick={() => setFormData({ ...formData, rating: star })}
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(0)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Your Review</label>
                        <textarea 
                            className="form-control" 
                            value={formData.text}
                            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                            placeholder="Share your experience..."
                        />
                    </div>

                    <button type="submit" className="btn-primary">
                        {editingId ? "Update Review" : "Submit Review"}
                    </button>
                    {editingId && (
                        <button 
                            type="button" 
                            className="btn-back" 
                            style={{ marginLeft: '1rem' }}
                            onClick={() => {
                                setEditingId(null);
                                setFormData({ author: "", rating: 0, text: "" });
                            }}
                        >
                            Cancel
                        </button>
                    )}
                </form>
            </div>

            <div className="reviews-list">
                <h2>All Reviews ({reviews.length})</h2>
                {reviews.map(review => (
                    <div key={review.id} className="review-item">
                        <div className="review-item-header">
                            <div>
                                <div className="review-author">{review.author}</div>
                                <div className="review-rating">
                                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                                </div>
                            </div>
                            <div className="review-actions">
                                <button className="btn-edit" onClick={() => handleEdit(review)}>
                                    ✏️ Edit
                                </button>
                                <button className="btn-delete" onClick={() => handleDelete(review.id)}>
                                    🗑️ Delete
                                </button>
                            </div>
                        </div>
                        <p className="review-text">{review.text}</p>

                        <div className="comment-section">
                            <h4>Comments ({review.comments.length})</h4>
                            <div className="comment-input-group">
                                <input 
                                    type="text" 
                                    className="comment-input"
                                    placeholder="Add a comment..."
                                    value={commentTexts[review.id] || ""}
                                    onChange={(e) => setCommentTexts({ ...commentTexts, [review.id]: e.target.value })}
                                />
                                <button 
                                    className="btn-comment"
                                    onClick={() => handleAddComment(review.id)}
                                >
                                    Comment
                                </button>
                            </div>

                            <div className="comment-list">
                                {review.comments.map((comment, idx) => (
                                    <div key={idx} className="comment-item">
                                        <div className="comment-author">{comment.author}</div>
                                        <div className="comment-text">{comment.text}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReviewPage;
