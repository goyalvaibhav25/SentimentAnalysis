package com.example.rrice.Megaman.repositories;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.rrice.Megaman.models.Posts;

@Repository
public interface PostsRepository extends MongoRepository < Posts, String > {
 Posts findBy_id(ObjectId _id);
 Posts findBySequence(String sequence);
}