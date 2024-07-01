var config = {
    style: 'mapbox://styles/kristinhenry/ckge1zcnx07af19li1cok92hk',
    accessToken: 'pk.eyJ1Ijoia3Jpc3RpbmhlbnJ5IiwiYSI6ImNraWNqNW5lNTBubzUydG11eGF2bHE5aDMifQ.cPGLKZHaX9OrGK6632hD1A',
    showMarkers: false,
    testing: true,
    theme: 'dark',
    title: 'Arts and Charts: Creativity and Communication',
    // subtitle: 'by Kristin Henry (ArtAtomic)',
    byline: 'by Kristin Henry (ArtAtomic)',
    footer: '<h1>Thank you!</h1><h1></h1><p>Project Ideation, Art, Data Collection, and Data Visualization by <a href="http://kristinhenry.github.io/">Kristin Henry</a>, 2020-2024</p>',
    chapters: [
        {
            id: 'intro_test',
            alignment: 'center',
            // title: "Hello!",
            image: 'meInKusamaRoom.jpg',
        description: "<h2>Science + Code + Art</h2> <p>Who am I?</p>  <ul><li> Unconventional path</li> <li>Degrees in Anthropology, Biology, & Computer Science</li><li>Started out developing Science learning tools.</li><li>More CS now, with SciArt and Data Vis</li><li>Full-stack engineer and consultant.</li><li>Art!</li></ul><p><i>Photo is of me in a Yayoi Kusama room at the SFMOMA</i></p>",
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
        // {
        //     id: 'intro_me',
        //     alignment: 'center',
        //     title: "What does art have to do with Datavis or Scivis?",
        //     // image: 'particleArt.jpg',
        // description: "<ul><li>What is the goal?</li><li>Teaching vs artistic expressions?</li><li>Accessibility!</li></ul> ",
        //     location: {
        //         center: [-42.44486, 27.77139],
        //         zoom: 4,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'early-letter-glow',
        //             opacity: 0
        //         },
        //         {
        //             layer: 'early-letters',
        //             opacity: 0
        //         },
        //         {
        //             layer: 'early-mail-centers',
        //             opacity: 0
        //         },
        //         {
        //             layer: 'later-letters',
        //             opacity: 0
        //         },
        //         {
        //             layer: 'later-lines',
        //             opacity: 0
        //         },
        //         {
        //             layer: 'later-mail-centers',
        //             opacity: 0
        //         },
        //         {
        //             layer: 'mail-unreported',
        //             opacity: 0
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             // layer: 'early-letter-glow',
        //             // opacity: 1
        //         }
        //     ]
        // },  
        {
            id: 'particles_01_a',
            alignment: 'center',
            title: "Art from Particles",
            image: 'particleArt.jpg',
        description: "Art, Created with Code, Inspired by Chemistry<br></br>Atoms are interesting <i>to me</i> because of electrons and orbitals",
            location: {
                center: [-42.44486, 27.77139],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },    
        {
            id: 'particles_01',
            alignment: 'center',
            title: "Electrons & Atomic Orbitals",
            image: 'orbitalDiagrams.jpg',
        description: "Electrons hang out in differently shaped orbitals.<br></br> Outer orbitals are where atoms 'bond' and form molecules, and the shapes they form.<br></br>These also determine bonding angels...the geometries",
            location: {
                center: [-42.44486, 27.77139],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        
        {
            id: 'particles_02',
            alignment: 'center',
            title: "Particles and the Periodic Table of Elements",
            image: 'periodicTableImg.jpg',
        description: "Calculating position in table by Atomic Number (number of protons) ",
            location: {
                center: [-42.44486, 27.77139],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },  
         {
            id: 'particles_03',
            alignment: 'center',
            title: "Playful Particles & Tetris? ",
            image: 'cellsDroppingImg.jpg',
        description: "Playing with the Periodic Table of Elements <br></br>  ",
            location: {
                center: [-42.44486, 27.77139],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },  
        {
            id: 'particles_04',
            alignment: 'center',
            title: "Abstracting Particles ",
            image: 'atomSwingImg.jpg',
        description: "Going more abstract, and playing with iterations. <br></br>  ",
            location: {
                center: [-42.44486, 27.77139],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },  
        {
            id: 'particles_05',
            alignment: 'center',
            title: "Abstracting Particles ",
            image: 'atomSwing2.jpg',
        description: "Going more abstract, and playing with iterations. <br></br>  ",
            location: {
                center: [-42.44486, 27.77139],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },  
        {
            id: 'particles_06',
            alignment: 'center',
            title: "Collision Detection ",
            image: 'radarDotsImg.jpg',
        description: "What if our elements were dots? And we're playing with collision detection? <br></br>  ",
            location: {
                center: [-42.44486, 27.77139],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },  
        {
            id: 'particles_07',
            alignment: 'center',
            title: "Introducing a Fun Math Pattern ",
            // image: 'mysticRoseImg.jpg',
        description: "What if, on collision, we started forming 'Mystic Roses'? <br></br>  ",
            location: {
                center: [-42.44486, 27.77139],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },  
        
        {
            id: 'particles_20',
            alignment: 'center',
            title: "Particles: Chemistry inspired Art",
            image: 'particleDanceLinkImage.jpg',
        description: "Taking this playful experiment further.<br></br>Particle Dance<br></br> <a href='https://www.youtube.com/watch?v=PE1rg5HDn3A' target='_blank'>on youtube</a>",
            location: {
                center: [-42.44486, 27.77139],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }, 
         {
            id: 'truckMap',
            alignment: 'center',
            title: "Waste Trucks on a Map",
            image: 'unicornBarf.jpg',
        description: "Some projects need to communicate how chaotic a system is! <br></br> <a href='https://www.patreon.com/posts/animating-day-of-102234094' target='_blank'>Animation</a> ",
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
            id: 'intro_test3',
            alignment: 'center',
            title: "Diffusion Game",
            // image: 'particleArt.jpg',
        description: "Educational Game about Cell Biology <br></br>Meant to teach the stochastic nature of cellular communication.<br></br>Game, still in development <br></br>  <a href='https://artatomic.itch.io/diffusion' target='_blank'>Diffusion on itch.io</a>",
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
            id: 'inkyDays_01',
            alignment: 'center',
            title: "InkyDays",
            image: 'inkyDays063024.jpg',
        description: "Daily drawings, with a glass dipping pen. 8 years.<br></br>Same ideas as with my coded works, but different tools. <br></br>Simple rules generate a complex pattern, with iterations. <br></br>Bonding angles and artistic geometry <br></br>Most of my work takes a lot of time. These drawings are quick and meditative for me.",
            location: {
                center: [-42.44486, 27.77139],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },   
        {
            id: 'inkyDays_02',
            alignment: 'center',
            title: "InkyDays",
            image: 'inkyDays100923.jpg',
        description: "A Random Walk with Ants",
            location: {
                center: [-42.44486, 27.77139],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },                 
        {
            id: 'inkyDays_03',
            alignment: 'center',
            title: "InkyDays",
            image: 'inkyDays103023.jpg',
        description: "A busy Cell, making and exporting proteins.",
            location: {
                center: [-42.44486, 27.77139],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },                 
        {
            id: 'inkyDays_04',
            alignment: 'center',
            title: "InkyDays",
            image: 'inkydays100123.jpg',
        description: "Phospholipid bilayers of a Cell's membranes",
            location: {
                center: [-42.44486, 27.77139],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },                 
        {
            id: 'inkyDays_05',
            alignment: 'center',
            title: "InkyDays",
            image: 'inkyDays102423.jpg',
        description: "Protein Transcription, simplified model",
            location: {
                center: [-42.44486, 27.77139],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },                 
        {
            id: 'inkyDays_06',
            alignment: 'center',
            title: "InkyDays",
            image: 'inkyDays050124.jpg',
        description: "Patterns from life experiences: recovering from surgery",
            location: {
                center: [-42.44486, 27.77139],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },                 
        {
            id: 'inkyDays_07',
            alignment: 'center',
            title: "InkyDays",
            image: 'inkyDays052624.jpg',
        description: "Inspired by a visit to Kusama room at SFMOMA",
            location: {
                center: [-42.44486, 27.77139],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },                 
        {
            id: 'inkyDays_08',
            alignment: 'center',
            title: "InkyDays",
            image: 'meInKusamaRoom.jpg',
        description: "Inspiration isn't always obvious, but sometimes it is.",
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
            id: 'intro_test2',
            alignment: 'center',
            title: "#StickersAndStamps",
            image: 'lotsOfStickers.jpg',
        description: "<b>An ongoing Citizen Science and Data Viz Project</b>.",
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
            id: 'intro',
            alignment: 'center',
            title: "COVID changed all of my plans",
            // image: 'lotsOfStickers.jpg',
        description: "<ul><li>Early 2020</li><li>I had all these art stickers</li><li>Everything was cancelled</li><li>Startd mailing them to friends</li><li>Other folks signed up</li><li>Told me when the envelopes arrived</li><li>Collecting data on how long they take to arrive</li><li>Different ways to visualize that data</li></ul>",
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
            // title: 'Explore the Interactive Map and see all current data (2020-2023)',
            image: '',
            // description: 'Find data for your zipcode and explore the data with the <a href="index2.html">interactive map</a>',
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
