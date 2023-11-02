import OnePost from '../OnePost/OnePost';
import { Post as TPost } from '../../@types/post';
import './Posts.scss';

type PostsProps = {
  posts: TPost[];
  setZenMode: boolean;
};

function Posts({ posts, setZenMode }: PostsProps) {
  return (
    <main className="posts">
      <h1 className="posts-title">Dev Of Thrones</h1>
      <div className="posts-list">
        {posts.map((post) => (
          <OnePost zenMode={setZenMode} key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}

export default Posts;
