package com.project.backend.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.project.backend.Entities.Announcement;
import com.project.backend.Service.IAnnouncementService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AnnouncementController {
	private IAnnouncementService announcementService;

	public AnnouncementController(IAnnouncementService announcementService) {
		this.announcementService = announcementService;
	}

	@GetMapping("/announcements")
	public List<Announcement> getAllAnnouncements() {
		return announcementService.getAll();
	}

	@PostMapping("/announcements")
	public void addAnnouncement(@RequestBody Announcement announcement) {
		announcementService.add(announcement);
	}

	@PutMapping("/announcements/{id}")
	public void updateAnnouncement(@RequestBody Announcement announcement) {
		announcementService.update(announcement);
	}

	@DeleteMapping("/announcements/{id}")
	public void deleteAnnouncement(@PathVariable Long id) {
		announcementService.delete(id);
	}

	@GetMapping("/announcements/{id}")
	public Announcement getAnnouncementById(@PathVariable Long id) {
		return announcementService.getById(id);
	}
}