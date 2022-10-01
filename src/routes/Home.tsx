import styled from 'styled-components';
import postsData from '../assets/postsData'
import PostPreview from "../components/PostPreview";

const Container = styled.div `
  
`

const Posts = styled.div `
  margin: 3em 2em 2em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(309px, 1fr));
  justify-content: space-around;
  justify-items: center;
  column-gap: 1.5em;
  row-gap: 2.5em;
`

const ViewMore = styled.button `
  display: block;
  margin: 0 auto;
  font-size: var(--fs-14);
  font-weight: 700;
  background: transparent;
  border: none;
  text-decoration: underline;
  margin-bottom: 3em;
`

const posts = postsData.filter((_, index) => index != 0).map(post => {
  return <PostPreview 
            key={post.uuid}
            uuid={post.uuid}
            small={true} 
            closed={false} 
            img={post.image}
            date={post.date}
            title={post.title}
            body={post.body} />
})

function Home() {
  return (
    <Container>
      <PostPreview
        small={false}
        closed={true} 
        uuid={postsData[0].uuid}
        img={postsData[0].image}
        date={postsData[0].date}
        title={postsData[0].title}
        body={postsData[0].body} />
      <Posts>
        {posts}
      </Posts>
      <ViewMore>View More</ViewMore>
    </Container>
  )
}

export default Home
