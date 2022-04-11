## Discbase for disc golf enthusiasts

Project created with React and TypeScript meant to present a list of items, and a single view of the item. User can create new or delete already existing items. App uses mocked REST api

Notable npm packages used:

- MaterialUI https://www.npmjs.com/package/@mui/material
- React Router https://www.npmjs.com/package/react-router
- Axios https://www.npmjs.com/package/axios
- Json-server https://www.npmjs.com/package/json-server

To get the app going, run:

```javascript
npm install
```

Start the mock json-server with:

```javascript
json-server --watch db.json --port 3004
```

If cli tells you that json-server is not installed, you might need to install it globally:

```javascript
npm install -g json-server
```

Start the development server with:

```javascript
npm start
```
