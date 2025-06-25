import React, { useState } from "react";
import First from "./components/First";
import Heelo1 from "./components/conditional/Heelo1";
import Heelo2 from "./components/conditional/Heelo2";
import comment from "./api/comment.json";
import ProfileCard from "../Profile/ProfileCard";

const App = () => {
  const name = "Dodo";
  const age = 20;
  const isMarried = false;

  const person = {
    name: "Dodo",
    age: 20,
    isMarried: false,
  };

  const [showFirst, setShowFirst] = useState(true);
  const [search, setSearch] = useState("");

  const handleClick = () => {
    setShowFirst(!showFirst);
  };

  // 🔍 Filter comments by search term (fullName or body)
  const filteredComments = comment.comments.filter((c) =>
    c.user.fullName.toLowerCase().includes(search.toLowerCase()) ||
    c.body.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <ProfileCard />

      <button onClick={handleClick}>Change me</button>
      {showFirst ? <Heelo1 /> : <Heelo2 />}

      <div className="h-screen w-screen flex items-center justify-center bg-blue-500 text-white text-2xl">
        Hello
        <First nameo={name} person={person} />
      </div>

      {/* 🔍 Search Comments */}
      <div className="p-4 bg-white text-black">
        <h1 className="text-xl font-semibold mb-2">Search Comments</h1>
        <input
          type="text"
          placeholder="Search by name or comment..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 w-full max-w-md mb-4"
        />

        {filteredComments.length > 0 ? (
          filteredComments.map((c) => (
            <div key={c.id} className="mb-2 p-2 border-b">
              <h2 className="font-bold">{c.user.fullName}</h2>
              <p>{c.body}</p>
            </div>
          ))
        ) : (
          <p>No matching comments found.</p>
        )}
      </div>

      {/* 🎯 Filter by postId > 111 */}
      <div className="p-4 bg-white text-black">
        <h1 className="text-xl font-semibold">Post ID &gt 111</h1>
        {comment.comments
          .filter((c) => c.postId > 111)
          .map((c) => (
            <div key={c.id} className="mb-2 p-2 border-b">
              <h2 className="font-bold">Post ID: {c.postId}</h2>
              <p>{c.body}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default App;
