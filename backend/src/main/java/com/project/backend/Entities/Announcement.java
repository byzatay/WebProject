package com.project.backend.Entities;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class Announcement extends Activity {
	@Column(name = "image_path")
	private String image;

	public Announcement(Long id, String topic, String content, Date expDate, String image) {
		super(id, topic, content, expDate);
		this.image = image;
	}

	public Announcement() {
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
}
