package com.project.backend.Service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.backend.Entities.Announcement;
import com.project.backend.Repository.IAnnouncementDal;

@Service
public class IAnnouncementManager implements IAnnouncementService {
	private IAnnouncementDal announcementDal;

	public IAnnouncementManager(IAnnouncementDal announcementDal) {
		this.announcementDal = announcementDal;
	}

	@Override
	@Transactional
	public List<Announcement> getAll() {
		return this.announcementDal.getAll();
	}

	@Override
	@Transactional
	public void add(Announcement announcemet) {
		this.announcementDal.add(announcemet);
	}

	@Override
	@Transactional
	public void update(Announcement announcemet) {
		Announcement existingNews = announcementDal.getById(announcemet.getId());
		if (existingNews != null)
			this.announcementDal.update(announcemet);
	}

	@Override
	@Transactional
	public void delete(Long id) {
		Announcement existingNews = announcementDal.getById(id);

		if (existingNews != null)
			this.announcementDal.delete(existingNews);
	}

	@Override
	@Transactional
	public Announcement getById(Long id) {
		return this.announcementDal.getById(id);
	}

	@Override
	@Transactional
	public List<Announcement> search(String keyword) {
		return announcementDal.search(keyword);
	}

}
