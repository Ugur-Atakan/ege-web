import Content from './components';

export default function Page({ params: { lang } }) {
    return (
        <Content lang={lang} />
    )
}