import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import react, {useEffect, useState} from 'react';

function App() {

  //.............................................................................................. How to fetch API 
  const [post, setPost] = useState([]);

  const fetchAPI = async () => {
    const fetchedAPI = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => json)

    return fetchedAPI;
  }

  const getFetchedData = async () => {
    const fetchedData = await fetchAPI();
    setPost(fetchedData);
  }

  useEffect(() => {
    getFetchedData();
  })

//.............................................................................................. How to fetch API 

  const mappedData = () => {
    const test = post.map((data, index) => {
      return <h1 key={index}>{data.title}</h1>
    })

    return test;
  }
  

  return (
    <div className="App">
      <Post></Post>
      {mappedData()}
    </div>
  );
}

export default App;
