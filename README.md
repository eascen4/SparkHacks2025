<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![project_license][license-shield]][license-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/eascen4/TradeSpark">
    <img src="images/compass-rose.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">TradeSpark</h3>

  <p align="center">
    A service designed to simplify the class trading process. 
    <br />
    <br />
    <a href="https://devpost.com/software/tradespark">View Devpost</a>
    &middot;
    <a href="https://github.com/eascen4/TradeSpark/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/eascen4/TradeSpark/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The current process for finding students to exchange courses with is difficult. There isn't a dedicated process to finding other people to trade classes with, so we wanted to create something to solve that issue.

This project was created as a group submission for the SparkHacks 2025 hackathon @ University of Illinois at Chicago. The project is not fully deployed at this current time.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![React][React.js]][React-url]
* [NodeMailer](https://www.nodemailer.com/)
* [shadcn](https://ui.shadcn.com/)
* [Tailwind CSS](https://tailwindcss.com/)
* [TanStack](https://tanstack.com/)
* [![TypeScript][TypeScript-shield]][Typescript-url]
* [![Vite][Vite-shield]][Vite-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You will need to install Node.js (20.18.2 LTS).

  ```sh
  # Download and install nvm:
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

  # Download and install Node.js:
  nvm install 20

  # Verify the Node.js version:
  node -v # Should print "v20.18.2".
  nvm current # Should print "v20.18.2".
  
  # Verify npm version:
  npm -v # Should print "10.8.2".
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/eascen4/TradeSpark.git
   ```
2. `cd` into `client`
   ```sh
   cd client
   ```
3. Install packages by running the following command
   ```js
   npm i
   ```
4. Repeat with `server`
   ```sh
   cd ../server
   npm i
   ```
5. Run the file in client
   ```sh
   cd ../client
   npm run dev
   ```
   
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/eascen4/TradeSpark/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=eascen4/TradeSpark" alt="contrib.rocks image" />
</a>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Sammy Patel - spate797@uic.edu
<br />
Jovan Gvero - jgver@uic.edu
<br />
Elias Ascencio - eascen4@uic.edu
<br />
Jason Park - jpark421@uic.edu
<br />

Project Link: [https://github.com/eascen4/TradeSpark](https://github.com/eascen4/TradeSpark)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [SparkHacks 2025](https://www.sparkhacks.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/eascen4/TradeSpark.svg?style=for-the-badge
[contributors-url]: https://github.com/eascen4/TradeSpark/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/eascen4/TradeSpark.svg?style=for-the-badge
[forks-url]: https://github.com/eascen4/TradeSpark/network/members
[stars-shield]: https://img.shields.io/github/stars/eascen4/TradeSpark.svg?style=for-the-badge
[stars-url]: https://github.com/eascen4/TradeSpark/stargazers
[issues-shield]: https://img.shields.io/github/issues/eascen4/TradeSpark.svg?style=for-the-badge
[issues-url]: https://github.com/eascen4/TradeSpark/issues
[license-shield]: https://img.shields.io/github/license/eascen4/TradeSpark.svg?style=for-the-badge
[license-url]: https://github.com/eascen4/TradeSpark/blob/master/LICENSE.txt
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript-shield]: https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square
[TypeScript-url]: https://www.typescriptlang.org/
[Vite-shield]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white
[Vite-url]: https://vite.dev/
