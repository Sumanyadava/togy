import React from 'react';

import {
  BoldPlugin,
  CodePlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  UnderlinePlugin,
} from '@udecode/plate-basic-marks/react';
import { useEditorReadOnly } from '@udecode/plate-common/react';

import { Icons } from '@/components/icons';

import { MarkToolbarButton } from './mark-toolbar-button';
import { TurnIntoDropdownMenu } from './turn-into-dropdown-menu';
import { Bold, Code, Italic, Strikethrough, Underline } from 'lucide-react';

export function FloatingToolbarButtons() {
  const readOnly = useEditorReadOnly();

  return (
    <>
      {!readOnly && (
        <>
          <TurnIntoDropdownMenu />

          <MarkToolbarButton nodeType={BoldPlugin.key} tooltip="Bold (⌘+B)">
            <Bold />
          </MarkToolbarButton>
          <MarkToolbarButton nodeType={ItalicPlugin.key} tooltip="Italic (⌘+I)">
            <Italic />
          </MarkToolbarButton>
          <MarkToolbarButton
            nodeType={UnderlinePlugin.key}
            tooltip="Underline (⌘+U)"
          >
            <Underline />
          </MarkToolbarButton>
          <MarkToolbarButton
            nodeType={StrikethroughPlugin.key}
            tooltip="Strikethrough (⌘+⇧+M)"
          >
            <Strikethrough />
          </MarkToolbarButton>
          <MarkToolbarButton nodeType={CodePlugin.key} tooltip="Code (⌘+E)">
            <Code />
          </MarkToolbarButton>
        </>
      )}
    </>
  );
}
