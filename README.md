#Action on Google Extension

The purpose of this extension is to show how reputable a brand is using the Google Knowledge Graph API. It allows users to get a ranked list of the most notable entities that match certain criteria. This is conveyed as a numeric value for the EntitySearchResult property resultScore. 

Creating this extension was a part of my Continuous Improvement Program for Accenture. My team lead has kindly provided me with his code for the above functionality. The task here is to convert the working HTML file into a Chrome extension with appropriate styling.


I first used my codes from a previous project, the Knowledge Graph Search Widget to create the base for this project. Next, an extension template from the official Developer Google Chrome documentation was added to give me an idea of how a chrome extension was supposed to look. 

Afterwards, it was a matter of cleaning up codes, adding extra features, styling CSS and debugging the occasional typo. The main error I had was the content_security_policy as it doesn't allow the extension to pull data from outside sources. To bypass this, a line of code was added to the manifest.json to relax the security. 

The chrome extension was functional at the end but it had a major flaw whereby I committed with the API Key inside. Immediately, I changed the repository to private, deleted the API key via Google Cloud and created a new one. 

Next, I had to figure out a way to delete option.js and erase the data was already public through the previous commit to Github. Ultimately,I found what I was looking in Stack Overflow and used this line of code: git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch config.js' to solve the issue. 

Reference:

https://developers.google.com/knowledge-graph/how-tos/search-widget
https://developer.chrome.com/extensions/getstarted
https://developers.google.com/knowledge-graph/reference/rest/v1/
https://developer.chrome.com/extensions/contentSecurityPolicy
https://developer.chrome.com/extensions/samples
https://stackoverflow.com/a/28772827

