package com.project.backend.Service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.backend.Entities.Announcement;
import com.project.backend.Repository.IAnnouncementDal;

@Service
public class IAnnouncementManager implements IAnnouncementService {
	private IAnnouncementDal announcemetDal;

	public IAnnouncementManager(IAnnouncementDal announcemetDal) {
		this.announcemetDal = announcemetDal;
	}

	@Override
	@Transactional
	public List<Announcement> getAll() {
		return this.announcemetDal.getAll();
	}

	@Override
	@Transactional
	public void add(Announcement announcemet) {
		this.announcemetDal.add(announcemet);
	}

	@Override
	@Transactional
	public void update(Announcement announcemet) {
		Announcement existingNews = announcemetDal.getById(announcemet.getId());
		if (existingNews != null)
			this.announcemetDal.update(announcemet);
	}

	@Override
	@Transactional
	public void delete(Long id) {
		Announcement existingNews = announcemetDal.getById(id);

		if (existingNews != null)
			this.announcemetDal.delete(existingNews);
	}

	@Override
	@Transactional
	public Announcement getById(Long id) {
		return this.announcemetDal.getById(id);
	}

}
