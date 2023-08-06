
const sampleMovie = {
    adult: false,
    backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
    belongs_to_collection: {
      id: 10,
      name: "Star Wars Collection",
      poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
      backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg",
    },
    budget: 200000000,
    genres: [
      {
        id: 14,
        name: "Fantasy",
      },
      {
        id: 12,
        name: "Adventure",
      },
      {
        id: 878,
        name: "Science Fiction",
      },
      {
        id: 28,
        name: "Action",
      },
    ],
    homepage:
      "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
    id: 181808,
    imdb_id: "tt2527336",
    original_language: "en",
    original_title: "Star Wars: The Last Jedi",
    overview:
      "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
    popularity: 44.208,
    poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
    production_companies: [
      {
        id: 1,
        logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
        name: "Lucasfilm",
        origin_country: "US",
      },
      {
        id: 11092,
        logo_path: null,
        name: "Ram Bergman Productions",
        origin_country: "US",
      },
      {
        id: 2,
        logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
        name: "Walt Disney Pictures",
        origin_country: "US",
      },
    ],
    production_countries: [
      {
        iso_3166_1: "US",
        name: "United States of America",
      },
    ],
    release_date: "2017-12-13",
    revenue: 1332459537,
    runtime: 152,
    spoken_languages: [
      {
        iso_639_1: "en",
        name: "English",
      },
    ],
    status: "Released",
    tagline: "Darkness rises... and light to meet it",
    title: "Star Wars: The Last Jedi",
    video: false,
    vote_average: 7,
    vote_count: 9692,
  };
  
const samplePerson = {
  "adult": false,
  "gender": 2,
  "id": 2963,
  "known_for": [
    {
      "adult": false,
      "backdrop_path": "/bNgqt819qpHcszjCzLCG5y16ldF.jpg",
      "genre_ids": [
        16,
        12,
        10751,
        14,
        35,
        28
      ],
      "id": 49519,
      "media_type": "movie",
      "original_language": "en",
      "original_title": "The Croods",
      "overview": "The prehistoric Croods family live in a particularly dangerous moment in time. Patriarch Grug, his mate Ugga, teenage daughter Eep, son Thunk, and feisty Gran gather food by day and huddle together in a cave at night. When a more evolved caveman named Guy arrives on the scene, Grug is distrustful, but it soon becomes apparent that Guy is correct about the impending destruction of their world.",
      "poster_path": "/p7lJkqHlK01nr0zNacunUFI5Qxy.jpg",
      "release_date": "2013-03-15",
      "title": "The Croods",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 6419
    },
    {
      "adult": false,
      "backdrop_path": "/xXWT0je8dTFFNBq6P2CeTZkPUu2.jpg",
      "genre_ids": [
        12,
        28,
        53,
        9648
      ],
      "id": 2059,
      "media_type": "movie",
      "original_language": "en",
      "original_title": "National Treasure",
      "overview": "Modern treasure hunters, led by archaeologist Ben Gates, search for a chest of riches rumored to have been stashed away by George Washington, Thomas Jefferson and Benjamin Franklin during the Revolutionary War. The chest's whereabouts may lie in secret clues embedded in the Constitution and the Declaration of Independence, and Gates is in a race to find the gold before his enemies do.",
      "poster_path": "/pxL6E4GBOPUG6CdkO9cUQN5VMwI.jpg",
      "release_date": "2004-11-19",
      "title": "National Treasure",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 5664
    },
    {
      "adult": false,
      "backdrop_path": "/1dlXEyAxdysMCRvq9lgIr6Jds9H.jpg",
      "genre_ids": [
        53,
        28,
        14
      ],
      "id": 1250,
      "media_type": "movie",
      "original_language": "en",
      "original_title": "Ghost Rider",
      "overview": "In order to save his dying father, young stunt cyclist Johnny Blaze sells his soul to Mephistopheles and sadly parts from the pure-hearted Roxanne Simpson, the love of his life. Years later, Johnny's path crosses again with Roxanne, now a go-getting reporter, and also with Mephistopheles, who offers to release Johnny's soul if Johnny becomes the fabled, fiery 'Ghost Rider'.",
      "poster_path": "/8LaVQiXBsnlo7MXCPK1nXTVARUZ.jpg",
      "release_date": "2007-01-15",
      "title": "Ghost Rider",
      "video": false,
      "vote_average": 5.5,
      "vote_count": 5294
    }
  ],
  "known_for_department": "Acting",
  "name": "Nicolas Cage",
  "popularity": 159.741,
  "profile_path": "/ar33qcWbEgREn07ZpXv5Pbj8hbM.jpg"
};

