import React from 'react';
import Routes from '../routes/Index';
import {Provider} from "react-redux";
import store from "../store/store";

export default props => <Provider store={store}>{Routes}</Provider>;


