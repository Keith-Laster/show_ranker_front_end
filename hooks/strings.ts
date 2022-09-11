import { ChangeEvent, useCallback, useMemo, useState } from "react";

export interface UseTextFieldProps {
  onChange: (evt: any) => void;
  reset: () => void;
  value: string;
}

export function useTextField(
  initialValue = ''
): UseTextFieldProps {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback((evt: any) => {
    setValue(evt.target.value);
  }, [setValue, initialValue])

    const reset = useCallback(() => {
      setValue(initialValue);
    }, [setValue, initialValue]);

    return useMemo(
      () => ({
      onChange: handleChange,
      reset, 
      value,
    }),
     [handleChange, reset, value],
    );
};