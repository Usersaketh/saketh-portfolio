
import React from 'react';
import FadeInSection from './FadeInSection';

const CodeEditorWindow = () => {
  return (
    <FadeInSection>
      <div className="relative group">
        {/* Matrix-style background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-px bg-terminal-green animate-fall"
              style={{
                left: `${i * 10}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>

        {/* Code editor window */}
        <div className="glass-window rounded-lg border border-white/10 backdrop-blur-xl bg-black/30 overflow-hidden">
          {/* Window header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 border-b border-white/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-xs text-white/50 ml-2">saketh.js</span>
          </div>

          {/* Code content */}
          <div className="p-6 font-mono text-sm leading-relaxed">
            <div className="text-white/80">
              <span className="text-terminal-purple">const</span>{" "}
              <span className="text-terminal-blue">saketh</span> = {"{"}
            </div>
            <div className="pl-4">
              <span className="text-white/70">role:</span>{" "}
              <span className="text-terminal-green">"AIML Developer"</span>,
            </div>
            <div className="pl-4">
              <span className="text-white/70">passion:</span>{" "}
              <span className="text-terminal-green">"Teaching machines to think, not just work."</span>,
            </div>
            <div className="pl-4">
              <span className="text-white/70">currentlyLearning:</span>{" "}
              <span className="text-terminal-green">"Next.js, AI Integration"</span>,
            </div>
            <div className="text-white/80">{"}"}</div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default CodeEditorWindow;
