import React from "react";
import { BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide, Text, Notes, CodePane, Image } from "spectacle";
import createTheme from "spectacle/lib/themes/default";

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default () => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
    <Slide transition={["zoom"]} bgColor="tertiary">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        GraphQL, the cool parts
      </Heading>
      <Notes>
        <ul>
          <li>/me</li>
          <li>First failed touch with GraphQL</li>
        </ul>
      </Notes>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps padding="0 0 20px 0">
        What is GraphQL?
      </Heading>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps padding="0 0 20px 0">
        A specification
      </Heading>
      <Notes>
        <ul>
          <li>The Spec determines the validity of the schema on the API server.</li>
          <li>The schema determines the validity of client calls</li>
          <li>
            It describes the complete set of possible data (objects, fields, relationships, everything) that a client
            can access.
          </li>
          <li>It covers the query language [ie. clients] but also defines the behavior of a GraphQL server</li>
        </ul>
      </Notes>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps padding="0 0 20px 0">
        Strongly typed
      </Heading>
      <Notes>validate before execution and guarantees about response shape</Notes>
      <CodePane
        textSize={20}
        lang="javascript"
        source={`
        type Driver {
            id: ID!
            firstname: String!
            lastname: String
            cars: [Car]!
        }
        `}
      />
      <Notes>
        <ul>
          <li>The schema defines an API's type system and all object relationships</li>
          <li>[] for list</li>
          <li>! for non null</li>
          <li>Also Enum type, Union type</li>
        </ul>
      </Notes>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps padding="0 0 20px 0">
        Introspective
      </Heading>
      <Notes>A client can query the schema for details about the schema.</Notes>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps padding="0 0 20px 0">
        Hierarchical
      </Heading>
      <CodePane
        textSize={20}
        lang="javascript"
        source={`
        {
            cars {
                id
                name
                brand
                drivers {
                    id
                    lastname
                }
            }
        }
      `}
      />
      <Notes>
        The shape of a GraphQL call mirrors the shape of the JSON data it returns. Nested fields let you query for and
        receive only the data you specify in a single round trip.
      </Notes>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps padding="0 0 20px 0">
        An application layer
      </Heading>
      <Notes>
        GraphQL is not a storage model or a database query language. The graph refers to graph structures defined in the
        schema, where nodes define objects and edges define relationships between objects. The API traverses and returns
        application data based on the schema definitions, independent of how the data is stored.
      </Notes>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps padding="0 0 20px 0">
        Wait, Why?
      </Heading>
      <Notes>
        <ul>
          <li>Declarative Data Fetching</li>
          <li>Each view queries exactly what it needs to display</li>
        </ul>
      </Notes>
    </Slide>
    <Slide transition={["zoom"]} bgColor="tertiary">
      <Image src="https://cdn-images-1.medium.com/max/1600/1*Q5OzvFQDJSzk-LpGjYgtHA.png" height={600} />
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps padding="0 0 20px 0">
        Typings & validations
      </Heading>
      <Notes>Enables static code analysis and ahead of runtime error checks</Notes>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps padding="0 0 20px 0">
        No more client specific endpoints
      </Heading>
      <Notes>
        <ul>
          <li>Each view queries exactly what it needs to display</li>
          <li>avoids over and under fetching; great for mobile clients</li>
        </ul>
      </Notes>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps padding="0 0 20px 0">
        Ok, but How?
      </Heading>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps padding="0 0 20px 0">
        Query
      </Heading>
      <CodePane
        textSize={20}
        lang="javascript"
        source={`
        query CarDetail($id: Int!) {
            car(id: $id) {
                id
                name
                brand
                drivers {
                    firstname
                }
            }
        }
       `}
      />
      <Notes>
        <ul>
          <li>very intuitive syntax</li>
          <li>operation</li>
          <li>operation name</li>
          <li>variable definitions</li>
          <li>fields</li>
          <li>you can have multiple queries in the same document</li>
        </ul>
      </Notes>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps padding="0 0 20px 0">
        Mutation
      </Heading>
      <CodePane
        textSize={20}
        lang="javascript"
        source={`
        mutation AddCarMutation($car: CarInput!) {
            add_car(car: $car) {
                id
                name
                brand
                drivers {
                    firstname
                }
            }
        }
       `}
      />
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps padding="0 0 20px 0">
        Sharing code: Fragments
      </Heading>
      <CodePane
        textSize={20}
        lang="javascript"
        source={`
        fragment CarFragment on Car {
            id
            name
            brand
            drivers {
                firstname
            }
        }


        query {
            car {
                ...CarFragment
            }
        }
       `}
      />
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps padding="0 0 20px 0">
        Directives
      </Heading>
      <CodePane
        textSize={20}
        lang="javascript"
        source={`
        query CarDetail($id: Int!, $withDrivers: Boolean!) {
            car(id: $id) {
                id
                name
                brand
                drivers @include(if: $withDrivers){
                    firstname
                }
            }
        }
       `}
      />
      <Notes>
        Allow custom behavior for specific objects, fragments, etc. included $skip, $include and $deprecated.
      </Notes>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps padding="0 0 20px 0">
        On the Server: Schema + Resolvers
      </Heading>
      <CodePane
        textSize={20}
        lang="javascript"
        source={`
        {
            Query: {
                cars: () => db.getCars(),
                drivers: () => db.getDrivers()
            },
            ...
        }`}
      />
      <Notes>
        <ul>
          <li>Schema defines the types of the fields and relationships between objects</li>
          <li>
            Resolvers is just a map of the field names as keys to a function that graphql will automatically call (based
            on what the client requested )to get the data
          </li>
          <li>
            GraphQL resolve functions can contain arbitrary code, so they can produce the result by doing some
            computation, querying the DB, calling an internal/external API
          </li>
        </ul>
      </Notes>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps padding="0 0 20px 0">
        So what's cool about it?
      </Heading>
      <Notes>Typed contract</Notes>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" padding="0 0 20px 0">
        Vanilla
      </Heading>
      <CodePane
        textSize={20}
        lang="javascript"
        source={`
        fetch('/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                query: '{ cars { name } }'
            })
        })
        .then(res => res.json())
        .then(res => console.log(res.data));
        `}
      />
      <Notes>
        <ul>
          <li>
            fetch and update data in a declarative manner - just write the query and you're done, no need to worry about
            constructing request & handling response
          </li>
          <li>
            tight coupling of views and their data dependencies eliminates mental overhead of where/how data gets into
            the UI and what data is required for this UI.
          </li>
        </ul>
      </Notes>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" padding="0 0 20px 0">
        Powerful clients
      </Heading>
      <Notes>
        <ul>
          <li>Not mandatory</li>
          <li>Relay</li>
          <li>Apollo</li>
        </ul>
      </Notes>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" padding="0 0 20px 0">
        Relay
      </Heading>
      <Text textColor="primary">
        <List>
          <ListItem>Developed by Facebook</ListItem>
          <ListItem>Battletested</ListItem>
          <ListItem>Performant and Elegant</ListItem>
          <ListItem>Poorly documented</ListItem>
        </List>
      </Text>
      <Notes />
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" padding="0 0 20px 0">
        Apollo
      </Heading>
      <Text textColor="primary">
        <List>
          <ListItem>Community Driven</ListItem>
          <ListItem>More Flexible</ListItem>
          <ListItem>Lots of ressources</ListItem>
          <ListItem>Support most major platforms</ListItem>
        </List>
      </Text>
      <Notes />
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" padding="0 0 20px 0">
        GraphiQL
      </Heading>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps padding="0 0 20px 0">
        Demo time
      </Heading>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Advanced Stuff
      </Heading>
      <Notes>
        <ul>
          <li>Caching</li>
          <li>Data Loader</li>
          <li>Error handling</li>
          <li>Query complexity (query cost analysis)</li>
        </ul>
        <a>https://blog.acolyer.org/2018/05/21/semantics-and-complexity-of-graphql/</a>
      </Notes>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        DataLoader
      </Heading>
      <Notes>
        <ul>
          <li>https://github.com/facebook/dataloader</li>
          <li>Batching</li>
          <li>Caching</li>
        </ul>
      </Notes>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Error handling
      </Heading>
      <Notes>
        <ul>
          <li>something went wrong on the server</li>
          <li>type mismatch</li>
          <li>non nullable is null</li>
          <li>application logic</li>
          <li>Use of Errorable type or framework feature</li>
        </ul>
      </Notes>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Should I use it?
      </Heading>
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>
        Thanks !
      </Heading>
    </Slide>
  </Deck>
);
