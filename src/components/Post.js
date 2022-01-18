import './Post.css';
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://m.media-amazon.com/images/M/MV5BMjA0Mzg5MTU3MV5BMl5BanBnXkFtZTgwOTUxMTQ5NzE@._V1_UY1200_CR635,0,630,1200_AL_.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Waleed
              <span className="post__headerSpecial">
                <VerifiedIcon className="post__badge" />
                @waleed
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Hello World i am building a twitter clone</p>
          </div>
        </div>
        <img
          src="https://media.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif"
          alt="Post"
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
