import './l10n';

import { svgAsDataUri } from '@blockcode/utils';

import { Text } from '@blockcode/core';
import { MarkdownEditor } from './components/markdown-editor/markdown-editor';

import { defaultProject } from './lib/default-project';

import markdownIcon from './icon-markdown.svg';

export default {
  onNew() {
    return defaultProject;
  },

  onSave(files, assets) {
    files = files.map((file) => {
      return {
        id: file.id,
        type: file.type,
        content: file.content,
      };
    });
    const meta = {};
    return {
      meta,
      files,
      assets,
    };
  },

  // 生成项目缩略图
  // ! 不要将缩略图生成放在 onSave 中
  async onThumb() {},

  // 撤销操作
  onUndo(e) {},

  // 重做操作
  onRedo(e) {},

  // 允许撤销操作的检测
  onEnableUndo() {},

  // 允许重做操作的检测
  onEnableRedo() {},

  // menuItems: [],

  tabs: [
    {
      icon: markdownIcon,
      label: (
        <Text
          id="writer.tabs.editor"
          defaultMessage="Writer"
        />
      ),
      Content: MarkdownEditor,
    },
  ],

  // docks: []
};
