import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/style.scss';
import ListPostsController from './Pages/ListPosts/ListPostsController';
import HeaderView from './compenents/HeaderView';
import AddPostController from './Pages/AddPosts/AddPostController';
function App() {
  return (
    <BrowserRouter>
      <HeaderView />

      <Routes>
        <Route path="/" element={<ListPostsController />} />
        <Route path="/add-post" element={<AddPostController />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;