import './TweetBox.css';
import { Avatar, Button } from '@mui/material';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from '../firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        displayName: 'Waleed Abdullah',
        username: 'waleed',
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar:
          'https://m.media-amazon.com/images/M/MV5BMjA0Mzg5MTU3MV5BMl5BanBnXkFtZTgwOTUxMTQ5NzE@._V1_UY1200_CR635,0,630,1200_AL_.jpg',
      });
      console.log('Document written with ID: ', docRef.id);

      setTweetImage('');
      setTweetMessage('');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://m.media-amazon.com/images/M/MV5BMjA0Mzg5MTU3MV5BMl5BanBnXkFtZTgwOTUxMTQ5NzE@._V1_UY1200_CR635,0,630,1200_AL_.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
