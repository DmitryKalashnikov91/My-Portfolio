import axios from 'axios';
import Home from '../app/components/home/Home';
import { API_URL } from '../app/constants';

export default function HomePage(props) {
    return <Home {...props} />;
}
export const getStaticProps = async () => {
    try {
        const links = await axios.get(`${API_URL}/links.json`).then(({ data }) => data);
        const me = await axios.get(`${API_URL}/me.json`).then(({ data }) => data);
        if (!links || !me) {
            return {
                notFound: true,
            };
        }
        return {
            props: {
                links,
                me,
            },
            revalidate: 60,
        };
    } catch {
        return {
            props: {
                links: null,
                me: null,
            },
            revalidate: 60,
        };
    }
};
