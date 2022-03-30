# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Miguel Rodriguez

Time spent: 5 hours spent in total

Link to project: https://glitch.com/edit/#!/sideways-pyrite-pedestrian

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
<img src='https://media.giphy.com/media/sQVfVL2UogY6XNpbIO/giphy.gif' />
<img src='https://media.giphy.com/media/XGM5XU8g00RClQYOYg/giphy.gif' />
<img src='https://media.giphy.com/media/iHddWoaS5yhrwW7zZZ/giphy.gif' />
<img src='https://media.giphy.com/media/OoADy4iChYtWirLdDI/giphy.gif' />

https://user-images.githubusercontent.com/98061181/160924653-928bd6e9-85e2-4819-b2fe-d1817f03befa.mp4



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
W3Schools
Giphy
Glitch
GitHub
Clideo

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it?
 
While working on this project, I had encountered many issues. I have little to no experience with javascript and CSS, whilst having nothing but basic understanding for HTML. Due to my lack of experience, I encountered little trouble getting used to the syntax, although getting used to it didn't take much time since I am used to working with java that has a fair amount of syntax rules. Another challenge that I had encountered was trying to make the game use a new pattern after each time the game is started. This is because I was not familiar with the data sructure that the variable pattern automatically assigned itself to. I used a resource listed above to help me make the connection between arrays in java and the array created in javascript using var. I resolved this issue by creating a function that creates an array, fills the array with random numbers between 1 and 8, since there are 8 buttons within the game, and returns that array. Later I called the function within the start game function and assigned the pattern variable to it. Additionally, I had issues with understanding classes in javascript but I cleared my confusion by watching some videos on youtube and used my prior knowledge in object oriented programming to understand this concept better.

3. What questions about web development do you have after completing your submission?
After completing the submission, I was left with many questions in regards to the field of web development that will encourage me to look for answers online. A question I had was how a web browser's "inspect element" tool works with javascript, CSS, and HTML. Another question that arised while I was working on this project is how is one able to change the pane in which a group of buttons, textboxes, or pictures are in. This question came up when we created the initial four buttons. I know that the flow pane is used for html elements, and I wanted to know how I would be able to change it to a grid pane. Finally, a question that arised was if there are other languages or libraries that web developers use other than javascript, CSS, and HTML and if so, what are they.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific.
If I had a few more hours to work on this project I would have completed all the optional features that was provided by CodePath that I didn't do. Like, the feature that adds an image to the button once it is pressed or called in the pattern, or the feature that adds different sounds from a source that I implement. Apart from the examples given, I would have made the background change color according to the button being called. Another change I would make is that I would add a ranking system which adjusts the pattern length each level. For example, if a user completes level one. The size of the pattern would increase, meaning that more guesses will be needeed to pass the level, and as the pattern increases, the speed in which the pattern is shown would also increase, making it harder as the player progresses.



## Interview Recording URL Link


https://youtu.be/jIxzIDZiM94

## License

    Copyright Miguel Rodriguez

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
