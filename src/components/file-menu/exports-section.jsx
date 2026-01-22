import { useCallback } from 'preact/hooks';
import { exportFile } from '@blockcode/utils';
import { setAlert, Text, MenuSection, MenuItem } from '@blockcode/core';

export function ExportsSection({ itemClassName }) {
  const handleExportMarkdown = useCallback(async () => {
    if (window.currentVditor) {
      const id = setAlert('exporting');
      const result = await exportFile(window.currentVditor.getValue());
      if (result.success) {
        setAlert('exportCompleted', { id }, 1000);
      } else {
        if (result.error === 'AbortError') {
          setAlert('exportAbortError', { id }, 1000);
        } else {
          setAlert('exportError', { id }, 1000);
        }
      }
    }
  }, []);

  // [TODO] 导出 HTML 和 PDF
  return (
    <MenuSection>
      <MenuItem
        className={itemClassName}
        onClick={handleExportMarkdown}
        label={
          <Text
            id="writer.menus.file.exportMarkdown"
            defaultMessage="Export to Markdown..."
          />
        }
      />
    </MenuSection>
  );
}
