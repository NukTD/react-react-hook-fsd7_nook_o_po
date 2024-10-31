import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useGetdata } from "../components/useGetdata";
import { useBlogPost } from "../components/useBlogPost";

function ViewPostPage() {
  const navigate = useNavigate();

  //ใช้เพื่อดึงข้อมูล post แต่ละอัน
  const { post, loading } = useGetdata();
  //ใช้เพื่อดึงข้อมูล post ทุกอันที่ซ้ำซ้อน ระหว่าง homepage และ viewpost
  const { posts, isError, isLoading } = useBlogPost();

  return (
    <div>
      <h1>View Post Page</h1>
      <div className="view-post-container">
        <h2>{`${post.title}`}</h2>
        <p>{`${post.content}`}</p>
      </div>

      <hr />
      <div className="show-all-posts-container">
        <h2>All Posts</h2>
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <h1>{post.title}</h1>
              <div className="post-actions">
                <button className="view-button">View post</button>
              </div>
            </div>
          );
        })}
        {isError ? <h1>Request failed</h1> : null}
        {isLoading ? <h1>Loading ....</h1> : null}
      </div>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewPostPage;
