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
        console.log(links);
        if (!links) {
            return {
                notFound: true,
            };
        }
        return {
            props: {
                links,
                me,
            },
        };
    } catch {
        return {
            props: {
                links: null,
                me: null,
            },
        };
    }
};
