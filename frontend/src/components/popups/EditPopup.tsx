import React, { useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import TextField from '@mui/material/TextField';
import { NewsItem, AnnouncementItem, EditItemProps } from '../props/Item';
import { showToast } from '../../api';

const EditPopup: React.FC<EditItemProps> = ({ isOpen, toggle, itemData, handleSave }) => {

    const [formData, setFormData] = React.useState<NewsItem | AnnouncementItem>(itemData);

    useEffect(() => { setFormData(itemData); }, [itemData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSaveClick = () => {
        if (!formData.topic || !formData.content || !formData.expDate ||
            ('link' in formData && !formData.link) || ('image' in formData && !formData.image)) {

            showToast('All fields must be filled!', 'error');
            return;
        }
        handleSave(formData);
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
                    <TextField
                        label="Image" name="image" value={formData.image} onChange={handleChange}
                        fullWidth variant="outlined" style={{ marginBottom: '10px' }}
                    />
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