
import { useRandomQuote } from "@/hooks/useRandomQuote";
import { QuoteCard } from "@/components/QuoteCard";
import { useState, useEffect } from "react";

const Index = () => {
  const { currentQuote, getRandomQuote } = useRandomQuote();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !currentQuote) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse w-12 h-12 rounded-full bg-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background py-8 px-4">
      <div className="container max-w-4xl mx-auto flex flex-col flex-grow justify-center items-center">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">The Wisdom of Chips: Paws & Ponderings</h1>
          <p className="text-lg md:text-xl text-muted-foreground">Life advice from our four-legged philosopher</p>
        </header>

        <main className="w-full flex justify-center">
          <QuoteCard 
            quote={currentQuote} 
            onNewQuote={getRandomQuote} 
          />
        </main>
      </div>
      
      <footer className="w-full mt-auto text-center text-sm text-muted-foreground py-4">
        <p>Wag more, bark less. Made with love by Mia © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Index;
