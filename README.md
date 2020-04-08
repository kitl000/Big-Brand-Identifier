#Action on Google Extension

The purpose of this extension is to show how reputable a brand is using the
Google Knowledge Graph API. It allows users to get a ranked list of the most notable entities that match certain criteria. This is conveyed as a numeric value for the EntitySearchResult property resultScore. 

Creating this extension is a part of my Continuous Improvement Program for Accenture. My team lead has kindly provided me with his code for the above functionality. The task here is to convert the working HTML file into a Chrome extension with appropriate styling.


I first used my codes from my previous project, the Knowledge Graph Search Widget to create the base for this project. Next, an extension template from the official Developer Google Chrome documentation was added to give me an idea of how a chrome extension is suppose to look. 

Afterwards, it's a matter of cleaning up codes, adding extra features and sorting files into folders not used from the extension template. The main error i had was the content_security_policy as it doesn't allow the extension to pull data from outside sources. To bypass this, i added a line of code in the manifest.json to relax the security. 

The chrome extension was functional at the end but it had a major flaw whereby i committed with the API Key inside. Immediately, i changed the repository to private, deleted the API key via Google Cloud and created a new one. 

Next, i had to figure out a way to delete option.js and erase the data from Github. I found what i was looking in Stack Overflow and used this line of code: git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch config.js'. 

Reference:

https://developers.google.com/knowledge-graph/how-tos/search-widget
https://developer.chrome.com/extensions/getstarted
https://developers.google.com/knowledge-graph/reference/rest/v1/
https://developer.chrome.com/extensions/contentSecurityPolicy
https://developer.chrome.com/extensions/samples
https://stackoverflow.com/a/28772827

