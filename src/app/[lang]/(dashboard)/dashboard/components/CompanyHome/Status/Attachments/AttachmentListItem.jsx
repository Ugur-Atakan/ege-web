'use client'

import React, { useCallback } from 'react';
import { PaperClipIcon } from '@heroicons/react/20/solid'

const AttachmentListItem = ({ name, size, onUpdate, onRemove }) => {
  return (
    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
      <div className="flex w-0 flex-1 items-center">
        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
        <div className="ml-4 flex min-w-0 flex-1 gap-2">
          <span className="truncate font-medium">{name}</span>
          <span className="flex-shrink-0 text-gray-400">{size}</span>
        </div>
      </div>
      <div className="ml-4 flex flex-shrink-0 space-x-4">
        <button
          type="button"
          className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500"
          onClick={onUpdate}
        >
          Update
        </button>
        <span className="text-gray-200" aria-hidden="true">
          |
        </span>
        <button
          type="button"
          className="rounded-md bg-white font-medium text-gray-900 hover:text-gray-800"
          onClick={onRemove}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default AttachmentListItem;
