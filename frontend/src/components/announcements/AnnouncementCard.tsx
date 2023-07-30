import * as React from 'react';
import { Typography } from '@mui/material';
import { Button, CardFooter } from 'reactstrap';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { ItemProps } from '../props/Item';
import { deleteAnnouncement, showToast, truncateContent, updateAnnouncement } from '../../api';
import EditPopup from '../popups/EditPopup';

const AnnouncementCard: React.FC<ItemProps> = ({ auth, handleDelete, handleUpdate, activity }) => {

    const [isExpanded, setIsExpanded] = React.useState<boolean>(false);
    const [isEditOpen, setIsEditOpen] = React.useState<boolean>(false);

    const handleExpandToggle = () => { setIsExpanded(!isExpanded); };

    const handleUpdateAnnouncement = (updatedData: any) => {
        updateAnnouncement(updatedData.id, updatedData)
            .then(() => {
                handleUpdate();
                showToast('Update completed successfully.', 'success');
            })
            .catch((error) => {
                console.error(error);
                showToast('Update failed. Please try again.', 'error');
            });

        setIsEditOpen(true);
    };

    const confirmDelete = () => {
        const result: boolean = window.confirm('This post will be deleted. Continue?');
        if (result) {
            deleteAnnouncement(activity.id)
                .then(() => {
                    handleDelete();
                    showToast('Deletion completed successfully.', 'success');
                })
                .catch((error) => {
                    console.error(error);
                    showToast('Deletion failed. Please try again.', 'error');
                });
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mt-2">
                    <div className={`card ${isExpanded ? 'expanded' : ''}`}>
                        <div className="card-horizontal d-flex">
                            <div className="img-square-wrapper">
                                <img
                                    className="image"
                                    src={require(`../../../../backend/uploads/${activity.image}`)}
                                    alt="Announcement"
                                    style={{ height: "200px", width: "300px" }}
                                />
                            </div>

                            <div className="card-body">
                                <h4 className="card-title">{activity.topic}</h4>
                                <Typography variant="body1" component="p">
                                    {isExpanded ? activity.content : truncateContent(activity.content, 240)}
                                </Typography>
                                {activity.content.length > 240 && (
                                    <Button variant="text" onClick={handleExpandToggle} className='mt-1' >
                                        {isExpanded ? "Show Less" : "Show More"}
                                    </Button>
                                )}
                            </div>
                        </div>

                        <div className="card-footer">
                            <small className="text-muted">{new Date(activity.expDate).toLocaleString()}</small>
                        </div>

                        {auth && (
                            <CardFooter >
                                <Button onClick={confirmDelete} color="danger" size="small" className='button'>
                                    <DeleteOutlineOutlinedIcon /> Delete
                                </Button>
                                <Button onClick={() => setIsEditOpen(true)} color="secondary" size="small" className='button'>
                                    <EditOutlinedIcon /> Edit
                                </Button>
                            </CardFooter>
                        )}
                    </div>
                </div>
            </div>

            <EditPopup
                isOpen={isEditOpen}
                toggle={() => setIsEditOpen(isExpanded)}
                itemData={activity}
                handleSave={handleUpdateAnnouncement}
            />
        </div>
    );
};

export default AnnouncementCard;