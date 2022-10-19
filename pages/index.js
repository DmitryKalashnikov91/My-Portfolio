import Home from '../app/components/home/Home';
import links from '../app/api/links.json';
import me from '../app/api/me.json';

export default function HomePage(props) {
    return <Home {...props} />;
}
export const getStaticProps = () => {
    return {
        props: {
            links,
            me,
        },
    };
};
