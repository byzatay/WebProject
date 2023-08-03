package com.project.backend.Repository;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import jakarta.persistence.EntityManager;

import java.util.List;

@Repository
public abstract class HibernateGenericRepository<Entity> implements IGenericRepository<Entity> {

    private final EntityManager entityManager;

    public HibernateGenericRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    protected abstract Class<Entity> getEntityType();

    @Override
    @Transactional
    public List<Entity> getAll() {
        Session session = entityManager.unwrap(Session.class);
        return session.createQuery("from " + getEntityType().getSimpleName(), getEntityType()).getResultList();
    }

    @Override
    @Transactional
    public Entity getById(Long id) {
        Session session = entityManager.unwrap(Session.class);
        return session.get(getEntityType(), id);
    }

    @Override
    @Transactional
    public void add(Entity entity) {
        Session session = entityManager.unwrap(Session.class);
        session.persist(entity);
    }

    @Override
    @Transactional
    public void update(Entity entity) {
        Session session = entityManager.unwrap(Session.class);
        session.merge(entity);
    }

    @Override
    @Transactional
    public void delete(Entity entity) {
        Session session = entityManager.unwrap(Session.class);
        session.remove(entity);
    }

    @Override
    @Transactional
    public List<Entity> search(String keyword) {
        Session session = entityManager.unwrap(Session.class);
        return session
                .createQuery("from " + getEntityType().getSimpleName() + " where content ilike :keyword",
                        getEntityType())
                .setParameter("keyword", "%" + keyword + "%")
                .getResultList();
    }
}
