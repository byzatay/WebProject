package com.project.backend.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class Announcement extends Activity {
	@Column(name = "image_path")
	private String image;

	public Announcement() {
	}

	public String getImage() {
		return image;
	}

	public void setImagePath(String image) {
		this.image = image;
	}
}
