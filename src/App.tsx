import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Nav from './components/Nav'


import styled from "styled-components";

const Wrapper = styled.div`
height: 100vh;
border: 1px solid red;
display:flex;
flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;


function App() {
  return (
      <Router>
        <Wrapper>
          <Main>
          <Switch>
            //switch 标签内为渲染区域
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Redirect exact from={'/'} to={'/money'}/>
            // 使用exact 默认进入
            <Route path={'*'}>
              <NoMatch/>
            </Route>
            //定向为*  默认404
          </Switch>
          </Main>
          <Nav/>
        </Wrapper>
      </Router>
  );
}

function Tags() {
  return <h2>标签</h2>;
}

function Money() {
  return <h2>记账</h2>;
}

function Statistics() {
  return <h2>统计</h2>;
}

function NoMatch() {
  return <h1>404</h1>
}

export default App;
