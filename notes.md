# Welcome to Redux

#### A guide to learn basic Redux

- Install Redux:
  ```
  npm i redux --save-dev
  ```
- Create a directory for the store and initialize the store.

```
import { createStore } from "redux"
import rootReducer from "../reducers/index"

const store = createStore(rootReducer);

export default store;
```

- Create a reducer to handle the state (rootReducer). This reducer will be in charge of updating the state of the articles. The rootReducer reducer will feed into the store created above.

```
const initialState = {
    //articles are used as an example, here the initial state data can be anything
    articles: []
}

const rootReducer = (state = initialState, action) => state;

export default rootReducer;
```

- Create an action to update the store. Actions are JSON objects that have to key value pairs, type and payload. The type is a string, and the payload is a value that can be a variable. Because the type is of type "string", it is best to set the action types as constants to avoid any misspelings or duplication.

  - Creating the action-type constant:

  ```
  // ./src/js/constants/action-type.js
  const ADD_ARTICLE = "ADD_ARTICLE";

  export default ADD_ARTICLE;
  ```

  - Create the action creator;

  ```
  import { ADD_ARTICLE } from "../constants/action-type.js"

  const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
  });

  export default addArtiicle;
  ```
