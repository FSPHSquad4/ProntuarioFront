;
import { createContext, useContext, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { toggleDocumentAttribute } from '@/utils/layout';
const INIT_STATE = {
  theme: 'light',
  orientation: 'vertical',
  mainMenu: {
    size: 'default',
    color: 'light',
    isMobileMenuOpen: false
  },
  topBar: {
    color: 'light'
  },
  title: 'welcome',
  mode: 'fluid'
};
const ThemeContext = createContext(undefined);
const useLayoutContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useLayoutContext só pode ser usado dentro do LayoutProvider');
  }
  return context;
};
const LayoutProvider = ({
  children
}) => {
  const [settings, setSettings] = useLocalStorage('__OSEN_NEXT_CONFIG__', INIT_STATE);
  const [offcanvasStates, setOffcanvasStates] = useState({
    showThemeCustomizer: false,
    showHorizontalMenu: false,
    showBackdrop: false
  });
  const prevOrientation = useRef(settings.orientation);

  // update settings
  const updateSettings = useCallback(_newSettings => {
    setSettings(prevSettings => ({
      ...prevSettings,
      ..._newSettings,
      mainMenu: {
        ...prevSettings.mainMenu,
        ...(_newSettings.mainMenu || {})
      },
      topBar: {
        ...prevSettings.topBar,
        ...(_newSettings.topBar || {})
      }
    }));
  }, [setSettings]);
  const changeTheme = nTheme => {
    updateSettings({
      theme: nTheme
    });
  };
  const changeLayoutOrientation = useCallback(nOrientation => {
    prevOrientation.current = settings.orientation;
    updateSettings({
      orientation: nOrientation
    });
  }, [updateSettings]);
  const changeMainMenuSize = useCallback(nSize => {
    updateSettings({
      mainMenu: {
        ...settings.mainMenu,
        size: nSize
      }
    });
  }, [updateSettings]);
  const changeMainMenuColor = useCallback(nColor => {
    updateSettings({
      mainMenu: {
        ...settings.mainMenu,
        color: nColor
      }
    });
  }, [updateSettings]);
  const changeTopColor = useCallback(nColor => {
    updateSettings({
      topBar: {
        color: nColor
      }
    });
  }, [updateSettings]);
  const changeLayoutMode = useCallback(nMode => {
    updateSettings({
      mode: nMode
    });
  }, [updateSettings]);
  const changeTitle = newTitle => updateSettings({
    title: newTitle
  });
  const toggleMobileMenu = nValue => {
    updateSettings({
      mainMenu: {
        ...settings.mainMenu,
        isMobileMenuOpen: nValue
      }
    });
  };
  const toggleThemeCustomizer = () => {
    setOffcanvasStates({
      ...offcanvasStates,
      showThemeCustomizer: !offcanvasStates.showThemeCustomizer
    });
  };
  const toggleHorizontalMenu = () => {
    setOffcanvasStates({
      ...offcanvasStates,
      showHorizontalMenu: !offcanvasStates.showHorizontalMenu
    });
  };
  const themeCustomizer = {
    open: offcanvasStates.showThemeCustomizer,
    toggle: toggleThemeCustomizer
  };
  const horizontalMenu = {
    open: offcanvasStates.showHorizontalMenu,
    toggle: toggleHorizontalMenu
  };

  // toggle backdrop
  const toggleBackdrop = useCallback(() => {
    const htmlTag = document.getElementsByTagName('html')[0];
    if (offcanvasStates.showBackdrop) htmlTag.classList.remove('sidebar-enable');else htmlTag.classList.add('sidebar-enable');
    setOffcanvasStates({
      ...offcanvasStates,
      showBackdrop: !offcanvasStates.showBackdrop
    });
  }, [offcanvasStates.showBackdrop]);
  useEffect(() => {
    toggleDocumentAttribute('data-bs-theme', settings.theme);
    toggleDocumentAttribute('data-topbar-color', settings.topBar.color);
    toggleDocumentAttribute('data-menu-color', settings.mainMenu.color);
    toggleDocumentAttribute('data-sidenav-size', settings.mainMenu.size);
    toggleDocumentAttribute('data-layout-mode', settings.mode);
    return () => {
      toggleDocumentAttribute('data-bs-theme', settings.theme, true);
      toggleDocumentAttribute('data-topbar-color', settings.topBar.color, true);
      toggleDocumentAttribute('data-sidenav-size', settings.mainMenu.color, true);
      toggleDocumentAttribute('data-layout-mode', settings.mainMenu.size, true);
    };
  }, [settings]);
  const resetSettings = () => updateSettings(INIT_STATE);
  return <ThemeContext.Provider value={useMemo(() => ({
    ...settings,
    settings,
    prevOrientation: prevOrientation.current,
    horizontalMenu,
    themeCustomizer,
    changeTheme,
    changeLayoutOrientation,
    changeMainMenuSize,
    changeMainMenuColor,
    changeTopColor,
    changeLayoutMode,
    changeTitle,
    toggleMobileMenu,
    toggleBackdrop,
    resetSettings
  }), [settings, offcanvasStates])}>
                        {children}
                        {offcanvasStates.showBackdrop && <>
                                <div className="offcanvas-backdrop fade show" onClick={toggleBackdrop}></div>
                            </>}
            </ThemeContext.Provider>;
};
export { LayoutProvider, useLayoutContext };