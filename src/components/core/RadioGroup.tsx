import type { FunctionComponent } from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';

export interface RadioGroupItem {
  label: string;
  value: string;
}

export interface RadioGroupProps {
  'aria-label': string;
  items: RadioGroupItem[];
  onChange: (value: string) => void;
  value: string;
}

export const RadioGroup: FunctionComponent<RadioGroupProps> = (props) => {
  const { 'aria-label': ariaLabel, items, onChange, value } = props;

  return (
    <RadixRadioGroup.Root
      value={value}
      aria-label={ariaLabel}
      onValueChange={onChange}
    >
      {items.map((item) => {
        const { label, value } = item;
        const id = `radio-${value}`;

        return (
          <div key={id} className="flex items-center py-1">
            <RadixRadioGroup.Item
              value={value}
              id={id}
              className="h-5 w-5 rounded-full border-2 border-foreground"
            >
              <RadixRadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-3.5 after:w-3.5 after:rounded-full after:bg-primary" />
            </RadixRadioGroup.Item>
            <label className="cursor-pointer pl-3" htmlFor={id}>
              {label}
            </label>
          </div>
        );
      })}
    </RadixRadioGroup.Root>
  );
};
