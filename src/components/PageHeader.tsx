import { Box, Divider, Typography } from "@mui/material";
import { useTheme } from "../context/ThemeProvider";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  const { isDark } = useTheme();
  return (
    <>
      <Box>
        <Typography
          variant="h2"
          component="h1"
          sx={{ color: isDark ? "white" : "black" }}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          sx={{ color: isDark ? "white" : "black" }}
        >
          {subtitle}
        </Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
    </>
  );
};

export default PageHeader;
