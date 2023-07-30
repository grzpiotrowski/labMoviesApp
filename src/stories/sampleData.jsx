
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

export { sampleMovie as default, samplePerson, samplePersonDetails };




  
