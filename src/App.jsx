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
      <div className="quicker">
        <h1>Create and schedule content 2 quicker</h1>
        <img src={post} alt="" />
      </div>
      <div className="bento-box">
        <div className="ai">
          <h1>Social Media 10x Faster with AI</h1>
          <img src={stars} alt="" />
          <p>Over 4,000 5-star reviews</p>
        </div>
        <div className="social-media">
          <h2>Schedule to social media.</h2>
          <img src={schedule} alt="" />
          <p>Optimize post timings to publish content at the perfect time for your audience.</p>
        </div>
        <div className="content">
          <h1>Write your content using AI.</h1>
          <img src={tips} alt="" />
        </div>
        <div className="accounts">
          <img src={platforms} alt="" />
          <h2>Manage multiple accounts and platforms.</h2>
        </div>
        <div className="posting">
          <h2>Maintain a consistent posting schedule.</h2>
          <img src={calendar} alt="" />
        </div>
        <div className="percent">
          <h1>56%</h1>
          <img src={faces} alt="" />
        </div>
        <div className="followers">
          <img src={grow} alt="" />
          <h1>Grow followers with non-stop content.</h1>
        </div>


      </div>







    </>
  )
}

export default App
