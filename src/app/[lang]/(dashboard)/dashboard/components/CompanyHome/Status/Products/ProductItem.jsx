'use client'

import React from 'react';
import Link from 'next/link';
import axios from 'axios';

const ProductItem = (product) => {
  return (
    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-md leading-6">
      <div className="flex w-0 flex-1 items-center">
        <div className="ml-4 flex min-w-0 flex-1 gap-2">
          <span className="truncate font-medium">{product.name} </span>{' '}
            <span className="truncate font-medium capitalize">- {product.frequency}</span>
        </div>
      </div>
      <div className="ml-4 flex flex-shrink-0 space-x-4">
        <Link
          type="button"
          className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500"
          href={'/en/dashboard/billing/' + product.companyID}
        >
          Upgrade
        </Link>
        <span className="text-gray-200" aria-hidden="true">
          |
        </span>
        <button
          type="button"
          className="rounded-md bg-white font-medium text-gray-900 hover:text-gray-800"
          // onClick={onRemove}
        >
          Cancel
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
