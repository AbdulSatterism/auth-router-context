/*
BASIC CONTEXT <SETUP---------------------------->
</SETUP---------------------------->
1. context api: share auth state with other components (across the application)
2.Create an UserContext
3. Context.Provider with pass children
4.set the user context in the index.js
5. now tho consume the context export the authContext from userContext 
6. now at Header or anywhere else
 */

/*

AUTH <INTEGRATION--------------------->
</INTEGRATION---------------------> 

1. Use auth from getAuth for firebase config
2.create a function createUser to return createUserEmailAndPassword
*/
