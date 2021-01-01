var config = {
    style: 'mapbox://styles/kristinhenry/ckge1zcnx07af19li1cok92hk',
    accessToken: 'pk.eyJ1Ijoia3Jpc3RpbmhlbnJ5IiwiYSI6ImNraWNqNW5lNTBubzUydG11eGF2bHE5aDMifQ.cPGLKZHaX9OrGK6632hD1A',
    showMarkers: false,
    testing: true,
    theme: 'dark',
    title: 'Stickers And Stamps',
    subtitle: 'A Bright Spot in 2020',
    byline: '',
    footer: 'Stickers, Data Collection, and Data Visualization by <a href="http://kristinhenry.github.io/">Kristin Henry</a>, 2020',
    chapters: [
        {
            id: 'intro',
            alignment: 'center',
            title: '',
            // image: 'lotsOfStickers.jpg',
            description: '2020 has been a rough year in so many ways. The relentless news cycle, ubiquitous uncertainty,  social isolation, existential dread, and so much more. All amplified by social media.<br /><br />The attack on the US Postal Service hit me harder than I expected it to. I felt driven to buy as many stamps as I could, to support the USPS.',
            location: {
                center: [-2.44486, 27.77139],
                zoom: 1.2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'mail-circles',
                    opacity: .025
                },
                {
                    layer: 'mail-centers',
                    opacity: 0
                }
                ,
                {
                    layer: 'mail-center-lines',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'mail-circles',
                    opacity: .01
                }
            ]
        },
        {
            id: 'intro1',
            alignment: 'center',
            title: '',
            image: 'lotsOfStickers.jpg',
            description: 'At some point, I found myself staring at the pile of art stickers I was going to give away at conferences and shows…all cancelled because Covid.<br/><br/>What was I going to do with them? Could I mail them to people? <br/><br/>I started with a little group of artist-friends and set up an online signup form, so they could send me their mailing addresses privately.',
            location: {
                center: [-2.44486, 27.77139],
                zoom: 1.2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'mail-circles',
                    opacity: .025
                },
                {
                    layer: 'mail-centers',
                    opacity: 0
                }
                ,
                {
                    layer: 'mail-center-lines',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'mail-circles',
                    opacity: .01
                }
            ]
        },
        {
            id: 'intro2',
            alignment: 'center',
            title: '',
            image: 'ruthAsawaStamps.jpg',
            description: 'With perfect timing, the USPS was about to release new stamps honoring local artist Ruth Asawa, just as I was launching an art+data project from right in her neighborhood.<br><br>',
            location: {
                center: [-2.44486, 27.77139],
                zoom: 1.2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'mail-circles',
                    opacity: .025
                },
                {
                    layer: 'mail-centers',
                    opacity: 0
                }
                ,
                {
                    layer: 'mail-center-lines',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'mail-circles',
                    opacity: .01
                }
            ]
        },
        
        {
            id: 'intro3',
            alignment: 'center',
            title: '',
            description: 'The process of writing little notes and addressing the envelopes by hand was surprisingly soothing. I started inviting more people to signup, and asked them to tell me when their sticker arrived. Before I knew it, I had a tiny data set of delivery times for US mail. By profession, I develop data visualizations. So, of course I started charting the data. <br /><br />Patterns started emerging very early: <ul><li>Distance from San Francisco did not seem to indicate delivery time.</li><li>Most US mail arrived in 2-4 days</li><li>But slow mail in the US, was very slow.</li><li> Letters to Canada were slower to arrive than most US letters.</li></ul>',
            location: {
                center: [-2.44486, 27.77139],
                zoom: 1.2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'mail-circles',
                    opacity: .025
                },
                {
                    layer: 'mail-centers',
                    opacity: 0
                }
                ,
                {
                    layer: 'mail-center-lines',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'mail-circles',
                    opacity: .01
                }
            ]
        },
        {
            id: 'intro5',
            alignment: 'center',
            title: '',
            description: 'Over the months, more and more folks signed up from across the US and around the world',
            location: {
                center: [-2.44486, 27.77139],
                zoom: 1.2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'mail-circles',
                    opacity: .025
                },
                {
                    layer: 'mail-centers',
                    opacity: 0
                }
                ,
                {
                    layer: 'mail-center-lines',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'mail-circles',
                    opacity: .01
                }
            ]
        },
        {
            id: 'intro6',
            alignment: 'center',
            title: '',
            description: 'These charts may not be pretty, but they speak volumes to me. Yes, I love scatter plots! Especially when I start digging into data.<br/><br/>These show me that the distance an envelope travels through the US does not predict when it will arrive. Most arrive in 2–4 days, but some take a lot longer. The international destinations add interesting context. For one of my US recipients, it looks like it took longer than the journey of another envelope of mine to reach Australia.',
            location: {
                center: [-2.44486, 27.77139],
                zoom: 1.2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'mail-circles',
                    opacity: .025
                },
                {
                    layer: 'mail-centers',
                    opacity: 0
                }
                ,
                {
                    layer: 'mail-center-lines',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'mail-circles',
                    opacity: .01
                }
            ]
        },
        {
            id: 'intro7',
            alignment: 'center',
            title: '',
            description: 'In the scatter plot, above, a lot of points are right on top of each other, making it tricky to see how many there were. A histogram can help with that, this one shows how many envelopes arrived in each time bracket. Most of my letters were delivered in the US in 2–4 days, with most arriving in three days.',
            location: {
                center: [-2.44486, 27.77139],
                zoom: 1.2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'mail-circles',
                    opacity: .025
                },
                {
                    layer: 'mail-centers',
                    opacity: 0
                }
                ,
                {
                    layer: 'mail-center-lines',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'mail-circles',
                    opacity: .01
                }
            ]
        },
        {
            id: 'intro4',
            alignment: 'center',
            title: '',
            description: 'While the histogram is interesting, the most common delivery time dominates the chart. It does not reveal as much about our outliers…the envelopes that arrived later than the expected time of 2–4 days. To me, these are more visible in a less conventional dual axis chart with curved links.<br/><br/>In this chart, each line represents an envelope I mailed from San Francisco to another address in the US. The more orange the line, the longer it took that envelope to arrive.',
            location: {
                center: [-2.44486, 27.77139],
                zoom: 1.2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'mail-circles',
                    opacity: .025
                },
                {
                    layer: 'mail-centers',
                    opacity: 0
                }
                ,
                {
                    layer: 'mail-center-lines',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'mail-circles',
                    opacity: .01
                }
            ]
        },
        {
            id: 'intro8',
            alignment: 'center',
            title: '',
            description: 'Well, it sure does look like distance alone does not determine how long it will take for a letter to travel from San Francisco to another location in the United States. This is not surprising, given the interference with the USPS this year. <br/><br/>But can we see traces of this interference in our project? Can we bring personal experience back into the story? Where did I send my letters? How long did it take to get there? Time to plot some  data on a map… ',
            location: {
                center: [-2.44486, 27.77139],
                zoom: 1.2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'mail-circles',
                    opacity: .025
                },
                {
                    layer: 'mail-centers',
                    opacity: 0
                }
                ,
                {
                    layer: 'mail-center-lines',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'mail-circles',
                    opacity: .01
                }
            ]
        },
        {
            id: 'europe',
            alignment: 'left',
            title: 'International Mail',
            image: '',
            description: 'International mail, as expected, takes longer than most domestic mail.<br/><br/>And it takes a very long time for it to get to Australia.',
            location: {
                center: [-2.44486, 27.77139],
                zoom: 1.2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'mail-centers',
                    opacity: 0
                }
                ,
                {
                    layer: 'mail-center-lines',
                    opacity: 0
                },
                {
                    layer: 'mail-circles',
                    opacity: .05
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'usmail',
            alignment: 'left',
            title: 'Domestic USPS Mail',
            image: '',
            description: 'Delivery times of domestic mail varies quite a bit.<br/><br/>These dots represent individual letters I have mailed. The color represents the number of days it took to arrive. The more orange, the more days.',
            location: {
                center: [-110.44486, 34.77139],
                zoom: 2.6,
                pitch: 14.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'mail-center-lines',
                    opacity: 0
                },
                {
                    layer: 'mail-centers',
                    opacity: 0
                },
                {
                    layer: 'mail-circles',
                    opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'usmail2',
            alignment: 'left',
            title: 'USPS Sorting Centers',
            image: '',
            description: 'The US Postal Service contains many regional sorting centers. Your mail going in and out through the center that serves your zip code.<br/><br/>Some areas have several sorting centers nearby, and others are served by sorting centers in another state! <br/><br/>Here, the sorting centers my letters have passed through are drawn as open circles. The lines connect the town where the letter was delivered to the regional sorting center.',
            location: {
                center: [-110.44486, 34.77139],
                zoom: 2.6,
                pitch: 14.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'mail-center-lines',
                    opacity: 1
                },
                {
                    layer: 'mail-centers',
                    opacity: 1
                },
                {
                    layer: 'mail-circles',
                    opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'phoenix1',
            alignment: 'left',
            title: 'Zooming in',
            image: '',
            description: 'My data set is small, but even with approximately 300 letters (data points), we can already see that some sorting centers deliver promptly. Others do not. If I had more data, I could possibly dismiss some of the slow deliveries from centers that are usually quick. Or maybe it differs by zipcode? I may look at that, if I get more participants. ',
            location: {
                center: [-112.0740, 33.4484],
                zoom: 4,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [
                {
                    layer: 'mail-center-lines',
                    opacity: 1
                },
                {
                    layer: 'mail-centers',
                    opacity: 1
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'phoenix2',
            alignment: 'left',
            title: 'Phoenix',
            image: '',
            description: 'All but one letter I sent to Arizona arrived on the late side.',
            location: {
                center: [-112.0740, 33.4484],
                zoom: 5.92,
                pitch: 51.50,
                bearing: -26.40
            },
            onChapterEnter: [
             {
                    layer: 'mail-circles',
                    opacity: 0
                },
                {
                    layer: 'mail-center-lines',
                    opacity: 1
                },
                {
                    layer: 'mail-centers',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'denver1',
            alignment: 'left',
            title: 'Western States',
            image: '',
            description: 'Being less densely populated, the western states have fewer sorting centers than Eastern states.',
            location: {
                center: [-104.9903, 39.7392],
                zoom: 4,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [
                {
                    layer: 'mail-center-lines',
                    opacity: 1
                },
                {
                    layer: 'mail-centers',
                    opacity: 1
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'denver2',
            alignment: 'left',
            title: 'Denver, CO',
            image: '',
            description: 'Denver has some prompt deliveries and some slow ones, and these are all passing through the same sorting center.',
            location: {
                center: [-104.9903, 39.7392],
                zoom: 5.92,
                pitch: 51.50,
                bearing: -26.40
            },
            onChapterEnter: [
                {
                    layer: 'mail-center-lines',
                    opacity: 1
                },
                {
                    layer: 'mail-centers',
                    opacity: 1
                }

            ],
            onChapterExit: []
        },
        {
            id: 'dc1',
            alignment: 'left',
            title: 'East Coast',
            image: '',
            description: 'So many sorting centers, and slow sorting centers right next to prompt centers.',
            location: {
                center: [-77.0369, 38.9072],
                zoom: 5.92,
                pitch: 51.50,
                bearing: -26.40
            },
            onChapterEnter: [
               {
                    layer: 'mail-center-lines',
                    opacity: 1
                },
                {
                    layer: 'mail-centers',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    // layer: 'gnpglaciers-2015',
                    // opacity: 0
                }
            ]
        },
        {
            id: 'dc2',
            alignment: 'left',
            title: 'DC Area',
            image: '',
            description: 'This view has a lot going on. On my ToDo list: get more relevant data on this area.<br/><br/>USPS sorting centers are assigned by zip code, so there should be a lot of relevant data to work with.',
            location: {
                center: [-77.0369, 38.9072],
                zoom: 6.51,
                pitch: 41.00,
                bearing: 78.33
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'intro6',
            alignment: 'center',
            title: '',
            description: 'From the beginning, this project has been a combination of modern technology and personal tangible hand-written notes in hand-addressed envelopes and modern technology. Participants sign up with a google-form, which I can then move to a spreadsheet for tracking when mail is sent and recieved (communicated by email).<br><br>But, for me, the greatest treasures of this project have been the little gifts and drawings that people send back to me. Especially drawings from children!',
            location: {
                center: [-2.44486, 27.77139],
                zoom: 1.2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'mail-circles',
                    opacity: .025
                },
                {
                    layer: 'mail-center-lines',
                    opacity: 1
                },
                {
                    layer: 'mail-centers',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'mail-circles',
                    opacity: .01
                }
            ]
        },
        {
            id: 'closing',
            alignment: 'center',
            title: 'The project continues:',
            image: '',
            description: '<ul><li><a href="https://forms.gle/5KpX1yWLr5TnKorK9">Sign up</a> to get a sticker and help fill in more of this map</li><li>Updates and Work-in-progress <a href="https://www.patreon.com/KristinHenry/posts?filters%5Btag%5D=Stickers%20%26%20Stamps">posts</a></li><li><a href="https://kristinhenry.medium.com/stickers-and-stamps-project-faq-505f7d85e79d">Frequently Asked Questions</a></li><li>Static version of this <a href="https://kristinhenry.medium.com/stickers-and-stamps-a-bright-spot-in-2020-d3011afefa09">story, on Medium</a>.</li></ul>',
            location: {
                center: [-82.44486, 37.77139],
                zoom: 3,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'mail-center-lines',
                    opacity: 0
                },
                {
                    layer: 'mail-centers',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    // layer: 'gnpglaciers-2015',
                    // opacity: 0
                }
            ]
         }
    ]
};
