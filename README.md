
# Moonbeam balance and activities indexer

 
## Preparation
 
 
```
yarn install
  
yarn codegen

yarn build

````
 

## Indexing and Query

#### Run required systems in docker


Under the project directory run following command:

```
docker-compose pull && docker-compose up
```
#### Query the project

Open your browser and head to `http://localhost:3000`.

Finally, you should see a GraphQL playground is showing in the explorer and the schemas that ready to query.
  

