import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoaderTop from '../../components/loader/LoaderTop';

const HowItworks = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetching = async () => {
            setLoading(true);
            await axios
                .get("https://testnetback.s39global.com/api/v1/page/howitworks")
                .then((res) => {
                    setData(res.data.page.content);
                })
                .finally(() => setLoading(false));
        }
        fetching();
    }, []);

    return (
        <div className='pt-5 bg-darkblue' style={{ minHeight: '100vh' }}>
            <h2 className='text-center text-uppercase primary'>How It works</h2>
            {loading && <LoaderTop></LoaderTop>}
            <div
                dangerouslySetInnerHTML={{ __html: data }}
                className="text-light text-start click_here about_content container" style={{ color: "white" }}
            ></div>
        </div>
    );
};

export default HowItworks;