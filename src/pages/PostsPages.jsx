import { useEffect, useRef, useState } from "react";

import Posts from "../components/Posts.jsx";
import PostForm from "../components/PostForm.jsx";
import MySelect from "../components/UI/select/MySelect.jsx";
import { use } from "react";
import axios from "axios";
import PostService from "../API/PostsServers.js";
import { getPageCount, getPagesArray } from "../utils/page.js";
import Mybutton from "../components/UI/button/Mybutton.jsx";
function PostsPages() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "wdwadawadwamining" },
    { id: 2, title: "Python", body: "ifeFE" },
    { id: 3, title: "C++", body: "bnmtnp" },
  ]);
  const creatPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const [selectedSort, setSortSelect] = useState("");
  const [totalPages, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  // let pageArray = getPagesArray(totalPages);

  const removePosts = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const sortPosts = (sort) => {
    setSortSelect(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  async function fetchPosts() {
    const response = await PostService.getAll();
    setPosts(response);
    // const totalCount = response.headers["x-total-count"];
    // setTotalCount(getPageCount(totalCount, limit));
  }
  useEffect(() => {
    fetchPosts();
  }, []);
  // const [count, setCount] = useState(0);
  // const [value, setValue] = useState("текст в імпуті");

  // function Incherement() {
  //   setCount(count + 1);
  // }
  // function Dechrement() {
  //   setCount(count - 1);
  // }
  // function Rest() {
  //   setCount(0); // Просто передаємо 0 як нове значення
  // }
  // function WorkWithinput(event) {
  //   setValue(event.target.value);
  // }
  return (
    // <div>
    //   <h1>{count}</h1>
    //   <button onClick={Incherement}>Incherement</button>;
    //   <button onClick={Dechrement}> Dechrement</button>;
    //   <button onClick={Rest}>Rest</button>;<h1>{value}</h1>
    //   <input type="text" value={value} onChange={WorkWithinput} />
    // </div>

    <div>
      {/* <input type="text" ref={bodyinputRef} />  краще не юзати реф  але цей компоменнет не коравиний*/}
      <button onClick={fetchPosts}>Нажми</button>
      <PostForm creat={creatPost} />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        options={[
          { value: "title", name: "По назві" },
          { value: "body", name: "По опису" },
        ]}
        defaultValue="сортування "
      />
      <Posts remove={removePosts} posts={posts} title="Список постов 1" />
      {/* {pageArray.map((p) => (
        <Mybutton>{p}</Mybutton>
      ))} */}
    </div>
  );
}

export default PostsPages;
