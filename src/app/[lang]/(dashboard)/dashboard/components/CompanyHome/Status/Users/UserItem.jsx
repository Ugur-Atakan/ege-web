'use client'

import React from 'react';
import Link from 'next/link';

const UserItem = (user) => {
  console.log(user)
  return (
    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-md leading-6">
      <div className="flex w-0 flex-1 items-center">
        <div className="ml-4 flex min-w-0 flex-1 gap-2">
          <span className="truncate font-medium">{user.firstName}  {user.lastName}</span>{' '}
            {/* <span className="truncate font-medium capitalize">- {product.frequency}</span> */}
        </div>
      </div>
      <div className="ml-4 flex flex-shrink-0 space-x-4">
        <Link
          type="button"
          className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500"
          href={'/en/dashboard/users/' + user.companyID}
        >
          Manage User
        </Link>
      </div>
    </li>
  );
};

export default UserItem;
