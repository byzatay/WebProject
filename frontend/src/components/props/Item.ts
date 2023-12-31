// Card Props

export interface Item {
    id: number;
    topic: string;
    expDate: Date;
    content: string;
    image?: string;
    link?: string;
}

export interface NewsItem extends Item {
    link: string;
}

export interface ItemProps {
    auth: boolean;
    handleDelete: () => void;
    handleUpdate: () => void;
    activity: NewsItem | AnnouncementItem;
}

export interface AnnouncementItem extends Item {
    image: string;
}

// Add Props

export type ItemType = 'News' | 'Announcement';

export type ItemData = {
    topic: string;
    content: string;
    expDate: string;
    type: ItemType;
    link?: string;
    image?: string;
};

export type AddItemPopupProps = {
    isOpen: boolean;
    toggle: () => void;
    onNewsAdded: () => void;
};

// Edit Props

export interface EditItemProps {
    isOpen: boolean;
    toggle: () => void;
    itemData: NewsItem | AnnouncementItem;
    handleSave: (updatedData: NewsItem | AnnouncementItem) => void;
}

// Pagination Props

export interface PaginationProps {
    pageCount: number;
    currentPage: number;
    onChangePage: (page: number) => void;
}

// Top Navbar Props 

export interface TopNavbarProps {
    auth: boolean;
    onAuthChange: (newAuth: boolean) => void;
}

// Bottom Navbar Props 

export interface BottomNavbarProps {
    auth: boolean;
    onKeywordChange: (keyword: string) => void;
}

// Title Props

export interface TitleProps {
    title: string;
    children: React.ReactNode;
}