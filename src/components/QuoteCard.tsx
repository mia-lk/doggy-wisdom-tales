
import { DogQuote } from "@/data/dogQuotes";
import { useState, useEffect } from "react";

interface QuoteCardProps {
  quote: DogQuote;
  onNewQuote: () => void;
}

export const QuoteCard = ({ quote, onNewQuote }: QuoteCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setFadeIn(false);
    
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [quote.id]);

  return (
    <div className={`w-full max-w-lg mx-auto ${fadeIn ? 'fade-in' : 'opacity-0'} transition-opacity duration-300`}>
      <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
        <div className="relative">
          <img
            src={quote.imagePath}
            alt="Dog wisdom"
            className="w-full object-contain h-80" /* Changed to object-contain and increased height to 80 (from 64) */
            onLoad={() => setIsLoading(false)}
          />
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="animate-pulse w-8 h-8 rounded-full bg-primary"></div>
            </div>
          )}
        </div>
        
        <div className="p-6 pb-8">
          <p className="quote-text text-center mb-6">{quote.quote}</p>
          
          <div className="flex justify-center">
            <button
              onClick={onNewQuote}
              className="px-6 py-3 bg-gray-800 text-white font-bold rounded-md 
              transition-all duration-300 hover:bg-gray-700 hover:shadow-md active:scale-95"
            >
              Give me another!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
