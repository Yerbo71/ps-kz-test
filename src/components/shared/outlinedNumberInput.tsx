import React from 'react';
import Image from 'next/image';

interface OutlinedNumberInputProps {
  label: string;
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
}

export const OutlinedNumberInput: React.FC<OutlinedNumberInputProps> = ({
  label,
  value = 0,
  onChange,
  min = 0,
  max
}) => {
  const handleIncrement = () => {
    if (max !== undefined && value >= max) return;
    const newValue = value + 1;
    onChange?.(newValue);
  };

  const handleDecrement = () => {
    if (value <= min) return;
    const newValue = value - 1;
    onChange?.(newValue);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px',
        border: '1px solid #BDCDD5',
        borderRadius: '5px',
        padding: '10px 13px 10px 20px',
        position: 'relative',
        height: '40px'
      }}
    >
      <span
        style={{
          zIndex: 5,
          position: 'absolute',
          left: '12px',
          top: '-14px',
          fontSize: '12px',
          fontWeight: 400,
          color: '#22232B',
          backgroundColor: '#fff',
          padding: '2px 5px'
        }}
      >
        {label}
      </span>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <button
          onClick={handleDecrement}
          style={{
            opacity: value <= min ? 0.5 : 1,
            cursor: value <= min ? 'not-allowed' : 'pointer',
            background: 'none',
            border: 'none'
          }}
        >
          <Image
            src="/icons/minus.svg"
            alt="Minus"
            width={20}
            height={20}
            style={{ marginTop: '4px' }}
          />
        </button>

        <span style={{ fontWeight: 700, fontSize: '14px' }}>{value}</span>
      </div>

      <button
        onClick={handleIncrement}
        style={{
          opacity: max !== undefined && value >= max ? 0.5 : 1,
          cursor: max !== undefined && value >= max ? 'not-allowed' : 'pointer',
          background: 'none',
          border: 'none'
        }}
      >
        <Image
          src="/icons/plus.svg"
          alt="Plus"
          width={20}
          height={20}
          style={{ marginTop: '4px' }}
        />
      </button>
    </div>
  );
};
