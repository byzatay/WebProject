import React from 'react';
import './App.css';
import BottomNavbar from './components/header/BottomNavbar';
import TopNavbar from './components/header/TopNavbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NewsList from './components/news/NewsList';
import NoticeList from './components/announcements/AnnouncementList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomPageTitle from './style/Titles';


function App() {
  const [auth, setAuth] = React.useState<boolean>(false);

  const handleAuthChange = (newAuth: boolean) => {
    setAuth(newAuth);
  };

  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <TopNavbar auth={auth} onAuthChange={handleAuthChange} />
        <BottomNavbar auth={auth} />
        <Routes>
          <Route path="/" element={
            <CustomPageTitle title="Home">
              <Container>
                <NewsList auth={auth} />
              </Container>
            </CustomPageTitle>
          } />
          <Route
            path="/news"
            element={
              <CustomPageTitle title="News">
                <Container>
                  <NewsList auth={auth} />
                </Container>
              </CustomPageTitle>
            }
          />
          <Route
            path="/announcement"
            element={
              <CustomPageTitle title="Announcements">
                <Container>
                  <NoticeList auth={auth} />
                </Container>
              </CustomPageTitle>
            }
          />
          <Route
            path="/-admin"
            element={
              <CustomPageTitle title="Home | Admin">
                <Container>
                  <NewsList auth={auth} />
                </Container>
              </CustomPageTitle>
            }
          />
          <Route
            path="/news-admin"
            element={
              <CustomPageTitle title="News | Admin">
                <Container>
                  <NewsList auth={auth} />
                </Container>
              </CustomPageTitle>
            }
          />
          <Route
            path="/announcement-admin"
            element={
              <CustomPageTitle title="Announcements | Admin">
                <Container>
                  <NoticeList auth={auth} />
                </Container>
              </CustomPageTitle>
            }
          />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
