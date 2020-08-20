import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.css';
/*import App from './App';*/
function Reddit() {
  const [posts, setPosts] = useState([]);
  
  React.useEffect(() => {
  axios.get(`https://www.reddit.com/r/reactjs.json`)
    .then(res => {
      const newPosts = res.data.data.children
        .map(obj => obj.data);

      setPosts(newPosts);
    });
}, []);

  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
  return (
    <div>
      <h1>/r/reactjs</h1>
	  <ul>
        {posts.map(post => (
		  <div key={post.id}>
          <li>
		  <a href={post.url} onClick={handleClick}>
		  {post.title}
		  </a>
		  </li>
		  
		  <li>{post.score}</li>
		  <li>{post.author_fullname}</li>
		  <br/>
		  </div>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<Reddit />, document.getElementById("root"));