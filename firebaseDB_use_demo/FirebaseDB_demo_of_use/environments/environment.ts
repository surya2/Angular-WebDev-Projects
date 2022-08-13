// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "Key not included because this is private",
    authDomain: "fir-demo-4db43.firebaseapp.com",
    databaseURL: "https://fir-demo-4db43.firebaseio.com",
    projectId: "fir-demo-4db43",
    storageBucket: "fir-demo-4db43.appspot.com",
    messagingSenderId: "259896387040"
  }
};
