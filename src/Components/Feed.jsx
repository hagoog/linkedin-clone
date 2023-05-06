import React, { useState } from "react";
import "../Layouts/Feed.css";
import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@mui/icons-material";
import InputOption from "./InputOption";
import Post from "./Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <main className="feed">
      <div className="feed-inputcontainer">
        <div className="feed-input">
          <Create />
          <form>
            <input type="text"></input>
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed-inputoptions">
          <InputOption Icon={Image} title="Photo" color="#70B5f9" />
          <InputOption Icon={Subscriptions} title="video" color="#70B5f9" />
          <InputOption Icon={EventNote} title="Event" color="#70B5f9" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write Article"
            color="#70B5f9"
          />
        </div>
      </div>
      {posts.map((post) => {
        <Post />;
      })}
      <Post
        name="Ahmed Magdy"
        description="This is a test"
        message="hello linkedin"
      />
    </main>
  );
};

export default Feed;
