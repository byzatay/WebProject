package com.project.backend.Service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.backend.Entities.News;
import com.project.backend.Repository.INewsDal;

@Service
public class INewsManager implements INewsService {
	private INewsDal newsDal;

	public INewsManager(INewsDal newsDal) {
		this.newsDal = newsDal;
	}

	@Override
	@Transactional
	public List<News> getAll() {
		return this.newsDal.getAll();
	}

	@Override
	@Transactional
	public void add(News news) {
		this.newsDal.add(news);
	}

	@Override
	@Transactional
	public void update(News news) {
		News existingNews = newsDal.getById(news.getId());
		if (existingNews != null)
			this.newsDal.update(news);
	}

	@Override
	@Transactional
	public void delete(Long id) {
		News existingNews = newsDal.getById(id);
		if (existingNews != null)
			this.newsDal.delete(existingNews);

	}

	@Override
	@Transactional
	public News getById(Long id) {
		return this.newsDal.getById(id);
	}
}
