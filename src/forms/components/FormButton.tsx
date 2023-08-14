import React from "react";

import Button, { ButtonProps } from "@mui/material/Button";

interface FormButtonProps extends ButtonProps {
  node: React.ReactNode;
}

const FormButton: React.FC<FormButtonProps> = ({
  variant,

  size,
  color,
  onClick,
  disabled,
  node,
  ...otherProps
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      color={color}
      onClick={onClick}
      disabled={disabled}
      fullWidth
      {...otherProps}
    >
      {node}
    </Button>
  );
};

FormButton.defaultProps = {
  variant: "contained",

  size: "medium",
  color: "primary",
  disabled: false,
};

export default React.memo(FormButton);
