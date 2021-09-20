import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions-old/postActions';
import { IndividualPost, PostContainer } from '../styling/post';

const mapStateToProps = (state) => {
  return state.posts;
}

const Post = (props) => {
 
  useEffect(() => {
    props.fetchPosts();
  },[])

  const clonedPosts = props.posts.slice().reverse();

  const mappedData = () => {
    
    if(clonedPosts.length) {
      return clonedPosts.map((data, index) => {
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