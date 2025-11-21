import { useEffect, useCallback } from 'preact/hooks';
import { useAppContext, setAppState, Text, MenuSection, MenuItem } from '@blockcode/core';

export function SettingsSection({ itemClassName }) {
  const { appState } = useAppContext();

  useEffect(() => {
    if (appState.value?.outline == null) {
      setAppState({
        outline: false, // 默认关闭大纲
        advancedMode: false, // 默认关闭专业模式
      });
    }
  }, []);

  const handleToggleOutline = useCallback(() => {
    const outline = !appState.value.outline;
    setAppState({ outline });
  }, []);

  const handleToggleAdvancedMode = useCallback(() => {
    const advancedMode = !appState.value.advancedMode;
    if (advancedMode) {
      document.querySelector('[data-mode="ir"]').dispatchEvent(new CustomEvent('click'));
    } else {
      document.querySelector('[data-mode="wysiwyg"]').dispatchEvent(new CustomEvent('click'));
    }
    setAppState({ advancedMode });
  }, []);

  return (
    <MenuSection>
      <MenuItem
        className={itemClassName}
        onClick={handleToggleOutline}
      >
        {appState.value?.outline !== true ? (
          <Text
            id="writer.menus.edit.openOutline"
            defaultMessage="Turn on Outline"
          />
        ) : (
          <Text
            id="writer.menus.edit.closeOutline"
            defaultMessage="Turn off Outline"
          />
        )}
      </MenuItem>
      <MenuItem
        className={itemClassName}
        onClick={handleToggleAdvancedMode}
      >
        {appState.value?.advancedMode !== true ? (
          <Text
            id="writer.menus.edit.openAdvanced"
            defaultMessage="Turn on Advanced Mode"
          />
        ) : (
          <Text
            id="writer.menus.edit.closeAdvanced"
            defaultMessage="Turn off Advanced Mode"
          />
        )}
      </MenuItem>
    </MenuSection>
  );
}
