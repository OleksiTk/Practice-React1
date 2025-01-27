import { useState } from "react";
import Mybutton from "./UI/button/Mybutton.jsx";
import MyInput from "./UI/input/MyInput.jsx";

const PostForm = function ({ creat }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // const bodyinputRef = useRef(""); // це типу на пряму використовуються в дом але не рекомендують
  const addNewPost = (event) => {
    event.preventDefault();
    const obj1 = {
      id: Date.now(),
      title: title,
      body: body,
    };
    creat(obj1);
    console.log(obj1);
    setTitle("");
    setBody("");
    // console.log(bodyinputRef.current.value);
  };
  return (
    <div className="wrapper">
      <form action="">
        <MyInput
          value={title}
          value2={body}
          onChange={(e) => setTitle(e.target.value)}
          onChange2={(e) => setBody(e.target.value)}
        />
        <Mybutton onClick={addNewPost}>Створити пост</Mybutton>
      </form>
    </div>
  );
};

export default PostForm;
