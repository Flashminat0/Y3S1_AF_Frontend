import React from 'react';
import AdminSideBarWrapper from "../../components/layouts/admin/AdminSideBarWrapper";
import PanelList from "../../components/boxes/lists/panels/admin/PanelList";
import {useRouter} from "next/router";

const AllocatePanel = () => {
    const router = useRouter();

    const openTopicListPage = async () => {
      await router.push('/admin/topic-list')
    }

    return (
        <AdminSideBarWrapper selectedPageIndex={1}>
            <PanelList navigateFunc={openTopicListPage}/>
        </AdminSideBarWrapper>
    );
};

export default AllocatePanel;