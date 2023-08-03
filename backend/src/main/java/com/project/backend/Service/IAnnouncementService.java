package com.project.backend.Service;

import java.util.List;

import com.project.backend.Entities.Announcement;

public interface IAnnouncementService {
	List<Announcement> getAll();

	void add(Announcement announcement);

	void update(Announcement announcement);

	void delete(Long id);

	Announcement getById(Long id);

	List<Announcement> search(String keyword);
}
