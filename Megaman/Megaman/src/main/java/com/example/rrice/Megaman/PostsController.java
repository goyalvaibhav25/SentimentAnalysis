package com.example.rrice.Megaman;

import java.util.List;

import javax.validation.Valid;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.rrice.Megaman.models.Posts;
import com.example.rrice.Megaman.repositories.PostsRepository;

@RestController
@RequestMapping("/posts")
public class PostsController {
	@Autowired
	private PostsRepository repository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public List getAllPosts() {
		return repository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Posts getPostById(@PathVariable("id") ObjectId id) {
		return repository.findBy_id(id);
	}
	
	@RequestMapping(value = "/sequence/{sequence}", method = RequestMethod.GET)
	public Posts getPostById(@PathVariable("sequence") String sequence) {
		return repository.findBySequence(sequence);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public void modifyPostById(@PathVariable("id") ObjectId id, @Valid @RequestBody Posts posts) {
		posts.set_id(id);
		repository.save(posts);
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	public Posts createPosts(@Valid @RequestBody Posts posts) {
		posts.set_id(ObjectId.get());
		repository.save(posts);
		return posts;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void deletePost(@PathVariable ObjectId id) {
		repository.delete(repository.findBy_id(id));
	}
}
