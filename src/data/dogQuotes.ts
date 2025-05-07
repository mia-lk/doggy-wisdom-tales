
export interface DogQuote {
  id: string;
  imagePath: string;
  quote: string;
}

// Using relative paths for GitHub Pages compatibility
const baseImagePath = "./images";

export const dogQuotes: DogQuote[] = [
  {
    id: "friends",
    imagePath: `${baseImagePath}/friends.png`,
    quote: "Great friendships begin where you least expect them."
  },
  {
    id: "guard",
    imagePath: `${baseImagePath}/guard.png`,
    quote: "Love fiercely. Guard gently."
  },
  {
    id: "life",
    imagePath: `${baseImagePath}/life.png`,
    quote: "Live life like it's an endless summer vacation."
  },
  {
    id: "majestic",
    imagePath: `${baseImagePath}/majestic.png`,
    quote: "Be majestic in everything you do."
  },
  {
    id: "milestones",
    imagePath: `${baseImagePath}/milestones.png`,
    quote: "Celebrate every milestone."
  },
  {
    id: "nap",
    imagePath: `${baseImagePath}/nap.png`,
    quote: "Take naps like you mean it."
  },
  {
    id: "nature",
    imagePath: `${baseImagePath}/nature.png`,
    quote: "When in doubt, happily run it out."
  },
  {
    id: "party",
    imagePath: `${baseImagePath}/party.png`,
    quote: "Life's too short not to party."
  },
  {
    id: "perspective",
    imagePath: `${baseImagePath}/perspective.png`,
    quote: "If stuck with a problem, change perspective."
  },
  {
    id: "rest",
    imagePath: `${baseImagePath}/rest.png`,
    quote: "Doing nothing is doing something for your soul."
  },
  {
    id: "sideeye",
    imagePath: `${baseImagePath}/sideeye.png`,
    quote: "Some moments deserve nothing more than a well-timed glance."
  },
  {
    id: "spot",
    imagePath: `${baseImagePath}/spot.png`,
    quote: "The most unexpected places can become your spot."
  },
  {
    id: "stretch",
    imagePath: `${baseImagePath}/stretch.png`,
    quote: "Never underestimate the healing power of a good stretch."
  },
  {
    id: "travel",
    imagePath: `${baseImagePath}/travel.png`,
    quote: "The journey is the destination."
  },
  {
    id: "work",
    imagePath: `${baseImagePath}/work.png`,
    quote: "Work with intention."
  }
];
