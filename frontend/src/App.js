import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

// Components
import NavBar from './components/NavBar';
import Login from './components/Login';

// Pages
import HomePage from './pages/homepage/HomePage';
// authenticate
import SignUpPage from './pages/authenticate/SignUpPage';
import LoginPage from './pages/authenticate/LoginPage';
// forum
import ForumPage from './pages/forum/ForumPage';
import PostListPage from './pages/forum/PostListPage';
import PostDetailsPage from './pages/forum/PostDetailsPage';
import CreatePost from './pages/forum/CreatePost';
import EditPost from './pages/forum/EditPost';
// artsearch
// import ArtApp from './pages/search/ArtApp';
//news
import NewsPage from './pages/news/NewsPage';
// // show
// import ShowPage from './pages/show/ShowPage';
// footer
import Footer from './components/Footer';
import './App.css';

import ArtworksContainer from './pages/search/ArtworksContainer';
import ArtworkDetailsContainer from './pages/search/ArtworkDetailsContainer';

function App() {
  // state
  const [username, setUsername] = useState("")
  return (

    <div className="App">
      <HashRouter>
        <Login username= { username } setUsername={ setUsername }/>
        <NavBar />
        <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="/signup" element={ <SignUpPage /> } />
          <Route path="/login" element={ <LoginPage setUsername={ setUsername }/> } />
          <Route path="/forum" element={ <ForumPage/> } />
          <Route path="/forum/:section" element={ <PostListPage /> } />
          <Route path="/forum/:section/create-post" element={ <CreatePost username={ username } /> } />
          <Route path="/forum/:section/:postId/edit-post" element={ <EditPost username={ username } /> } />
          <Route path="/forum/:section/:postId" element={ <PostDetailsPage username={ username }/> } />
          {/* <Route path="/members" element={ <MembersPage/> } />
          <Route path="/members/:memberId" element={ <ProfilePage username={username}/> } />
          <Route path="/members/:memberId/create-profile" element={ <CreateProfile username={ username }/> } />
          <Route path="/members/:memberId/edit-profile" element={ <EditProfile/> } /> */}

          {/* <Route path="/search" element={ <ArtApp /> } /> */}
          <Route exact path="/" element={<ArtworksContainer />} />
          <Route exact path="/artworkdetails/:id" element={<ArtworkDetailsContainer />} />

          <Route path="/news" element={ <NewsPage /> } />

          {/* <Route path="/shows" element={ <ShowPage /> } /> */}

        </Routes>
        <Footer />
      </HashRouter>
    </div>

  );
}

export default App;
