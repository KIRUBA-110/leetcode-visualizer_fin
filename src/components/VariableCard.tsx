/**
 * VariableCard Component
 * 
 * Displays a single variable with its name, type, value, and ID
 */

import type { SerializedValue } from '../types/types';

interface VariableCardProps {
    name: string;
    data: SerializedValue;
}

export function VariableCard({ name, data }: VariableCardProps) {
    const renderValue = () => {
        if (data.type === 'list' || data.type === 'array') {
            return (
                <div className="array-viz">
                    {(data.value as any[]).map((item, idx) => (
                        <div key={idx} className="array-cell">
                            <div className="cell-index">{idx}</div>
                            <div className="cell-value">
                                {typeof item.value === 'object'
                                    ? JSON.stringify(item.value)
                                    : String(item.value)}
                            </div>
                        </div>
                    ))}
                </div>
            );
        }
        return <span>{JSON.stringify(data.value)}</span>;
    };

    return (
        <div className="variable-card">
            <div className="var-name">{name}</div>
            <div className="var-type">{data.type}</div>
            <div className="var-value">{renderValue()}</div>
            <div className="var-id">id: {data.id}</div>
        </div>
    );
}

export default VariableCard;
