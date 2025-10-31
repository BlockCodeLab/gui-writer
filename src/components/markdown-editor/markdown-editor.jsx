import { useRef, useEffect } from 'preact/hooks';
import { nanoid } from '@blockcode/utils';
import { hideSplash } from '@blockcode/core';
import Vditor from 'vditor';

import styles from './markdown-editor.module.css';
import 'vditor/dist/index.css';

export function MarkdownEditor() {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const vditor = new Vditor(ref.current, {
        cache: {
          id: `vditor-${nanoid()}`,
        },
        after() {
          hideSplash();
          vditor.setValue('`Vditor` 最小代码示例');
        },
      });
      ref.vditor = vditor;
    }

    return () => {
      ref.vditor?.destroy();
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className={styles.markdownWrapper}
    />
  );
}
