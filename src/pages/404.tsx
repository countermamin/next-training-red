import Layout from '@/components/layout/Layout';
import { NextPage } from 'next';
import Image from 'next/image';

const NotFound: NextPage = () => {
    return (
        <Layout title='404 Page Not Found'>
            <div
                style={{
                    textAlign: 'center',
                }}
            >
                <Image src='/404.webp' alt='' width={1200} height={628} />
            </div>
        </Layout>
    );
};

export default NotFound;
