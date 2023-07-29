package com.project.backend.Repository;

import org.springframework.stereotype.Repository;
import com.project.backend.Entities.News;

import jakarta.persistence.EntityManager;

@Repository
public class INewsDal extends HibernateGenericRepository<News> {

    public INewsDal(EntityManager entityManager) {
        super(entityManager);
    }

    @Override
    protected Class<News> getEntityType() {
        return News.class;
    }
}
