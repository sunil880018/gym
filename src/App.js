import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Homescreen from './Homescreen'
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
function App() {
  return(
   <>
   <Header/>
   <Switch>
   <Route exact path="/gym"  component={Homescreen}/>
   <Route exact path="/about/" component={About}/>
   <Route exact path="/blog/" component={Blog}/>
   <Route exact path="/contact/" component={Contact}/>
   </Switch>
   <Footer/>
 </>
  );
}

export default App;
