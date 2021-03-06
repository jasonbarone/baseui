import * as React from 'react';
import {Option} from '../select';
import {Override} from '../overrides';

export interface TimezonePickerProps {
  date?: Date;
  disabled?: boolean;
  positive?: boolean;
  error?: boolean;
  mapLabels?: (args: Option) => React.ReactNode;
  onChange?: (value: {id: string; label: string; offset: number}) => any;
  overrides?: {Select?: Override<any>};
  value?: string;
}
export interface TimezonePickerState {
  timezones: Option[];
  value?: string;
}
export class TimezonePicker extends React.Component<
  TimezonePickerProps,
  TimezonePickerState
> {
  buildTimezones(compareDate: Date): string[];
}
