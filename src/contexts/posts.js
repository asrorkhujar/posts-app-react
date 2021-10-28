import { createContext, useState } from "react";

export const PostsContext = createContext();

const PostsProvider = ({children}) => {
  const [posts, setPosts] = useState([]);
  const [formType, setFormType] = useState("ADD");
  const [activePost, setActivePost] = useState();
  const [postName, setPostName] = useState("");
  const [postDesc, setPostDesc] = useState("");

  return (
    <PostsContext.Provider value={{
      posts,
      setPosts,
      formType,
      setFormType,
      activePost,
      setActivePost,
      postName,
      setPostName,
      postDesc,
      setPostDesc
    }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;