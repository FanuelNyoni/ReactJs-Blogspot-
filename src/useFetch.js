//creating our own custom hook

import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        //use set timeout to simulate delay of fetch
        setTimeout(() => {
            // using promises
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch Data from end point')
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false)
                    setError(null)
                })
                //error handling in case json server is down
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('Fetch Aborted')
                    } else {
                        setError(err.message)
                        setIsPending(false)
                    }
                });
        }, 1000)

        return () => abortCont.abort();

    }, [url]);

    return { data, isPending, error }
}

export default useFetch;