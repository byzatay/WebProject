import axios from 'axios';
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AddItemPopupProps, ItemType, ItemData } from '../props/Item';
import { showToast } from '../../api';

const AddPopup: React.FC<AddItemPopupProps> = ({ isOpen, toggle, onNewsAdded }) => {
    const [topic, setTitle] = React.useState<string>('');
    const [content, setContent] = React.useState<string>('');
    const [dateTime, setDateTime] = React.useState<string>('');
    const [type, setType] = React.useState<ItemType>('News');
    const [link, setLink] = React.useState<string>('');
    const [image, setImage] = React.useState<string>('');

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

    const handleAdd = async () => {
        try {
            if (
                !topic || !content || !dateTime || (type === 'News' && !link) || (type === 'Announcement' && !image)
            ) {
                showToast('All fields must be filled!', 'error');
                return;
            }

            const dateObject = new Date(dateTime);
            const formattedDate = dateObject.toISOString();

            const itemData: ItemData = {
                topic,
                content,
                expDate: formattedDate,
                type: type,
                ...(type === 'News' ? { link } : {}),
                ...(type === 'Announcement' ? { image } : {}),
            };

            await axios.post(`http://localhost:8080/${itemData.type === 'News' ? 'news' : 'announcements'}`, itemData);

            toggle();
            onNewsAdded();
            showToast('Addition completed successfully.', 'success');

            setTitle('');
            setContent('');
            setDateTime('');
            setLink('');
            setImage('');
        } catch (error) {
            console.log(error);
            showToast('Addition failed. Please try again.', 'error');
        }
    };

    return (
        <Modal isOpen={isOpen} toggle={toggle} style={{ marginTop: '150px' }}>
            <ModalHeader toggle={toggle}>Add News or Announcement</ModalHeader>

            <ModalBody>
                <div className="form-group">
                    <label>Title:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={topic}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Content:</label>
                    <textarea
                        className="form-control"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Expiration Date:</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        value={dateTime}
                        onChange={(e) => setDateTime(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>News Type:</label>
                    <div>
                        <label style={{ marginRight: '10px' }}>
                            <input
                                type="radio"
                                value="News"
                                checked={type === 'News'}
                                name="newsType"
                                onChange={() => setType('News')}
                            />
                            News
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Announcement"
                                checked={type === 'Announcement'}
                                name="newsType"
                                onChange={() => setType('Announcement')}
                            />
                            Announcement
                        </label>
                    </div>
                </div>

                {type === 'News' ? (
                    <div className="form-group">
                        <label>Link:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>
                ) : (
                    <div className="form-group">
                        <label>Image:</label><br />
                        <input
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            onChange={handleFileChange}
                            style={{ marginBottom: '10px' }}
                        />
                    </div>
                )}
            </ModalBody>

            <ModalFooter>
                <Button color="success" onClick={handleAdd}>
                    Save
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default AddPopup;
