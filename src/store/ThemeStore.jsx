import { useState } from "react";

export function useThemeStore() {
  const [theme, setThemeState] = useState("dark");

  const setTheme = () => {
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, setTheme };
}