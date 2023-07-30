import React, { useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import TextField from '@mui/material/TextField';
import { NewsItem, AnnouncementItem, EditItemProps } from '../props/Item';
import { showToast } from '../../api';
import axios from 'axios';

const EditPopup: React.FC<EditItemProps> = ({ isOpen, toggle, itemData, handleSave }) => {

    const [formData, setFormData] = React.useState<NewsItem | AnnouncementItem>(itemData);
    const [image, setImage] = React.useState<string>('');

    useEffect(() => { setFormData(itemData); setImage(itemData.image || ''); }, [itemData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];

            const formData = new FormData();
            formData.append('image', file);

            try {
                const response = await axios.post('http://localhost:8080/uploadImage', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                setImage(response.data);
            } catch (error) {
                console.error(error);
                showToast('Failed to upload image.', 'error');
            }
        }
    };

    const handleSaveClick = () => {
        if (!formData.topic || !formData.content || !formData.expDate ||
            ('link' in formData && !formData.link) || ('image' in formData && !formData.image)) {

            showToast('All fields must be filled!', 'error');
            return;
        }

        const updatedData = { ...formData, image };
        handleSave(updatedData);
        toggle();
    };

    return (
        <Modal isOpen={isOpen} toggle={toggle} style={{ marginTop: '150px' }}>
            <ModalHeader>Edit Item</ModalHeader>
            <ModalBody>
                <TextField
                    label="Topic" name="topic" value={formData.topic} fullWidth
                    onChange={handleChange} variant="outlined" style={{ marginBottom: '10px' }}
                />
                <TextField
                    label="Content" name="content" value={formData.content} onChange={handleChange}
                    fullWidth multiline rows={4} variant="outlined" style={{ marginBottom: '10px' }}
                />
                <TextField
                    label="Expiration Date" name="expDate" value={formData.expDate} fullWidth
                    onChange={handleChange} variant="outlined" style={{ marginBottom: '10px' }}
                />
                {itemData.image && (
                    <div>
                        <TextField
                            label="Image" name="image" value={image} onChange={handleChange}
                            fullWidth variant="outlined" style={{ marginBottom: '10px' }}
                        />
                        <input
                            type="file"
                            accept=".jpg, .jpeg, .png .webp"
                            onChange={handleFileChange}
                            style={{ marginBottom: '10px' }}
                        />
                    </div>
                )}
                {itemData.link && (
                    <TextField
                        label="Link" name="link" value={formData.link} onChange={handleChange}
                        fullWidth variant="outlined" style={{ marginBottom: '10px' }}
                    />
                )}
            </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={handleSaveClick}>
                    Save
                </Button>
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditPopup;
