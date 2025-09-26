import { useState } from 'react';
import { PageTransition } from '@/components/ui/motion-wrapper';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { SocialProof } from '@/components/SocialProof';
import { Footer } from '@/components/Footer';
import { AuthModal } from '@/components/AuthModal';
import { DemoModal } from '@/components/DemoModal';

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup' | 'forgot'>('signup');

  const handleSignInClick = () => {
    setAuthMode('signin');
    setIsAuthModalOpen(true);
  };

  const handleTryKodrClick = () => {
    setAuthMode('signup');
    setIsAuthModalOpen(true);
  };

  const handleDemoClick = () => {
    setIsDemoModalOpen(true);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header onSignInClick={handleSignInClick} />
        
        <main>
          <Hero 
            onTryKodrClick={handleTryKodrClick}
            onDemoClick={handleDemoClick}
          />
          <Features />
          <HowItWorks />
          <SocialProof />
        </main>

        <Footer />

        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          initialMode={authMode}
        />

        <DemoModal
          isOpen={isDemoModalOpen}
          onClose={() => setIsDemoModalOpen(false)}
        />
      </div>
    </PageTransition>
  );
};

export default Index;