import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const DynamicBreadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    // Do not render the breadcrumb on the home page
    if (location.pathname === '/') {
        return null;
    }

    return (
        <div className='container text-center d-flex align-items-center justify-content-center my-2'>
            <Breadcrumb className='text-center'>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                    Home
                </Breadcrumb.Item>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                    return (
                        <Breadcrumb.Item
                            key={to}
                            linkAs={Link}
                            linkProps={{ to }}
                            active={index === pathnames.length - 1}
                        >
                            {value.charAt(0).toUpperCase() + value.slice(1)}
                        </Breadcrumb.Item>
                    );
                })}
            </Breadcrumb>
        </div>
    );
};

export default DynamicBreadcrumb;
