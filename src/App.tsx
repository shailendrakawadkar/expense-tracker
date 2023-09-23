import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Expense from './components/expense/expense';
import Category from './components/category/category';
import Report from './components/report/report';


function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path="/expenses" Component={Expense}  />
          <Route path="/categories" Component={Category}  />
          <Route path="/reports" Component={Report}  />
      </Routes>
    </Router>
  )
}

export default App
