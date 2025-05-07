import { useState, useEffect } from "react";
import { DogQuote, dogQuotes } from "@/data/dogQuotes";

export const useRandomQuote = () => {
  const [currentQuote, setCurrentQuote] = useState<DogQuote | null>(null);
  const [recentQuoteIds, setRecentQuoteIds] = useState<string[]>([]);
  
  const getRandomQuote = () => {
    // Filter out recent quotes to avoid repeats
    const availableQuotes = dogQuotes.filter(quote => !recentQuoteIds.includes(quote.id));
    
    // If we've filtered out too many quotes (shouldn't happen often), 
    // just avoid the immediately previous quote
    const quotesToChooseFrom = availableQuotes.length > 0 
      ? availableQuotes 
      : dogQuotes.filter(quote => quote.id !== recentQuoteIds[recentQuoteIds.length - 1]);
      
    const randomIndex = Math.floor(Math.random() * quotesToChooseFrom.length);
    const selectedQuote = quotesToChooseFrom[randomIndex];
    
    // Update the current quote
    setCurrentQuote(selectedQuote);
    
    // Update the history of recent quotes (keep the last 5)
    setRecentQuoteIds(prev => {
      const updated = [...prev, selectedQuote.id];
      return updated.length > 5 ? updated.slice(-5) : updated;
    });
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
