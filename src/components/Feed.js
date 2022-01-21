import TweetBox from './TweetBox';
import Post from './Post';
import './Feed.css';
import { useEffect, useState } from 'react';
import db from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const querySnapshot = await getDocs(collection(db, 'posts'));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data());
      });
    }
    getPosts();
  }, []);

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      {posts.map((post) => (
        <Post {...post} />
      ))}
    </div>
  );
}

export default Feed;
