/**
 * TimelineControls Component
 * 
 * Navigation controls for stepping through execution frames
 */

interface TimelineControlsProps {
    currentStep: number;
    totalFrames: number;
    onStepChange: (step: number) => void;
}

export function TimelineControls({
    currentStep,
    totalFrames,
    onStepChange,
}: TimelineControlsProps) {
    if (totalFrames === 0) return null;

    return (
        <>
            <div className="timeline-controls">
                <button
                    onClick={() => onStepChange(0)}
                    disabled={currentStep === 0}
                    className="btn btn-sm"
                >
                    ⏮ Start
                </button>
                <button
                    onClick={() => onStepChange(Math.max(0, currentStep - 1))}
                    disabled={currentStep === 0}
                    className="btn btn-sm"
                >
                    ◀ Prev
                </button>
                <span className="step-indicator">
                    Step {currentStep + 1} / {totalFrames}
                </span>
                <button
                    onClick={() => onStepChange(Math.min(totalFrames - 1, currentStep + 1))}
                    disabled={currentStep === totalFrames - 1}
                    className="btn btn-sm"
                >
                    Next ▶
                </button>
                <button
                    onClick={() => onStepChange(totalFrames - 1)}
                    disabled={currentStep === totalFrames - 1}
                    className="btn btn-sm"
                >
                    End ⏭
                </button>
            </div>

            <input
                type="range"
                min={0}
                max={totalFrames - 1}
                value={currentStep}
                onChange={(e) => onStepChange(Number(e.target.value))}
                className="timeline-slider"
            />
        </>
    );
}

export default TimelineControls;
