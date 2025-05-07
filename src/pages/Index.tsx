
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
    <div className="min-h-screen py-8 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">The Wisdom of Chips: Paws & Ponderings</h1>
          <p className="text-muted-foreground">Life advice from our four-legged philosopher</p>
        </header>

        <main>
          <QuoteCard 
            quote={currentQuote} 
            onNewQuote={getRandomQuote} 
          />
        </main>
        
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>Wag more, bark less. © {new Date().getFullYear()} Doggy Wisdom</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
