import React, { useEffect } from 'react';
import { Button } from 'reactstrap';
import AnnouncementCard from './AnnouncementCard';
import { deleteAnnouncement, fetchAnnouncement } from '../../api';
import { AnnouncementItem } from '../props/Item';
import PaginationComponent from '../pagination/Pagination';
import AddPopup from '../popups/AddPopup';

const AnnouncementList: React.FC<{ auth: boolean }> = ({ auth }) => {
    const [announcements, setAnnouncement] = React.useState<AnnouncementItem[]>([]);
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const [isAddPopupOpen, setIsAddPopupOpen] = React.useState<boolean>(false);

    const toggleAddPopup = () => { setIsAddPopupOpen(!isAddPopupOpen); };

    useEffect(() => {
        const getAnnouncement = async () => {
            try {
                const announcementData: AnnouncementItem[] = await fetchAnnouncement();
                setAnnouncement(announcementData);
            } catch (error) {
                console.log(error);
            }
        };
        getAnnouncement();
    }, []);

    const handleChange = async () => {
        try {
            const announcementData: AnnouncementItem[] = await fetchAnnouncement();
            setAnnouncement(announcementData);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteAnnouncement(id);
            handleChange();
        } catch (error) {
            console.error(error);
        }
    };

    const itemsPerPage: number = 5;
    const paginatedAnnouncements: AnnouncementItem[] = announcements.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const pageCount: number = Math.ceil(announcements.length / itemsPerPage);

    const handleChangePage = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="list mt-5">
            <div className="title">
                <h3>Announcements</h3>
            </div>
            {auth && (
                <div>
                    <Button style={{ backgroundColor: '#3e9fb3' }} size="small" className='button mb-3 ' onClick={toggleAddPopup}>
                        Add
                    </Button>
                </div>
            )}
            <AddPopup isOpen={isAddPopupOpen} toggle={toggleAddPopup} onNewsAdded={handleChange} />

            {paginatedAnnouncements.map((item: any) => (
                <AnnouncementCard
                    key={item.id}
                    activity={item}
                    auth={auth}
                    handleDelete={() => handleDelete(item.id)}
                    handleUpdate={handleChange}
                />
            ))}
            <PaginationComponent pageCount={pageCount} currentPage={currentPage} onChangePage={handleChangePage} />
        </div>
    );
};

export default AnnouncementList;