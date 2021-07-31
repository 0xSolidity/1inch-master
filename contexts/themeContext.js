import { createContext, useEffect, useReducer, useState } from 'react';
import { themeReducer } from '../reducers/themeReducer';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [initialTheme, dispatch] = useReducer(themeReducer, props.value);

  const [appTheme, setAppTheme] = useState('');

  useEffect(() => {
    if (window) {
      const theme = localStorage.getItem('theme') || initialTheme;
      if (theme !== initialTheme) {
        dispatch({
          type: 'UPDATE_THEME',
          theme: theme,
        });
      }
      localStorage.setItem('theme', theme);

      setAppTheme(theme);
    }
  }, [initialTheme]);

  return (
    <ThemeContext.Provider value={{ theme: appTheme, dispatch }}>
      <div className={appTheme}>
        <div className='bg-1inch-page-bg-01 bg-pageBg03 h-full block overflow-auto text-text01'>{props.children}</div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

//relative z-10 block h-full overflow-auto bg-pageBg01 text-text01 font-body

//https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fCRc4AMP6lbBP, 300
//https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz, 400
