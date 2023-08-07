package com.project.backend.Entities;

import java.util.Date;

import jakarta.persistence.*;

@Entity
public class News extends Activity {
	@Column(name = "link")
	private String link;

	public News(Long id, String topic, String content, Date expDate, String link) {
		super(id, topic, content, expDate);
		this.link = link;
	}

	public News() {
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

}