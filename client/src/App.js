import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Router from "../src/routes/routes";
import './App.scss';

const App = () => {
    
    return <Router />;
};

export default (connect()(App));
