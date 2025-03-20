import Link from "next/link";

const MoviePage = () => {
  const movies = [
    { id: "1", title: "Inception" },
    { id: "2", title: "Interstellar" },
    { id: "3", title: "The Dark Knight" },
    { id: "4", title: "The Matrix" },
    { id: "5", title: "Pulp Fiction" },
    { id: "6", title: "The Shawshank Redemption" },
    { id: "7", title: "Fight Club" },
    { id: "8", title: "The Godfather" },
    { id: "9", title: "Forrest Gump" },
    { id: "10", title: "Gladiator" },
    { id: "11", title: "The Lord of the Rings: The Fellowship of the Ring" },
    { id: "12", title: "Titanic" },
    { id: "13", title: "Avatar" },
    { id: "14", title: "The Avengers" },
    { id: "15", title: "Schindler's List" },
    { id: "16", title: "The Empire Strikes Back" },
    { id: "17", title: "The Silence of the Lambs" },
    { id: "18", title: "Jurassic Park" },
    { id: "19", title: "Parasite" },
    { id: "20", title: "Mad Max: Fury Road" },
    { id: "21", title: "The Lion King" },
    { id: "22", title: "Back to the Future" },
    { id: "23", title: "The Departed" },
    { id: "24", title: "Blade Runner" },
    { id: "25", title: "The Wolf of Wall Street" },
    { id: "26", title: "Good Will Hunting" },
    { id: "27", title: "The Prestige" },
    { id: "28", title: "Whiplash" },
    { id: "29", title: "The Grand Budapest Hotel" },
    { id: "30", title: "No Country for Old Men" },
    { id: "31", title: "Django Unchained" },
    { id: "32", title: "The Truman Show" },
    { id: "33", title: "Eternal Sunshine of the Spotless Mind" },
    { id: "34", title: "Saving Private Ryan" },
    { id: "35", title: "Spirited Away" },
    { id: "36", title: "The Social Network" },
    { id: "37", title: "Se7en" },
    { id: "38", title: "The Big Lebowski" },
    { id: "39", title: "La La Land" },
    { id: "40", title: "Memento" },
    { id: "41", title: "The Green Mile" },
    { id: "42", title: "12 Angry Men" },
    { id: "43", title: "Braveheart" },
    { id: "44", title: "The Usual Suspects" },
    { id: "45", title: "Coco" },
    { id: "46", title: "Inglourious Basterds" },
    { id: "47", title: "The Princess Bride" },
    { id: "48", title: "A Beautiful Mind" },
    { id: "49", title: "Jaws" },
    { id: "50", title: "The Exorcist" }
];
  return (
    <div className="p-6 min-h-screen bg-gradient-to-tl from-blue-300 to-indigo-100">
      <h2 className="text-3xl font-semibold mb-4">Movies List</h2>
      <ul className="space-y-4">
        {movies.map((movie) => (
          <li key={movie.id} className="bg-gray-800 p-4 rounded-lg">
            <Link
              href={`/movies/${movie.id}`}
              className="text-blue-400 hover:text-blue-600"
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-end mt-8">
        <Link
          href="/"
          className="w-fit text-lg text-gray-800 py-1 px-3 rounded-lg border border-gray-800"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default MoviePage;
