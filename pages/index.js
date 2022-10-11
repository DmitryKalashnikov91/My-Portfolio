import axios from 'axios';
import { API_URL } from '../app/constants';
import Home from './components/screens/home/Home';

export default function HomePage(props) {
    return <Home {...props} />;
}
export const getStaticProps = async () => {
    try {
        const links = await axios.get(`${API_URL}/links`).then(({ data }) => data);
        const me = await axios.get(`${API_URL}/me`).then(({ data }) => data);
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
