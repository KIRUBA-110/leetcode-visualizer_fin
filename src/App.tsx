/**
 * App - Main Application Component
 * 
 * Code Visualization Tool for LeetCode-style algorithms
 * Supports Python (via Pyodide) and C (via JSCPP)
 */

import { useState } from 'react';
import { useCodeRunner, type Language } from './hooks/useCodeRunner';
import { Header, CodeEditor, VisualizationPanel } from './components';
import { SAMPLE_CODES, DEFAULT_CODE } from './constants/sampleCodes';
import type { TraceResult } from './types/types';
import './styles/App.css';

function App() {
  const { isLoading, engineStatus, runCode } = useCodeRunner();
  const [language, setLanguage] = useState<Language>('python');
  const [code, setCode] = useState(DEFAULT_CODE.python);
  const [result, setResult] = useState<TraceResult | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setCode(SAMPLE_CODES[newLanguage][0].code);
    setResult(null);
    setCurrentStep(0);
  };

  const handleRunCode = async () => {
    const traceResult = await runCode(code, language);
    setResult(traceResult);
    setCurrentStep(0);
    console.log('Trace Result:', traceResult);
  };

  const currentEngine = engineStatus[language];
  const hasFrames = result ? result.frames.length > 0 : false;

  return (
    <div className="app">
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
        engineStatus={currentEngine}
        hasFrames={hasFrames}
      />

      <main className="main">
        <CodeEditor
          language={language}
          code={code}
          onCodeChange={setCode}
          onRun={handleRunCode}
          isRunDisabled={isLoading || (language === 'python' && !currentEngine.isReady)}
          showLoadingNote={language === 'python' && !currentEngine.isReady}
        />

        <VisualizationPanel
          result={result}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />
      </main>
    </div>
  );
}

export default App;
