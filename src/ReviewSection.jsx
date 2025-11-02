import { useState } from 'react';
import './ReviewSection.css';
import Navbar from '../../src/Navbar';


function ReviewSection({ blogId, blogTitle }) {
    // State management
    const [reviews, setReviews] = useState([
        { 
            id: 1, 
            author: "Priya Sharma", 
            rating: 5, 
            text: "Amazing destination! Had a wonderful time.", 
            comments: [] 
        },
        { 
            id: 2, 
            author: "Rahul Kumar", 
            rating: 4, 
            text: "Great experience overall, highly recommend.", 
            comments: [] 
        }
    ]);

    const [formData, setFormData] = useState({ 
        author: "", 
        rating: 0, 
        text: "" 
    });

    const [editingId, setEditingId] = useState(null);
    const [hoverRating, setHoverRating] = useState(0);
    const [commentTexts, setCommentTexts] = useState({});

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.author || !formData.text || formData.rating === 0) {
            alert("Please fill all fields and select a rating");
            return;
        }

        if (editingId) {
            // Update existing review
            setReviews(reviews.map(r => 
                r.id === editingId 
                    ? { ...r, author: formData.author, rating: formData.rating, text: formData.text } 
                    : r
            ));
            setEditingId(null);
        } else {
            // Add new review
            setReviews([...reviews, { 
                id: Date.now(), 
                author: formData.author,
                rating: formData.rating,
                text: formData.text,
                comments: [] 
            }]);
        }

        // Reset form
        setFormData({ author: "", rating: 0, text: "" });
    };

    // Edit review
    const handleEdit = (review) => {
        setFormData({ 
            author: review.author, 
            rating: review.rating, 
            text: review.text 
        });
        setEditingId(review.id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Delete review
    const handleDelete = (reviewId) => {
        if (window.confirm("Are you sure you want to delete this review?")) {
            setReviews(reviews.filter(r => r.id !== reviewId));
        }
    };

    // Add comment to review
    const handleAddComment = (reviewId) => {
        const commentText = commentTexts[reviewId];
        if (!commentText || !commentText.trim()) return;

        setReviews(reviews.map(r => {
            if (r.id === reviewId) {
                return {
                    ...r,
                    comments: [...r.comments, { 
                        author: "Anonymous", 
                        text: commentText 
                    }]
                };
            }
            return r;
        }));

        setCommentTexts({ ...commentTexts, [reviewId]: "" });
    };

    return (

        <div className="review-section">
            <div className="review-header">
                <h1>REVIEWS: {blogTitle}</h1>
            </div>

            {/* Review Form */}
            <div className="review-form">
                <h2>{editingId ? "Edit Review" : "Add Your Review"}</h2>
                <form onSubmit={handleSubmit}>
                    {/* Name Input */}
                    <div className="form-group">
                        <label>Your Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={formData.author}
                            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    {/* Star Rating */}
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

                    {/* Review Text */}
                    <div className="form-group">
                        <label>Your Review</label>
                        <textarea 
                            className="form-control" 
                            value={formData.text}
                            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                            placeholder="Share your experience..."
                            rows="5"
                            required
                        />
                    </div>

                    {/* Submit Buttons */}
                    <div className="form-buttons">
                        <button type="submit" className="btn-submit">
                            {editingId ? "Update Review" : "Submit Review"}
                        </button>
                        {editingId && (
                            <button 
                                type="button" 
                                className="btn-cancel"
                                onClick={() => {
                                    setEditingId(null);
                                    setFormData({ author: "", rating: 0, text: "" });
                                }}
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </div>

            {/* Reviews List */}
            <div className="reviews-list">
                <h2>All Reviews ({reviews.length})</h2>
                {reviews.length === 0 ? (
                    <p className="no-reviews">No reviews yet. Be the first to review!</p>
                ) : (
                    reviews.map(review => (
                        <div key={review.id} className="review-item">
                            {/* Review Header */}
                            <div className="review-item-header">
                                <div>
                                    <div className="review-author">{review.author}</div>
                                    <div className="review-rating">
                                        {'★'.repeat(review.rating)}
                                        {'☆'.repeat(5 - review.rating)}
                                    </div>
                                </div>
                                <div className="review-actions">
                                    <button 
                                        className="btn-edit" 
                                        onClick={() => handleEdit(review)}
                                    >
                                        ✏️ Edit
                                    </button>
                                    <button 
                                        className="btn-delete" 
                                        onClick={() => handleDelete(review.id)}
                                    >
                                        🗑️ Delete
                                    </button>
                                </div>
                            </div>

                            {/* Review Text */}
                            <p className="review-text">{review.text}</p>

                            {/* Comment Section */}
                            <div className="comment-section">
                                <h4>Comments ({review.comments.length})</h4>
                                
                                {/* Add Comment Input */}
                                <div className="comment-input-group">
                                    <input 
                                        type="text" 
                                        className="comment-input"
                                        placeholder="Add a comment..."
                                        value={commentTexts[review.id] || ""}
                                        onChange={(e) => setCommentTexts({ 
                                            ...commentTexts, 
                                            [review.id]: e.target.value 
                                        })}
                                    />
                                    <button 
                                        className="btn-comment"
                                        onClick={() => handleAddComment(review.id)}
                                    >
                                        Comment
                                    </button>
                                </div>

                                {/* Display Comments */}
                                <div className="comment-list">
                                    {review.comments.map((comment, idx) => (
                                        <div key={idx} className="comment-item">
                                            <div className="comment-author">
                                                {comment.author}
                                            </div>
                                            <div className="comment-text">
                                                {comment.text}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default ReviewSection;