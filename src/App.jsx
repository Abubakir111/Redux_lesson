import Layout from './component/Layout/Layout';
import Products from './component/Products/Products';
import { Route, Routes } from 'react-router-dom';
import Basket from './component/Basket/Basket';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="/basket" element={<Basket />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
