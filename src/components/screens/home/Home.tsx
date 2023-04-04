import Image from 'next/image';
import { FC } from 'react';
import styles from './Home.module.scss';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';

const Home: FC = () => {
    return (
        <Layout title='Home' description='We love our customers'>
            <h1>Hello World</h1>
        </Layout>
    );
};

export default Home;
