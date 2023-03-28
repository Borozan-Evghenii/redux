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
          <Route path='/post/:id' component={SinglePostPage}/>
          <Route path='/editPost/:id' component={EditPostForm}/>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
