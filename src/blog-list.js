import { useState } from "react";

const BlogList = ({blogs, title}) => { 

    return (
        <div className='blog-list'>
            <p>{title}</p>
            {blogs.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;