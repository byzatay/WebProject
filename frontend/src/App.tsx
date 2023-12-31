import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewsList from './components/news/NewsList';
import AnnouncementList from './components/announcements/AnnouncementList';
import BottomNavbar from './components/header/BottomNavbar';
import TopNavbar from './components/header/TopNavbar';
import PageTitle from './style/Titles';
import Home from './components/home/Home';

function App() {
  const [auth, setAuth] = React.useState<boolean>(false);

  const handleAuthChange = (newAuth: boolean) => {
    setAuth(newAuth);
  };

  const [searchKeyword, setSearchKeyword] = React.useState<string>('');

  const handleKeywordChange = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <TopNavbar auth={auth} onAuthChange={handleAuthChange} />
          <BottomNavbar auth={auth} onKeywordChange={handleKeywordChange} />
        </div>
        <Routes>
          <Route path="/" element={
            <PageTitle title="Home">
              <Container>
                <Home />
              </Container>
            </PageTitle>
          } />
          <Route path="/home" element={
            <PageTitle title="Home">
              <Container>
                <Home />
              </Container>
            </PageTitle>
          } />
          <Route
            path="/news"
            element={
              <PageTitle title="News">
                <Container>
                  <NewsList auth={auth} searchKeyword={searchKeyword} />
                </Container>
              </PageTitle>
            }
          />
          <Route
            path="/announcement"
            element={
              <PageTitle title="Announcements">
                <Container>
                  <AnnouncementList auth={auth} searchKeyword={searchKeyword} />
                </Container>
              </PageTitle>
            }
          />
          <Route
            path="/news-admin"
            element={
              <PageTitle title="News | Admin">
                <Container>
                  <NewsList auth={auth} searchKeyword={searchKeyword} />
                </Container>
              </PageTitle>
            }
          />
          <Route
            path="/announcement-admin"
            element={
              <PageTitle title="Announcements | Admin">
                <Container>
                  <AnnouncementList auth={auth} searchKeyword={searchKeyword} />
                </Container>
              </PageTitle>
            }
          />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
