import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "../component/streams/streamCreate";
import StreamEdit from "../component/streams/streamEdit";
import StreamDelete from "../component/streams/streamDelete";
import StreamList from "../component/streams/streamList";
import StreamShow from "../component/streams/streamShow";
import Header from "../component/Header";
import history from "../history";

const App = () => {
  return (
    <div className="container">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={StreamList}></Route>
          <Route path="/streams/new" exact component={StreamCreate}></Route>
          <Route path="/streams/edit/:id" exact component={StreamEdit}></Route>
          <Route
            path="/streams/delete/:id"
            exact
            component={StreamDelete}
          ></Route>
          <Route path="/streams/:id" exact component={StreamShow}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
