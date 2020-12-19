# 🎵 Kenjomusic

Kenjomusic is a responsive application built with Angular 11 for managing your favorites artists and albums!

## 📖 Walkthrough

![Main content](https://github.com/Eidun/kenjomusic/blob/develop/src/assets/kenjomain.PNG)

So, how does it work? In the main page Albums and artists are listed in a grid card container. You can select any of them and get more detailed information. Kenjomusic allows you to create/edit these albums or artist, also delete those ones you don't want to keep.

Kenjomusic can link an album to an artist. Write the name of the artist you want to link to the current selected album, Kenjomusic will search in its data and find that artist. You even don't need to write the full name, Kenjomusic can autocomplete it for you!

## 🚧 Get ready

Kenjomusic has not been released yet! It has lots of pending work. Still interested anyway? Ok, you can use it in your local computer if you complete the next steps.

Clone the repository to your local and execute the following commands:
>npm i

>npm run start

Almost done! Now you have to prepare the backend which Kenjomusic communicates to.

https://hub.docker.com/r/gonzalokenjo/kenjo-challenge

This repository includes a database dump with a useful set of data. Use the command explained in the previous docker repo for initializing correctly the app.

## 👷 Contribute

Do you want to contribute to this project? That's amazing! As said above, Kenjomusic is still an alpha in development due to lack of time.

Please, feel free to create pull requests with cool features or improvements you think that can fit. Here are some suggested examples:

* Error handling system
* More test cases
* Internationalization
* Improved designs
