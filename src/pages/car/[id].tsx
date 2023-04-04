import { NextPage } from 'next';
import { useRouter } from 'next/router';

interface Props {}

const CarPage: NextPage<Props> = ({}) => {
    const { asPath, pathname } = useRouter();
    console.log(asPath, pathname);

    return <div>Car page</div>;
};

export default CarPage;
