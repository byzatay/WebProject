import * as React from 'react';
import { Grid, CardActionArea, CardContent, Typography } from '@mui/material';
import { Card, Button, Modal, ModalHeader, ModalBody, ModalFooter, CardFooter } from 'reactstrap';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { ItemProps } from '../props/Item';
import { deleteNews, showToast, truncateContent, updateNews } from '../../api';
import EditPopup from '../popups/EditPopup';

const NewsCard: React.FC<ItemProps> = ({ auth, handleDelete, handleUpdate, activity }) => {

    const [infoModal, setInfoModal] = React.useState<boolean>(false);
    const [isEditOpen, setIsEditOpen] = React.useState<boolean>(false);

    const toggleInfoModal = () => { setInfoModal(!infoModal); };

    const handleUpdateNews = (updatedData: any) => {
        updateNews(updatedData.id, updatedData)
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
            deleteNews(activity.id)
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
        <div>
            <Grid item xs={12} md={6}>
                <CardActionArea component="a" href="#">
                    <Card className="card" >
                        <CardContent sx={{ flex: 1 }} onClick={toggleInfoModal}>
                            <Typography component="h2" variant="h5" className="mb-1" >
                                {activity.topic}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" className="mb-1">
                                {new Date(activity.expDate).toLocaleString()}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {truncateContent(activity.content, 100)}
                            </Typography>
                            <Typography onClick={toggleInfoModal} variant="subtitle1" color="primary">
                                Continue reading...
                            </Typography>
                        </CardContent>

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
                    </Card>
                </CardActionArea>
            </Grid>

            <Modal isOpen={infoModal} toggle={toggleInfoModal} style={{ marginTop: '150px' }}>
                <ModalHeader toggle={toggleInfoModal}>{activity.topic}</ModalHeader>
                <ModalBody>{activity.content}</ModalBody>
                <ModalBody>
                    <a href={activity.link}>{activity.link}</a>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggleInfoModal}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>

            <EditPopup
                isOpen={isEditOpen}
                toggle={() => setIsEditOpen((prevState) => !prevState)}
                itemData={activity}
                handleSave={handleUpdateNews}
            />
        </div>
    );
};

export default NewsCard;