const samplePersonDetails = {
  "adult": false,
  "also_known_as": [
      "Nicolas Coppola",
      "尼古拉斯·凯奇",
      "니콜라스 케이지",
      "نیکلاس کیج",
      "نيكولاس كيج",
      "ニコラス・ケイジ",
      "Николас Кейдж",
      "นิโคลัส เคจ",
      "Ніколас Кейдж",
      "Νίκολας Κέιτζ",
      "Nicolas Kim Coppola",
      "Ніколас Кім Коппола",
      "Νίκολας Κόπολα",
      "Nic Cage",
      "Николас Кејџ"
  ],
  "biography": "Nicolas Cage (born Nicolas Kim Coppola) is an American actor and filmmaker; he is also nephew to Francis Ford Coppola. He is the recipient of various accolades, including an Academy Award, a Screen Actors Guild Award, and a Golden Globe Award.\n\nDuring the early years of his career, Cage starred in a variety of films such as Rumble Fish (1983), Racing with the Moon (1984), Peggy Sue Got Married (1986), Raising Arizona (1987), Vampire's Kiss (1989), Wild at Heart (1990), Honeymoon in Vegas (1992), and Red Rock West (1993). During this period, John Willis' Screen World, Vol. 36 listed him as one of twelve Promising New Actors of 1984.\n\nFor his performance in Leaving Las Vegas (1995), he won the Academy Award for Best Actor. He received his second Academy Award nomination for his performance as Charlie and Donald Kaufman in Adaptation (2002). He subsequently appeared in more mainstream films, such as The Rock (1996), Con Air (1997), City of Angels (1998), 8mm (1999), Windtalkers (2002), Lord of War (2005), The Wicker Man (2006), Bangkok Dangerous (2008) and Knowing (2009).\n\nHe also directed the film Sonny (2002), for which he was nominated for Grand Special Prize at Deauville Film Festival. Cage owns the production company Saturn Films and has produced films such as Shadow of the Vampire (2000) and The Life of David Gale (2003). In October 1997, Cage was ranked No. 40 in Empire magazine's The Top 100 Movie Stars of All Time list, while the next year, he was placed No. 37 in Premiere's 100 most powerful people in Hollywood.\n\nIn the 2010s, he starred in Kick-Ass (2010), Drive Angry (2011), Joe (2013), The Runner (2015), Dog Eat Dog (2016), Mom and Dad (2017), Mandy (2018), Spider-Man: Into the Spider-Verse (2018), and Color Out of Space (2019). His participation in various film genres during this time increased his popularity and gained him a cult following.",
  "birthday": "1964-01-07",
  "deathday": null,
  "gender": 2,
  "homepage": null,
  "id": 2963,
  "imdb_id": "nm0000115",
  "known_for_department": "Acting",
  "name": "Nicolas Cage",
  "place_of_birth": "Long Beach, California, USA",
  "popularity": 113.284,
  "profile_path": "/ti2h1OS1n1VwoJHWFaJD8dMZuEE.jpg"
};

