import './App.scss'
import { Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Error404 from './pages/Error404';
import AddUser from './pages/AddUser';
import UserList from './pages/UserList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<Error404 />} />
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} >
          <Route path='/dashboard/adduser' element={ <AddUser />} />
          <Route path='/dashboard/userlist' element={ <UserList />} />
        </Route>
        
      </Routes>
    </div>
  )
}
export default App
