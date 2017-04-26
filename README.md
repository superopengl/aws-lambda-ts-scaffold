An empty project scaffold for Amazon Lambda development in TypeScript.

# Features by npm scripts
The npm scripts are based on `gulp` so should be working on Linux, OS X and Windows.

## `npm run tsc`
Compile *.ts into *.js. 
`./specs/*.ts` will be ignored because the tests can be run by TypeScript directly.

## `npm run tsc:clean`
Clean up the compiled *.js.

## `npm test`
Run `./specs/*.ts` with mocha.

## `npm run zip`
Compile the project and pack a zip file that can be uploaded to Amazon Lambda Function. The zip file will be generated under `./dist` folder with file name `${package.name}-${package.version}.zip`, for example `aws-lambda-ts-scaffold-1.0.0.zip`. Changing the name and the version in package.json will be reflected automatically.