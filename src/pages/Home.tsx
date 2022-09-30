import macbookAfternoon from '../assets/images/macbook-afternoon.png'
import PostPreview from "../components/PostPreview";

function Home() {
  return (
    <>
      <PostPreview
        small={false}
        closed={true} 
        img={macbookAfternoon} 
        date='JULY 23, 2022' 
        title='My new journey as a bootcamp student.' 
        body="After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers."></PostPreview>
    </>
  )
}

export default Home
