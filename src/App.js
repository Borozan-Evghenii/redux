import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import SinglePostPage from './features/posts/SinglePostPage'
import EditPostForm from './features/posts/EditPostForm'
import AddPostForm from './features/posts/AddPostForm'
import PostsList from './features/posts/PostsList'
import UserPage from "./features/users/UserPage";
import UserList from "./features/users/UserList";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <AddPostForm/>
                <PostsList />
              </>
            )}
          />
          <Route exact path='/post/:id' component={SinglePostPage}/>
          <Route exact path='/editPost/:id' component={EditPostForm}/>
          <Route exact path='/users/:id' component={UserPage}/>
          <Route exact path='/users' component={UserList}/>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
