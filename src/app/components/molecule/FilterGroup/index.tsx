"use client";
import { useCallback, useEffect, useState } from "react";
import Text from "../../atoms/Text";
import Box from "../../layout/Box";
import CheckBox from "../Checkbox";

type Item = {
  label: string;
  name: string;
};

type FilterGroupProps = {
  title: string;
  items: Item[];
  value?: string[];
  defaultValue?: string[];
  onChange?: (values: string[]) => void;
};

/**
 * 필터 그롭
 */
const FilterGroup = ({
  title,
  items,
  value = [],
  defaultValue = [],
  onChange,
}: FilterGroupProps) => {
  const [selected, setSelected] = useState(value ?? defaultValue);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.name;
      const newSelected = e.target.checked
        ? [...selected, value]
        : selected.filter((v) => v !== value);

      setSelected(newSelected);
      if (onChange) onChange(newSelected);
    },
    [onChange, selected]
  );

  return (
    <>
      <Text fontWeight="bold" variant="mediumLarge">
        {title}
      </Text>
      <Box $marginTop={2}>
        {items.map(({ label, name }, i) => (
          <Box key={i} $marginTop={i === 0 ? 0 : "4px"}>
            <CheckBox
              name={name}
              label={label}
              checked={!!selected.find((e) => e === name)}
              onChange={handleChange}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default FilterGroup;
