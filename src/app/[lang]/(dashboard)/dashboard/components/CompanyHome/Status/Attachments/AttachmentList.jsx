// AttachmentList.js
import React from 'react';
import AttachmentListItem from './AttachmentListItem';

const AttachmentList = ({ attachments }) => {
  return (
    <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
      {attachments.map((attachment, index) => (
        <AttachmentListItem key={index} {...attachment} />
      ))}
    </ul>
  );
};

export default AttachmentList;
