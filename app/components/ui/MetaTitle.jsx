import Head from 'next/head';
import React from 'react';

function MetaTitle({ title }) {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    );
}

export default MetaTitle;
