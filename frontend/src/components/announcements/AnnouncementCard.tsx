import * as React from 'react';
import { Typography } from '@mui/material';
import { Button, CardFooter } from 'reactstrap';
import { toast } from 'react-toastify';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { ItemProps } from '../props/Item';
import { deleteAnnouncement, updateAnnouncement } from '../../api';
import EditPopup from '../popups/EditPopup';

const AnnouncementCard: React.FC<ItemProps> = ({ auth, handleDelete, handleUpdate, activity }) => {

    const [isExpanded, setIsExpanded] = React.useState<boolean>(false);
    const [isEditOpen, setIsEditOpen] = React.useState<boolean>(false);

    const handleExpandToggle = () => { setIsExpanded(!isExpanded); };

    const handleUpdateAnnouncement = (updatedData: any) => {
        updateAnnouncement(updatedData.id, updatedData)
            .then(() => {
                handleUpdate();
                toast.success('Update completed successfully.', {
                    position: 'top-right', autoClose: 3000, hideProgressBar: false,
                    closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined,
                });
            })
            .catch((error) => {
                console.error(error);
                toast.error('Update failed. Please try again.', {
                    position: 'top-right', autoClose: 3000, hideProgressBar: false, closeOnClick: true,
                    pauseOnHover: true, draggable: true, progress: undefined,
                });
            });

        setIsEditOpen(true);
    };

    const confirmDelete = () => {
        const result: boolean = window.confirm('This post will be deleted. Continue?');
        if (result) {
            deleteAnnouncement(activity.id)
                .then(() => {
                    handleDelete();
                    toast.success('Deletion completed successfully.', {
                        position: 'top-right', autoClose: 3000, hideProgressBar: false,
                        closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined,
                    });
                })
                .catch((error) => {
                    console.error(error);
                    toast.error('Deletion failed. Please try again.', {
                        position: 'top-right', autoClose: 3000, hideProgressBar: false,
                        closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined,
                    });
                });
        }
    };

    const truncateContent = (text: string, maxLength: number) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
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
                                    src={require(`../../img/${activity.image}`)}
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
                            <small className="text-muted">{activity.expDate}</small>
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