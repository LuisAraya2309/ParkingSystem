
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
import {QueriesPage} from './QueriesModule/QueriesPage'
import { HomePage } from './UserHome/HomePage';
import { UserInformation } from './UserInformation/UserInformation';


export function App() {
  return (
      <Router>
          <div className="App" >
              <Routes>
                  <Route exact path="/" element={<LoginPage />}/>

                  <Route exact path="/AdminPage" element={<AdminPage />}/>

                  <Route exact path="/SignUpPage" element={<SignUp />}/>

                  <Route exact path="/QueriesPage" element={<QueriesPage />}/>

                  <Route exact path="/HomePage" element={<HomePage />}/>

                  <Route exact path="/UserInformation" element={<UserInformation />}/>
                  

              </Routes>
                
            </div>
      </Router>
            
            
        
  );
}
