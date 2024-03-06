// Using promises

// A Promise is an object representing the eventual completion or failure
// of an asynchronous operation. Since most people are consumers of
// already-created promises, this guide will explain consumption of returned promises
// before explaining how to create them.

// Essentially, a promise is a returned object to which you attach callbacks,
// insstead of passing callbacks into a function. Imagine a function, createAudioFileAsync(), 
// which asynchronously generates a sound file given a configuration record and two
// callback functions: one called if the audio file is successfully created, and the other
// called if an error occurs.


// Here's some code that uses createAudioFileAsync():

function successCallback(result){
    console.log(`Audio file ready at URL: ${result}`);
}
function failureCallback(error){
    console.error(`Error generating audio file: ${error}`)
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);

// If createAudioFileAsync() were written to return a promise, you would attach your
// callbacks to it instead:

createAudioFileAsync(audioSettings).then(successCallback, failureCallback);

// This convention has several advantages. We will explore each one.