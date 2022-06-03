import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { AssignP } from './Pages/Admin/AssignP'
import { CoSupervisor } from './Pages/Admin/CoSupervisor' 


//Admin routes
import { Main } from './Pages/Admin/Main'
import { NewMark } from './Pages/Admin/NewMark'
import { NewSub } from './Pages/Admin/NewSub'
import { PanelMember } from './Pages/Admin/PanelMember'
import { Student } from './Pages/Admin/Student'
//import { Studentg } from './Pages/Admin/Studentg'
import { Supervisor } from './Pages/Admin/Supervisor'
import { UpDoc } from './Pages/Admin/UpDoc'
import { Uploads } from './Pages/Admin/Uploads'
import { Users } from './Pages/Admin/Users'
import { UpdateSub } from './Pages/Admin/UpdateSub'
import { UpdateMark } from './Pages/Admin/UpdateMark'
import { UpdateStaff } from './Pages/Admin/UpdateStaff'
import { UpdateStudent } from './Pages/Admin/UpdateStudent'
import { UpdateSupervisor } from './Pages/Admin/UpdateSupervisor'
//student routes

import LoginPage from './Pages/Student/loginPage';
import HomePage from './Pages/Student/homePage';
import LogOutHome from './Pages/Student/logOutHome';
import Messenger from './Pages/Student/messenger';
import Registration from './Pages/Student/registration';
import StudentProfile from './Pages/Student/studentProfile';
import SupervisorRequest from './Pages/Student/supervisorRequest';
import CoSupervisorRequest from './Pages/Student/co-supervisorRequest';
import MemberReg from './Pages/Student/memberRegistration';
// import Test from './test';
import TopicRegister from './Pages/Student/topicRegistration';
import MyRequest from './Pages/Student/myRequest';
import { Panelmform } from './Pages/Admin/Panelmform'

//student routes end


//Supervisor routes

//import Header from './Components/Supervisor/Header'
import SupervisorRegistration from './Pages/Supervisor/Registration'
import Login from './Pages/Supervisor/Login'
import MyAccount from './Pages/Supervisor/MyAccount'
import SupervisorProfile from './Pages/Supervisor/SupervisorProfile'
import Request from './Pages/Supervisor/Request'
import ProjectEvaluate from './Pages/Supervisor/ProjectEvaluate'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>

                //Admin routes
                //main
                <Route exact path='/AdminHome' component={Main}/>
                <Route exact path='/AdminUser' component={Users}/>
                <Route exact path='/AdminStudentg' component={AssignP}/>
                <Route exact path='/AdminUploads' component={Uploads}/>
                //sub
                <Route exact path='/CoSupervisor' component={CoSupervisor}/>
                <Route exact path='/Supervisor' component={Supervisor}/>
                <Route exact path='/PanelMember' component={PanelMember}/>
                <Route exact path='/Student' component={Student}/>   
                <Route exact path='/AssignP' component={AssignP}/>
                <Route exact path='/NewSub' component={NewSub}/>  
                <Route exact path='/NewMark' component={NewMark}/>  
                <Route exact path='/UpDoc' component={UpDoc}/>
                <Route exact path='/UpdateSub' component={UpdateSub}/>      
                <Route exact path='/UpdateMark' component={UpdateMark}/>
                <Route exact path='/assignpm' component={Panelmform}/> 
                <Route exact path='/UpdateStaff' component={UpdateStaff}/>
                <Route exact path='/updatestudent' component={UpdateStudent}/>
                <Route exact path='/updatesupervisor' component={UpdateSupervisor}/>
                {/* Admin routes end */}

                {/* <Route path="/supervisorChat" exact component={Test} /> */}

                {/* Student routes */}

                <Route path="/" exact component={LogOutHome} />
                <Route path="/signin" exact component={LoginPage} />
                <Route path="/signup" exact component={Registration} />
                <Route path="/home" exact component={HomePage} />
                <Route path="/chat" exact component={Messenger} />
                <Route path="/studentProfile" exact component={StudentProfile} />
                <Route path="/supervisorRequest" exact component={SupervisorRequest} />
                <Route path="/coSupervisorRequest" exact component={CoSupervisorRequest} />
                <Route path="/memberRegistration" exact component={MemberReg} />
                <Route path="/topicRegister" exact component={TopicRegister} />
                <Route path="/myRequest" exact component={MyRequest} />

                {/* Student routes end- */}


                {/* Supervisor routes start here */}

                <Route path="/register" exact component={SupervisorRegistration} />
                <Route path="/login" exact component={Login} />
                <Route path="/myAccount" exact component={MyAccount} />
                <Route path="/supervisorProfile" exact component={SupervisorProfile} />
                <Route path="/request" exact component={Request} />
                <Route path="/topicEvaluate" exact component={ProjectEvaluate} />

                {/* Supervisor routes end here */}






            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))