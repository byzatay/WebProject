package com.project.backend.Entities;

import java.util.Date;

import jakarta.persistence.*;

@Entity
@Table(name = "activities")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class Activity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	@Column(name = "title")
	private String topic;
	@Column(name = "content")
	private String content;
	@Column(name = "expdate")
	private Date expDate;

	public Activity(Long id, String topic, String content, Date expDate) {
		this.id = id;
		this.topic = topic;
		this.content = content;
		this.expDate = expDate;
	}

	public Activity() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTopic() {
		return topic;
	}

	public void setTopic(String topic) {
		this.topic = topic;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getExpDate() {
		return expDate;
	}

	public void setExpDate(Date expDate) {
		this.expDate = expDate;
	}

}
