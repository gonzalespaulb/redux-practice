# Redux 4 Dummies 

## Why use Redux?
Due to the nature of React's one way data flow, same level components are not able to share functionality
and data without lifting state. As applications get bigger more components are implemented therefore system 
complexity rises exponentially. To solve this problem, a global state (Redux) can be used all around the application 
without passing down props. This in turn allows for easier maintenance and addition of new features. 

## Store 
Store will hold your global state. This is the state that your actions and reducers will be modifying and what your components will
refer to. The store cannot be mutated outside the usage of actions and reducers. For example, if you tried to append a .reverse()
method at the end of the props it wouldnt work. 

## Action
"Action" is in its simplest term, a function that returns an object. The two properties commonly used in these objects
are "type" and "payload". Type is what the reducer will use to determine what kind of switch case to run and you can 
think of the "payload" as the paramter that will be passed to the reducer. 

## Reducer 
"Reducers" will check which action was used and modify the store / global state accordingly. 

## Dispatch


## Connect



