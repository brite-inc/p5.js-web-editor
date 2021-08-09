# p5.js Web Editor as a Component

This project is a fork of [p5.js-web-editor](https://github.com/processing/p5.js-web-editor/).

The p5.js Web Editor is a platform for creative coding, with a focus on making coding accessible for as many people as possible, including artists, designers, educators, beginners, and anyone who wants to learn.

Simply by opening the website you can get started writing p5.js sketches without downloading or configuring anything.

The editor is designed with simplicity in mind by limiting features and frills.

We strive to listen to the community to drive the editor’s development, and to be intentional with every change.

The editor is free and open-source.

## Component

This package exports the editor as a reusable component that can be embedded on other applications.
We are also adding event listener functions via props which will enable the host application to change editor behavior without having to modify its code.

## Publishing to NPM

Publish this package as @brite-inc scope with the following command:

```
npm run build:client:standalone
npm publish --access public
```
