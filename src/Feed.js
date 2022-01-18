import TweetBox from './TweetBox';
import './Feed.css';

function Feed() {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* Tweet Box */}
      <TweetBox />
      {/* Posts */}
    </div>
  );
}

export default Feed;
