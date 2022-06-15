var config = {
    style: 'mapbox://styles/kristinhenry/ckge1zcnx07af19li1cok92hk',
    accessToken: 'pk.eyJ1Ijoia3Jpc3RpbmhlbnJ5IiwiYSI6ImNraWNqNW5lNTBubzUydG11eGF2bHE5aDMifQ.cPGLKZHaX9OrGK6632hD1A',
    showMarkers: false,
    testing: true,
    theme: 'dark',
    title: 'Stickers And Stamps',
    subtitle: 'A Penpal Data-Art Project',
    byline: '',
    footer: 'Stickers, Data Collection, and Data Visualization by <a href="http://kristinhenry.github.io/">Kristin Henry</a>, 2020-2022',
    chapters: [
        {
            id: 'intro',
            alignment: 'center',
            title: "Before Covid hit, I made a bunch of stickers to give away at conferences and shows.",
            image: 'lotsOfStickers.jpg',
        description: "But they all were cancelled...because of Covid. What was I going to do with all these stickers?<br /><br />At the same time, our USPS was under attack. I needed to do something, no matter how small.<br /><br />I started mailing stickers to friends, and asked them to tell me when they arrived.<br /><br />After a few weeks, I had a small, but promising, date set.<br /><br />So I opened up signups to the general public, and started mailing more of my stickers.",
            location: { 
                center: [-2.44486, 27.77139],
                zoom: 1.2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'mail-circles',
                    opacity: 0
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
                    opacity: 0
                }
            ]
        }, 
        {
            id: 'intro2',
            alignment: 'center',
            // title: '',
        description: "Some more text here",
            location: { 
                center: [-2.44486, 27.77139],
                zoom: 1.2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'mail-circles',
                    opacity: 0
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
                    opacity: 0
                }
            ]
        },               
        {
            id: 'intro7',
            alignment: 'center',
            title: '',
            description: 'How long did it take for my letters to reach their destinations? Most of my letters were delivered in the US in 2–4 days.',
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
            ]
        },
        {
            id: 'intro4',
            alignment: 'center',
            title: '',
            description: 'The distance an envelope traveled, did not correspond with how long it took to be delivered.',
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
            description: 'Well, it sure does look like distance alone does not determine how long it will take for a letter to travel from San Francisco to another location in the United States. This is not surprising, given the interference with the USPS recently. <br/><br/>But can we actually see traces of this interference in our project? Can we bring personal experience back into the story? Where did I send my letters? How long did it take to get there? Time to plot some  data on a map… ',
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
            description: 'Being less densely populated, the western states have fewer sorting centers than Eastern states.<br/><br/>Note that not all sorting centers are shown on this map. Only the sorting centers that my letters passed through are shown.',
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
        // {
        //     id: 'zips',
        //     alignment: 'left',
        //     title: 'Your Zipcode?',
        //     image: '',
        //     description: "What's going on in your zip code?",
        //     location: {
        //         center: [-110.44486, 34.77139],
        //         zoom: 2.6,
        //         pitch: 14.00,
        //         bearing: 0.00
        //     },
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
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
