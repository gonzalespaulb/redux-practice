import React from 'react';
// import { connect } from 'react-redux';
// import { fetchPosts } from '../actions-old/postActions';
import { IndividualPost, PostContainer } from '../styling/post';
import { useSelector } from 'react-redux';

// const mapStateToProps = (state) => { 
//   return state.posts;
// }

const Post = (props) => {

  const fetchedPosts = useSelector((state) => state.posts.list);
 
  // useEffect(() => {
  //   props.fetchPosts();
  // }, [])

  const clonedPosts = fetchedPosts.slice().reverse();

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

// export default connect(mapStateToProps, { fetchPosts })(Post);
export default Post;