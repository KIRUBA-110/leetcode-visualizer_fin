/**
 * CodeEditor Component
 * 
 * Left panel with code input and run button
 */

import type { Language } from '../hooks/useCodeRunner';
import { SAMPLE_CODES } from '../constants/sampleCodes';

interface CodeEditorProps {
    language: Language;
    code: string;
    onCodeChange: (code: string) => void;
    onRun: () => void;
    isRunDisabled: boolean;
    showLoadingNote: boolean;
}

export function CodeEditor({
    language,
    code,
    onCodeChange,
    onRun,
    isRunDisabled,
    showLoadingNote,
}: CodeEditorProps) {
    return (
        <div className="panel editor-panel">
            <div className="panel-header">
                <h2>{language === 'python' ? 'Python' : 'C'} Code</h2>
                <div className="button-group">
                    {SAMPLE_CODES[language].map((sample) => (
                        <button
                            key={sample.name}
                            onClick={() => onCodeChange(sample.code)}
                            className="btn btn-secondary"
                        >
                            {sample.name}
                        </button>
                    ))}
                </div>
            </div>
            <textarea
                value={code}
                onChange={(e) => onCodeChange(e.target.value)}
                className="code-editor"
                spellCheck={false}
            />
            <button
                onClick={onRun}
                disabled={isRunDisabled}
                className="btn btn-primary run-btn"
            >
                ▶ Run & Trace
            </button>
            {showLoadingNote && (
                <p className="engine-note">
                    ⏳ Pyodide is loading (~5-10 seconds first time)...
                </p>
            )}
        </div>
    );
}

export default CodeEditor;
