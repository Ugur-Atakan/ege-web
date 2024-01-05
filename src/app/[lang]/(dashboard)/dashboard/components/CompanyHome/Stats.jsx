import React from 'react'

const stats = [
    { name: 'Inbox', stat: '0' },
    { name: 'Number of Documents', stat: '0' },
    { name: 'Users', stat: '1' },
]
  
const Stats = () => {
    return (
      <div>
        <h3 className="text-[20px] font-semibold leading-6 text-gray-900">Home</h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
            </div>
          ))}
        </dl>
      </div>
    )
}

export default Stats
  