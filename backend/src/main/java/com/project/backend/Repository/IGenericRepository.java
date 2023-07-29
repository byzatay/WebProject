package com.project.backend.Repository;

import java.util.List;

public interface IGenericRepository<Entity> {
    List<Entity> getAll();

    Entity getById(Long id);

    void add(Entity entity);

    void update(Entity entity);

    void delete(Entity entity);
}
