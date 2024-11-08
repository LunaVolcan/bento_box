import './App.css';
import faces from './assets/illustration-audience-growth.webp';
import tips from './assets/illustration-ai-content.webp';
import calendar from './assets/illustration-consistent-schedule.webp';
import post from './assets/illustration-create-post.webp';
import stars from './assets/illustration-five-stars.webp';
import grow from './assets/illustration-grow-followers.webp';
import platforms from './assets/illustration-multiple-platforms.webp';
import schedule from './assets/illustration-schedule-posts.webp';

function App() {
  return (
    <div className="bento-box">
      <div className="grid">
        <div className="item1">
          <h1><span className="sm">Social Media</span> <span className="ten">10x</span> <i>Faster </i>with AI</h1>
          <img src={stars} alt="" />
          <p>Over 4,000 5-star reviews</p>
        </div>
        <div className="item2">
        <div className="igx">
          <img src={platforms} alt="" />
          </div>
          <h2> <span className="manage">Manage</span> <span className="multi">multiple</span> accounts and platforms.</h2>
        </div>
        <div className="item3">
          <h2>Maintain a consistent <br /> <span className="po">posting</span> schedule.</h2>
          <img src={calendar} alt="" />
        </div>
        <div className="item4">
          <h2>Schedule to social media.</h2>
          <img src={schedule} alt="" />
          <p>Optimize post timings to publish <span className="cont">content</span>  at the perfect time for  your audience.</p>
        </div>
        <div className="item5">
          <img src={grow} alt="" />
          <h1>Grow <span className="with">followers</span> with non-stop <br /> content.</h1>
        </div>
        <div className="item6">
          <div className="growth">
          <h1>{">"}56%</h1>
          <h3>faster audience growth</h3>
          </div>
          <img src={faces} alt="" />
        </div>
        <div className="item7">
          <h1>Create <span className="and">and </span>schedule content <span className="quick"> <i>quicker.</i></span></h1>
          <img src={post} alt="" />
        </div>
        <div className="item8">
          <h1>Write <span className="con">your</span> content using AI.</h1>
          <img src={tips} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;