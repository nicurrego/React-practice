import { useState, useEffect } from "react";    

const SearchPosts = () => {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setAllPosts(data);
      });
  }, []);

  useEffect(() => {
    setPosts(
      allPosts.filter(post =>
        post.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, allPosts]);

  return (
    <div>
      <h2>Lista de usuarios</h2>
      <input 
        placeholder="Buscar por título" 
        value={query} 
        onChange={(event) => setQuery(event.target.value)} 
      />
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPosts;
