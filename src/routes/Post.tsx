import styled from 'styled-components'
import { useLoaderData } from "react-router-dom"
import PostPreview from '../components/PostPreview'
import PostSection from '../components/PostSection'
import posts, { PostData } from '../assets/postsData'
import PostPreviewGroup from '../components/PostPreviewGroup'

const Container = styled.div `
  @media (min-width: 650px) {
    background: #FAFAFA;
  }
`

const Body = styled.div `
  padding: 2rem 1.5rem;

  @media (min-width: 650px) {
    background: #FAFAFA;
    padding: 2.5rem 7.5rem;
    
    img {
      position: relative;
      width: calc(100% + 9rem);
      max-width: unset;
      transform: translateX(-4.5rem);
    }
  }
`

const PostSections = styled.div `
  margin-top: 2rem;
`

const RecentPostsTitle = styled.p `
  font-weight: 700;
  color: black;
  text-align: center;
  
  @media (min-width: 650px) {
    font-size: var(--fs-24);
    margin-top: 1.5rem;
  }
`

const RecentPosts = styled.div `
  margin-top: 2rem;
  padding: 0 1.5rem 3rem;
  
  @media (min-width: 650px) {
    padding-inline: 3rem;
  }
`

function Post() {
  const postLoaded = useLoaderData() as PostData
  return (
    <Container>
      <Body>
        <PostPreview
          small={false} 
          closed={false} 
          uuid={postLoaded.uuid}
          img={postLoaded.image} 
          date={postLoaded.date} 
          title={postLoaded.title} 
          intro={postLoaded.intro} />
        <PostSections>
          {postLoaded.content.map(content => 
            <PostSection 
              title={content.title}
              paragraphs={content.paragraphs}
            />
          )}
        </PostSections>  
      </Body>
      <RecentPostsTitle>Recent posts</RecentPostsTitle>
      <RecentPosts>
        <PostPreviewGroup posts={posts.filter(post => post.uuid != postLoaded.uuid).slice(0, 3)} />
      </RecentPosts>
    </Container>
  )
}

export default Post
