import './l10n';

import { html2canvas } from '@blockcode/utils';
import { MarkdownEditor, markdownTab } from '@blockcode/write';
import { SettingsSection } from './components/edit-menu/settings-section';
import { defaultProject } from './lib/default-project';

export default {
  onNew() {
    return defaultProject;
  },

  onSave(files, assets) {
    files = files.map((file) => {
      return {
        id: file.id,
        content: file.content,
      };
    });
    return {
      files,
      assets,
    };
  },

  // 生成项目缩略图
  async onThumb() {
    const mode = window.currentVditor.getCurrentMode();
    const content = window.currentVditor.vditor[mode].element;
    const canvas = await html2canvas(content);
    return canvas?.toDataURL();
  },

  // 撤销操作
  onUndo(e) {
    if (e instanceof MouseEvent) {
      const { vditor } = window.currentVditor;
      vditor.undo.undo(vditor);
    }
  },

  // 重做操作
  onRedo(e) {
    if (e instanceof MouseEvent) {
      const { vditor } = window.currentVditor;
      vditor.undo.redo(vditor);
    }
  },

  // 允许撤销操作的检测
  onEnableUndo() {
    const disabled = document.querySelector('[data-type="undo"].vditor-menu--disabled');
    return window.currentVditor && !disabled;
  },

  // 允许重做操作的检测
  onEnableRedo() {
    const disabled = document.querySelector('[data-type="redo"].vditor-menu--disabled');
    return window.currentVditor && !disabled;
  },

  menuItems: [
    {
      id: 'edit',
      Menu: SettingsSection,
      disabledCoding: true,
      disabledCompactBlock: true,
    },
    {
      id: 'view',
      disabled: true,
    },
  ],

  tabs: [
    {
      ...markdownTab,
      Content: MarkdownEditor,
    },
  ],

  // docks: []
};
