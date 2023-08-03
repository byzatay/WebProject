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

import com.project.backend.Entities.News;
import com.project.backend.Service.INewsService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class NewsController {
	private INewsService newsService;

	public NewsController(INewsService newsService) {
		this.newsService = newsService;
	}

	@GetMapping("/news")
	public List<News> getAllNews() {
		return newsService.getAll();
	}

	@PostMapping("/news")
	public void addNews(@RequestBody News news) {
		newsService.add(news);
	}

	@PutMapping("/news/{id}")
	public void updateNews(@RequestBody News news) {
		newsService.update(news);
	}

	@DeleteMapping("/news/{id}")
	public void delete(@PathVariable Long id) {
		newsService.delete(id);
	}

	@GetMapping("/news/{id}")
	public News getNewsById(@PathVariable Long id) {
		return newsService.getById(id);
	}

	@GetMapping("/news/search/{keyword}")
	public List<News> searchNews(@PathVariable String keyword) {
		return newsService.search(keyword);
	}
}