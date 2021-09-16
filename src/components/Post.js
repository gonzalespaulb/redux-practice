import react, {useEffect, useState} from 'react';
import styled from "styled-components";

const IndividualPost = styled.div`
  width: 60%;
  background-color: #f0f0f0;
  text-align: start;
  margin-bottom: 10px;
  padding: 10px;
`;

const PostContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Post = () => {
  const [post, setPost] = useState([]);

  const fetchAPI = async () => {
    const fetchedAPI = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => json);

    return fetchedAPI;
  };

  const getFetchedData = async () => {
    const fetchedData = await fetchAPI();
    setPost(fetchedData);
  };

  useEffect(() => {
    getFetchedData();
  });

  const mappedData = () => {
    const posts = post.map((data, index) => {
      return (
        <IndividualPost key={index}>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </IndividualPost>
      )
    })

    return posts;
  }

  return (
    <PostContainer>
        {mappedData()}
    </PostContainer>
  );
};

export default Post;
