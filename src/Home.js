import BlogList from './BlogList';
import useFetch from './useFetch'; //tracks changes in variables


const Home = () => {

   /* const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlog(newBlogs)
    }*/

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return (
        //using asynchronous way of loading data
        <div className='Home'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" /*handleDelete={handleDelete}*/ />}
        </div>
    );
}

export default Home;