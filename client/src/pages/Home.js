import { useQuery, useEffect } from "@apollo/client";
import { gql } from "graphql-tag";
import { Grid } from 'semantic-ui-react'
import  PostCard  from '../components/PostCard'

function Home() {
  const {loading, data } = useQuery( FETCH_POST_QUERY)
 
  return (
    <Grid columns={3} >
        <Grid.Row>
            <Grid.Column>
            <h1> Recent Posts </h1>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            {
                loading 
                ? 
                 <h1>Loading ... </h1> 
                :
                data.getPosts && data.getPosts.map((el, index) => (
                <>  
                    <Grid.Column key={index}>
                        <PostCard  post={el}/>
                    </Grid.Column>
                </>
                ))
             }
        </Grid.Row>
    </Grid>
  );
}

const FETCH_POST_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      commentCount
      likes {
        username
      }
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;
export default Home;
