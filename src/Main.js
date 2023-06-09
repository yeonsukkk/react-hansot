import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './component/App';
import Home from './page/Home';
import Menu from './page/Menu';
import MenuDetail from './page/MenuDetail';
import Cart from './page/Cart';
import HansotStore from './page/HansotStore';
import News from './page/News';
import MyMenu from './page/MyMenu';
import NotFound from './page/NotFound';
import store from './store';
import HansotStoreKakao from './page/HansotStoreKakao';

const Main = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu'>
              <Route index element={<Menu />} />
              <Route path=':menuSlug' element={<MenuDetail />} />
            </Route>
            <Route path='/cart' element={<Cart />} />
            {/* kakao openAPI로 맵 가져오기 */}
            <Route path='/hansotStore' element={<HansotStoreKakao />} />
            {/* google로 맵 가져오기 */}
            <Route path='/hansotStore2' element={<HansotStore />} />
            <Route path='/news'>
              <Route index element={<News />} />
            </Route>
            <Route path='/myMenu' element={<MyMenu />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </App>
      </BrowserRouter>
    </Provider>
  );
};

export default Main;
