import { Link } from "react-router-dom";

const BlogList = ({ blogs}) => {

    return (
        <div className='blog-list'>
            <p>{title}</p>
            {blogs.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <Link to={`/blogs/${blog.author}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;