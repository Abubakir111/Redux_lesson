import { Routes, Route } from 'react-router'
import PageForPosts from '../page/PageForPosts/PageForPosts'
import AddNewPost from '../page/AddNewPost/AddNewPost'
import Layout from './Layout/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageForPosts />} />
          <Route path="/PageForPosts" element={<AddNewPost />} />
        </Route>
      </Routes>
    </>
  )
}
export default App
