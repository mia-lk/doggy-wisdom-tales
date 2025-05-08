
import { useRandomQuote } from "@/hooks/useRandomQuote";
import { QuoteCard } from "@/components/QuoteCard";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const { currentQuote, getRandomQuote } = useRandomQuote();
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

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
    <div className={`min-h-screen py-8 px-4 bg-background flex flex-col items-center justify-center ${isMobile ? 'mobile-vh-content' : ''}`}>
      <div className={`container max-w-4xl mx-auto flex-grow flex flex-col justify-center ${isMobile ? 'mobile-content-area' : ''}`}>
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-[#483D3F]" style={{fontSize: 'calc(1.5rem + 3px)'}}>The Wisdom of Chips</h1>
          <p className="text-muted-foreground">Paws & ponderings from our four-legged philosopher</p>
        </header>

        <main className="flex justify-center">
          <QuoteCard 
            quote={currentQuote} 
            onNewQuote={getRandomQuote} 
          />
        </main>
      </div>
      
      <footer className="mt-12 text-center text-sm text-muted-foreground pb-4">
        <p>Wag more, bark less. Made with ❤ by Mia © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Index;
