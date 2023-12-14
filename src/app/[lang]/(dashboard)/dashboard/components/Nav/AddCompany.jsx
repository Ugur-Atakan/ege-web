import { PlusIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation'

const AddCompany = ({ lang }) => {
  const router = useRouter();
  
  return (
    <button
      type="button"
      className="inline-flex items-center rounded-full bg-gray-900 p-1 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={() => router.push(`/${lang}/dashboard/onboarding`)}
    >
      <PlusIcon className="h-5 w-5" aria-hidden="true" />
      <span className="mx-2">Add company</span>
    </button>
  )
}

export default AddCompany
