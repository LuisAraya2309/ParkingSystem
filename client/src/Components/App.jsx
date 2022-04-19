
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { LoginPage } from './LoginPage/LoginPage';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import { AdminPage } from './AdminPage/AdminPage';
import { SignUp } from './SignUpPage/SignUp';


export function App() {
  return (
      <Router>
          <div className="App" >
              <Routes>
                  <Route exact path="/" element={<LoginPage />}/>

                  <Route exact path="/AdminPage" element={<AdminPage />}/>

                  <Route exact path="/SignUpPage" element={<SignUp />}/>

              </Routes>
                
            </div>
      </Router>
            
            
        
  );
}
