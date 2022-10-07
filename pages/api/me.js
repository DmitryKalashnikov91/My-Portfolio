const me = {
    avatar: '/avatar.jpeg',
    description:
        '<p>Меня зовут Дмитрий Фронтенд разработчик на JavaScript и React.</p><p>Есть база HTML и CSS, SASS, также GIT. Сборщики webpack и rollup (база есть). Также есть знание TailwindCSS, NodeJS, Express и Ejs, ESLint, Lodash, Bootstrap, Figma. Так-же MongoDB, FireBase, Docker.</p><p>Начал самостоятельно в 2021м году, продолжил на платных курсах с начала 2022 года. На данный момент использую React + Redux. Высшее техническое образование (АлтГТУ).</p><p></p>Предыдущая деятельность с программированием не связана, но понравился JavaScript. Есть желание работать в команде, как в офисе, так и удалённо. Также готов вкладываться в своё развитие.</p>',
};

export default function handler(req, res) {
    res.status(200).json(me);
}
