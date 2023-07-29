import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AddItemPopupProps, ItemType, ItemData } from '../props/Item';

const AddPopup: React.FC<AddItemPopupProps> = ({ isOpen, toggle, onNewsAdded }) => {

    const [topic, setTitle] = React.useState<string>('');
    const [content, setContent] = React.useState<string>('');
    const [expDate, setExpDate] = React.useState<string>('');
    const [type, setType] = React.useState<ItemType>('News' || 'Announcement');
    const [link, setLink] = React.useState<string>('');
    const [image, setImage] = React.useState<string>('');

    const handleAdd = async () => {
        try {
            if (!topic || !content || !expDate || (type === 'News' && !link) || (type === 'Announcement' && !image)) {
                toast.error('All fields must be filled!');
                return;
            }

            const itemData: ItemData = {
                topic,
                content,
                expDate,
                type: type,
                ...(type === 'News' ? { link } : {}),
                ...(type === 'Announcement' ? { image } : {}),
            };

            await axios.post(`http://localhost:8080/${itemData.type === 'News' ? 'news' : 'announcements'}`, itemData);

            toggle();
            onNewsAdded();
            toast.success('Haber veya duyuru başarıyla eklendi!');

            setTitle(''); setContent(''); setExpDate(''); setLink(''); setImage('');
        } catch (error) {
            console.log(error);
            toast.error('Hata oluştu, lütfen tekrar deneyin.');
        }
    };

    return (
        <Modal isOpen={isOpen} toggle={toggle} style={{ marginTop: '150px' }}>
            <ModalHeader toggle={toggle}>Add News or Announcement</ModalHeader>

            <ModalBody>
                <div className="form-group">
                    <label>Title:</label>
                    <input
                        type="text" className="form-control"
                        value={topic} onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Content:</label>
                    <textarea
                        className="form-control" value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Expiration Date:</label>
                    <input
                        type="date" className="form-control"
                        value={expDate} onChange={(e) => setExpDate(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>News Type:</label>
                    <div>
                        <label style={{ marginRight: '10px' }}>
                            <input
                                type="radio" value="News" checked={type === 'News'}
                                onChange={() => setType('News')}
                            />
                            News
                        </label>
                        <label>
                            <input
                                type="radio" value="Announcement" checked={type === 'Announcement'}
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
                            type="text" className="form-control" value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>
                ) : (
                    <div className="form-group">
                        <label>Image: </label>
                        <input
                            type="text" className="form-control" value={image}
                            onChange={(e) => setImage(e.target.value)}
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
