
import React, { useState } from 'react';
import { AppTab } from './types';
import Dashboard from './components/Dashboard';
import MedScanner from './components/MedScanner';
import VoiceAssistant from './components/VoiceAssistant';
import BookingSystem from './components/BookingSystem';
import HealthEncyclopedia from './components/HealthEncyclopedia';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.DASHBOARD);

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.DASHBOARD:
        return <Dashboard onNavigate={setActiveTab} />;
      case AppTab.SCANNER:
        return <MedScanner />;
      case AppTab.VOICE:
        return <VoiceAssistant />;
      case AppTab.BOOKING:
        return <BookingSystem />;
      case AppTab.ENCYCLOPEDIA:
        return <HealthEncyclopedia />;
      default:
        return <Dashboard onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen pb-20 md:pb-0">
      <header className="sticky top-0 z-50 glass border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab(AppTab.DASHBOARD)}>
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight gradient-text">Aura Health AI</span>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <button onClick={() => setActiveTab(AppTab.DASHBOARD)} className={`text-sm font-medium ${activeTab === AppTab.DASHBOARD ? 'text-blue-600' : 'text-slate-500 hover:text-blue-500 transition-colors'}`}>Home</button>
          <button onClick={() => setActiveTab(AppTab.SCANNER)} className={`text-sm font-medium ${activeTab === AppTab.SCANNER ? 'text-blue-600' : 'text-slate-500 hover:text-blue-500 transition-colors'}`}>Scan Meds</button>
          <button onClick={() => setActiveTab(AppTab.VOICE)} className={`text-sm font-medium ${activeTab === AppTab.VOICE ? 'text-blue-600' : 'text-slate-500 hover:text-blue-500 transition-colors'}`}>Voice Assistant</button>
          <button onClick={() => setActiveTab(AppTab.ENCYCLOPEDIA)} className={`text-sm font-medium ${activeTab === AppTab.ENCYCLOPEDIA ? 'text-blue-600' : 'text-slate-500 hover:text-blue-500 transition-colors'}`}>Encyclopedia</button>
          <button onClick={() => setActiveTab(AppTab.BOOKING)} className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md active:scale-95">Book Session</button>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full p-6">
        {renderContent()}
      </main>

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <footer className="hidden md:block py-10 border-t border-slate-200 mt-20 text-center text-slate-400 text-sm">
        <p>© 2024 Aura Health AI. For informational purposes only. In case of emergency, call 911 or your local emergency services.</p>
      </footer>
    </div>
  );
};

export default App;
