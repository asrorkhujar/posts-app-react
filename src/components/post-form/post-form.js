import "./post-form.scss";
import Section from "../section/section";
import { useContext, useEffect, useState } from "react";
import { PostsContext } from "../../contexts/posts";

const PostForm = () => {
  const values = useContext(PostsContext);
  const {formType: type, activePost, posts, postName, setPostName, postDesc, setPostDesc} = values;

  useEffect(() => {
    if (type === "EDIT") {
      const activePostObj = posts.find((post) => post.id === activePost);
      setPostName(activePostObj.title);
      setPostDesc(activePostObj.body);
    } else if (type === "ADD") {
      setPostName("");
      setPostDesc("");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePost, type]);

  const handleInputChange = (evt) => setPostName(evt.target.value);
  const handleInputTextarea = (evt) => setPostDesc(evt.target.value);

  return (
    <Section className="post-form">
      <h2>{type === "ADD" ? "Add post" : ("Edit post - #" + activePost)}</h2>
      <form className="post-form__form" onClick={(e) => e.target.preventDefault}>
        <input value={postName} onChange={handleInputChange} placeholder="Post name" className="post-form__input" type="text" />
        <textarea value={postDesc} onChange={handleInputTextarea} className="post-form__input-textarea" name="textarea" id="textarea" cols="" rows="30" minLength="10" placeholder="Description"></textarea>
        <button className="post-form__submit-btn">
          {
            type === "ADD"
            ? "Add"
            : "Edit"
          }
        </button>
      </form>
    </Section>
  );
};

export default PostForm;