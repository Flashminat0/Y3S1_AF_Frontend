import React from 'react';
import AdminSideBarWrapper from '../../components/layouts/admin/AdminSideBarWrapper';
import Markingschema from '../markingschema/markingschema';

const UploadMarkingSchema = () => {
    return (
        <AdminSideBarWrapper selectedPageIndex={4}>
            <Markingschema />
        </AdminSideBarWrapper>
    );
};

export default UploadMarkingSchema;
