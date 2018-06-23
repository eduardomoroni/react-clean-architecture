# Sharing Bussiness logic between React Native and Web
I'm on my way to write (and code) a realistic way of achieving reusing domain between both native and web apps. I'll use and adaptation of Clean Architecture and some Domain-driven design.
This is a realistic approach, what I mean by that is: It's simple enough to be applicable and Robust enough to have it in a production environment.

## Work in progress
I've been pretty busy lately, so I'll write as much as possible.

## Communication flow

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

## References
- [Github](https://github.com/topics/clean-architecture?o=desc&s=stars)
- [The clean architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Agility and Architecture](https://www.youtube.com/watch?v=0oGpWmS0aYQ)

## Thanks
- Microsoft for provide a [react native](https://github.com/Microsoft/TypeScript-React-Native-Starter) starter kit with all TypeScript configuration.
- [Will Monk](https://github.com/wmonk) for provide a [react](https://github.com/wmonk/create-react-app-typescript) starter kit with all TypeScript configuration.
