# JavaScript Quiz Game

My JS quiz game is a general knowledge quiz of 10 questions, it is a single-player game that calculates your score but 100 per every correct answer

![Mock Up](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/mockUp.png?raw=true)

[JavaScript Quiz Game Live Link](https://trevthedev777.github.io/javascriptQuizGameMultipleChoice/)

## Features

### Sitewide
* Navigation Menu
    * Home screen only has a link to start the game into the first question
    * This will allow the user to start the game when they are ready
![Nav Menu image](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/home%20screen.png?raw=true)

* Favicon
    * A site-wide favicon will be implemented with a red question mark.
    * This will provide an image in the tabs header to allow the user to easily identify the website if they many tabs open.
![Favicon](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/favicon.png?raw=true)

* 404 Page
    * A 404 page will be implemented and will display if a user navigates to a broken link.
    * The 404 page shares the same layout as the game menu and will hopefully allow users to not even notice the wrong address was inserted

![404](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/404.png?raw=true)

*Home Page*

- Start game link to take the user straight to the first question

![Home Page Image](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/home%20screen.png?raw=true)  

-  the user just needs to click the Game Start Button and start playing

*Game Page*

- Questions

  - Each question is based on general knowledge and can prove to be tricky, they are displayed on the center of the screen underneath the hud display and above the answer selections
  - There is a question progress bar and counter that will notify the user when they are reaching the end of the game
  - There is a score generator on the top right-hand side of the screen that increments on every correct answer

![Game Board Image](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/gamescreen.png?raw=true)

- End of the game screen

  - once the user has ended the quiz, they are brought to the end of the game screen which gives them their score and an option to return to the home page or jump straight back to the first question  

  ![End Game Image](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/end%20game%20screen.png?raw=true)
 

### Features left to implement
- Countdown Timer
- Different difficulty settings
- Scoreboard for single-player mode
- Head to Head remote play
- Leaderboard when playing online through a server

## Technologies

- HTML
  - The structure of the Website was developed using HTML as the main language.
- CSS
  - The Website was styled using custom CSS in an external file.
- JavaScript
  - The gameplay logic was created using JavaScript in an external file.
- Gitpod
  - The website was developed using Gitpod
- GitHub
  - Source code is hosted on GitHub and deployed using Git Pages.
- Git
  - Used to commit and push code during the development of the Website
- Font Awesome
  - Icons obtained from https://fontawesome.com/ 
- Favicon.io
  - favicon file created at https://favicon.io/favicon-converter/

## Testing

### Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px and upwards as defined in [WCAG 2.1 Reflow criteria for responsive design](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) on Chrome, Edge, Firefox and Opera browsers, as well as tested on Samsung S20FE and Samsung Galaxy 8 and iPhone 10 model handheld devices

Steps to test:

1. Open the browser and navigate to [JavaScript Quiz Game Multiple Choice](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice)
2. Open the developer tools (right click and inspect)
3. Set to responsive and decrease width to 320px
4. Set the zoom to 50%
5. Choose each responsive screen device using shortcut Cntrl + shift + m
5. Click and drag the responsive window to the maximum width

Expected:

The game to adapt per size, and stack elements on the smallest screen sizes.

Actual:

The website behaved as expected.

### Accessibility

[Wave Accessibility](https://wave.webaim.org/) tool was used as a guide to making sure colour contrasts were fine and that there were no errors with any HTML attributes

Testing was focused to ensure the following criteria were met:

- All link tags have the correct path to stylesheets and script
- Aria labels were used for any links
- Color contrasts meet a minimum ratio as specified in [WCAG 2.1 Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- Heading levels are not missed or skipped to ensure the importance of content is relayed correctly to the end-user
- All content is contained within landmarks to ensure ease of use for assistive technology, allowing the user to navigate by page regions
- All not textual content had alternative text or titles so descriptions are read out to screen readers
- The HTML page lang attribute has been set
- Aria properties have been implemented correctly
- WCAG 2.1 Coding best practices being followed

Manual tests were also performed to ensure the website was accessible as possible and some accessibility issues were identified.

Issue #1: Styles not loading into the website.

Fix: Correct paths were given to link the documents together for all styles and JS technologies to work smoothly.

Issue #2: Script not loading into the website.

Fix: Correct paths were given to link the documents together for all styles and JS technologies to work smoothly.

Issue #3: 404.html not loading into the correct page

Fix: renamed the document to the correct name.

Issue #4: Total correct score not calculating at the end of the game

Fix: Added a new js file saving the local session score

Issue #5: Hover effect not working on buttons

Fix: renamed elements to corresponding class names

Issue #6: Progress Bar not incrementing per question


**Navigation Links**

Testing was performed on 404.html, index.html, and end.html to ensure that the game was directed to the home screen

Links on all pages are navigated to the correct pages as expected.

**Game Play**

* User starts the game and answers the question
* Question has timeout function to automatically progress the game so the user does not have to select the next question manually
* Progress bar increases per question
* Score increments on every correct answer

The timeout function works correctly

**Game Board**

* Correct Answer displays green background upon selection
* Incorrect Answer displays red background upon selection and does not show the right answer so user can play again

All displays and transitions displayed correctly

**End of Game**

* Navigation to start of quiz and home page


**Validator Testing**

- HTML
  - No errors were returned when index.html passing through the official [W3C validator](https://validator.w3.org)

![Index HTML Validator Results](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/index.html%20validated.png?raw=true)

 - No errors were returned when game.html passing through the official [W3C validator](https://validator.w3.org)

![Game HTML Validator Results](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/game.html%20validated.png?raw=true)

 - No errors were returned when end.html passing through the official [W3C validator](https://validator.w3.org)

![End HTML Validator Results](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/end.html%20validated.png?raw=true)

 - No errors were returned when 404.html passing through the official [W3C validator](https://validator.w3.org)

![404 HTML Validator Results](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/404.html%20validated.png?raw=true)

- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org)

![CSS Validator Results](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/css%20validated.png?raw=true)

- JavaScript
  - No errors were returned when passing through the script.js in validtor [JShint validator](https://jshint.com/)
  - No errors were returned when passing through the end.js in validtor [JShint validator](https://jshint.com/)



**Lighthouse Report**

Lighthouse report reported a good performance of 96, Accessibility of 100, best practices of 100, and the SEO was 91

![Lighthouse report](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/lighthouse%20report.png?raw=true)


## Deployment

### Version Control

The site was created using Gitpod and pushed to Github to the remote repository ‘Portfolio-Project-2-Poker-Fun’.

The following git commands were used throughout development to push code to the remote repo:

```git add .``` - This command was used to add the file(s) to the staging area before they are committed.

```git commit -m “commit message”``` - This command was used to commit changes to the local repository queue ready for the final step.

```git push``` - This command was used to push all committed code to the remote repository on GitHub.

### Deployment to Github Pages

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the menu on the left select 'Pages'
  - From the source section drop-down menu, select the Branch: main
  - Click 'Save'
  - A live link will be displayed in a green banner when published successfully.

The live link can be found here - https://github.com/trevthedev777/javascriptQuizGameMultipleChoice

### Clone the Repository Code Locally

Navigate to the GitHub Repository you want to clone to use locally:

- Click on the code drop-down button
- Click on HTTPS
- Copy the repository link to the clipboard
- Open your IDE of choice (git must be installed for the next steps)
- Type git clone copied-git-URL into the IDE terminal

The project will now have been cloned on your local machine for use.

## Credits 

* Daisy Mcgirr for being a one of a kind mentor and helping me understand my work
* Readme inspired by Gareth McGirr - https://github.com/Gareth-McGirr/Portfolio-Project-2-Poker-Fun
* Dave Horrocks for assisting me with my assignment and working through code with me
* Phumlani Mbabela for debugging and explanations of the functionality of the game
* Code snippets of uppercase variables inspired by : [freeCodeCamp](https://www.freecodecamp.org/news/when-to-capitalize-your-javascript-constants-4fabc0a4a4c4/)
* ProgressBar inspired by [w3schools](https://www.w3schools.com/howto/howto_js_progressbar.asp), simplified code helped by Phulmani Mbabela
* The Code Institute Tutoring service
* Idea of quiz inspired by [sitepoint](https://www.sitepoint.com/simple-javascript-quiz/)
* Tutorials followed [keep_coding](https://www.youtube.com/watch?v=MxrGPP4F8Sc)
