import React, { ChangeEvent } from "react";
import TextField, { TextFieldVariants } from "@mui/material/TextField";
import { makeFirstLetterCapital } from "../utils/algoMethods";
import Grid from "@mui/material/Grid";

interface InputProps {
  name: string;
  label: string;
  required?: boolean;
  type: string;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  variant?: TextFieldVariants;
  data: { [key: string]: any };
}

const Input: React.FC<InputProps> = ({
  variant,
  type,
  name,
  data,
  label,
  required,
  error,
  onChange,
  ...rest
}) => {
  return (
    <Grid item xs={12} {...rest}>
      <TextField
        variant={variant}
        label={makeFirstLetterCapital(label)}
        type={type}
        id={name}
        name={name}
        value={data[name as keyof typeof data] ?? ""}
        required={required}
        helperText={error}
        error={Boolean(error)}
        onChange={onChange}
        fullWidth
        autoComplete="off"
      />
    </Grid>
  );
};

Input.defaultProps = {
  required: true,
  type: "text",
  variant: "outlined",
};

export default React.memo(Input);
