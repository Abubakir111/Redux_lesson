import { Routes, Route } from 'react-router'
import SingleItem from '../page/SingleItem/SingleItem'
import Error from './Error/Error'
import MainPage from '../page/MainPage/MainPage'
import Laout from './Layout/Layout'
import LaoutFooter from './LayoutFooter/LayoutFooter'
import Shares from '../page/Shares/Shares'
import Novelties from '../page/novelties/novelties'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Laout />}>
          <Route path='' element={<LaoutFooter />}>
            <Route index element={<MainPage />} />
            <Route path='/:id' element={<SingleItem />} />
            <Route path='/Shares' element={<Shares />} />
            <Route path='/Novelties' element={<Novelties />} />
            <Route path='*' element={<Error />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}
export default App
