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
      const fetchedPosts = [];
      querySnapshot.forEach((doc) => {
        fetchedPosts.push(doc.data());
      });
      return fetchedPosts;
    }
    getPosts()
      .then((fetchedPosts) => setPosts(fetchedPosts))
      .catch(console.error);
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />

      {posts.length && posts.map((post, idx) => <Post key={idx} {...post} />)}
    </div>
  );
}

export default Feed;
