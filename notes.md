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
