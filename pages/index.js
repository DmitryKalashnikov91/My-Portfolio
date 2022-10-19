import axios from 'axios';
import Home from '../app/components/home/Home';
import { API_URL } from '../app/constants';

export default function HomePage(props) {
    return <Home {...props} />;
}
export const getServerSideProps = async () => {
    try {
        const resLinks = await axios.get(`${API_URL}/links`);
        const links = resLinks.data;
        const resMe = await axios.get(`${API_URL}/me`);
        const me = resMe.data;
        if (!links) {
            return {
                notFound: true,
                revalidate: 1,
            };
        }
        return {
            props: {
                links,
                me,
            },
            revalidate: 1,
        };
    } catch {
        return {
            props: {
                links: null,
                me: null,
            },
            revalidate: 1,
        };
    }
};
