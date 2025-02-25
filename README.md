<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Tarif24/Job_Listing_Website_React">
    <img src="assets/tab-logo.png" alt="Logo" width="240" height="240">
  </a>

  <h3 align="center">Job Listing API</h3>

  <p align="center">
    A job listing API that allows you to Create, Read, Update, and Delete job listings
    <br />
    <br />
    ALL LIVE LINKS ARE TO THE JOB LISTING WEBSITE WHERE THE API IS USED
    <br />
    <br />
    <br />
    <a href="https://joblisting.tarifmohammad.com/">View Demo</a>
    &middot;
    <a href="https://github.com/Tarif24/Job_Listing_Website_API/issues/new">Report Bug</a>
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
        <li><a href="#hosted-with">Hosted With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#routes">Routes</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Screen Shot][product-screenshot]][Live-Demo]

This project is a job listing API that I have used in my job listing react project. It is built with Node.JS, Express.JS and MongoDB. This being my first API/Backend project it was a great leaning experience and just a great experience in general, making my first API and hosting it made me feel amazing it was great to use other API's but to use your own it felt very accomplishing/amazing and the flexabilty was great if I needed to change something that wasent working for me I could do just that.

About The Building Process:

Now let me talk about how I came to make this project since and only because it was my first. While building my job listing website frontend I was using a package to simulate a backend using a json file. Aftwerwards I hosted the frontend for the project I thought it would be very simple to host the json file on a web page and have it act as the backend/database but i was very naive later on when I tried this method nothing seemed to be working, so after I did some digging i realized that I would have to fully buld up a backend for my project for it to work. Then after a couple of days and a few tutorials I had a very basic understanding of backend development and a few more tools under my belt. I probaly could have found a place to upload my json file and act as the backend but I feel like the method I chose was very enjoyable and helped me learn new skills that I will defenitly be using in future projects.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

These are all of the tools used for this project

-   JavaScript
-   Node.JS
-   Express.JS
-   MongoDB

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Hosted With

These are all of the hosting services I used

-   Render: For the Node and Express application (Free)
-   MongoDB: For the database (Free)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This API has job listings that are and can be created, read, updated and deleted by anyone

### Prerequisites

-   No prerequisites at this time

### Routes

<br/>

-   To get all the jobs that are avalible the structure of a job will be down below
-   The Return will be an array of all the jobs

```sh
    https://job-listing-api-84p2.onrender.com/api/job/getAllJobs
```

<br/>
<br/>
-To get a specific job from the list the ID is needed the structure of the job will be down below
-The Return will be the specifc job that has that ID

```sh
https://job-listing-api-84p2.onrender.com/api/job/:ID
```

<br/>
<br/>
*   To create a job a job object is requierd and the structure will be down below
  *   The Return will be the job that was just created

```sh
https://job-listing-api-84p2.onrender.com/api/job/create
```

<br/>
<br/>
*   To update a job a job object is requierd and the structure will be down below and a job id is requierd
  *   The Return will be the job that was just updated

```sh
https://job-listing-api-84p2.onrender.com/api/job/update/:ID
```

<br/>
<br/>
*   To Delete a job a job ID is requierd
  *   The Return will be a confirmation message

```sh
    https://job-listing-api-84p2.onrender.com/api/job/delete/:ID
```

<br/>
<br/>
<br/>
JOB OBJECT STRUCTURE:
<br/>
<br/>

```sh
{
      "title": "",
      "type": "",
      "description": "",
      "location": "",
      "salary": "",
      "company": {
        "name": "",
        "description": "",
        "contactEmail": "",
        "contactPhone": ""
      }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

The usage for this API would be if you ever need a list of job listings

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Tarif Mohammad - [@GitHub](https://github.com/Tarif24) - [@Linkedin](https://www.linkedin.com/in/tarif-mohammad/) - Tarif24@hotmail.com

Project Link: [https://github.com/Tarif24/Job_Listing_Website_API](https://github.com/Tarif24/Job_Listing_Website_API)

Live Link: [https://joblisting.tarifmohammad.com/][Live-Demo]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

This is a list of recources that i found helpful and would like to give credit too

-   [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [Node.JS Documentation](https://nodejs.org/docs/latest/api/)
-   [Express Documentation](https://expressjs.com/)
-   [MongoDB Documentation](https://www.mongodb.com/docs/)
-   [Body Parser](https://expressjs.com/en/resources/middleware/body-parser.html)
-   [Mongoose Documentation](https://mongoosejs.com/docs/)
-   [NodeMon Documentation](https://nodemon.io/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: assets/readme-image.png
[Live-Demo]: https://joblisting.tarifmohammad.com/
