

DRAFT
=====

Steps
-----
1. run `cp .env.example .env`
2. populate env variables in `.env`
3. run `npm install auth0-lock --save`
4. add following code snippet to `index.html`
```
<!-- public/index.html --> 

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>

```

This boilerplate was bootstrapped with:   
* [create-react-app](https://github.com/facebookincubator/create-react-app)   
* [react-router v4.0.0-beta.3](https://github.com/ReactTraining/react-router/releases)

An example of the boilerplate can be seen here at [https://react-vanilla-router.herokuapp.com/](https://react-vanilla-router.herokuapp.com/)

There is one example that is bootstrapped with [Material UI](http://material-ui.com) and it can be found
at [https://github.com/iankhor/react-material-ui-boilerplate](https://github.com/iankhor/react-material-ui-boilerplate)

### Instructions
1. Git clone repository into your local directory
2. Run ```npm i``` in your local directory
3. Run ```cp .env.example .env```
4. Start React App with ```npm run watch```
5. Open React App at ```localhost:9000``` 

### Notes
1. Update any environment variables where applicable in your local ```.env``` file
2. Update CSS in the style.styl file
3. Any changes in the code and ```.styl``` files will automatically recompile the project
4. Update routes in the component called ```Routes``` in ```\src\components\shared\Routes.js```
5. The component ```JSONDebugger``` can be used to display JSON data by passing the component a JSON file with the prop name ```json```.
See example in ```\src\components\PageOne.js```  
