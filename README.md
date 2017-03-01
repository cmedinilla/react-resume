## React-Resume

Simple aplication to create a materialized resume based on a JSON file 

**Live Demo**: https://react-resume-github.herokuapp.com/

JSON File -> src/resume.json

Pre-requisites
-------------

- [Node.js 6.0+](http://nodejs.org)


Getting Started
---------------
The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone --depth=1 https://github.com/cmedinilla/react-resume.git myproject

# Change directory
cd myproject

# Install NPM dependencies
npm install

#run
npm start
```

JSON Structure Example
---------------

```javascript
{
  "about": {
    "name": "Christian Medinilla",
    "legalName": "Christian Ulises Medinilla Arellano",
    "tittle": "Software Developer",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/5/005/04f/2a8/3e44d3c.jpg",
    "profiles": [
      {
        "network": "Email",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/New_Logo_Gmail.svg/1014px-New_Logo_Gmail.svg.png",
        "url": "cris.medinill@gmail.com"
      },
      {
        "network": "LinkedIn",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
        "url": "https://www.linkedin.com/in/christian-medinilla-66346886/"
      },      
      {
        "network": "Github",
        "logo": "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png",
        "url": "https://github.com/cmedinilla"
      }
    ]
  },
  "work": [
    {
      "company": "Hewlett Packard Enterprise",
      "position": "Software Engineer / Tech Lead",
      "activities": "Develop and implement complex solutions in order to improve the business processes in the organization. Lead small development teams.",
      "period": "April 2016 to date"
    },
    {
      "company": "Softtek",
      "position": "Developer",
      "activities": ".Net Developer as consultant in site for HP.",
      "period": "October 2013 to April 2016"
    },    
    {
      "company": "Integra Corp & H Consulting",
      "position": "Developer",
      "activities": "Software Development on GeneXus 9.0, C# & Visual Basic 6.0 as consultant in site for Tuberia Laguna.",
      "period": "May 2012 to October 2013"
    }
  ],
  "education": [
    {
      "institution": "UNID",
      "studyType": "Information Systems Engineer"
    }
  ],
  "skills": [
    "C#",
    "Javascript",
    "jQuery",
    "DevOps",
    "Agile Scrum",
    "MSQL",
    "Jenkins",
    "Bootstrap",
    "PHP",
    "MySQL",
    "Git",
    "Oracle",
    ".Net",
    "ASP .Net",
    "Rest API",
    "ReactJS"
  ],
  "languages": [
    {
      "language": "English",
      "fluency": "Fluenty"     
    },
    {
      "language": "Spanish",
      "fluency": "Native" 
    }
  ]
```