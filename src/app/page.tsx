import Link from 'next/link';
import React from 'react'
import { FaComment, FaStar } from 'react-icons/fa';

const Home = () => {
  const movies = [
    {
      id: "1",
      title: "Inception",
      comments: 124,
      rating: 4.8,
      description: "A thief who enters the dreams of others to steal their secrets must plant an idea into a target's subconscious."
    },
    {
      id: "2",
      title: "Interstellar",
      comments: 98,
      rating: 4.9,
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    {
      id: "3",
      title: "The Dark Knight",
      comments: 244,
      rating: 4.9,
      description: "Batman faces his greatest psychological and physical test when the Joker wreaks havoc on Gotham City."
    },
    {
      id: "4",
      title: "The Matrix",
      comments: 187,
      rating: 4.7,
      description: "A hacker discovers the world is a simulation and joins a rebellion against the machines controlling it."
    },
    {
      id: "5",
      title: "Pulp Fiction",
      comments: 203,
      rating: 4.8,
      description: "The lives of two hitmen, a boxer, and a gangster's wife intertwine in a series of violent events."
    },
    {
      id: "6",
      title: "The Shawshank Redemption",
      comments: 312,
      rating: 4.9,
      description: "A man wrongfully imprisoned forms a friendship and plots his escape from Shawshank prison."
    },
    {
      id: "7",
      title: "Fight Club",
      comments: 176,
      rating: 4.7,
      description: "An insomniac office worker and a soap maker form an underground fight club that spirals out of control."
    },
    {
      id: "8",
      title: "The Godfather",
      comments: 265,
      rating: 4.9,
      description: "The aging patriarch of a crime dynasty transfers control of his empire to his reluctant son."
    },
    {
      id: "9",
      title: "Forrest Gump",
      comments: 145,
      rating: 4.6,
      description: "A simple man with a big heart experiences key moments in history while pursuing his lifelong love."
    },
    {
      id: "10",
      title: "Gladiator",
      comments: 198,
      rating: 4.7,
      description: "A betrayed Roman general seeks vengeance against the corrupt emperor who murdered his family."
    },
    {
      id: "11",
      title: "The Lord of the Rings: The Fellowship of the Ring",
      comments: 234,
      rating: 4.8,
      description: "A hobbit and his companions set out to destroy a powerful ring and defeat an evil lord."
    },
    {
      id: "12",
      title: "Titanic",
      comments: 167,
      rating: 4.5,
      description: "A love story unfolds aboard the ill-fated RMS Titanic as it sinks after hitting an iceberg."
    },
    {
      id: "13",
      title: "Avatar",
      comments: 189,
      rating: 4.6,
      description: "A marine on an alien planet becomes torn between following orders and protecting the native people."
    },
    {
      id: "14",
      title: "The Avengers",
      comments: 275,
      rating: 4.7,
      description: "Earth's mightiest heroes team up to stop Loki and his alien army from enslaving humanity."
    },
    {
      id: "15",
      title: "Schindler's List",
      comments: 132,
      rating: 4.9,
      description: "A businessman saves over a thousand Jewish lives during the Holocaust by employing them in his factory."
    },
    {
      id: "16",
      title: "The Empire Strikes Back",
      comments: 210,
      rating: 4.8,
      description: "The Rebels face the Empire's wrath as Luke Skywalker trains with Yoda to become a Jedi."
    },
    {
      id: "17",
      title: "The Silence of the Lambs",
      comments: 154,
      rating: 4.7,
      description: "An FBI trainee seeks the help of a cannibalistic serial killer to catch another murderer."
    },
    {
      id: "18",
      title: "Jurassic Park",
      comments: 179,
      rating: 4.6,
      description: "Scientists bring dinosaurs back to life on an island theme park, but chaos ensues when they escape."
    },
    {
      id: "19",
      title: "Parasite",
      comments: 143,
      rating: 4.9,
      description: "A poor family infiltrates a wealthy household, leading to a shocking unraveling of secrets."
    },
    {
      id: "20",
      title: "Mad Max: Fury Road",
      comments: 201,
      rating: 4.7,
      description: "In a post-apocalyptic wasteland, a drifter and a rebel leader fight against a tyrannical warlord."
    },
    {
      id: "21",
      title: "The Lion King",
      comments: 156,
      rating: 4.6,
      description: "A young lion prince flees after his father's murder, only to return and reclaim his throne."
    },
    {
      id: "22",
      title: "Back to the Future",
      comments: 182,
      rating: 4.7,
      description: "A teenager accidentally travels back to 1955 in a time-traveling DeLorean and must fix the timeline."
    },
    {
      id: "23",
      title: "The Departed",
      comments: 169,
      rating: 4.8,
      description: "An undercover cop and a mole in the police try to identify each other in Boston's underworld."
    },
    {
      id: "24",
      title: "Blade Runner",
      comments: 137,
      rating: 4.6,
      description: "A retired 'blade runner' hunts rogue replicants in a dystopian future Los Angeles."
    },
    {
      id: "25",
      title: "The Wolf of Wall Street",
      comments: 192,
      rating: 4.5,
      description: "A stockbroker rises to wealth through corruption and excess before facing the consequences."
    },
    {
      id: "26",
      title: "Good Will Hunting",
      comments: 128,
      rating: 4.7,
      description: "A troubled janitor with a genius-level intellect is mentored by a psychologist and finds his path."
    },
    {
      id: "27",
      title: "The Prestige",
      comments: 165,
      rating: 4.8,
      description: "Two magicians engage in a bitter rivalry after a tragic accident, each seeking the ultimate trick."
    },
    {
      id: "28",
      title: "Whiplash",
      comments: 149,
      rating: 4.8,
      description: "A young drummer and his intense music instructor push each other to the brink of perfection."
    },
    {
      id: "29",
      title: "The Grand Budapest Hotel",
      comments: 121,
      rating: 4.6,
      description: "A hotel concierge and his lobby boy become embroiled in a theft and a murder mystery."
    },
    {
      id: "30",
      title: "No Country for Old Men",
      comments: 158,
      rating: 4.7,
      description: "A hunter stumbles upon a drug deal gone wrong and a suitcase full of cash, sparking a deadly chase."
    },
    {
      id: "31",
      title: "Django Unchained",
      comments: 174,
      rating: 4.6,
      description: "A freed slave teams up with a bounty hunter to rescue his wife from a brutal plantation owner."
    },
    {
      id: "32",
      title: "The Truman Show",
      comments: 139,
      rating: 4.7,
      description: "A man discovers his entire life is a reality TV show and seeks to break free from the illusion."
    },
    {
      id: "33",
      title: "Eternal Sunshine of the Spotless Mind",
      comments: 152,
      rating: 4.8,
      description: "A man undergoes a procedure to erase memories of his ex, only to realize he still loves her."
    },
    {
      id: "34",
      title: "Saving Private Ryan",
      comments: 205,
      rating: 4.8,
      description: "A squad of soldiers risk their lives to rescue a paratrooper during World War II."
    },
    {
      id: "35",
      title: "Spirited Away",
      comments: 133,
      rating: 4.9,
      description: "A young girl must navigate a magical world to save her parents and return to the human realm."
    },
    {
      id: "36",
      title: "The Social Network",
      comments: 161,
      rating: 4.6,
      description: "The story of how Mark Zuckerberg created Facebook and faced lawsuits and betrayal along the way."
    },
    {
      id: "37",
      title: "Se7en",
      comments: 177,
      rating: 4.7,
      description: "Two detectives hunt a serial killer who uses the seven deadly sins as his modus operandi."
    },
    {
      id: "38",
      title: "The Big Lebowski",
      comments: 142,
      rating: 4.6,
      description: "A slacker known as 'The Dude' gets caught up in a kidnapping scheme over a case of mistaken identity."
    },
    {
      id: "39",
      title: "La La Land",
      comments: 188,
      rating: 4.5,
      description: "An aspiring actress and a jazz musician chase their dreams while falling in love in Los Angeles."
    },
    {
      id: "40",
      title: "Memento",
      comments: 159,
      rating: 4.8,
      description: "A man with short-term memory loss searches for his wife's killer, leaving himself clues."
    },
    {
      id: "41",
      title: "The Green Mile",
      comments: 146,
      rating: 4.7,
      description: "A death row prison guard discovers an inmate with supernatural powers and a gentle soul."
    },
    {
      id: "42",
      title: "12 Angry Men",
      comments: 112,
      rating: 4.9,
      description: "A lone juror fights to convince the others to reconsider the guilt of a young man on trial."
    },
    {
      id: "43",
      title: "Braveheart",
      comments: 171,
      rating: 4.6,
      description: "A Scottish warrior leads a rebellion against English rule after the death of his wife."
    },
    {
      id: "44",
      title: "The Usual Suspects",
      comments: 148,
      rating: 4.8,
      description: "A sole survivor recounts the twisted tale of a heist orchestrated by a mysterious criminal mastermind."
    },
    {
      id: "45",
      title: "Coco",
      comments: 135,
      rating: 4.7,
      description: "A boy journeys to the Land of the Dead to uncover his family's history and pursue his love of music."
    },
    {
      id: "46",
      title: "Inglourious Basterds",
      comments: 183,
      rating: 4.7,
      description: "A group of Jewish-American soldiers plot to assassinate Nazi leaders during World War II."
    },
    {
      id: "47",
      title: "The Princess Bride",
      comments: 126,
      rating: 4.6,
      description: "A swashbuckling farmhand rescues his true love from an evil prince in a whimsical fairy tale."
    },
    {
      id: "48",
      title: "A Beautiful Mind",
      comments: 140,
      rating: 4.6,
      description: "A brilliant mathematician battles schizophrenia while making groundbreaking contributions to game theory."
    },
    {
      id: "49",
      title: "Jaws",
      comments: 164,
      rating: 4.5,
      description: "A police chief, a scientist, and a grizzled fisherman hunt a man-eating shark terrorizing a beach town."
    },
    {
      id: "50",
      title: "The Exorcist",
      comments: 119,
      rating: 4.5,
      description: "A mother enlists priests to save her daughter from a demonic possession in this horror classic."
    }
];

  const totalMovies = movies.length;
  const totalComments = movies.reduce((sum, movie) => sum + movie.comments, 0);
  const averageRating = (
    movies.reduce((sum, movie) => sum + movie.rating, 0) / totalMovies
  ).toFixed(1);
  return (
    <div className='p-8 space-y-8 bg-gray-900 min-h-screen'>
      <div className='bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-xl shadow-lg'>
        <h2 className='text-3xl font-semibold text-white mb-4'>Dashboard Overview</h2>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 text-white'>
          <div className='bg-gray-800 p-4 rounded-lg flex flex-col items-center'>
            <p className='text-lg font-medium'>Total Movies</p>
            <p className='text-4xl font-bold'>{totalMovies}</p>
          </div>
          <div className='bg-gray-800 p-4 rounded-lg flex flex-col items-center'>
            <p className='text-lg font-medium'>Total Comments</p>
            <p className='text-4xl font-bold'>{totalComments}</p>
          </div>
          <div className='bg-gray-800 p-4 rounded-lg flex flex-col items-center'>
            <p className='text-lg font-medium'>Average Rating</p>
            <p className='text-4xl font-bold'>{averageRating}</p>
          </div>
        </div>
      </div>

      {/* Movie List */}
      <h2 className='text-3xl font-semibold text-white'>Movie List</h2>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {movies.map((movie => (
            <li key={movie.id} className='bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300'>
              <Link href={`/movies/${movie.id}`} className='text-2xl font-bold text-blue-400 hover:text-blue-600'>{movie.title}</Link>
              <p className='text-gray-400 text-sm mt-2'>{movie.description}</p>

              <div className='flex justify-between items-center mt-4'>
                <div className='flex items-center text-sm text-gray-300'>
                  <FaComment  className='mr-1'/>
                  <span>{movie.comments}</span>
                </div>
                <div className='flex items-center text-sm text-gray-300'>
                  <FaStar  className='mr-1'/>
                  <span>{movie.rating}</span>
                </div>
              </div>

            </li>
          )))}
      </ul>
    </div>
  )
}

export default Home