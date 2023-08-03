package com.project.backend.Service;

import java.util.List;

import com.project.backend.Entities.News;

public interface INewsService {
	List<News> getAll();

	void add(News news);

	void update(News news);

	void delete(Long id);

	News getById(Long id);

	List<News> search(String keyword);
}
