# JavaScript Quiz Game

My JS quiz game is a general knowledge quiz of 10 questions, it is a single player game that calculates your score but 100 per every correct answer

![Mock Up](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/mockUp.png?raw=true)

[JavaScript Quiz Game Live Link](https://trevthedev777.github.io/javascriptQuizGameMultipleChoice/)

## Features

### Site wide
* Navigation Menu
    * Home screen only has a link to start the game into the first question
![Nav Menu image](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/home%20screen.png?raw=true)

* Favicon
    * A site wide favicon will be implemented with a red poker chip.
    * This will provide an image in the the tabs header to allow the user to easily identify the website if they have multiple tabs open.
![Favicon](docs/readme_images/favicon_image.PNG)

* 404 Page
    * A 404 page will be implemented and will display if a user navigates to a broken link.
    * The 404 page shares the same layout as the game menu and will hopefully allows users to not even notice the wrong address was inserted

![404](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/404.png?raw=true)

*Home Page*

- Start game link to take the user staright to the first question

![Home Page Image](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/home%20screen.png?raw=true)  

-  the user just needs to click the Game Start Button and start playing

*Game Page*

- Questions

  - Each question is based on general knowledge and can prove to be really tricky, they are displayed on the center of the screen under neath the hud display and aboue the answer selections
  - There is a question progress bar and counter that will notify the ueser when they are reaching towards the end of the game
  - There is a score generator on the top right hand side of the screen that increments on every correct answer

![Game Board Image](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/gamescreen.png?raw=true)

- End of game screen

  - once the user has ended the quiz, they are brought to the end of game screen which gives them their score and an option to return to the home page or jump straight back to the first question  

  ![End Game Image](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/end%20game%20screen.png?raw=true)
 

### Features left to implement
- Countdown Timer
- Different difficulty settings
- Scoreboard for single player mode
- Head to Head remote play
- Leaderboard when playing online through a server

## Technolgies

- HTML
  - The structure of the Website was developed using HTML as the main language.
- CSS
  - The Website was styled using custom CSS in an external file.
- JavaScript
  - The game play logic was created using JavaScript in an external file.
- Gitpod
  - The website was developed using Gitpod
- GitHub
  - Source code is hosted on GitHub and delpoyed using Git Pages.
- Git
  - Used to commit and push code during the development of the Website
- Font Awesome
  - Icons obtained from https://fontawesome.com/ 
- Favicon.io
  - favicon file created at https://favicon.io/favicon-converter/

## Testing

### Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px and upwards as defined in [WCAG 2.1 Reflow criteria for responsive design](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) on Chrome, Edge, Firefox and Opera browsers, as well as tested on Samsung S20FE and Samsung Galaxy 8 and Iphone 10 model handeld devices

Steps to test:

1. Open browser and navigate to [JavaScript Quiz Game Multiple Choice](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice)
2. Open the developer tools (right click and inspect)
3. Set to responsive and decrease width to 320px
4. Set the zoom to 50%
5. Choose each responsive screen device using shortcut Cntrl + shift + m
5. Click and drag the responsive window to maximum width

Expected:

The game to adapt per size, and stack elements on the smallest screen sizes.

Actual:

Website behaved as expected.

### Accessibility

[Wave Accessibility](https://wave.webaim.org/) tool was used as guid to make sure colour contrasts were fine and that there were no errors with any html attributes

Testing was focused to ensure the following criteria were met:

- All link tags have correct path to stylesheets and script
- Aria-labels were used for any links
- Color contrasts meet a minimum ratio as specified in [WCAG 2.1 Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- Heading levels are not missed or skipped to ensure the importance of content is relayed correctly to the end user
- All content is contained within landmarks to ensure ease of use for assistive technology, allowing the user to navigate by page regions
- All not textual content had alternative text or titles so descriptions are read out to screen readers
- HTML page lang attribute has been set
- Aria properties have been implemented correctly
- WCAG 2.1 Coding best practices being followed

Manual tests were also performed to ensure the website was accessible as possible and some accessibility issues were identified.

Issue #1: Styles not loading into website.

Fix: Correct paths were given to link the documents together for all styles and JS technologies to work smoothly.

Issue #2: .

Fix: Cards were given the tabindex attribute with a value of 1 to ensure a keyboard can tab to them.

Issue #3: Cards were not held with the enter key so users could not hold the card unless clicked with a mouse.

Fix: Cards were given an onkeyup event and called a new function which detects if the enter key was pressed and then clicks the card to allow the user to hold the card.

**Navigation Links**

Testing was performed to ensure all navigation links on the respective pages, navigated to the correct pages as per design. This was done by clicking on the navigation links on each page.

| Navigation Link | Page to Load    |
| --------------- | --------------- |
| Home            | index.html      |
| Play            | game.html       |

Links on all pages navigated to the correct pages as exptected.

**Footer Link**

Testing was performed to ensure the GitHub icon in the footer opened the github profile of Gareth-McG in a new tab. This was done by clicking the GitHub icon.

Gareth-McG's Github profile opened in a new tab.

**Game Play**

**Winning Hands**

All hands were tested to ensure they were recorded as the correct 'winning hands' with the correct multipliers. This was done by stubbing the hands using the following arrays:

```
Royal Flush Test
myHand[0] = deck[09];
myHand[1] = deck[10];
myHand[2] = deck[11];
myHand[3] = deck[12];
myHand[4] = deck[0];

Straight Flush Test
myHand[0] = deck[31];
myHand[1] = deck[32];
myHand[2] = deck[33];
myHand[3] = deck[34];
myHand[4] = deck[35];

Flush Test
myHand[0] = deck[47];
myHand[1] = deck[44];
myHand[2] = deck[51];
myHand[3] = deck[41];
myHand[4] = deck[45];

4 of a kind Test
myHand[0] = deck[7];
myHand[1] = deck[20];
myHand[2] = deck[33];
myHand[3] = deck[46];
myHand[4] = deck[43];

Full House
myHand[0] = deck[4];
myHand[1] = deck[17];
myHand[2] = deck[36];
myHand[3] = deck[49];
myHand[4] = deck[10];

Straight
myHand[0] = deck[15];
myHand[1] = deck[3];
myHand[2] = deck[4];
myHand[3] = deck[31];
myHand[4] = deck[45];

Straight A2345
myHand[0] = deck[0];
myHand[1] = deck[14];
myHand[2] = deck[28];
myHand[3] = deck[42];
myHand[4] = deck[4];

3 of a kind
myHand[0] = deck[11];
myHand[1] = deck[24];
myHand[2] = deck[37];
myHand[3] = deck[31];
myHand[4] = deck[41];

2 pair
myHand[0] = deck[35];
myHand[1] = deck[48];
myHand[2] = deck[51];
myHand[3] = deck[12];
myHand[4] = deck[18];

pair of queens
myHand[0] = deck[24];
myHand[1] = deck[50];
myHand[2] = deck[43];
myHand[3] = deck[12];
myHand[4] = deck[18];
```
All hands functioned as expected and gave the correct types and winnings.

**Hold Cards**

Testing was performed to ensure cards could be held and when new cards were drawn, the selected cards remained. Thhis was done by selecting 2 cards from the dealt cards, then pressing the draw button.

When new cards were drawn, the held cards were still in the drawn cards as expected.

**Game Board**

Testing was done to ensure the correct messages were displayed at the appropriate time by playing the game. The following messages are displayed:

* No winning hand - Displayed when no winning hand has been dealt.
* Place bet instructions - Shown when facedown cards are drawn.
* Hold card instructions - Shown after user has clicked the 'Deal' button.
* Winning hand name displayed - Shown if winning hand after user has clicked the draw button after a deal/hold.
* High low instructions - Shown during high low game that is initiated if a user had a winning hand.
* Lose High/Lo with wrong High guess - Shown if user guesses 'High' but the card drawn was a lower value than the previous card.
* Lose High/Lo with wrong Low guess - Shown if user guesses 'Low' but the card drawn was a higher value than the previous card.

All messages were displayed as expected.

**High/Low**

High/Low game was tested to ensure the game functioned as expected by playing the game:
* If the card drawn was higher and the user clicked the "High" button, that the next card was drawn as expected.
* If the card drawn was lower and the user clicked the "Low" button, that the next card was drawn as expected.
* If the card drawn was lower and the user clicked the "High" button, that the next card was not drawn and the High/Low game ends as expected.
* If the card drawn was lower and the user clicked the "High" button, that the next card was not drawn and the High/Low game ends as expected.
* If the maximum limit of 5 cards has been drawn, the high low game ends and winnings are added to the current chip balance as expected.
* At any stage in the High/Lo game, if the 'Bank Winnings' button is clicked, the current winnings are added to the current chips value.

**Validator Testing**

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org)

![Home HTML Validator Results](docs/readme_images/home_validator.PNG)

![Game Page](docs/readme_images/game_validator.PNG)

![404 Page](docs/readme_images/404_validator.PNG)

- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org)

![CSS Validator Results](docs/readme_images/css_validator.PNG)

- JavaScript
  - No errors were returned when passing through the [JShint validator](https://jshint.com/)
  - A warning appeared for one function as an unused variable but the function is being used directly as an onkeyup event on the card divs.

![JavaScript Validator Results](docs/readme_images/js_validator.PNG)

**Lighthouse Report**

Lighthouse report generated showed a 93 SEO rating due to no meta descriptions. Meta descriptions were then added to the page to raise this. The lowest score on any section was 94 for performance.

![Lighthouse report](docs/readme_images/lighthouse.PNG)


## Deployment

### Version Control

The site was created using the Visual Studio Code editor and pushed to github to the remote repository ‘Portfolio-Project-2-Poker-Fun’.

The following git commands were used throughout development to push code to the remote repo:

```git add <file>``` - This command was used to add the file(s) to the staging area before they are committed.

```git commit -m “commit message”``` - This command was used to commit changes to the local repository queue ready for the final step.

```git push``` - This command was used to push all committed code to the remote repository on github.

### Deployment to Github Pages

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the menu on left select 'Pages'
  - From the source section drop-down menu, select the Branch: main
  - Click 'Save'
  - A live link will be displayed in a green banner when published successfully.

The live link can be found here - https://gareth-mcgirr.github.io/Portfolio-Project-2-Poker-Fun

### Clone the Repository Code Locally

Navigate to the GitHub Repository you want to clone to use locally:

- Click on the code drop down button
- Click on HTTPS
- Copy the repository link to the clipboard
- Open your IDE of choice (git must be installed for the next steps)
- Type git clone copied-git-url into the IDE terminal

The project will now have been cloned on your local machine for use.

## Credits 

* [Create the deck of cards and shuffle](https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript)
    * Code was used from this site to create the deck of cards and shuffle. Styles were changed to suit styling on my Website.
* Website Logo and felt background image was created by my wife [Daisy McGirr](https://github.com/Daisy-McG) using Canva.
* My Mentor Chris Quinn for his guidance and support throughout my project.
