import { useContext, useEffect } from "react";
import { PostsContext } from "../../contexts/posts";
import Section from "../section/section";
import "./posts-list.scss";

const PostsList = () => {
  const {posts, formType, setFormType, setActivePost, setPosts} = useContext(PostsContext);

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setPosts(data))
}, [setPosts]);

  const handleListClick = (evt) => {
    if (evt.target.matches("button")) {
      if (formType === "ADD") {
        setFormType("EDIT");
      }
      setActivePost(+evt.target.dataset.id);
    }
  };

  const handleAddClick = () => {
    setFormType("ADD");
  };

  return (
    <Section className="posts-list">
      <h2 className="posts-list__title">Posts list</h2>

      <button onClick={handleAddClick} className="posts-list__add">Add post</button>

      <ul onClick={handleListClick} className="posts-list__list">
        {
          posts.map((post) => (
            <li key={post.id} className="posts-list__list-item">
              <button data-id={post.id} className="posts-list__item-btn">{post.title}</button>
              <p className="post-list__item-body">{post.body}</p>
            </li>
          ))
        }
      </ul>
    </Section>
  );
};

export default PostsList;