import axios from 'axios';
import Home from '../app/components/home/Home';
import { API_URL } from '../app/constants';

export default function HomePage(props) {
    return <Home {...props} />;
}
export const getStaticProps = async () => {
    try {
        const links = await axios
            .get(`${API_URL}/links`)
            .then(({ data }) => data)
            .catch((error) => {
                if (error) {
                    return error.message;
                }
            });
        const me = await axios
            .get(`${API_URL}/me`)
            .then(({ data }) => data)
            .catch((error) => {
                if (error) {
                    return error.message;
                }
            });
        if (!links && !me) {
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
            props: null,
        };
    }
};
