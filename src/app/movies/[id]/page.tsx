import Link from "next/link";
import { FaStar } from "react-icons/fa";

interface MovieProps {
  params: {
    id: string;
  };
}

const MovieDetails = ({ params }: MovieProps) => {
  const movies = [
    {
      id: "1",
      title: "Inception",
      comments: 124,
      rating: 4.8,
      description: "A thief who enters the dreams of others to steal their secrets must plant an idea into a target's subconscious.",
      commentList: ["Amazing concept!", "Mind-blowing visuals!", "Great soundtrack!"]
    },
    {
      id: "2",
      title: "Interstellar",
      comments: 98,
      rating: 4.9,
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      commentList: ["Emotional and scientific!", "Hans Zimmer's music is legendary!", "A must-watch sci-fi film!"]
    },
    {
      id: "3",
      title: "The Dark Knight",
      comments: 244,
      rating: 4.9,
      description: "Batman faces his greatest psychological and physical test when the Joker wreaks havoc on Gotham City.",
      commentList: ["Best Joker performance!", "Thrilling from start to end!", "Christopher Nolan's masterpiece!"]
    },
    {
      id: "4",
      title: "The Matrix",
      comments: 187,
      rating: 4.7,
      description: "A hacker discovers the world is a simulation and joins a rebellion against the machines controlling it.",
      commentList: ["Revolutionary effects!", "Mind-bending plot!", "Keanu is iconic!"]
    },
    {
      id: "5",
      title: "Pulp Fiction",
      comments: 203,
      rating: 4.8,
      description: "The lives of two hitmen, a boxer, and a gangster's wife intertwine in a series of violent events.",
      commentList: ["Tarantino at his best!", "Perfect dialogue!", "Non-linear storytelling rocks!"]
    },
    {
      id: "6",
      title: "The Shawshank Redemption",
      comments: 312,
      rating: 4.9,
      description: "A man wrongfully imprisoned forms a friendship and plots his escape from Shawshank prison.",
      commentList: ["Incredibly moving!", "Tim Robbins shines!", "Hopeful ending!"]
    },
    {
      id: "7",
      title: "Fight Club",
      comments: 176,
      rating: 4.7,
      description: "An insomniac office worker and a soap maker form an underground fight club that spirals out of control.",
      commentList: ["Twist ending blew me away!", "Brad Pitt kills it!", "Cult classic!"]
    },
    {
      id: "8",
      title: "The Godfather",
      comments: 265,
      rating: 4.9,
      description: "The aging patriarch of a crime dynasty transfers control of his empire to his reluctant son.",
      commentList: ["Marlon Brando is legendary!", "Timeless story!", "Best mob movie ever!"]
    },
    {
      id: "9",
      title: "Forrest Gump",
      comments: 145,
      rating: 4.6,
      description: "A simple man with a big heart experiences key moments in history while pursuing his lifelong love.",
      commentList: ["Tom Hanks is perfect!", "Heartwarming!", "Run, Forrest, run!"]
    },
    {
      id: "10",
      title: "Gladiator",
      comments: 198,
      rating: 4.7,
      description: "A betrayed Roman general seeks vengeance against the corrupt emperor who murdered his family.",
      commentList: ["Epic battles!", "Russell Crowe owns this!", "Are you not entertained?!"]
    },
    {
      id: "11",
      title: "The Lord of the Rings: The Fellowship of the Ring",
      comments: 234,
      rating: 4.8,
      description: "A hobbit and his companions set out to destroy a powerful ring and defeat an evil lord.",
      commentList: ["Stunning visuals!", "Epic adventure!", "One ring to rule them all!"]
    },
    {
      id: "12",
      title: "Titanic",
      comments: 167,
      rating: 4.5,
      description: "A love story unfolds aboard the ill-fated RMS Titanic as it sinks after hitting an iceberg.",
      commentList: ["So romantic!", "Leo and Kate chemistry!", "Tearjerker ending!"]
    },
    {
      id: "13",
      title: "Avatar",
      comments: 189,
      rating: 4.6,
      description: "A marine on an alien planet becomes torn between following orders and protecting the native people.",
      commentList: ["Visual masterpiece!", "Pandora is breathtaking!", "Great eco-message!"]
    },
    {
      id: "14",
      title: "The Avengers",
      comments: 275,
      rating: 4.7,
      description: "Earth's mightiest heroes team up to stop Loki and his alien army from enslaving humanity.",
      commentList: ["Epic team-up!", "Hulk smash!", "Perfect superhero flick!"]
    },
    {
      id: "15",
      title: "Schindler's List",
      comments: 132,
      rating: 4.9,
      description: "A businessman saves over a thousand Jewish lives during the Holocaust by employing them in his factory.",
      commentList: ["Heart-wrenching!", "Spielberg’s best!", "Historically powerful!"]
    },
    {
      id: "16",
      title: "The Empire Strikes Back",
      comments: 210,
      rating: 4.8,
      description: "The Rebels face the Empire's wrath as Luke Skywalker trains with Yoda to become a Jedi.",
      commentList: ["I am your father!", "Best Star Wars film!", "Yoda is wise!"]
    },
    {
      id: "17",
      title: "The Silence of the Lambs",
      comments: 154,
      rating: 4.7,
      description: "An FBI trainee seeks the help of a cannibalistic serial killer to catch another murderer.",
      commentList: ["Hannibal is chilling!", "Jodie Foster rocks!", "Creepy and brilliant!"]
    },
    {
      id: "18",
      title: "Jurassic Park",
      comments: 179,
      rating: 4.6,
      description: "Scientists bring dinosaurs back to life on an island theme park, but chaos ensues when they escape.",
      commentList: ["Dinosaurs rule!", "Spielberg magic!", "Life finds a way!"]
    },
    {
      id: "19",
      title: "Parasite",
      comments: 143,
      rating: 4.9,
      description: "A poor family infiltrates a wealthy household, leading to a shocking unraveling of secrets.",
      commentList: ["Twist after twist!", "Social commentary gold!", "Korean cinema FTW!"]
    },
    {
      id: "20",
      title: "Mad Max: Fury Road",
      comments: 201,
      rating: 4.7,
      description: "In a post-apocalyptic wasteland, a drifter and a rebel leader fight against a tyrannical warlord.",
      commentList: ["Insane action!", "Charlize Theron kills it!", "Non-stop adrenaline!"]
    },
    {
      id: "21",
      title: "The Lion King",
      comments: 156,
      rating: 4.6,
      description: "A young lion prince flees after his father's murder, only to return and reclaim his throne.",
      commentList: ["Hakuna Matata!", "Beautiful animation!", "Simba’s journey rocks!"]
    },
    {
      id: "22",
      title: "Back to the Future",
      comments: 182,
      rating: 4.7,
      description: "A teenager accidentally travels back to 1955 in a time-traveling DeLorean and must fix the timeline.",
      commentList: ["Marty rocks!", "Doc is hilarious!", "Time travel done right!"]
    },
    {
      id: "23",
      title: "The Departed",
      comments: 169,
      rating: 4.8,
      description: "An undercover cop and a mole in the police try to identify each other in Boston's underworld.",
      commentList: ["Scorsese nails it!", "DiCaprio shines!", "Edge of your seat!"]
    },
    {
      id: "24",
      title: "Blade Runner",
      comments: 137,
      rating: 4.6,
      description: "A retired 'blade runner' hunts rogue replicants in a dystopian future Los Angeles.",
      commentList: ["Cyberpunk vibes!", "Harrison Ford is cool!", "Deep and dark!"]
    },
    {
      id: "25",
      title: "The Wolf of Wall Street",
      comments: 192,
      rating: 4.5,
      description: "A stockbroker rises to wealth through corruption and excess before facing the consequences.",
      commentList: ["Wild ride!", "Leo’s energy is insane!", "Money and madness!"]
    },
    {
      id: "26",
      title: "Good Will Hunting",
      comments: 128,
      rating: 4.7,
      description: "A troubled janitor with a genius-level intellect is mentored by a psychologist and finds his path.",
      commentList: ["Robin Williams is gold!", "Touching story!", "Math genius FTW!"]
    },
    {
      id: "27",
      title: "The Prestige",
      comments: 165,
      rating: 4.8,
      description: "Two magicians engage in a bitter rivalry after a tragic accident, each seeking the ultimate trick.",
      commentList: ["Mind-boggling twists!", "Bale vs. Jackman!", "Magic and mystery!"]
    },
    {
      id: "28",
      title: "Whiplash",
      comments: 149,
      rating: 4.8,
      description: "A young drummer and his intense music instructor push each other to the brink of perfection.",
      commentList: ["Intense as hell!", "JK Simmons is scary good!", "Drumming madness!"]
    },
    {
      id: "29",
      title: "The Grand Budapest Hotel",
      comments: 121,
      rating: 4.6,
      description: "A hotel concierge and his lobby boy become embroiled in a theft and a murder mystery.",
      commentList: ["Wes Anderson style!", "Quirky and fun!", "Visual delight!"]
    },
    {
      id: "30",
      title: "No Country for Old Men",
      comments: 158,
      rating: 4.7,
      description: "A hunter stumbles upon a drug deal gone wrong and a suitcase full of cash, sparking a deadly chase.",
      commentList: ["Coen brothers brilliance!", "Javier Bardem chills!", "Tense thriller!"]
    },
    {
      id: "31",
      title: "Django Unchained",
      comments: 174,
      rating: 4.6,
      description: "A freed slave teams up with a bounty hunter to rescue his wife from a brutal plantation owner.",
      commentList: ["Tarantino strikes again!", "Jamie Foxx is badass!", "Bloody good fun!"]
    },
    {
      id: "32",
      title: "The Truman Show",
      comments: 139,
      rating: 4.7,
      description: "A man discovers his entire life is a reality TV show and seeks to break free from the illusion.",
      commentList: ["Jim Carrey shines!", "Thought-provoking!", "Reality twist!"]
    },
    {
      id: "33",
      title: "Eternal Sunshine of the Spotless Mind",
      comments: 152,
      rating: 4.8,
      description: "A man undergoes a procedure to erase memories of his ex, only to realize he still loves her.",
      commentList: ["Beautifully weird!", "Kate Winslet rocks!", "Love and memory!"]
    },
    {
      id: "34",
      title: "Saving Private Ryan",
      comments: 205,
      rating: 4.8,
      description: "A squad of soldiers risk their lives to rescue a paratrooper during World War II.",
      commentList: ["War realism!", "Tom Hanks leads!", "Gut-wrenching battles!"]
    },
    {
      id: "35",
      title: "Spirited Away",
      comments: 133,
      rating: 4.9,
      description: "A young girl must navigate a magical world to save her parents and return to the human realm.",
      commentList: ["Anime masterpiece!", "Stunning art!", "Magical journey!"]
    },
    {
      id: "36",
      title: "The Social Network",
      comments: 161,
      rating: 4.6,
      description: "The story of how Mark Zuckerberg created Facebook and faced lawsuits and betrayal along the way.",
      commentList: ["Fast-paced!", "Jesse Eisenberg nails it!", "Tech drama!"]
    },
    {
      id: "37",
      title: "Se7en",
      comments: 177,
      rating: 4.7,
      description: "Two detectives hunt a serial killer who uses the seven deadly sins as his modus operandi.",
      commentList: ["Dark and gripping!", "Brad Pitt shines!", "What’s in the box?!"]
    },
    {
      id: "38",
      title: "The Big Lebowski",
      comments: 142,
      rating: 4.6,
      description: "A slacker known as 'The Dude' gets caught up in a kidnapping scheme over a case of mistaken identity.",
      commentList: ["The Dude abides!", "Hilarious!", "Coen brothers gold!"]
    },
    {
      id: "39",
      title: "La La Land",
      comments: 188,
      rating: 4.5,
      description: "An aspiring actress and a jazz musician chase their dreams while falling in love in Los Angeles.",
      commentList: ["Dreamy romance!", "Gosling and Stone!", "Musical magic!"]
    },
    {
      id: "40",
      title: "Memento",
      comments: 159,
      rating: 4.8,
      description: "A man with short-term memory loss searches for his wife's killer, leaving himself clues.",
      commentList: ["Backwards brilliance!", "Mind-twisting!", "Nolan genius!"]
    },
    {
      id: "41",
      title: "The Green Mile",
      comments: 146,
      rating: 4.7,
      description: "A death row prison guard discovers an inmate with supernatural powers and a gentle soul.",
      commentList: ["Tearjerker!", "Tom Hanks is great!", "Magical realism!"]
    },
    {
      id: "42",
      title: "12 Angry Men",
      comments: 112,
      rating: 4.9,
      description: "A lone juror fights to convince the others to reconsider the guilt of a young man on trial.",
      commentList: ["Classic tension!", "Courtroom drama!", "Brilliant script!"]
    },
    {
      id: "43",
      title: "Br $>$heart",
      comments: 171,
      rating: 4.6,
      description: "A Scottish warrior leads a rebellion against English rule after the death of his wife.",
      commentList: ["Mel Gibson rocks!", "Epic freedom!", "Battle scenes FTW!"]
    },
    {
      id: "44",
      title: "The Usual Suspects",
      comments: 148,
      rating: 4.8,
      description: "A sole survivor recounts the twisted tale of a heist orchestrated by a mysterious criminal mastermind.",
      commentList: ["Who is Keyser Söze?", "Twist ending!", "Spacey kills it!"]
    },
    {
      id: "45",
      title: "Coco",
      comments: 135,
      rating: 4.7,
      description: "A boy journeys to the Land of the Dead to uncover his family's history and pursue his love of music.",
      commentList: ["Pixar magic!", "Colorful and emotional!", "Music is life!"]
    },
    {
      id: "46",
      title: "Inglourious Basterds",
      comments: 183,
      rating: 4.7,
      description: "A group of Jewish-American soldiers plot to assassinate Nazi leaders during World War II.",
      commentList: ["Tarantino brilliance!", "Brad Pitt rules!", "Revenge fantasy!"]
    },
    {
      id: "47",
      title: "The Princess Bride",
      comments: 126,
      rating: 4.6,
      description: "A swashbuckling farmhand rescues his true love from an evil prince in a whimsical fairy tale.",
      commentList: ["Inconceivable!", "Charming and funny!", "True love wins!"]
    },
    {
      id: "48",
      title: "A Beautiful Mind",
      comments: 140,
      rating: 4.6,
      description: "A brilliant mathematician battles schizophrenia while making groundbreaking contributions to game theory.",
      commentList: ["Russell Crowe shines!", "Inspiring!", "Mind over matter!"]
    },
    {
      id: "49",
      title: "Jaws",
      comments: 164,
      rating: 4.5,
      description: "A police chief, a scientist, and a grizzled fisherman hunt a man-eating shark terrorizing a beach town.",
      commentList: ["Terrifying shark!", "Spielberg classic!", "You need a bigger boat!"]
    },
    {
      id: "50",
      title: "The Exorcist",
      comments: 119,
      rating: 4.5,
      description: "A mother enlists priests to save her daughter from a demonic possession in this horror classic.",
      commentList: ["Scariest movie ever!", "Chilling effects!", "Horror perfection!"]
    }
];

  const movie = movies.find((m) => m.id === params.id);

  return (
    <div className="p-8 space-y-8 bg-gray-900 min-h-screen">
      {/* Movie Title & Description */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-semibold text-white mb-4">
          {movie?.title}
        </h2>
        <p className="text-lg text-gray-300">{movie?.description}</p>
      </div>

      {/* Rating & Comments Summary */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xl text-gray-300">Rating</p>
            <div className="flex items-center text-yellow-400">
              <FaStar className="mr-1" />
              <span className="text-2xl font-bold">{movie?.rating}</span> / 5
            </div>
          </div>
          <div>
            <p className="text-xl text-gray-300">Comments</p>
            <p className="text-2xl font-semibold text-white">
              {movie?.comments}
            </p>
          </div>
        </div>
      </div>

      {/* Comment Section */}
      <div>
        <h3 className="text-3xl font-semibold text-white mb-4">Comments</h3>
        <ul className="space-y-4">
          {movie?.commentList.map((comment, index) => (
            <li
              key={index}
              className="bg-gray-800 p-4 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-gray-300">{comment}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end mt-4">
        <Link
          href="/"
          className="w-fit text-lg text-gray-300 hover:text-gray-500 py-1 px-3 rounded-lg border border-gray-200 hover:border-gray-500"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default MovieDetails;
