import { useEffect, useCallback } from 'preact/hooks';
import { useAppContext, setAppState, Text, MenuSection, MenuItem } from '@blockcode/core';

export function SettingsSection({ itemClassName }) {
  const { appState } = useAppContext();

  useEffect(() => {
    if (appState.value?.outline == null) {
      setAppState({
        outline: false, // 默认关闭大纲
        advancedMode: 'wysiwyg', // 默认普通模式
      });
    }
  }, []);

  const handleToggleOutline = useCallback(() => {
    const outline = !appState.value.outline;
    setAppState({ outline });
  }, []);

  const switchAdvancedMode = useCallback(
    (mode) => () => {
      if (mode === appState.value.advancedMode) {
        mode = 'wysiwyg';
      }
      document.querySelector(`[data-mode="${mode}"]`).dispatchEvent(new CustomEvent('click'));
      setAppState({ advancedMode: mode });
    },
    [],
  );

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
        onClick={switchAdvancedMode('ir')}
      >
        {appState.value?.advancedMode !== 'ir' ? (
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
      <MenuItem
        className={itemClassName}
        onClick={switchAdvancedMode('sv')}
      >
        {appState.value?.advancedMode !== 'sv' ? (
          <Text
            id="writer.menus.edit.openProfessional"
            defaultMessage="Turn on Professional Mode"
          />
        ) : (
          <Text
            id="writer.menus.edit.closeProfessional"
            defaultMessage="Turn off Professional Mode"
          />
        )}
      </MenuItem>
    </MenuSection>
  );
}
