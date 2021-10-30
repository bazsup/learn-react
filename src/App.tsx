import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import ShowCasePage from './pages/show-case'
import PaginationDataPage from './pages/pagination-data'
import Navbar from './features/common/Navbar'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ShowCasePage} />
        <Route path="/pagination-data" component={PaginationDataPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
