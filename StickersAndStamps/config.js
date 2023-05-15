var config = {
    style: 'mapbox://styles/kristinhenry/ckge1zcnx07af19li1cok92hk',
    accessToken: 'pk.eyJ1Ijoia3Jpc3RpbmhlbnJ5IiwiYSI6ImNraWNqNW5lNTBubzUydG11eGF2bHE5aDMifQ.cPGLKZHaX9OrGK6632hD1A',
    showMarkers: false,
    testing: true,
    theme: 'dark',
    title: 'StickersAndStamps',
    subtitle: 'A Penpal Data-Art Project by Kristin Henry (ArtAtomic)',
    // byline: 'by Kristin Henry (ArtAtomic)',
    footer: '<h2>The project continues, as I keep mailing out letters and adding new data and charts.</h2><h2>Want to help out?</h2><p><a href="https://forms.gle/5KpX1yWLr5TnKorK9">Sign up</a> to get a sticker and help fill in more of this map</p><p><a href="https://kristinhenry.medium.com/data-practice-for-stickers-and-stamps-project-3b68c1eb8e3f">Read about the Data Practice</a> for this project.</p><p>Updates and Work-in-progress <a href="https://www.patreon.com/KristinHenry/posts?filters%5Btag%5D=Stickers%20%26%20Stamps">posts</a></p><p><a href="https://kristinhenry.medium.com/stickers-and-stamps-project-faq-505f7d85e79d">Frequently Asked Questions</a></p><p>Static version of this <a href="https://kristinhenry.medium.com/stickers-and-stamps-a-bright-spot-in-2020-d3011afefa09">story, on Medium</a>.</p><p><a href="https://ko-fi.com/artatomic">Chip in a little and support</a> the expenses of this project.</p><p>Project Ideation, Art, Data Collection, and Data Visualization by <a href="http://kristinhenry.github.io/">Kristin Henry</a>, 2020-2023</p></ul>',
    chapters: [
        {
            id: 'intro',
            alignment: 'center',
            title: "Back in early 2020, Covid changed all of my plans.",
            // image: 'lotsOfStickers.jpg',
        description: "I wasn't sure what to do. I had all these art stickers. I was planning to give them away at conferences. But everything was cancelled.<br/><br/> I started mailing them to friends. Then to folks who signed up from across the country and around the world.<br/><br/> I work with data, so I asked them to tell me when the envelopes arrived. <br/><br/>In the past few years, I've continued to mail my stickers, collect data on how long they take to arrive, and explore different ways to visualize that data and tell this story.",
            location: {
                center: [-42.44486, 27.77139],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'early-letter-glow',
                    opacity: 0
                },
                {
                    layer: 'early-letters',
                    opacity: 0
                },
                {
                    layer: 'early-mail-centers',
                    opacity: 0
                },
                {
                    layer: 'later-letters',
                    opacity: 0
                },
                {
                    layer: 'later-lines',
                    opacity: 0
                },
                {
                    layer: 'later-mail-centers',
                    opacity: 0
                },
                {
                    layer: 'mail-unreported',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    // layer: 'early-letter-glow',
                    // opacity: 1
                }
            ]
        },              
        {
            id: 'intro7',
            alignment: 'center',
            title: 'How long did it take for the first letters to reach their destinations?',
            description: 'Most of my letters were delivered, in the US, within 2–4 days. But many of them took a lot longer.',
            location: {
                center: [-42.44486, 27.77139],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'later-letters',
                    opacity: 0
                },
                {
                    layer: 'later-lines',
                    opacity: 0
                },
                {
                    layer: 'later-mail-centers',
                    opacity: 0
                },
                {
                    layer: 'mail-unreported',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'later-letters',
                    opacity: 0
                },
                {
                    layer: 'later-lines',
                    opacity: 0
                },
                {
                    layer: 'later-mail-centers',
                    opacity: 0
                },
                {
                    layer: 'mail-unreported',
                    opacity: 0
                }
            ]
        },
        {
            id: 'intro4',
            alignment: 'center',
            title: '',
            description: 'The distance an envelope traveled did not correspond with how long it took to be delivered. If it did, the lines in this chart would all be mostly straight up and down.',
            location: {
                center: [-42.44486, 27.77139],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'later-letters',
                    opacity: 0
                },
                {
                    layer: 'later-lines',
                    opacity: 0
                },
                {
                    layer: 'later-mail-centers',
                    opacity: 0
                },
                {
                    layer: 'mail-unreported',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    // layer: 'early-letter-glow',
                    // opacity: .01
                }
            ]
        },
        {
            id: 'intro8',
            alignment: 'center',
            title: 'So, where did my letters go?',
            description: "And how long did they take to arrive? Let's look at a map... ",
            location: {
                center: [-42.44486, 27.77139],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'later-letters',
                    opacity: 0
                },
                {
                    layer: 'later-lines',
                    opacity: 0
                },
                {
                    layer: 'later-mail-centers',
                    opacity: 0
                },
                {
                    layer: 'mail-unreported',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    // layer: 'early-letter-glow',
                    // opacity: 0
                }
            ]
        },
        {
            id: 'europe',
            alignment: 'left',
            title: 'International Mail',
            image: '',
            description: 'As expected, international mail takes longer than most domestic mail.<br/><br/>And it takes a very long time for it to get to Australia.',
            location: {
                center: [-2.44486, 27.77139],
                zoom: 1.2,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'early-letter-glow',
                    opacity: .1
                }
                ,
                {
                    layer: 'early-letters',
                    opacity: 0
                },
                {
                    layer: 'early-lines',
                    opacity: 0
                },
                {
                    layer: 'early-mail-centers',
                    opacity: 0
                },
                {
                    layer: 'later-letters',
                    opacity: 0
                },
                {
                    layer: 'later-lines',
                    opacity: 0
                },
                {
                    layer: 'later-mail-centers',
                    opacity: 0
                },
                {
                    layer: 'mail-unreported',
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
            id: 'usmail',
            alignment: 'left',
            title: 'Domestic USPS Mail',
            image: '',
            description: 'Delivery times of domestic mail varies quite a bit.<br/><br/>These dots represent individual letters I have mailed. The color represents the number of days it took to arrive. The more orange, the more days.<br/><br/>See those orange dots, up in Canada? Crossing the border, and into the Canadian postal service, can be slow.',
            location: {
                center: [-110.44486, 34.77139],
                zoom: 2.6,
                pitch: 14.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'early-letter-glow',
                    opacity: 0.03
                },
                {
                    layer: 'early-letters',
                    opacity: 0.6
                },
                {
                    layer: 'early-lines',
                    opacity: 0
                },
                {
                    layer: 'early-mail-centers',
                    opacity: 0
                },
                {
                    layer: 'later-letters',
                    opacity: 0
                },
                {
                    layer: 'later-lines',
                    opacity: 0
                },
                {
                    layer: 'later-mail-centers',
                    opacity: 0
                },
                {
                    layer: 'mail-unreported',
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
            description: 'The US Postal Service utilizes many regional sorting centers. Your mail goes, in and out, through the center that serves your <b>zip code</b>.<br/><br/>Some areas have several sorting centers nearby, and others are served by sorting centers in another state! <br/><br/>Here, the sorting centers my letters have passed through are drawn as open circles. The lines connect the town where the letter was delivered with the regional sorting center that letter passed through.',
            location: {
                center: [-110.44486, 34.77139],
                zoom: 2.6,
                pitch: 14.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'early-letter-glow',
                    opacity: 0
                },
                {
                    layer: 'early-mail-centers',
                    opacity: .5
                },
                {
                    layer: 'early-lines',
                    opacity: .6
                },
                {
                    layer: 'later-letters',
                    opacity: 0
                },
                {
                    layer: 'later-lines',
                    opacity: 0
                },
                {
                    layer: 'later-mail-centers',
                    opacity: 0
                },             
                {
                    layer: 'mail-unreported',
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
            description: 'By the end of 2020, my data set was still small.  But even with 300 letters (data points), we can already see that some sorting centers deliver promptly. Others do not.<br /><br /> If I had more data, I could possibly dismiss some of the slow deliveries from centers that are usually quick. Or maybe it differs by zipcode? I may look at that, if I get more participants.',
            location: {
                center: [-112.0740, 33.4484],
                zoom: 4,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [
                {
                    layer: 'early-letter-glow',
                    opacity: 0
                },
                {
                    layer: 'later-letters',
                    opacity: 0
                },
                {
                    layer: 'later-lines',
                    opacity: 0
                },
                {
                    layer: 'later-mail-centers',
                    opacity: 0
                },
                {
                    layer: 'mail-unreported',
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
        // {
        //     id: 'phoenix2',
        //     alignment: 'left',
        //     title: 'Phoenix',
        //     image: '',
        //     description: 'All but one letter I sent to Arizona arrived on the late side.',
        //     location: {
        //         center: [-112.0740, 33.4484],
        //         zoom: 5.92,
        //         pitch: 51.50,
        //         bearing: -26.40
        //     },
        //     onChapterEnter: [
        //      {
        //             layer: 'mail-circles',
        //             opacity: 0
        //         },
        //         {
        //             layer: 'mail-center-lines',
        //             opacity: 1
        //         },
        //         {
        //             layer: 'mail-centers',
        //             opacity: 1
        //         }
        //         ,
                // {
                //     layer: 'mail-unreported',
                //     opacity: 0
                // }
        //     ],
        //     onChapterExit: []
        // },
        {
            id: 'denver1',
            alignment: 'left',
            title: 'Western States',
            image: '',
            description: 'Being less densely populated, the western states have fewer sorting centers than Eastern states.<br/><br/>Note that not all sorting centers are shown on this map. Only the sorting centers that my letters have passed through are shown.',
            location: {
                center: [-104.9903, 39.7392],
                zoom: 4,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [
                {
                    layer: 'early-letter-glow',
                    opacity: 0
                },
                {
                    layer: 'later-letters',
                    opacity: 0
                },
                {
                    layer: 'later-lines',
                    opacity: 0
                },
                {
                    layer: 'later-mail-centers',
                    opacity: 0
                },
                {
                    layer: 'mail-unreported',
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
                    layer: 'early-letter-glow',
                    opacity: 0
                },
                {
                    layer: 'later-letters',
                    opacity: 0
                },
                {
                    layer: 'later-lines',
                    opacity: 0
                },
                {
                    layer: 'later-mail-centers',
                    opacity: 0
                },
                {
                    layer: 'mail-unreported',
                    opacity: 0
                }

            ],
            onChapterExit: []
        },
        {
            id: 'dc1',
            alignment: 'left',
            title: 'East Coast',
            image: '',
            description: 'So many sorting centers...slow and fast deliveries coming out of some of the same centers.',
            location: {
                center: [-77.0369, 38.9072],
                zoom: 5.92,
                pitch: 51.50,
                bearing: -26.40
            },
            onChapterEnter: [
                {
                    layer: 'early-letter-glow',
                    opacity: 0
                },
                {
                    layer: 'later-letters',
                    opacity: 0
                },
                {
                    layer: 'later-lines',
                    opacity: 0
                },
                {
                    layer: 'later-mail-centers',
                    opacity: 0
                },
                {
                    layer: 'mail-unreported',
                    opacity: 0
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
            id: 'timing-0',
            alignment: 'center',
            title: "Fast forward...to 2022   ",
            image: '',
            description: "As of July 2022, I've mailed out over <b>3,000</b> envelopes. <br /><br />That's a lot of dots on our map!",
            location: {
                center: [-82.44486, 37.77139],
                zoom: 3,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'early-letter-glow',
                    opacity: 0
                },
                {
                    layer: 'later-letters',
                    opacity: .6
                },
                {
                    layer: 'later-lines',
                    opacity: .6
                },
                {
                    layer: 'later-mail-centers',
                    opacity: .5
                },
                {
                    layer: 'mail-unreported',
                    opacity: 0
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
            id: 'timing-1',
            alignment: 'center',
            title: "While I'd sent out over 3,000 envelopes by July 2022, not everyone told me when their's arrived.",
            image: 'chart_051622.png',
            description: 'A surge in sugnups, in mid-2021 left me exhausted and burnt-out. I was looking forward to growing my little data set, but most of the folks who signed up just ingnored my request to report arrival time.<br /><br />But in later surge events, folks were a lot better about helping me with the <b>data</b> part of the project.<br /><br />The locations I have mailed letters to, but do not have arrival times for, are marked as white dots on this map.',
            location: {
                center: [-82.44486, 37.77139],
                zoom: 3,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'early-letter-glow',
                    opacity: 0
                },
                {
                    layer: 'later-mail-centers',
                    opacity: .4
                },
                {
                    layer: 'mail-unreported',
                    opacity: .6
                }
            ],
            onChapterExit: [
                {
                    // layer: 'mail-unreported',
                    // opacity: 0
                }
            ]
         },

         {
            id: 'zip-search-link',
            alignment: 'center',
            title: 'Explore the Interactive Map and see all current data (2020-2023)',
            image: '',
            description: 'Find data for your zipcode and explore the data with the <a href="index2.html">interactive map</a>',
            location: {
                center: [-82.44486, 37.77139],
                zoom: 3,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'early-letter-glow',
                    opacity: 0
                },
                {
                    layer: 'later-mail-centers',
                    opacity: .4
                },
                {
                    layer: 'mail-unreported',
                    opacity: .6
                }
            ],
            onChapterExit: [
                {
                    // layer: 'mail-unreported',
                    // opacity: 0
                }
            ]
         }//,

    ]
};
