import React, { useEffect } from 'react';
import { Button } from 'reactstrap';
import NewsCard from './NewsCard';
import { deleteNews, fetchNews } from '../../api';
import { NewsItem } from '../props/Item';
import PaginationComponent from '../pagination/Pagination';
import AddPopup from '../popups/AddPopup';

const NewsList: React.FC<{ auth: boolean, searchKeyword: string }> = ({ auth, searchKeyword }) => {

    const [news, setNews] = React.useState<NewsItem[]>([]);
    const [isAddPopupOpen, setIsAddPopupOpen] = React.useState<boolean>(false);
    const [currentPage, setCurrentPage] = React.useState<number>(1);

    const toggleAddPopup = () => { setIsAddPopupOpen(!isAddPopupOpen); };

    useEffect(() => {
        const getNews = async () => {
            try {
                const newsData: NewsItem[] = await fetchNews(searchKeyword);
                setNews(newsData);
            } catch (error) {
                console.log(error);
            }
        };
        getNews();
    }, [searchKeyword]);


    const handleChange = async () => {
        try {
            const newsData: NewsItem[] = await fetchNews(searchKeyword);
            setNews(newsData);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteNews(id);
            handleChange();
        } catch (error) {
            console.error(error);
        }
    };

    const itemsPerPage: number = 5;
    const paginatedNews: NewsItem[] = news.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const pageCount: number = Math.ceil(news.length / itemsPerPage);

    const handleChangePage = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="list mt-5">
            <div className="title">
                <h3>News</h3>
            </div>

            {auth && (
                <div>
                    <Button style={{ backgroundColor: '#3e9fb3' }} size="small" className='button mb-3' onClick={toggleAddPopup}>
                        Add
                    </Button>
                </div>
            )}

            <AddPopup isOpen={isAddPopupOpen} toggle={toggleAddPopup} onNewsAdded={handleChange} />
            {paginatedNews.map((data: NewsItem) => (
                <NewsCard
                    key={data.id}
                    auth={auth}
                    handleDelete={() => handleDelete(data.id)}
                    handleUpdate={handleChange}
                    activity={data}
                />
            ))}

            <PaginationComponent pageCount={pageCount} currentPage={currentPage} onChangePage={handleChangePage} />
        </div>
    );
};

export default NewsList;
