import styled from 'styled-components'
import { useLoaderData } from "react-router-dom"
import PostPreview from '../components/PostPreview'
import { PostData } from '../assets/postsData'

const Container = styled.div `
`

function Post() {
  const post = useLoaderData() as PostData
  return (
    <Container>
      <PostPreview
        small={false} 
        closed={false} 
        uuid={post.uuid}
        img={post.image} 
        date={post.date} 
        title={post.title} 
        body={post.body} />
    </Container>
  )
}

export default Post