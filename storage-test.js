import AsyncStorage from "@react-native-community/async-storage";
import MMKVStorage from 'react-native-mmkv-storage';
import {Alert} from 'react-native'
let MMKVInstance;
const testObj = {
    data: [
        {
            "_id": "5ef864ad075a9aa8d12f3d88",
            "index": 0,
            "guid": "b238c1fe-2dde-4a8a-be14-8343eb359d39",
            "isActive": true,
            "balance": "$1,520.23",
            "picture": "http://placehold.it/32x32",
            "age": 22,
            "eyeColor": "brown",
            "name": "Merritt Cash",
            "gender": "male",
            "company": "ZENTURY",
            "email": "merrittcash@zentury.com",
            "phone": "+1 (896) 579-3873",
            "address": "136 Fillmore Avenue, Haring, Maryland, 4574",
            "about": "Reprehenderit fugiat eiusmod ex sit. Qui incididunt ullamco nulla cupidatat. Voluptate laboris ad anim incididunt culpa consectetur eiusmod reprehenderit non amet magna ipsum ullamco. Adipisicing quis amet consequat exercitation. Culpa voluptate pariatur veniam enim ipsum.\r\n",
            "registered": "2017-11-11T02:28:13 -00:00",
            "latitude": -77.737693,
            "longitude": -1.272442,
            "tags": [
                "labore",
                "eu",
                "qui",
                "et",
                "incididunt",
                "ea",
                "culpa"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Guthrie Huffman"
                },
                {
                    "id": 1,
                    "name": "Peters Fields"
                },
                {
                    "id": 2,
                    "name": "Rebekah Spence"
                }
            ],
            "greeting": "Hello, Merritt Cash! You have 8 unread messages.",
            "favoriteFruit": "strawberry"
        }
        ,
        {
            "_id": "5ef864adaf8f26d7c4a6d522",
            "index": 1,
            "guid": "1ed7fab5-80b4-4098-b264-baa3a64dbc75",
            "isActive": true,
            "balance": "$1,694.58",
            "picture": "http://placehold.it/32x32",
            "age": 28,
            "eyeColor": "green",
            "name": "Figueroa Allison",
            "gender": "male",
            "company": "SENTIA",
            "email": "figueroaallison@sentia.com",
            "phone": "+1 (890) 547-3215",
            "address": "533 Milton Street, Wakulla, South Dakota, 9046",
            "about": "Nostrud dolor consequat Lorem ipsum dolor magna officia veniam. Adipisicing labore aliquip velit consequat aliquip dolore exercitation velit laboris laboris cupidatat. Minim ex magna minim in. Sit cupidatat consectetur mollit occaecat. Ut eu ex fugiat do duis veniam adipisicing. Incididunt magna enim ut id voluptate voluptate consectetur cillum laborum.\r\n",
            "registered": "2016-01-25T03:58:02 -00:00",
            "latitude": -36.136362,
            "longitude": 42.600153,
            "tags": [
                "ullamco",
                "deserunt",
                "labore",
                "officia",
                "sit",
                "aliquip",
                "enim"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Wheeler Salas"
                },
                {
                    "id": 1,
                    "name": "Toni Patterson"
                },
                {
                    "id": 2,
                    "name": "Barbra Matthews"
                }
            ],
            "greeting": "Hello, Figueroa Allison! You have 10 unread messages.",
            "favoriteFruit": "strawberry"
        },
        {
            "_id": "5ef864adfbdb30cd93c71d59",
            "index": 2,
            "guid": "56aa7084-6a22-48cd-b99c-562112d9ccae",
            "isActive": true,
            "balance": "$1,598.59",
            "picture": "http://placehold.it/32x32",
            "age": 32,
            "eyeColor": "green",
            "name": "Mollie Vance",
            "gender": "female",
            "company": "HONOTRON",
            "email": "mollievance@honotron.com",
            "phone": "+1 (886) 589-2629",
            "address": "900 Veterans Avenue, Driftwood, Indiana, 4360",
            "about": "Eiusmod dolor elit nulla et commodo ad ipsum in. Sit qui sit deserunt sunt excepteur sint consequat et mollit fugiat ipsum voluptate. Incididunt do magna do do ullamco ad ad anim ut eiusmod consequat. Incididunt amet mollit nisi sint consectetur tempor ex cillum.\r\n",
            "registered": "2017-09-30T09:45:58 -01:00",
            "latitude": 73.658597,
            "longitude": -31.219065,
            "tags": [
                "do",
                "deserunt",
                "cillum",
                "in",
                "occaecat",
                "irure",
                "nisi"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Horne Rodgers"
                },
                {
                    "id": 1,
                    "name": "Grace Wade"
                },
                {
                    "id": 2,
                    "name": "Kathryn Kim"
                }
            ],
            "greeting": "Hello, Mollie Vance! You have 1 unread messages.",
            "favoriteFruit": "banana"
        },
        {
            "_id": "5ef864ad7ae39329469ddbd8",
            "index": 3,
            "guid": "b02e4e83-9f01-4f0e-94c1-307d57105991",
            "isActive": false,
            "balance": "$3,592.90",
            "picture": "http://placehold.it/32x32",
            "age": 20,
            "eyeColor": "green",
            "name": "Jayne Whitney",
            "gender": "female",
            "company": "MYOPIUM",
            "email": "jaynewhitney@myopium.com",
            "phone": "+1 (855) 462-3357",
            "address": "855 Quentin Street, Hayes, District Of Columbia, 1581",
            "about": "Nostrud voluptate eu reprehenderit dolor adipisicing laborum aute cillum est. Veniam sunt laborum ullamco sunt veniam fugiat culpa fugiat aute velit ad ullamco elit. Consectetur incididunt excepteur culpa esse commodo fugiat velit.\r\n",
            "registered": "2016-03-19T06:37:33 -00:00",
            "latitude": -26.096908,
            "longitude": 108.423289,
            "tags": [
                "nostrud",
                "excepteur",
                "labore",
                "officia",
                "anim",
                "dolore",
                "cillum"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Mayra Clay"
                },
                {
                    "id": 1,
                    "name": "Jerry Blanchard"
                },
                {
                    "id": 2,
                    "name": "Frankie Leon"
                }
            ],
            "greeting": "Hello, Jayne Whitney! You have 1 unread messages.",
            "favoriteFruit": "banana"
        },
        {
            "_id": "5ef864ad5304927df4b49ba1",
            "index": 4,
            "guid": "fa6f8d99-75eb-4769-a598-f8f83e3d9188",
            "isActive": false,
            "balance": "$1,859.49",
            "picture": "http://placehold.it/32x32",
            "age": 21,
            "eyeColor": "green",
            "name": "Beatriz Faulkner",
            "gender": "female",
            "company": "SUPREMIA",
            "email": "beatrizfaulkner@supremia.com",
            "phone": "+1 (993) 506-3912",
            "address": "102 Bills Place, Lynn, Pennsylvania, 4115",
            "about": "Esse qui est enim quis nisi culpa id eiusmod duis est. Enim commodo enim ullamco exercitation aliqua dolor voluptate cillum tempor culpa ex deserunt excepteur est. Do voluptate officia excepteur sint mollit id excepteur esse ex. Commodo irure ullamco eu ad laborum nostrud enim sunt eu do irure eiusmod velit. Fugiat dolor laboris deserunt magna.\r\n",
            "registered": "2017-07-21T10:02:51 -01:00",
            "latitude": -65.31445,
            "longitude": 33.520584,
            "tags": [
                "anim",
                "veniam",
                "duis",
                "sint",
                "excepteur",
                "nulla",
                "voluptate"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Garza Sampson"
                },
                {
                    "id": 1,
                    "name": "Dixon Hays"
                },
                {
                    "id": 2,
                    "name": "Marsh Wiggins"
                }
            ],
            "greeting": "Hello, Beatriz Faulkner! You have 4 unread messages.",
            "favoriteFruit": "apple"
        },
        {
            "_id": "5ef864addd62c80283f586aa",
            "index": 5,
            "guid": "04d043bf-92da-42a1-874b-2aaeed73728f",
            "isActive": false,
            "balance": "$1,239.67",
            "picture": "http://placehold.it/32x32",
            "age": 22,
            "eyeColor": "green",
            "name": "Mathis Golden",
            "gender": "male",
            "company": "LEXICONDO",
            "email": "mathisgolden@lexicondo.com",
            "phone": "+1 (817) 412-2842",
            "address": "322 Richards Street, Canoochee, Idaho, 8129",
            "about": "Nisi duis commodo et amet dolor officia quis. Do culpa sit id magna deserunt dolore ex laboris pariatur reprehenderit qui nulla. Exercitation anim enim non elit reprehenderit commodo magna et dolor consectetur occaecat nulla id qui. Nostrud id nisi dolor nulla consectetur est eiusmod cillum. Esse culpa nostrud minim amet veniam enim velit consequat cupidatat.\r\n",
            "registered": "2015-01-16T12:28:56 -00:00",
            "latitude": 8.29999,
            "longitude": 177.626755,
            "tags": [
                "occaecat",
                "fugiat",
                "commodo",
                "esse",
                "cupidatat",
                "eiusmod",
                "laboris"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Milagros Stokes"
                },
                {
                    "id": 1,
                    "name": "Mccormick Manning"
                },
                {
                    "id": 2,
                    "name": "Puckett Levine"
                }
            ],
            "greeting": "Hello, Mathis Golden! You have 3 unread messages.",
            "favoriteFruit": "strawberry"
        },
        {
            "_id": "5ef864ad1715fdb3e5b02523",
            "index": 6,
            "guid": "63b774db-4d84-46d4-a64c-e02db079767c",
            "isActive": false,
            "balance": "$1,765.71",
            "picture": "http://placehold.it/32x32",
            "age": 39,
            "eyeColor": "blue",
            "name": "Lynn White",
            "gender": "female",
            "company": "EBIDCO",
            "email": "lynnwhite@ebidco.com",
            "phone": "+1 (849) 533-3179",
            "address": "117 Garland Court, Wright, Guam, 3300",
            "about": "Sint ad eiusmod amet reprehenderit. Eiusmod ut voluptate occaecat elit sit occaecat commodo culpa commodo irure duis culpa incididunt. Ad laboris fugiat eiusmod occaecat dolor officia ullamco eiusmod cupidatat ea do anim ipsum dolor. Amet occaecat incididunt officia amet eu esse incididunt Lorem sit non velit eu deserunt.\r\n",
            "registered": "2018-10-24T12:10:19 -01:00",
            "latitude": -16.790138,
            "longitude": -117.632334,
            "tags": [
                "voluptate",
                "labore",
                "ullamco",
                "nostrud",
                "magna",
                "occaecat",
                "exercitation"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Sonia Osborne"
                },
                {
                    "id": 1,
                    "name": "Walton Brewer"
                },
                {
                    "id": 2,
                    "name": "Aguirre Herman"
                }
            ],
            "greeting": "Hello, Lynn White! You have 10 unread messages.",
            "favoriteFruit": "apple"
        },
        {
            "_id": "5ef864ad87b81ad88a07bc4f",
            "index": 7,
            "guid": "c3071c0d-9eee-47ef-969f-02831802aea9",
            "isActive": false,
            "balance": "$3,550.32",
            "picture": "http://placehold.it/32x32",
            "age": 31,
            "eyeColor": "green",
            "name": "Marla Barlow",
            "gender": "female",
            "company": "DEVILTOE",
            "email": "marlabarlow@deviltoe.com",
            "phone": "+1 (856) 477-2350",
            "address": "405 Hewes Street, Cade, Texas, 779",
            "about": "Quis consequat excepteur officia pariatur. Ad nulla id consectetur sit ut et. Qui velit proident et id irure. Id enim veniam consequat id qui elit aute sunt tempor sit. Minim dolore nisi et irure nisi tempor in ad. Velit nisi eu aute consectetur voluptate consectetur exercitation esse Lorem.\r\n",
            "registered": "2017-11-02T10:58:45 -00:00",
            "latitude": -61.700033,
            "longitude": 30.950767,
            "tags": [
                "sit",
                "magna",
                "veniam",
                "eu",
                "tempor",
                "laborum",
                "ea"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Yvonne Blankenship"
                },
                {
                    "id": 1,
                    "name": "Brown Leblanc"
                },
                {
                    "id": 2,
                    "name": "Noemi Reid"
                }
            ],
            "greeting": "Hello, Marla Barlow! You have 10 unread messages.",
            "favoriteFruit": "apple"
        },
        {
            "_id": "5ef864ad62e580239931d2f3",
            "index": 8,
            "guid": "0c54be41-c255-46a2-b126-fd85cf0eb2be",
            "isActive": true,
            "balance": "$2,004.03",
            "picture": "http://placehold.it/32x32",
            "age": 33,
            "eyeColor": "blue",
            "name": "Ofelia Wolfe",
            "gender": "female",
            "company": "CORIANDER",
            "email": "ofeliawolfe@coriander.com",
            "phone": "+1 (989) 439-2194",
            "address": "952 Willow Place, Rowe, Virgin Islands, 7073",
            "about": "In mollit ipsum cupidatat fugiat Lorem id anim Lorem exercitation et reprehenderit. Consequat et velit non labore aliquip tempor tempor deserunt magna. Dolor occaecat mollit cillum pariatur ipsum laborum reprehenderit laborum fugiat velit est dolor. Veniam exercitation in enim minim quis officia ex aliquip occaecat.\r\n",
            "registered": "2017-10-01T01:03:45 -01:00",
            "latitude": -2.062766,
            "longitude": -168.030573,
            "tags": [
                "voluptate",
                "amet",
                "eiusmod",
                "aliquip",
                "enim",
                "sint",
                "aliquip"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Frederick Perkins"
                },
                {
                    "id": 1,
                    "name": "Ava Cote"
                },
                {
                    "id": 2,
                    "name": "Aida Oconnor"
                }
            ],
            "greeting": "Hello, Ofelia Wolfe! You have 9 unread messages.",
            "favoriteFruit": "strawberry"
        },
        {
            "_id": "5ef864ad497850ca25fe8433",
            "index": 9,
            "guid": "d5430bb3-a2a5-47e4-8aa0-fee021f6cc15",
            "isActive": false,
            "balance": "$2,059.59",
            "picture": "http://placehold.it/32x32",
            "age": 37,
            "eyeColor": "brown",
            "name": "Blair Stout",
            "gender": "male",
            "company": "NETAGY",
            "email": "blairstout@netagy.com",
            "phone": "+1 (850) 521-2278",
            "address": "270 Dorset Street, Bendon, Maine, 2848",
            "about": "Enim mollit ipsum dolor adipisicing culpa exercitation sint nisi. Deserunt aliqua ipsum fugiat voluptate cupidatat elit minim laborum ea proident enim. Non tempor sit adipisicing anim proident.\r\n",
            "registered": "2020-02-07T01:12:32 -00:00",
            "latitude": -64.357909,
            "longitude": 67.473156,
            "tags": [
                "officia",
                "laboris",
                "occaecat",
                "excepteur",
                "labore",
                "reprehenderit",
                "quis"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Juanita Giles"
                },
                {
                    "id": 1,
                    "name": "Rowe Dotson"
                },
                {
                    "id": 2,
                    "name": "Jewell Rowe"
                }
            ],
            "greeting": "Hello, Blair Stout! You have 6 unread messages.",
            "favoriteFruit": "banana"
        },
        {
            "_id": "5ef864ade96b2e6f2950b7df",
            "index": 10,
            "guid": "09d05243-2371-4775-845b-5de3885ce4fa",
            "isActive": false,
            "balance": "$3,355.42",
            "picture": "http://placehold.it/32x32",
            "age": 22,
            "eyeColor": "brown",
            "name": "Mcbride Chavez",
            "gender": "male",
            "company": "APEX",
            "email": "mcbridechavez@apex.com",
            "phone": "+1 (880) 410-3984",
            "address": "453 Monaco Place, Mappsville, Kansas, 7465",
            "about": "Mollit irure sint excepteur laborum occaecat pariatur dolore. Cillum proident reprehenderit veniam qui voluptate commodo laboris ipsum exercitation cillum culpa amet. Occaecat consectetur in adipisicing culpa Lorem minim magna enim Lorem dolor exercitation sunt dolore. Pariatur officia occaecat eiusmod culpa. Est veniam esse incididunt deserunt ex mollit in aliquip deserunt adipisicing deserunt dolor. Magna incididunt et commodo cillum Lorem irure anim sint dolor labore fugiat minim consequat aute. Ut reprehenderit elit ea ipsum.\r\n",
            "registered": "2014-06-16T04:28:10 -01:00",
            "latitude": -46.372849,
            "longitude": 27.157891,
            "tags": [
                "dolor",
                "magna",
                "non",
                "irure",
                "velit",
                "sit",
                "aute"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Ina Wheeler"
                },
                {
                    "id": 1,
                    "name": "Chris Stafford"
                },
                {
                    "id": 2,
                    "name": "Maricela Lawson"
                }
            ],
            "greeting": "Hello, Mcbride Chavez! You have 8 unread messages.",
            "favoriteFruit": "strawberry"
        },
        {
            "_id": "5ef864ad45a4eb13119ecb6a",
            "index": 11,
            "guid": "754d6546-bfed-4926-8e87-92247c580938",
            "isActive": false,
            "balance": "$1,113.96",
            "picture": "http://placehold.it/32x32",
            "age": 38,
            "eyeColor": "blue",
            "name": "Alyson Vazquez",
            "gender": "female",
            "company": "ISOPLEX",
            "email": "alysonvazquez@isoplex.com",
            "phone": "+1 (876) 500-3506",
            "address": "791 Louise Terrace, Roderfield, North Dakota, 9532",
            "about": "Commodo velit consectetur minim esse nisi ad duis et aliquip velit qui. Elit ut nulla consequat exercitation Lorem fugiat. Officia esse mollit excepteur amet esse deserunt culpa anim incididunt aliquip. Magna sint dolor elit anim consequat officia adipisicing quis. Reprehenderit duis do deserunt et et commodo consectetur culpa. Id eu non est velit cillum. Est reprehenderit occaecat veniam adipisicing officia ex ex nisi ea et cillum fugiat ut aute.\r\n",
            "registered": "2020-02-24T01:27:51 -00:00",
            "latitude": 76.307602,
            "longitude": 166.082593,
            "tags": [
                "exercitation",
                "amet",
                "veniam",
                "voluptate",
                "deserunt",
                "nisi",
                "consectetur"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Dejesus Pace"
                },
                {
                    "id": 1,
                    "name": "Nieves Vaughan"
                },
                {
                    "id": 2,
                    "name": "Antonia Walls"
                }
            ],
            "greeting": "Hello, Alyson Vazquez! You have 3 unread messages.",
            "favoriteFruit": "apple"
        },
        {
            "_id": "5ef864ad44bfc1967011a687",
            "index": 12,
            "guid": "fef6f5e6-270e-43df-a888-39f6797a3912",
            "isActive": true,
            "balance": "$1,857.65",
            "picture": "http://placehold.it/32x32",
            "age": 36,
            "eyeColor": "blue",
            "name": "Elma Simmons",
            "gender": "female",
            "company": "IDETICA",
            "email": "elmasimmons@idetica.com",
            "phone": "+1 (894) 457-2738",
            "address": "638 Willoughby Street, Weedville, Nebraska, 6552",
            "about": "Esse veniam esse consequat velit commodo aute voluptate et cupidatat. Reprehenderit sint aliqua laborum laboris. Exercitation incididunt Lorem officia deserunt commodo est non irure laborum ipsum dolor nisi enim cupidatat.\r\n",
            "registered": "2018-10-18T11:38:09 -01:00",
            "latitude": 51.364759,
            "longitude": 83.118345,
            "tags": [
                "sit",
                "eiusmod",
                "esse",
                "amet",
                "sunt",
                "non",
                "et"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Bird Richard"
                },
                {
                    "id": 1,
                    "name": "Beverley Ray"
                },
                {
                    "id": 2,
                    "name": "James Gutierrez"
                }
            ],
            "greeting": "Hello, Elma Simmons! You have 6 unread messages.",
            "favoriteFruit": "strawberry"
        },
        {
            "_id": "5ef864ad0c0a9a65932bb4ef",
            "index": 13,
            "guid": "1722432f-0397-4197-80c5-1e7577a3a39c",
            "isActive": false,
            "balance": "$1,533.34",
            "picture": "http://placehold.it/32x32",
            "age": 23,
            "eyeColor": "brown",
            "name": "Erin Gregory",
            "gender": "female",
            "company": "COGNICODE",
            "email": "eringregory@cognicode.com",
            "phone": "+1 (941) 407-3786",
            "address": "330 Ridge Court, Chumuckla, Utah, 9935",
            "about": "Quis excepteur eu magna et elit cupidatat occaecat id incididunt in cillum elit. Exercitation magna laborum magna irure laborum nulla nisi enim aute cupidatat. Pariatur tempor consectetur ad officia aute anim ullamco voluptate. Id nisi incididunt elit consectetur proident ullamco cupidatat quis est consectetur cupidatat labore aliqua. Cillum quis ad amet magna labore in Lorem duis excepteur tempor ea voluptate aliqua. Tempor est amet quis quis minim nostrud voluptate ut eiusmod consectetur. Velit culpa consectetur aliqua duis cupidatat ex.\r\n",
            "registered": "2017-12-31T08:55:00 -00:00",
            "latitude": 10.250254,
            "longitude": 90.575015,
            "tags": [
                "est",
                "ex",
                "laborum",
                "consectetur",
                "ea",
                "ea",
                "occaecat"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Bailey Key"
                },
                {
                    "id": 1,
                    "name": "Fernandez Holden"
                },
                {
                    "id": 2,
                    "name": "Slater Green"
                }
            ],
            "greeting": "Hello, Erin Gregory! You have 3 unread messages.",
            "favoriteFruit": "banana"
        },
        {
            "_id": "5ef864ad3c05b4f587a08312",
            "index": 14,
            "guid": "c50e5837-4124-4c36-96c5-f776260a51a6",
            "isActive": false,
            "balance": "$3,718.48",
            "picture": "http://placehold.it/32x32",
            "age": 26,
            "eyeColor": "blue",
            "name": "Sheryl Bryant",
            "gender": "female",
            "company": "MANGELICA",
            "email": "sherylbryant@mangelica.com",
            "phone": "+1 (905) 539-2582",
            "address": "739 Hemlock Street, Ferney, Palau, 1748",
            "about": "Reprehenderit aliqua sunt nostrud minim magna elit voluptate incididunt sunt culpa. Nulla qui pariatur fugiat exercitation ea anim non nostrud. Non aliqua est cupidatat laborum velit enim ullamco laborum Lorem id ipsum. Eu Lorem aliquip nostrud labore excepteur. Incididunt consequat occaecat eiusmod labore. Ut labore consequat adipisicing dolore amet in adipisicing id sint.\r\n",
            "registered": "2018-08-21T10:04:34 -01:00",
            "latitude": -22.420585,
            "longitude": 155.229101,
            "tags": [
                "ex",
                "occaecat",
                "ex",
                "sint",
                "sint",
                "mollit",
                "exercitation"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Carla Burt"
                },
                {
                    "id": 1,
                    "name": "Anderson Willis"
                },
                {
                    "id": 2,
                    "name": "Lara Davenport"
                }
            ],
            "greeting": "Hello, Sheryl Bryant! You have 7 unread messages.",
            "favoriteFruit": "strawberry"
        },
        {
            "_id": "5ef864ad454de0f2e7bbd9ba",
            "index": 15,
            "guid": "26fec363-4647-441d-afc5-0c73e7041f10",
            "isActive": false,
            "balance": "$2,044.24",
            "picture": "http://placehold.it/32x32",
            "age": 24,
            "eyeColor": "blue",
            "name": "Danielle Woodard",
            "gender": "female",
            "company": "FLUM",
            "email": "daniellewoodard@flum.com",
            "phone": "+1 (852) 538-3216",
            "address": "361 Beard Street, Roland, Montana, 4443",
            "about": "Et fugiat minim cillum incididunt dolore aliquip exercitation labore. Tempor consectetur nostrud deserunt ad velit. Esse quis ex ut laborum ipsum voluptate. Do culpa ipsum dolor exercitation ea. Dolore id sit ex consectetur ullamco cillum reprehenderit nulla adipisicing sit proident do.\r\n",
            "registered": "2018-02-27T04:08:43 -00:00",
            "latitude": -60.368593,
            "longitude": 87.549585,
            "tags": [
                "dolor",
                "mollit",
                "consectetur",
                "adipisicing",
                "cillum",
                "Lorem",
                "est"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Jackson Moon"
                },
                {
                    "id": 1,
                    "name": "Hodge Morgan"
                },
                {
                    "id": 2,
                    "name": "George Pugh"
                }
            ],
            "greeting": "Hello, Danielle Woodard! You have 9 unread messages.",
            "favoriteFruit": "banana"
        },
        {
            "_id": "5ef864adfa210ca27eb476f2",
            "index": 16,
            "guid": "0752f9af-67e0-4e69-ba8f-48c3afd8af67",
            "isActive": false,
            "balance": "$3,488.21",
            "picture": "http://placehold.it/32x32",
            "age": 37,
            "eyeColor": "brown",
            "name": "Karina Dennis",
            "gender": "female",
            "company": "BEDLAM",
            "email": "karinadennis@bedlam.com",
            "phone": "+1 (815) 572-2304",
            "address": "455 Porter Avenue, Madrid, New York, 5612",
            "about": "Sunt proident non occaecat excepteur magna tempor amet voluptate excepteur tempor ut reprehenderit dolor pariatur. Sit exercitation in consectetur enim sit nostrud exercitation. Nulla veniam minim exercitation veniam dolore Lorem. Quis nulla adipisicing sint ad labore ea pariatur minim cillum. Tempor eu esse esse et dolor anim sit et. Minim id fugiat eiusmod duis.\r\n",
            "registered": "2019-08-23T11:41:39 -01:00",
            "latitude": -44.53212,
            "longitude": -71.815876,
            "tags": [
                "ex",
                "culpa",
                "quis",
                "ad",
                "veniam",
                "adipisicing",
                "duis"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Moore Barr"
                },
                {
                    "id": 1,
                    "name": "Sylvia Contreras"
                },
                {
                    "id": 2,
                    "name": "Irene Patrick"
                }
            ],
            "greeting": "Hello, Karina Dennis! You have 2 unread messages.",
            "favoriteFruit": "banana"
        },
        {
            "_id": "5ef864ad356543f507458085",
            "index": 17,
            "guid": "1737bdf0-7a3f-4cf5-8db0-722f52b37ade",
            "isActive": true,
            "balance": "$1,146.04",
            "picture": "http://placehold.it/32x32",
            "age": 34,
            "eyeColor": "green",
            "name": "Beard Romero",
            "gender": "male",
            "company": "COMVEYOR",
            "email": "beardromero@comveyor.com",
            "phone": "+1 (935) 498-3698",
            "address": "542 Strickland Avenue, Herald, West Virginia, 8958",
            "about": "Cillum magna sunt officia ad in anim commodo cupidatat aliqua cillum ea. Et aute aliqua proident occaecat ad commodo sunt proident labore reprehenderit culpa deserunt. Eiusmod dolor laborum qui ullamco magna eu.\r\n",
            "registered": "2017-07-05T04:23:19 -01:00",
            "latitude": 77.007961,
            "longitude": 80.091185,
            "tags": [
                "occaecat",
                "duis",
                "consequat",
                "veniam",
                "incididunt",
                "aliqua",
                "Lorem"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Gregory Shelton"
                },
                {
                    "id": 1,
                    "name": "Benton Weeks"
                },
                {
                    "id": 2,
                    "name": "Heidi Tate"
                }
            ],
            "greeting": "Hello, Beard Romero! You have 5 unread messages.",
            "favoriteFruit": "banana"
        },
        {
            "_id": "5ef864ad51b18edaf7296691",
            "index": 18,
            "guid": "d548dcdc-d5e7-4373-b5ac-a146ddddf009",
            "isActive": true,
            "balance": "$3,145.95",
            "picture": "http://placehold.it/32x32",
            "age": 25,
            "eyeColor": "brown",
            "name": "Inez Floyd",
            "gender": "female",
            "company": "ORBOID",
            "email": "inezfloyd@orboid.com",
            "phone": "+1 (901) 581-3843",
            "address": "550 Sharon Street, Hondah, Federated States Of Micronesia, 2483",
            "about": "Adipisicing laboris aliqua sunt sunt cillum dolore non. Labore aliquip non in minim anim pariatur elit qui Lorem irure. Amet aliqua duis nulla mollit. Anim occaecat dolor pariatur incididunt. Nulla sunt aliqua veniam incididunt esse id eu laborum laborum consectetur enim sint. Cupidatat non consectetur proident nisi ut id voluptate anim minim. Nostrud id mollit nostrud voluptate ullamco commodo ullamco.\r\n",
            "registered": "2015-10-24T04:08:20 -01:00",
            "latitude": 71.14309,
            "longitude": -143.491372,
            "tags": [
                "sint",
                "dolor",
                "ullamco",
                "do",
                "veniam",
                "in",
                "quis"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Melisa Valencia"
                },
                {
                    "id": 1,
                    "name": "May Bernard"
                },
                {
                    "id": 2,
                    "name": "Dickerson Mcclure"
                }
            ],
            "greeting": "Hello, Inez Floyd! You have 8 unread messages.",
            "favoriteFruit": "banana"
        },
        {
            "_id": "5ef864adafa0ceb0e607e8c4",
            "index": 19,
            "guid": "858dc43a-d565-4c78-8721-8fa33818656c",
            "isActive": false,
            "balance": "$1,095.00",
            "picture": "http://placehold.it/32x32",
            "age": 27,
            "eyeColor": "green",
            "name": "Booker Compton",
            "gender": "male",
            "company": "CODACT",
            "email": "bookercompton@codact.com",
            "phone": "+1 (996) 440-3943",
            "address": "831 Dunne Place, Itmann, Massachusetts, 8771",
            "about": "Est exercitation fugiat ex labore irure ut aute aute anim laborum veniam excepteur culpa. Ipsum veniam exercitation esse dolore fugiat minim dolor laboris minim quis proident. Aliquip sunt aute quis sint culpa quis nisi ipsum velit officia commodo ad. Lorem ad consequat nostrud reprehenderit dolore ea amet cupidatat ullamco ex non cupidatat irure.\r\n",
            "registered": "2017-07-27T07:30:32 -01:00",
            "latitude": -20.460074,
            "longitude": -111.665647,
            "tags": [
                "ipsum",
                "minim",
                "eu",
                "do",
                "do",
                "veniam",
                "proident"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Debra Hoffman"
                },
                {
                    "id": 1,
                    "name": "Kelly Rosales"
                },
                {
                    "id": 2,
                    "name": "Lucy Buchanan"
                }
            ],
            "greeting": "Hello, Booker Compton! You have 3 unread messages.",
            "favoriteFruit": "strawberry"
        }
    ]
}

const getItem = (key, MMKV)=>{
    return MMKV? MMKVInstance.getMapAsync(key) : MMKVInstance.getMapAsync(key)
}

const setItem = (key, MMKV)=>{
    return MMKV? MMKVInstance.setMapAsync(key, testObj)
        : AsyncStorage.setItem(key,JSON.stringify(testObj))
}

const run = async (MMKV)=> {
    MMKVInstance = new MMKVStorage.Loader().initialize();

    await setItem("1",MMKV)
    await setItem("2",MMKV)
    await setItem("3",MMKV)
    const a = await getItem("1",MMKV)
    const b = await getItem("2",MMKV)
    const c = await getItem("3",MMKV)
}

const test = async ()  => {
    try {
        const start = new Date().valueOf();
        await run(true)
        const mmkvResult = `${new Date().valueOf()-start}(MMKV)`;

        const start2 = new Date().valueOf();
        await run(false);
        const standardResult = `${new Date().valueOf()-start2}(Default)`;


        Alert.alert("TEST", mmkvResult + " " + standardResult)

    } catch (e) {
        console.log("STORAGE ERROR", e)
    }
}

export default test;
