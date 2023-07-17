import React, { createContext, useCallback, useContext, useState } from "react";
import { Alert, Snackbar } from "@mui/material";

enum AlertColor {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
}

enum AlertVariant {
  FILLED = "filled",
  OUTLINED = "outlined",
}

interface SnackbarProviderProps {
  children: React.ReactNode;
}

interface SnackbarContextValue {
  setSnack: (color: AlertColor, message: string, variant: AlertVariant) => void;
}

const SnackbarContext = createContext<SnackbarContextValue | undefined>(
  undefined
);

export default function SnackbarProvider({ children }: SnackbarProviderProps) {
  const [isSnackOpen, setOpenSnack] = useState(false);
  const [snackColor, setSnackColor] = useState(AlertColor.SUCCESS);
  const [snackVariant, setSnackVariant] = useState(AlertVariant.FILLED);
  const [snackMessage, setSnackMessage] = useState("in snackbar");

  const setSnack = useCallback(
    (color: AlertColor, message: string, variant: AlertVariant) => {
      setOpenSnack(true);
      setSnackColor(color);
      setSnackVariant(variant);
      setSnackMessage(message);
    },
    []
  );

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isSnackOpen}
        onClose={() => setOpenSnack(false)}
        autoHideDuration={5000}
      >
        <Alert severity={snackColor} variant={snackVariant}>
          {snackMessage}
        </Alert>
      </Snackbar>
      <SnackbarContext.Provider value={{ setSnack }}>
        {children}
      </SnackbarContext.Provider>
    </>
  );
}

export const useSnack = (): SnackbarContextValue => {
  const context = useContext(SnackbarContext);
  if (!context)
    throw Error("useSnackbar must be used within a SnackbarProvider");
  return context;
};
