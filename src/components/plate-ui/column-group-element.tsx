import React from 'react';

import type { TColumnElement } from '@udecode/plate-layout';

import { cn, withRef } from '@udecode/cn';
import {
  PlateElement,
  useElement,
  useRemoveNodeButton,
} from '@udecode/plate-common/react';
import {
  ColumnItemPlugin,
  useColumnState,
  useDebouncePopoverOpen,
} from '@udecode/plate-layout/react';
import { useReadOnly } from 'slate-react';

import { Icons } from '@/components/icons';
import {
  Columns,
  Columns3,
  Columns2,
  LayoutGrid,
  Trash,
} from 'lucide-react';


import { Button } from './button';
import { Popover, PopoverAnchor, PopoverContent } from './popover';
import { Separator } from './separator';

export const ColumnGroupElement = withRef<typeof PlateElement>(
  ({ children, className, ...props }, ref) => {
    return (
      <PlateElement ref={ref} className={cn(className, 'my-2')} {...props}>
        <ColumnFloatingToolbar>
          <div className={cn('flex size-full gap-4 rounded')}>{children}</div>
        </ColumnFloatingToolbar>
      </PlateElement>
    );
  }
);

export function ColumnFloatingToolbar({ children }: React.PropsWithChildren) {
  const readOnly = useReadOnly();

  const {
    setDoubleColumn,
    setDoubleSideDoubleColumn,
    setLeftSideDoubleColumn,
    setRightSideDoubleColumn,
    setThreeColumn,
  } = useColumnState();

  
  const element = useElement<TColumnElement>(ColumnItemPlugin.key);

  const { props: buttonProps } = useRemoveNodeButton({ element });

  const isOpen = useDebouncePopoverOpen();

  if (readOnly) return <>{children}</>;

  return (
    <Popover open={isOpen} modal={false}>
      <PopoverAnchor>{children}</PopoverAnchor>
      <PopoverContent
        className="w-auto p-1"
        onOpenAutoFocus={(e) => e.preventDefault()}
        align="center"
        side="top"
        sideOffset={10}
      >
        <div className="box-content flex h-9 items-center gap-1 [&_svg]:size-4 [&_svg]:text-muted-foreground">
          <Button size="sms" variant="ghost" onClick={setDoubleColumn}>
            <Columns2 />
          </Button>
          <Button size="sms" variant="ghost" onClick={setThreeColumn}>
            <Columns3 />
            
          </Button>
          <Button size="sms" variant="ghost" onClick={setRightSideDoubleColumn}>
            <LayoutGrid />
          </Button>
          <Button size="sms" variant="ghost" onClick={setLeftSideDoubleColumn}>
            <LayoutGrid />
          </Button>
          <Button
            size="sms"
            variant="ghost"
            onClick={setDoubleSideDoubleColumn}
          >
            <Columns />
          </Button>

          <Separator orientation="vertical" className="my-1" />
          <Button size="sms" variant="ghost" {...buttonProps}>
            <Trash />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}