const samplePersonCredit = {
  "cast": [
    {
      "adult": false,
      "backdrop_path": "/nZnkNpKCcfWHByKgFmVp4guxkY0.jpg",
      "genre_ids": [
        80
      ],
      "id": 2088,
      "original_language": "en",
      "original_title": "Romeo Is Bleeding",
      "overview": "A corrupt cop gets in over his head when he tries to assassinate a beautiful Russian hit-woman.",
      "popularity": 7.898,
      "poster_path": "/mgCwAZBG0PCkZflC6nzsxwvG2vu.jpg",
      "release_date": "1993-09-13",
      "title": "Romeo Is Bleeding",
      "video": false,
      "vote_average": 6.127,
      "vote_count": 143,
      "character": "Jack Grimaldi",
      "credit_id": "52fe4334c3a36847f804230b",
      "order": 0,
      "media_type": "movie"
    },
    {
      "adult": false,
      "backdrop_path": "/9Ozm2xSLu292GTo06JJrlkGGDfq.jpg",
      "genre_ids": [
        18,
        53
      ],
      "id": 6521,
      "original_language": "en",
      "original_title": "The Contender",
      "overview": "The vice president is dead, and as the president makes his choice for a replacement, a secret contest of wills is being waged by a formidable rival. When Senator Laine Hanson is nominated as the first woman in history to hold the office, hidden agendas explode into a battle for power.",
      "popularity": 8.128,
      "poster_path": "/duRe0F2GYHIDvqe2bqIAMP4gWeP.jpg",
      "release_date": "2000-10-13",
      "title": "The Contender",
      "video": false,
      "vote_average": 6.65,
      "vote_count": 206,
      "character": "Shelly Runyon",
      "credit_id": "52fe4458c3a36847f809072d",
      "order": 0,
      "media_type": "movie"
    },
    {
      "adult": false,
      "backdrop_path": "/j20lYJRd4NH4lb9FZA4XH3AwYMi.jpg",
      "genre_ids": [
        35,
        18,
        10749
      ],
      "id": 8325,
      "original_language": "en",
      "original_title": "Tiptoes",
      "overview": "A man is reluctant to tell his fiancee that his parents, uncle and brother are dwarfs.",
      "popularity": 5.849,
      "poster_path": "/m609NhpkIUzAyIWgQYaaPSIsWFO.jpg",
      "release_date": "2003-09-08",
      "title": "Tiptoes",
      "video": false,
      "vote_average": 4.243,
      "vote_count": 68,
      "character": "Rolfe",
      "credit_id": "52fe449ec3a36847f80a0801",
      "order": 0,
      "media_type": "movie"
    },
    {
      "adult": false,
      "backdrop_path": "/lnak9QJorq9J84KR4R80MCZEMHL.jpg",
      "genre_ids": [
        27,
        53,
        28
      ],
      "id": 12677,
      "original_language": "es",
      "original_title": "Bosque de sombras",
      "overview": "An English couple's holiday in Spain is interrupted when they discover a girl imprisoned in a cabin.",
      "popularity": 6.532,
      "poster_path": "/tSyuca9qJbKYqEracw25m9HRlvN.jpg",
      "release_date": "2006-09-24",
      "title": "The Backwoods",
      "video": false,
      "vote_average": 5.392,
      "vote_count": 88,
      "character": "Paul",
      "credit_id": "52fe45129251416c7504ac47",
      "order": 0,
      "media_type": "movie"
    }
  ],
  "crew": [
    {
      "adult": false,
      "backdrop_path": "/gJHbC2PZHfX4YZ8MzLCv5rDCP8Y.jpg",
      "genre_ids": [
        18
      ],
      "id": 21252,
      "original_language": "en",
      "original_title": "Nil by Mouth",
      "overview": "The family of Raymond, his wife Val and her brother Billy live in working-class London district. Also in their family is Val and Billy's mother Janet and grandmother Kath. Billy is a drug addict and Raymond kicks him out of the house, making him live on his own. Raymond is generally a rough and even violent person, and that leads to problems in the life of the family.",
      "popularity": 4.907,
      "poster_path": "/pKKtHEsp43vJZGzfdYyYhgOxsFa.jpg",
      "release_date": "1997-05-08",
      "title": "Nil by Mouth",
      "video": false,
      "vote_average": 6.942,
      "vote_count": 109,
      "credit_id": "52fe4412c3a368484e00da81",
      "department": "Directing",
      "job": "Director",
      "media_type": "movie"
    },
    {
      "adult": false,
      "backdrop_path": "/rLjVQbhRqWtJmdrSSfusnlCKHf8.jpg",
      "genre_ids": [
        10402
      ],
      "id": 105395,
      "original_language": "en",
      "original_title": "Jack White: Unstaged",
      "overview": "Directed by actor/filmmaker Gary Oldman, this show finds Jack White performing  at Webster Hall in New York City.",
      "popularity": 0.6,
      "poster_path": "/6N4cdNIoUa6JEKJlkGALsSoM1mj.jpg",
      "release_date": "2012-04-27",
      "title": "Jack White: Unstaged",
      "video": false,
      "vote_average": 0,
      "vote_count": 0,
      "credit_id": "52fe4a4bc3a36847f81c5dfb",
      "department": "Directing",
      "job": "Director",
      "media_type": "movie"
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        18
      ],
      "id": 300450,
      "original_language": "en",
      "original_title": "Flying Horse",
      "overview": "A biopic of pioneer photographer Eadweard Muybridge, following the courtship and love affair between Muybridge's wife, Flora, and Harry Larkyns.",
      "popularity": 0.939,
      "poster_path": null,
      "release_date": "",
      "title": "Flying Horse",
      "video": false,
      "vote_average": 0,
      "vote_count": 0,
      "credit_id": "551874449251412c1e0031b4",
      "department": "Directing",
      "job": "Director",
      "media_type": "movie"
    }
  ],
  "id": 64
};

export { sampleMovie as default, samplePerson, samplePersonDetails, samplePersonCredit };




  
