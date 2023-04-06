import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './features/common/Header';
import Post from '../src/features/post/Post';
import PostList from '../src/features/post/PostList';

function App() {
  return (
        <BrowserRouter>
    <div className="App">
      <Header />
      <main>
          <Routes>
            <Route path="/" exact element={<PostList />} />
            <Route path="/posts/:postId" element={<Post />} />
          </Routes>
      </main>
    </div>
        </BrowserRouter>
  );
}

export default App;