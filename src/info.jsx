import { addLocalesMessages, Text } from '@blockcode/core';
import { version } from '../package.json';
import featureImage from './feature.png';

addLocalesMessages({
  en: {
    'writer.name': 'Markdown Writer',
    'writer.description': 'Markdown writing fast and easy.',
    'writer.collaborator': 'Vditor',
  },
  'zh-Hans': {
    'writer.name': 'Markdown 编辑器',
    'writer.description': '好用、美观的文本编辑器。',
    'writer.collaborator': 'Vditor',
  },
  'zh-Hant': {
    'writer.name': 'Markdown 編輯器',
    'writer.description': '好用、美觀的文本編輯器。',
    'writer.collaborator': 'Vditor',
  },
});

export default {
  version,
  disabled: true,
  sortIndex: 1,
  image: featureImage,
  name: (
    <Text
      id="writer.name"
      defaultMessage="Markdown Writer"
    />
  ),
  description: (
    <Text
      id="writer.description"
      defaultMessage="Example editor."
    />
  ),
  collaborator: (
    <Text
      id="writer.collaborator"
      defaultMessage="Vditor"
    />
  ),
};
