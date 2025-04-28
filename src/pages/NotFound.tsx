
import React from 'react';
import { Link } from 'react-router-dom';
import TerminalHeader from '../components/TerminalHeader';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="terminal-window">
          <TerminalHeader path="~/portfolio/error" />
          <div className="terminal-body p-8">
            <h1 className="text-4xl font-bold mb-4 text-red-500">Error 404</h1>
            <div className="code-block mb-8">
              <pre className="text-white">
                <span className="text-red-500">Uncaught ReferenceError:</span> Page not found<br />
                <span className="text-white/60">  at /portfolio/unknown-path:404:1</span><br />
                <span className="text-white/60">  at processRequest (browser:80:1)</span><br />
                <span className="text-white/60">  at handleNavigation (router:50:3)</span><br />
                <span className="text-white/60">  at renderApplication (app:24:7)</span><br />
              </pre>
            </div>
            <p className="text-lg mb-6 text-white/80">The page you're looking for doesn't exist or has been moved.</p>
            <Link to="/" className="px-6 py-3 bg-terminal-purple bg-opacity-20 text-terminal-purple hover:bg-opacity-30 rounded-md font-medium inline-flex items-center transition-colors border border-terminal-purple/30">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
