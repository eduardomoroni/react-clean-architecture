# React Clean Architecture
I'm on my way to write (and code) a realistic way of achieving reusing domain between both native and web apps.
I'll use and adaptation of Clean Architecture and some Domain-driven design principles.
This is a realistic approach, what I mean by that is: It's simple enough to be applicable and Robust enough to have it in a production environment.

## Work in progress (almost finished)
I've been pretty busy lately, so I'll write as much as possible.
I'll write a blog post saying What is Clean Architecture, Why adopt it and how.

## Philosophy
![high-level-diagram](https://github.com/eduardomoroni/react-clean-architecture/blob/master/docs/images/high-level-diagram.jpg)  

The nomenclature may vary, but the concept behind this architectural pattern is: the domain dictates how tools should be organized and not the other way around.
What I mean by that is that we should organize our codebase around the business rules and not around the frameworks we use to achieve business rules.
The diagram above shows how the dependency rule works, the inner circles must not know about the outer circles. That is, there cannot be an import of a use case within an entity, or import of a framework within a use case.
Another important rule is: entities and use cases should not rely on external libraries. The explanation is simple, the core of our application must be robust enough and malleable enough to meet the demands of the business without needing any external intervention.
If by chance, an essential part of the application core MUST BE an external dependency. Dependency needs to be modeled following [dependency inversion principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle).

## Communication flow
![communication-flow-diagram](https://github.com/eduardomoroni/react-clean-architecture/blob/master/docs/images/communication-flow.jpg)  

### A brief explanation of each responsibility
- Entity: Application independent business rules
- Interactor: Application especific business rules
- Adapter: Glue code from/to interactors and presenter, most of the time implementing a framework specific behaviour.
  e. g.: We have to connect interactor with react container, to do so, we have to connect interactor with redux (framework) and then connect redux to container components.
- Presenter: Maps data from/to adapter to/from components.
- Components: Simplest possible unit of presentation. Any mapping, conversion, MUST be done by presenter.

## Folder Structure
This repository contains 2 examples of how to implement react following clean architecture, both follow same folder structure which represents diagram showed above.
```
./counter
├── core
│   └── lib
│       ├── adapters
│       │   └── redux
│       ├── entities
│       ├── frameworks
│       └── useCases
├── native
│   └── src
│       ├── components
│       └── stylesheets
└── web
    └── src
        ├── assets
        ├── components
        └── stylesheets
```
*Note:* frameworks folder is basically framework setup to have it available to the adapters.  

## Sample apps DEMO
### Counter
Counter app is a simple example of how to apply clean architecture to react world, it uses only synchronous actions and has no external dependencies.  
It contains a single business rule: 
- The counter can not be negative and can not be greater than 10.  

![counter-gif](https://github.com/eduardomoroni/react-clean-architecture/blob/master/docs/images/counter.gif)  

### Authentication
Authentication app is a simple example, but no to simple, of how to apply clean architecture to a realistic scenario.
It contains some shared business rules:
- Users must have a valid email.
- Users password cannot contains anything but numbers and letters.
- Users name must have full name, and it has to be lower case.
- The App cannot sign up two users with same email address.
- The app must use an external dependency to persist user register.  

![authentication-gif](https://github.com/eduardomoroni/react-clean-architecture/blob/master/docs/images/authentication.gif)  

## References
- [Clean Architecture: a craftsman's guide to software structure and design](https://goo.gl/2h3fsD)
- [The clean architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Agility and Architecture](https://www.youtube.com/watch?v=0oGpWmS0aYQ)
- [Github](https://github.com/topics/clean-architecture?o=desc&s=stars)
- [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

## Thanks
- Microsoft for provide a typescript [react native](https://github.com/Microsoft/TypeScript-React-Native-Starter) starter kit.
- [Will Monk](https://github.com/wmonk) for provide a typescript [react](https://github.com/wmonk/create-react-app-typescript) starter kit.
