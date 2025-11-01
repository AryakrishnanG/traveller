import BlogCard from '../components/BlogCard';
import { blogsData } from '../data/blogsData';

function BlogListPage() {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <h2>Exclusive Collection Of <span>Travel Blogs</span></h2>
                    <p>We offer you an exclusive search to gather, read and enjoy several travel blogs written by experts in their field. Now, you get the benefit of choosing the destination based on your reading and what attracts you a lot about a place.</p>
                </div>
            </section>

            <section className="container">
                <div className="blog-grid">
                    {blogsData.map(blog => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default BlogListPage;
