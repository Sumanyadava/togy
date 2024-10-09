'use client';

import React from 'react';

import { cn } from '@udecode/cn';
import {
  CommentResolveButton as CommentResolveButtonPrimitive,
  useComment,
} from '@udecode/plate-comments/react';

import { Icons } from '@/components/icons';

import { buttonVariants } from './button';
import { Check, RefreshCcw } from 'lucide-react';

export function CommentResolveButton() {
  const comment = useComment()!;

  return (
    <CommentResolveButtonPrimitive
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'h-6 p-1 text-muted-foreground'
      )}
    >
      {comment.isResolved ? (
        <RefreshCcw className="size-4" />
      ) : (
        <Check className="size-4" />
      )}
    </CommentResolveButtonPrimitive>
  );
}
