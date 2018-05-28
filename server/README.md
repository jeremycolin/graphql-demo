## Simple Graphql server based on [Apollo Server Express](https://github.com/apollographql/apollo-server)

`yarn start`

[Introspection](<http://localhost:4000/graphiql?query=%7B%0A%20%20__type(name%3A%20%22Driver%22)%20%7B%0A%20%20%20%20name%0A%20%20%20%20kind%0A%20%20%20%20fields%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20type%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20kind%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

[Query](http://localhost:4000/graphiql?query=query%20%7B%0A%20%20drivers%20%7B%0A%20%20%20%20firstname%0A%20%20%7D%0A%7D%0A)

[Mutation](<http://localhost:4000/graphiql?query=mutation%20%7B%0A%20%20add_driver(driver%3A%20%7Bfirstname%3A%20%22Jeremy%22%2C%20lastname%3A%22Prost%22%2C%20cars%3A%20%5B%220%22%2C%20%222%22%5D%7D)%20%7B%0A%20%20%20%20firstname%0A%20%20%20%20cars%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)
