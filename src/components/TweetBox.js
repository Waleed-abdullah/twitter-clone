import './TweetBox.css';
import { Avatar, Button } from '@mui/material';

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://m.media-amazon.com/images/M/MV5BMjA0Mzg5MTU3MV5BMl5BanBnXkFtZTgwOTUxMTQ5NzE@._V1_UY1200_CR635,0,630,1200_AL_.jpg" />
          <input placeholder="What's happening?" type="text" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
