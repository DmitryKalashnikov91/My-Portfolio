const links = [
    {
        _id: 'link_1',
        icon: {
            path: '/icons/graduate.svg',
            width: 76,
        },
        gradient: {
            from: '#13E780',
            to: '#00bbd5',
        },
        link: 'http://80.249.149.192/',
        title: 'My graduation project',
    },
    {
        _id: 'link_2',
        icon: {
            path: '/icons/boltaeva.svg',
            width: 115,
        },
        gradient: {
            from: '#fc5dff',
            to: '#5dfdff',
        },
        link: 'https://boltaeva-market-1jepxe6ll-dmitrykalashnikov91.vercel.app/',
        title: 'Lending market',
    },
    {
        _id: 'link_3',
        icon: {
            path: '/icons/cv.svg',
            width: 80,
        },
        gradient: {
            from: '#FEAC5E',
            to: '#4BC0C8',
        },
        link: 'https://dmitrykalashnikov91.github.io/cv/',
        title: 'My CV',
    },
    {
        _id: 'link_4',
        icon: {
            path: '/icons/certificate.svg',
            width: 80,
        },
        gradient: {
            from: '#76acfd',
            to: '#6ed0ff',
        },
        link: 'https://mfs-11.getcourse.ru/public/files/177331/492/fecad3e6eaf1318e52ee7f3f3d9ade75.png?e=1665140399&s=rDWYikhqqt3IPRtAgoVY1A',
        title: 'My certificate',
    },
    {
        _id: 'link_5',
        icon: {
            path: '/icons/school.svg',
            width: 150,
        },
        gradient: {
            from: '#c659ff',
            to: '#ff3f4d',
        },
        link: 'https://result.school/?utm_source=telegram&utm_medium=kuhnya&utm_campaign=sold_out',
        title: 'School where i studied',
    },
    {
        _id: 'link_6',
        icon: {
            path: '/icons/vs-code.svg',
            width: 80,
        },
        gradient: {
            from: '#3EA6EA',
            to: '#2179c1',
        },
        link: 'https://github.com/DmitryKalashnikov91/fast-company-Fullstack',
        title: 'My learn project on GIT',
    },
    {
        _id: 'link_7',
        icon: {
            path: '/icons/future.svg',
            width: 84,
        },
        gradient: {
            from: '#e53935',
            to: '#e35d5b',
        },
        link: 'https://github.com/DmitryKalashnikov91',
        title: 'All projects on GIT',
    },
    {
        _id: 'link_8',
        icon: {
            path: '/icons/vk.svg',
            width: 75,
        },
        gradient: {
            from: '#FF385C',
            to: '#dd2e63',
        },
        link: 'https://vk.com/id70942768',
        title: 'My VK',
    },
];

export default function handler(req, res) {
    res.status(200).json(links);
}
