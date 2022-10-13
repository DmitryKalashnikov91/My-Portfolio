import axios from 'axios';
import Home from '../app/components/home/Home';
import { API_URL } from '../app/constants';

export default function HomePage(props) {
    return <Home {...props} />;
}
export const getServerSideProps = async () => {
    const links = await axios.get(`${API_URL}/links`).then(({ data }) => data);
    const me = await axios.get(`${API_URL}/me`).then(({ data }) => data);

    return {
        props: {
            links,
            me,
        },
    };
};
