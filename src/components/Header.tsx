/**
 * Header Component
 * 
 * Contains app title, language tabs, and engine status
 */

import type { Language } from '../hooks/useCodeRunner';

interface HeaderProps {
    language: Language;
    onLanguageChange: (lang: Language) => void;
    engineStatus: {
        isLoading: boolean;
        isReady: boolean;
        error: string | null;
    };
    hasFrames: boolean;
}

export function Header({ language, onLanguageChange, engineStatus, hasFrames }: HeaderProps) {
    return (
        <header className="header">
            <h1>🔍 Code Visualizer</h1>

            {/* Language Tabs */}
            <div className="language-tabs">
                <button
                    className={`tab ${language === 'python' ? 'active' : ''}`}
                    onClick={() => onLanguageChange('python')}
                >
                    🐍 Python
                </button>
                <button
                    className={`tab ${language === 'c' ? 'active' : ''}`}
                    onClick={() => onLanguageChange('c')}
                >
                    ⚡ C
                </button>
            </div>

            <div className="status">
                {engineStatus.isLoading && <span className="loading">⏳ Loading...</span>}
                {engineStatus.isReady && !engineStatus.error && <span className="ready">✅ Ready</span>}
                {engineStatus.error && !hasFrames && (
                    <span className="error">❌ {engineStatus.error}</span>
                )}
            </div>
        </header>
    );
}

export default Header;
