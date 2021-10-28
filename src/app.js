import PostForm from "./components/post-form/post-form";
import PostsList from "./components/posts-list/posts-list";
import PostsProvider from "./contexts/posts";

function App() {
  return (
    <main className="main">
      <h1 className="main__title">Posts App</h1>

      <div className="main__container">
        <PostsProvider>
          <PostsList />

          <PostForm />
        </PostsProvider>
      </div>
    </main>
  );
}

export default App;
