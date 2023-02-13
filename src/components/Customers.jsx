import { useTranslation } from 'react-i18next';

export default function Customers() {
    const { t } = useTranslation();
    const videos = [
        {
            name: t('section2_customer_name_1'),
            title: t('section2_customer_title_1'),
            source:
                'https://www.youtube.com/embed/QiqVTtFDjYY',
        },
        {
            name: t('section2_customer_name_2'),
            title: t('section2_customer_title_2'),
            source:
                'https://www.youtube.com/embed/_zj-Bh5SjK0',
        },
        {
            name: t('section2_customer_name_3'),
            title: t('section2_customer_title_3'),
            source:
                'https://www.youtube.com/embed/ggWsTwawg4o',
        }
    ]
    return (
        <section
            id="customers"
            aria-labelledby="customers-title"
            className="bg-slate-50 py-12 sm:py-24"
        >
            <div className="mx-auto max-w-7xl divide-y-2 divide-gray-200">
                <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Meet our customers
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-3">
                    {videos.map((video) => (
                        <div key={video.name} className="pt-6 max-w-xlg">
                            <div className="group aspect-w-16 aspect-h-9 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src={video.source}
                                    title={video.name}
                                />
                            </div>
                            <div className="min-w-0 flex-1 py-4">
                                <p className="text-sm font-medium text-gray-900">{video.name}</p>
                                <p className="text-sm text-gray-500">{video.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )


}
