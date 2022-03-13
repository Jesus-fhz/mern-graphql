
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import moment from 'moment'

function PostCard ({post: { body, createdAt, id, username, likeCount, commentCount, likes}}){

    const likePost = () => {
        console.log('clicked');
    }

    const comment = () =>{
        console.log('clicked');
    }

    return (
        <Card fluid> 
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/molly.png'
          />
          <Card.Header> { username } </Card.Header>
          <Card.Meta as={ Link } to={`/posts/${id}`} >{ moment(createdAt).fromNow() }</Card.Meta>
          <Card.Description>
            {body}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Button as='div' labelPosition='right' onClick={likePost}>
            <Button color="blue" basic>
                <Icon name='heart'color="blue" />
            </Button>
                <Label as='a' basic color='blue' pointing='left'>
                    {likeCount}
                </Label>
        </Button>
        <Button as='div' labelPosition='right' onClick={comment}>
            <Button color="blue" basic>
                <Icon name='comments'color="blue" />
            </Button>
                <Label as='a' basic color='blue' pointing='left'>
                    {commentCount}
                </Label>
        </Button>
        </Card.Content>
      </Card>
    )

}

export default PostCard