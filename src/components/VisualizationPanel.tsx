/**
 * VisualizationPanel Component
 * 
 * Right panel showing execution trace, timeline, and variable state
 */

import type { TraceResult, ExecutionFrame } from '../types/types';
import { TimelineControls } from './TimelineControls';
import { VariableCard } from './VariableCard';

interface VisualizationPanelProps {
    result: TraceResult | null;
    currentStep: number;
    onStepChange: (step: number) => void;
}

export function VisualizationPanel({
    result,
    currentStep,
    onStepChange,
}: VisualizationPanelProps) {
    const currentFrame: ExecutionFrame | undefined = result?.frames[currentStep];

    return (
        <div className="panel viz-panel">
            <div className="panel-header">
                <h2>Execution Trace</h2>
                {result && (
                    <span className="frame-count">
                        {result.frames.length} frames captured
                    </span>
                )}
            </div>

            {/* Timeline Controls */}
            {result && (
                <TimelineControls
                    currentStep={currentStep}
                    totalFrames={result.frames.length}
                    onStepChange={onStepChange}
                />
            )}

            {/* Current Frame Details */}
            {currentFrame && (
                <div className="frame-details">
                    <div className="frame-meta">
                        <span className="meta-item">
                            <strong>Line:</strong> {currentFrame.line}
                        </span>
                        <span className="meta-item">
                            <strong>Event:</strong> {currentFrame.event}
                        </span>
                        <span className="meta-item">
                            <strong>Function:</strong> {currentFrame.function}
                        </span>
                    </div>

                    <h3>Variables</h3>
                    <div className="variables-grid">
                        {Object.entries(currentFrame.variables).map(([name, data]) => (
                            <VariableCard key={name} name={name} data={data} />
                        ))}
                    </div>

                    {currentFrame.return_value && (
                        <div className="return-value">
                            <strong>Return Value:</strong>{' '}
                            {typeof currentFrame.return_value.value === 'string'
                                ? currentFrame.return_value.value
                                : JSON.stringify(currentFrame.return_value.value)}
                        </div>
                    )}
                </div>
            )}

            {/* Error Display - only show if we have no frames (real failure) */}
            {result && !result.success && result.frames.length === 0 && (
                <div className="error-box">
                    <strong>Error:</strong> {result.error}
                </div>
            )}

            {/* Raw JSON Output (for debugging) */}
            {result && (
                <details className="raw-output">
                    <summary>Raw JSON Output</summary>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </details>
            )}
        </div>
    );
}

export default VisualizationPanel;
