import './App.css'
import faces from './assets/illustration-audience-growth.webp'
import tips from './assets/illustration-ai-content.webp'
import calendar from './assets/illustration-consistent-schedule.webp'
import post from './assets/illustration-create-post.webp'
import stars from './assets/illustration-five-stars.webp'
import grow from './assets/illustration-grow-followers.webp'
import platforms from './assets/illustration-multiple-platforms.webp'
import schedule from './assets/illustration-schedule-posts.webp'


function App() {


  return (
    <>
     <div className="bento-box">
       <div className="item1">
          <h1>Social Media<br></br><span className="ten">10x</span> <i>Faster </i>with<br></br> AI</h1>
          <img src={stars} alt="" />
          <p>Over 4,000 5-star reviews</p>
        </div>
        <div className="item2">
          <img src={platforms} alt="" />
          <h2>Manage multiple accounts<br></br> and platforms.</h2>
        </div>
         <div className="item3">
          <h2>Maintain a consistent <br></br>posting schedule.</h2>
          <img src={calendar} alt="" />
        </div>
        <div className="item4">
          <h2>Schedule to social media.</h2>
          <img src={schedule} alt="" />
          <p>Optimize post timings to publish content at the perfect time for your audience.</p>
        </div>
        <div className="item5">
          <img src={grow} alt="" />
          <h1>Grow followers with non-stop content.</h1>
        </div>
        <div className="item6">
          <h1>{">"}56%</h1>
          <h3>faster audience growth</h3>
          <img src={faces} alt="" />
        </div>
        <div className="item7">
        <h1>Create and schedule content <div className="quick"><i>quicker</i></div></h1>
        <img src={post} alt="" />
      </div>
        <div className="item8">
          <h1>Write your content using AI.</h1>
          <img src={tips} alt="" />
        </div>
      </div>







    </>
  )
}

export default App
