import React from 'react';
import { hot } from "react-hot-loader";
import styled from "styled-components";

import TodoList from './todos/TodoList';

const AppContainer = styled.div`
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #555555;
`



const App = () => (
    <AppContainer>
        <h1>Todo Application</h1>
        <TodoList />
    </AppContainer>
);

export default hot(module)(App);