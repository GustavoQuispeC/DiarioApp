import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";

export const DiarioApp = () => {
  return (
    <>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </>
  );
};
