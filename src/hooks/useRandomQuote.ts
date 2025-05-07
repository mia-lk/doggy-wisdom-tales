
import { useState, useEffect } from "react";
import { DogQuote, dogQuotes } from "@/data/dogQuotes";

export const useRandomQuote = () => {
  const [currentQuote, setCurrentQuote] = useState<DogQuote | null>(null);
  const [previousId, setPreviousId] = useState<string | null>(null);
  
  const getRandomQuote = () => {
    // Filter out the previous quote to avoid repeats
    const availableQuotes = previousId 
      ? dogQuotes.filter(quote => quote.id !== previousId)
      : dogQuotes;
      
    const randomIndex = Math.floor(Math.random() * availableQuotes.length);
    const selectedQuote = availableQuotes[randomIndex];
    
    setCurrentQuote(selectedQuote);
    setPreviousId(selectedQuote.id);
  };
  
  // Initialize with a random quote on first load
  useEffect(() => {
    getRandomQuote();
  }, []);
  
  return {
    currentQuote,
    getRandomQuote
  };
};
