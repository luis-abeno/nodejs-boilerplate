# Sample NodeJs application to quick start a restful api

## Why this project was created

The main goal is to have a nice and well organized project that can be used to any rest api, to quick start a real world project.
Following [Best Pratices](https://github.com/goldbergyoni/nodebestpractices) and my experience in other projects, to avoid headache every fresh start (it's kind hard to remember all the things =D).

## Wanna contribute?

Feel free to open a PR with your sugestion or bugfix, i'll appreciate it.

## Basic about this Rest API

- Routes: Rest API route address
- Controllers: Handle request to appropriate service(s), quick check for params then return result to route
- Services: Business rules
- Repositories: Database operations

## Swagger docs

After run the commands to start for dev the swagger will auto generate the docs into public folder (tsoa).
Also, it's possible to run the command "swagger" to manually generate.

```sh
npm run swagger
```

## Requirements

## Start development environment

- Make sure you have created a ".env" file at the root of the application with all necessary variables, we provide a .env_sample in this project as example. **DO NOT COMMIT A .env FILE** to avoid the risk to expose some data like api secret or connection string;

1. Install dependencies.

   ```sh
   npm i
   ```

2. Start for dev

   ```sh
   npm run start:dev
   ```

## Migrations

## Docker

## Packages

## Licence

MIT
