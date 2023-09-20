import Content from './components/Content';

export default function Page({ params: { lang } }) {
    return (
        <Content lang={lang} />
    )
}