# Notes on developing my first Browser Extension (screenDatify)

* This is a preview of my notes-- **please don't share link yet!**


## Goal: Collect screenshots and associated data for ads on youtube

* There are screenshot tools already out there, but I wanted one that did some additional data collection.

* Wanted: screenshot with date collected and video ID in the filename of the image file.

* Why? Because I've been collecting data on what advertisements show up on Randy Rainbow videos (and other videos, for comparison).

* to replace part of the manual method the project started with.

* Originally, I wanted to collect the data with youtube-dl, and the python scripts I've been using to collect other data from youtube. But youtube doesn't 'support' downloading the advertisements with the videos. So I had to come up with another way to get the ads.


## Project History

* I saw Randy Rainbow (youtube commedian-star) in a live show, and was so impressed with his videos I was curious how he started out. How did his style develop.

* I searched on youtube for his videos, going back 10 years, and started collecting data on them...date published, view counts, is it a song-parody?

* I created a whimsical visualization of some of the data I collected, including some simple language analysis (with NLTK, and python) of video transcripts. http://kristinhenry.github.io/randyRainbow.html

* Randy Rainbow continues to release new videos every few weeks. When he releases a new video, I add it to my list and collect updated view counts for each video. I've modified the code for the visualization to make it easier for me to update with each new video.

* Visiting all these videos, I started noticing something strange about the ads that youtube pages display before and during the videos. It seemed like a lot of the ads were pro-trump, which seemed very strange for videos of comedy making fun of him. It seemed like the ads were aimed at the completely wrong audience.

* Was it just a matter of perception? Did they stick out, so I noticed them more? Or were there really as many as it seemed, especially compared to other ads on the videos.

* So I started taking screenshots of the videos and the ads I would see in them. It was a time consuming manual process, and I would include the video ID and date/time the screenshot waas taken. 

* After a few weeks of collecting screenshots and identifying ads, I started tabulating the data. I wasn't immagining the frequency of ads. There really were a lot of them. My first sampling, over a few days of collecting, about a third of ads were pro-trump.

* But this was such a small sample, about 1,000 screenshots (each screenshot represented a 'view' of a video). I need a lot more data, and from different video makers.

* The manual data collection is just too time consuming and tedious.

* So, I decided to build a web-browser plugin-extension adding a button to my browser that takes a screenshot and saves the file with the time-date-of-the-screenshot and the video ID as the title of the image file.

* And here we are. It works, at least for me. The development process was frustrating, and not nearly as fun as most coding projects I work on. But, it works, and greatly speeds up the data collection process.



## Challenges

* Most challenges came from lack of essential documentation. 

* Most documentation assumed reader was already experienced with developing browser extensions.

* It was tricky to piece together all the information I needed, from up-to-date resources.
	* A lot of documentation was incomplete or out of date.
	* Found most essential details in comments of stack-overflow posts.

* Lack of clear explanations of what could be in background scripts and what could be in content scripts. 

