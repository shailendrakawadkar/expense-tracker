import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Expense from './components/expense/expense';
import Category from './components/category/category';
import NotFound from './components/notFound/notfound';


function App() {

  return (
      <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/expenses" Component={Expense}  />
          <Route path="/categories" Component={Category}  />
          <Route path="*" Component={NotFound}  />
      </Routes>
  )
}

export default App
