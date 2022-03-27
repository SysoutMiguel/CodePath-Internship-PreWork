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
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
W3Schools
Giphy
Glitch
GitHub
Clideo

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it?
 
While working on this project, I had encountered many issues. I have little to no experience with javascript and CSS, whilst having nothing but basic understanding for HTML. Due to my lack of experience, I encountered little trouble getting used to the syntax, although getting used to it didn't take much time since I am used to working with java that has a fair amount of syntax rules. Another challenge that I had encountered was trying to make the game use a new pattern after each time the game is started. This is because I was not familiar with the data sructure that the variable pattern automatically assigned itself to. I used a resource listed above to help me make the connection between arrays in java and the array created in javascript using var. I resolved this issue by creating a function that creates an array, fills the array with randum numbers between 1 and 8, since there are 8 buttons within the game, and returns that array. Later I called the function within the start game function and assigned the pattern variable to it. Additionally, I had issues with understanding classes in javascript but I cleared my confusion by watching some videos on youtube and used my prior knowledge in object oriented programming to understand this concept better.

3. What questions about web development do you have after completing your submission?
After completing the submission, I was left with many questions in regards to the field of web development that will encourage me to look for answers online. A question I had was how a web browser's "inspect element" tool works with javascript, CSS, and HTML. Many of my questions involve this inspect element tool, such as what it is, how it compiles everything, and if the tool is considered an IDE. Another question that arised while I was working on this project is how is one able to change the pane in which a group of buttons, textboxes, or pictures are in. This question came up when we created the initial four buttons. I know that the flow pane is used for html elements, and I wanted to know how I would be able to change it to a grid pane.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific.
[YOUR ANSWER HERE]



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


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
