package com.project.backend.Repository;

import org.springframework.stereotype.Repository;

import com.project.backend.Entities.Announcement;

import jakarta.persistence.EntityManager;

@Repository
public class IAnnouncementDal extends HibernateGenericRepository<Announcement> {

    public IAnnouncementDal(EntityManager entityManager) {
        super(entityManager);
    }

    @Override
    protected Class<Announcement> getEntityType() {
        return Announcement.class;
    }
}
