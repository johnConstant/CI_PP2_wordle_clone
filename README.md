# Wordle Clone
(Developer: John Constant)

![Mockup image](docs/am_i_responsive.png)

[Live webpage](https://johnconstant.github.io/CI_PP2_wordle_clone/)

## Table of Content

1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requirements and Expectations](#user-requirements-and-expectations)
    3. [User Stories](#user-stories)
    4. [Site Owner Stories](#site-owner-stories)
3. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Colour](#colours)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
    5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks & Tools](#frameworks-&-tools)
5. [Features](#features)
6. [Testing](#validation)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [JavaScript Validation](#javascript-validation)
    4. [Accessibility](#accessibility)
    5. [Performance](#performance)
    6. [Device testing](#performing-tests-on-various-devices)
    7. [Browser compatibility](#browser-compatability)
    8. [Testing user stories](#testing-user-stories)
8. [Bugs](#Bugs)
9. [Deployment](#deployment)
    1. [EmailJS API](#emailjs-api)
10. [Credits](#credits)
11. [Acknowledgments](#acknowledgments)

## Project Goals 
The Wordle clone is a copy of the popular New York Times word game. This version of the game allows the use to choose the number of letters in the word, the number of words per game and the number of guesses per word.

### User Goals
- Play a fun and engaging word guessing game
- Learn new words and their meanings

### Site Owner Goals
- Creating a fun and engaging game that users will want to play again and again.
- The game should be fully responsive to be able to be played on different devices.

## User Experience

### Target Audience
- casual gamers
- people who like word games
- people who love the existing word game and want play more of it

### User Requirements and Expectations
- A simple and intuitive navigation system
- Quick, easy, and fun to play
- Links and functions that work as expected
- Good presentation and a visually appealing design regardless of screen size
- An easy way to leave feedback
- Accessibility

### User Stories
1. As a user, I want to be able to pick the settings for the game
2. As a user, I want to gain feedback on my previous guesses in the game
3. As a user, I want to know what the correct phrase was in case I don't guess it correctly
4. As a user, I want to see the definition of the correct answer
5. As a user, I want feedback on my correct answers
6. As a user, I want to see my total score at the end of the game
7. As a user, I want to use contact form and leave a message

### Site Owner Stories
8. As a site owner, I want users to be able to contact us and leave a message.
9. As a site owner, I want users to be able to find us on social media.

## Design

### Design Choices
The game was designed to have a simple design with highly contrasting, simple colours. 

### Colour
A similar colour palette was chosen to the original New York Times version of the game. The yellow and green colours giving users feedback on their guesses are intuitive and the red colour is a highly contrasting colour to these.

<details><summary>Colour palette</summary>
<img src="docs/features/color-palette.jpg">
</details>

### Fonts
For the fonts, I decided to use a clean, crisp sans-serif font. I used Google Fonts 'Jakarta Plus' font. 

### Structure
The page is structured in a user-friendly and easy-to-learn way. Upon arriving at the website the user sees a screen with the option to choose a difficulty for the game. The website consists of six separate pages:

- A game home page with menu
- A game page with 4 different views:
    - one for the game
    - one for the game with user guesses
    - one for round over message
        - Correct answer
        - Wrong answer
    - one with game over message
- A game rules page
- A game settings page
- A contact form
- A 404 page

### Wireframes

<details><summary>Start screen</summary>
<img src="docs/wireframes/start-screen.png">
</details>
<details><summary>Game screen</summary>
<img src="docs/wireframes/game-screen.png">
</details>
<details><summary>Correct screen</summary>
<img src="docs/wireframes/correct-screen.png">
</details>
<details><summary>Game over screen</summary>
<img src="docs/wireframes/game-over-screen.png">
</details>
<details><summary>Contact Us</summary>
<img src="docs/wireframes/contact-us.png">
</details>
<details><summary>Form confirmation</summary>
<img src="docs/wireframes/form-confirmation.png">
</details>
<details><summary>404 page</summary>
<img src="docs/wireframes/404-page.png">
</details>

## Technologies Used

### Languages
- HTML
- CSS
- JavaScript

### Frameworks & Tools
- Git
- GitHub
- Gitpod
- Balsamiq
- Font Awesome
- Favicon<span>.</span>io
- JSHint
- Lighthouse
- W3C Markup validation service
- W3C Jigsaw CSS validation service 
- WAVE WebAIM web accessibility evaluation tool
- Random Word API
- Dictionary API
- EmailJS

## Features
The site consists of six pages and nine features

### Header
- Featured on all pages
- Consists of the game logo and game title

<details><summary>Header</summary>
<img src="docs/features/feature-heading.jpg">
</details>

### Footer
- Featured on all pages
- Consists of a section providing social media links and a link to the contact form
- User story covered: 8

<details><summary>Footer</summary>
<img src="docs/features/feature-footer.jpg">
</details>

### Start screen
- Provides an option to choose between three different game difficulties.
- User story covered: 1

<details><summary>Start screen</summary>
<img src="docs/features/feature-start-screen.jpg">
</details>

### Game screen
- Consists of 6 different sections:
    - Game difficulty that is currently being played
    - A section with the current score and the h-score
    - An image that shows how many moves are left in the game round
    - The theme of the current phrase to be guessed
    - The phrase to be guessed represented with underscores that switch to letters after each correct guess
    - Alphabet buttons
    - User stories covered: 2, 3

<details><summary>Game screen</summary>
<img src="docs/features/feature-game-screen.jpg">
</details>

### Game over screen
- Consists of three sections
    - A section with the current score and the h-score
    - The game over message with a picture of a sad bee
    - Buttons to chose what to do next
    - User stories covered: 4

<details><summary>Game Over Screen</summary>
<img src="docs/features/feature-game-over-screen.jpg">
</details>

### Correct guess screen
- Consists of four sections
    - Game difficulty that is currently being played
    - A section with the current score and the h-score
    - The congratulatory message with a picture of a happy bee
    - Buttons to chose what to do next
    - User story covered: 5

<details><summary>Correct Guess screen</summary>
<img src="docs/features/feature-correct-screen.jpg">
</details>

### Contact form
- A way for the user to provide feedback
- User story covered 7 

<details><summary>Contact Form</summary>
<img src="docs/features/feature-contact-form.jpg">
</details>

### Form confirmation
- Provides the user with feedback after the form has been submitted and a button to return to the game
- User story covered: 6

<details><summary>Form confirmation</summary>
<img src="docs/features/feature-form-confirmation.jpg">
</details>

### 404 message
- Provides the user with a way to return to the game after clicking on a broken link

<details><summary>404 message</summary>
<img src="docs/features/feature-404.jpg">
</details>

## Validation

### HTML Validation
The W3C Markup Validation Service was used to validate the HTML of the website. All pages pass with no errors no warnings to show.
<details><summary>Home</summary>
<img src="docs/validation/HTML_validation_index.png">
</details>
<details><summary>Game Page</summary>
<img src="docs/validation/HTML_validation_game.png">
</details>
<details><summary>Settings</summary>
<img src="docs/validation/HTML_validation_settings.png">
</details>
<details><summary>Rules</summary>
<img src="docs/validation/HTML_validation_rules.png">
</details>
<details><summary>Contact Us</summary>
<img src="docs/validation/HTML_validation_contact.png">
</details>
<details><summary>404</summary>
<img src="docs/validation/HTML_validation_404.png">
</details>

### CSS Validation
The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website. When validating the CSS it passes with no errors.

<details><summary>Full page</summary>
<img src="docs/validation/CSS_validation.png">
</details>

### JavaScript Validation
JSHint Static Code Analysis Tool for JavaScript was used to validate the Javascript files. No significant issues were found.
<details><summary>index.js</summary>
<img src="docs/validation/JS_validation_index.png">
</details>
<details><summary>settings.js</summary>
<img src="docs/validation/JS_validation_settings.png">
</details>
<details><summary>contact.js</summary>
<img src="docs/validation/JS_validation_contact.png">
</details>

### Accessibility
The WAVE WebAIM web accessibility evaluation tool was used to ensure the website met high accessibility standards. All pages pass with 0 errors.

<details><summary>Home</summary>
<img src="docs/validation/WAVE_validation_index.png">
</details>
<details><summary>Game</summary>
<img src="docs/validation/game.png">
</details>
<details><summary>Settings</summary>
<img src="docs/validation/WAVE_validation_settings.png">
</details>
<details><summary>Rules</summary>
<img src="docs/validation/WAVE_validation_rules.png">
</details>
<details><summary>Contact</summary>
<img src="docs/validation/WAVE_validation_contact.png">
</details>
<details><summary>404</summary>
<img src="docs/validation/WAVE_validation_404.png">
</details>

### Performance 
Google Lighthouse in Google Chrome Developer Tools was used to test the performance of the website.

<details><summary>Home</summary>
<img src="docs/validation/lighthouse_validation_index.png">
</details>
<details><summary>Game</summary>
<img src="docs/validation/lighthouse_validation_game.png">
</details>
<details><summary>Settings</summary>
<img src="docs/validation/lighthouse_validation_settings.png">
</details>
<details><summary>Rules</summary>
<img src="docs/validation/lighthouse_validation_rules.png">
</details>
<details><summary>Contact</summary>
<img src="docs/validation/lighthouse_validation_contact.png">
</details>
<details><summary>404</summary>
<img src="docs/validation/lighthouse_validation_404.png">
</details>

### Performing tests on various devices 
The website was tested on the following devices:

- Lenovo Yoga 2 Pro (both in pc and tablet mode)
- Honor 20 pro
- Xiaomi Redmi Note 7

In addition, the website was tested using the Google Chrome Developer Tools Device Toggling option for all available device options.

### Browser Compatability
The website was tested on the following browsers:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge

### Testing user stories

1. As a user, I want to be able to pick a difficulty for the game

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Start screen | Click on the desired difficulty | The games screen loads with the desired difficulty | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-1.jpg">
</details>

2. As a user, I want to test my general knowledge by guessing different phrases

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Game screen | Click the alphabet buttons or use your keyboard to guess letters and reveal the correct answer | Either the phrase displayed or the image change depending on if your guess is correct or wrong | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-2.jpg">
</details>

3. As a user, I want to be able to pick the letters both by clicking the mouse and by using the keyboard

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Game screen | Click the alphabet buttons or use your keyboard | The used letters change color and can't be picked a second time | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-3.jpg">
</details>

4. As a user, I want to know what the correct phrase was in case I don't guess it correctly

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Game over screen | Run out of moves | The game over screen with the correct answer is displayed | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-4.jpg">
</details>

5. As a user, I want feedback on my correct answers

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Correct guess screen | Complete the phrase before you run out of moves | The correct message is displayed | works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-5.jpg">
</details>

6. As a user, I want confirmation that my feedback was sent

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Form confirmation | Fill out the contact form and click the submit button | A thank you message is displayed | Works as expected | 

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-6.jpg">
</details>

7. As a site owner, I want users to be able to contact us or make suggestions for new phrases.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Contact form | Scroll down to the footer section and click the contact us link | Displays the contact form | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-7.jpg">
</details>

8. As a site owner, I want users to be able to find us on social media.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Footer | Scroll down to the footer section | See social media links | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-8.jpg">
</details>

## Bugs

| **Bug** | **Fix** |
| ----------- | ----------- |
| The score doesn't reset after the game is restarted | Add score reset to showStartScreen function |
| The phrase that needs to be guessed jumps around after each correct letter picked | Change font to monospace |
| On the correct screen, the total score is shown instead of the round score | Set the HTML to roundScore instead of score |
| Checking correct guess is not working for uppercase letters when clicking keyboard | call the toUpperCase function on key |
| The game container is not centered for some screen sizes | Using Bootstrap center the container for all screen sizes |
| Alphabet buttons don't change color after they are clicked | Remove the my-btn class after the click event is fired |
| Social media links are not visible on contact and 404 page | Add missing FontAwesome kit to the pages |
| On some tablets, whitespace below the footer appears | Add CSS to make the pages min-height: 100vh and allow the main element to grow, but not to shrink |
| The contact page has overflow on smaller screen sizes | Change padding and margin sizes for smaller screens |

## Deployment
The website was deployed using GitHub Pages by following these steps:
1. In the GitHub repository navigate to the Settings tab
2. On the left-hand menu select Pages
3. For the source select Branch: master
4. After the webpage refreshes automatically you will ses a ribbon on the top saying: "Your site is published at https://4n4ru.github.io/CI-P2-GuessingBee/

You can fork the repository by following these steps:
1. Go to the GitHub repository
2. Click on Fork button in the upper right hand corner

You can clone the repository by following these steps:
1. Go to the GitHub repository 
2. Locate the Code button above the list of files and click it 
3. Select if you prefer to clone using HTTPS, SSH, or Github CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash
5. Change the current working directory to the one where you want the cloned directory
6. Type git clone and paste the URL from the clipboard ($ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY)
7.Press Enter to create your local clone.

### EmailJS API
1. Create an account at emailjs.com
2. Add new email service, make note of the contact_service id
3. Add a new email template, make note of the contact_form id
4. Go the the integration dashboard, make note of your user id
5. Load the EmailJS SDK in the head of your HTML file
6. In JavaScript create a function that listens to a submit event and then initializes the SDK with your user id (emailjs.init('YOUR_USER_ID');) and submits the form (emailjs.sendForm('contact_service', 'contact_form', this);)

## Credits

### Media
- [Sound Effect]('assets/sounds/correct_soundEffect.mp3'): <a href='https://www.dreamstime.com/royalty-free-sound-fx-correct-ding-correct-answer-ding-designed-games-apps-audio137523215'>Correct answer ding</a>

### Code


## Acknowledgments
I would like to take the opportunity to thank:
- My mentor Mo Shami for his feedback, advice, guidance and support.
