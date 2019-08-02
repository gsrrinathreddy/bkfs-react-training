import React, { Component } from 'react'
import LandingPage from './elearning/layout/LandingPage';
import Header from './elearning/layout/Header';
import Footer from './elearning/layout/Footer';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import CorpTraining from './elearning/pages/CorpTraining';
import GovtTraining from './elearning/pages/GovtTraining';
import HigherEdu from './elearning/pages/HigherEdu';
import SoftwareTraining from './elearning/pages/SoftwareTraining';
import data from './data';
import Register from './elearning/pages/auth/Register';
import {Provider} from 'react-redux';
import store from './store';

export default class ELearning extends Component {
    render() {
        return (
            <div>
        <Provider store={store}>
            <Router>
              <Header/>
               <LandingPage/>
               <Route path='/corporate-training' render={() => <CorpTraining data={data.CorpTraining} userStatus="false" title="corporate courses"/>}/>
                <Route path='/govt-training' render={()=><GovtTraining data={data.CorpTraining}/>}/>
               <Route path='/high-edu' component={HigherEdu}/>
               <Route path='/software-training' component={SoftwareTraining}/>
               <Route path='/register' component={Register}/>
               
               <Footer/>
            </Router>
              
        </Provider>
           
            </div>
        )
    }
}
