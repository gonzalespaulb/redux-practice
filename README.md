# Redux 4 Dummies 

## Why use Redux?
Due to the nature of React's one way data flow, same level components are not able to share functionality
and data without lifting state. As applications get bigger more components are implemented therefore system 
complexity rises exponentially. To solve this problem, a global state (Redux) can be used all around the application 
without passing down props. This in turn allows for easier maintenance and addition of new features. 

## Store 
Store will hold your global state. This is the state that your actions and reducers will be modifying and what your components will refer to. The store cannot be mutated outside the usage of actions and reducers. For example, if you tried to append a .reverse() method at the end of the props it wouldnt work. 

## Action
"Action" is in its simplest term, a function that returns an object. The two properties commonly used in these objects
are "type" and "payload". Type is what the reducer will use to determine what kind of switch case to run and you can 
think of the "payload" as the paramter that will be passed to the reducer. Action is what will be imported and connected to your logic.  

## Dispatch
Dispatch is the part of the action that will hold the properties of type and payload. 

## Reducer 
Once the action is called, the reducers that are connected to the store via `rootReducer` will also be triggered and finally 
mutating the state.  

## Connect
Connect is the "glue" that holds redux magic together. Heres a simple syntax example that I used throughtout this 
app. `export default connect(mapStateToProps, { fetchPosts })(Post);`. The syntax I used is as follows `connect(global state, { functions used})(component name)`.

## mapStateToProps 
Use this to access the global state. Make sure to add it outside of the component and DO NOT try to to mutate without using a 
reducer. 
``` 
    const mapStateToProps = (state) => { 
        return state.posts;
    }
```


