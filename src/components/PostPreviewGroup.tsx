import styled from "styled-components"
import { PostData } from "../assets/postsData"
import PostPreview from "./PostPreview"

const Container = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(309px, 1fr));
  justify-content: space-around;
  justify-items: center;
  align-items: start;
  column-gap: 1.5rem;
  row-gap: 2.5rem;
`
interface PostPreviewGroupProps {
  posts: PostData[]
}

function PostPreviewGroup(props : PostPreviewGroupProps) {
  
  const posts = props.posts.map(post => {
    return <PostPreview 
              key={post.uuid}
              uuid={post.uuid}
              small={true} 
              closed={false} 
              img={post.image}
              date={post.date}
              title={post.title}
              intro={post.intro} />
  })
  
  return (
    <Container>
      {posts}
    </Container>
  )
}

export default PostPreviewGroup
