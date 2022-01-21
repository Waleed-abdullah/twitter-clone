import './Widgets.css';
import './Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgetes__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={'1480602367691309061'} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Meta"
          options={{ height: 400 }}
        />

        <TwitterShareButton options={{ text: 'Hello World', via: 'Waleed' }} />
      </div>
    </div>
  );
}

export default Widgets;
