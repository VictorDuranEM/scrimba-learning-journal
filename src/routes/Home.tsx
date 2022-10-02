import styled from 'styled-components';
import postsData from '../assets/postsData'
import PostPreview from "../components/PostPreview";
import PostPreviewGroup from '../components/PostPreviewGroup';

const Container = styled.div `
  padding-inline: 1.5rem;
  
  & > :first-child > img{
    width: calc(100% + 3rem);
    max-width: unset;
    transform: translateX(-1.5rem);
  }
  
  @media (min-width: 650px) {
    padding-inline: 3rem;
  
    & > :first-child > img{
      width: calc(100% + 6rem);
      max-width: unset;
      transform: translateX(-3rem);
    }
  }
`

const Posts = styled.div `
  margin: 3rem 0 2rem;
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
        intro={postsData[0].intro} />
      <Posts>
        <PostPreviewGroup posts={postsData.filter((_, index) => index != 0)} />
      </Posts>
      <ViewMore>View More</ViewMore>
    </Container>
  )
}

export default Home
