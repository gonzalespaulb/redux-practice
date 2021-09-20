import react, { useEffect, useState } from 'react';
import styled from "styled-components";
import { connect } from 'react-redux';
import { fetchPosts } from '../actions-old/postActions';

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
`;

const mapStateToProps = (state) => {
  return state.posts;
}

const Post = (props) => {

  useEffect(() => {
    props.fetchPosts();
  },[])


  const mappedData = () => {
    
    if(props.posts.length) {
      return props.posts.map((data, index) => {
        return (
          <IndividualPost key={index}>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
          </IndividualPost>
        )
      })
    } else {return null}


  }

  return (
    <PostContainer>
        {mappedData()}
    </PostContainer>
  );
};

export default connect(mapStateToProps, { fetchPosts })(Post);