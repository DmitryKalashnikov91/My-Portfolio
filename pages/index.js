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
            .then(async ({ data }) => await data)
            .catch((err) => console.log(err.message));
        const me = await axios
            .get(`${API_URL}/me`)
            .then(async ({ data }) => await data)
            .catch((err) => console.log(err.message));
        if (!links) {
            return { notfound: true };
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
            props: null,
        };
    }
};
