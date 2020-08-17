import React, { useState, useEffect } from 'react';

function DataFetching() {
  // const [post, setPost] = useState([])
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromBtn, setIdFromBtn] = useState(0);

  const handleClick = () => {
    setIdFromBtn(id);
  };

  useEffect(() => {
    axios.get('Endpoint Url' + idFromBtn)
      .then(res => {
        console.log(res);
        setPost(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    return () => {
      cleanup;
    };
  }, [idFromBtn]);
  return (
    <div>
      <input type='text' onClick={handleClick} value={id} onChange={e => setId(e.target.value)} />
      <button type='button'>Fetch Post</button>
      {/* <ul>
        {
          post.map(post=>(
            <li key={post.id}>{post.title}</li>
          ))
        }
      </ul> */}
    </div>
  );
}

export default DataFetching;
