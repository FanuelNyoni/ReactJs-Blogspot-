import { useState } from "react";
import {useHistory} from 'react-router-dom'

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Shibaru Benihime');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author };

        setIsPending(true)

        //creating a post hook
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(blog)
        }) .then(() => {
            console.log('New Blog Added')
            setIsPending(false)
            history.push('/')
        })
    }

    return ( 
        <div className = 'create'>
            <h2>Add a new Blog</h2>
            <form onSubmit = {handleSubmit}>
                <label>Blog title</label>
                <input
                 type = 'text'
                 required
                 value = {title}
                 onChange = {(e) => setTitle(e.target.value)} />
                <label>Blog body</label>
                <textarea required
                 value = {body}
                 onChange = {(e) => setBody(e.target.value)}></textarea>
                <label>Blog Author</label>
                <select value = {author}
                 onChange = {(e) => setAuthor(e.target.value)}>
                    <option value = 'Shibaru Benihime'>Shibaru Benihime</option>
                    <option value = 'Hiasobi Benihime'>Hiasobi Benihime</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Add Blog ....</button>}
            </form>
        </div>
     );
}
 
export default Create;
