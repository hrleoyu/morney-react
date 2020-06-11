import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Money from "./views/money";
import Statistics from "./views/statistics";
import Tags from "./views/tags";
import NoMatch from "./views/nomatch";
import Tag from "./views/Tag";




function App() {
  return (
      <Router>
          <Switch>
            //switch 标签内为渲染区域
            <Route path="/tags" exact>
              <Tags />
            </Route>
            <Route path="/tags/:id" exact>
              <Tag />
            </Route>
            <Route path="/money" exact>
              <Money />
            </Route>
            <Route path="/statistics" exact>
              <Statistics />
            </Route>
            <Redirect exact from={'/'} to={'/money'}/>
            // 使用exact 默认进入
            <Route path={'*'}>
              <NoMatch/>
            </Route>
            //定向为*  默认404
          </Switch>
      </Router>
  );
}







export default App;
