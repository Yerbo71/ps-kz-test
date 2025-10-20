import React from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';
import type { BaseOptionType, DefaultOptionType } from 'antd/es/select';

interface OutlinedSelectProps<
  ValueType = never,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType
> extends SelectProps<ValueType, OptionType> {
  label: string;
}

export const OutlinedSelect = <
  ValueType = never,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType
>({
  label,
  ...selectProps
}: OutlinedSelectProps<ValueType, OptionType>) => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        height: '55px',
        width: '100%'
      }}
    >
      <span
        style={{
          zIndex: 5,
          position: 'absolute',
          left: '12px',
          top: '-8px',
          fontSize: '12px',
          fontWeight: 400,
          color: '#22232B',
          backgroundColor: '#fff',
          padding: '2px 5px'
        }}
      >
        {label}
      </span>

      <Select
        {...selectProps}
        className="outlined-select"
        style={{
          width: '100%',
          border: '1px solid #BDCDD5',
          borderRadius: '5px',
          height: '40px',
          marginTop: '10px',
          ...selectProps.style
        }}
      />
      <style jsx global>{`
        .outlined-select .ant-select-selector {
          border: none !important;
          box-shadow: none !important;
          height: 38px !important;
          display: flex;
          align-items: center;
        }

        .outlined-select.ant-select-focused .ant-select-selector {
          border: none !important;
          box-shadow: none !important;
        }
      `}</style>
    </div>
  );
};
