
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Header from './Components/Nav/Header/Header'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Events from './Components/Events/Events'
import Footer from './Components/Footer/Footer'
import Payment from './Components/Payment/Payment'
import Aminities from './Components/Aminities/Aminities'
import Testimonial from './Components/Testimonial/Testimonials'
function App() {
  return (
<>
<Router>


<Routes>

  <Route path='/' element={<Header/>}></Route>
   <Route path='/Nav' element={<Nav/>}></Route>
   <Route path='/About' element={<About/>}></Route>
    <Route path='/Services' element={<Services/>}></Route>
     <Route path='/Events' element={<Events/>}></Route>
     
      <Route path='/Aminities' element={<Aminities/>}></Route>
       <Route path='/Footer' element={<Footer/>}></Route>
        <Route path='/testimonials' element={<Testimonial/>}></Route>
       <Route path='/Payment' element={<Payment/>}></Route>

</Routes>

</Router>
</>
   
  )
}

export default App