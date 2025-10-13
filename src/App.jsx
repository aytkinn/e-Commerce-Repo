
import './App.css'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import Footer from './layout/Footer'
import Header from './layout/Header'
import PageContent from './layout/PageContent'

function AppContent() {
  const location = useLocation();
  
  return (
    <>
      {location.pathname !== '/contact' && <Header/>}
      <PageContent/>
      <Footer/>
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent/>
    </Router>
  )
}

export default App
