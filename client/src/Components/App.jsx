
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
import { ManageParkingPage } from './ManageParking/ManageParkingPage';
import { ManageUsersPage } from './ManageUsers/ManageUsersPage';
import { ClientPage } from './ClientPage/ClientPage';
import { ModifySchedule } from './ClientSchedule/ModifySchedule';
import { CustumerInquieries } from './CustumerInquieries/CustumerInquieries';
import { LocationParking } from './LocationParking/LocationParking';
import { ScheduleParking } from './ScheduleParking/ScheduleParking';


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

                  <Route exact path="/ManageUsers" element={<ManageUsersPage />}/>

                  <Route exact path="/ManageParking" element={<ManageParkingPage />}/>
                  
                  <Route exact path="/ClientPage" element={<ClientPage />}/>

                  <Route exact path="/ClientSchedule" element={<ModifySchedule />}/>

                  <Route exact path="/CustumerInquieries" element={<CustumerInquieries />}/>

                  <Route exact path="/LocationParking" element={<LocationParking />}/>

                  <Route exact path="/ScheduleParking" element={<ScheduleParking />}/>

              </Routes>
                
            </div>
      </Router>
            
            
        
  );
}
