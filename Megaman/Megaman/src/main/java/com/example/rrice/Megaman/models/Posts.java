package com.example.rrice.Megaman.models;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
public class Posts {
 @Id
 public ObjectId _id;
 public String sequence;
 public String language;
 public String text;
 public String keywords;
 public String sentiments;
 public String callid;
 
 // Constructors
 public Posts() {}
 public Posts(ObjectId _id, String sequence, String language, String text, String keywords, String sentiments, String callid) {
  this._id = _id;
  this.sequence = sequence;
  this.language = language;
  this.text = text;
  this.keywords=keywords;
  this.sentiments=sentiments;
  this.callid=callid;
 }
 
 
//ObjectId needs to be converted to string
public String get_id() {
return _id.toHexString();
}
public void set_id(ObjectId _id) {
this._id = _id;
}

public String getSequence() {
	return sequence;
}
public void setSequence(String sequence) {
	this.sequence = sequence;
}
public String getLanguage() {
	return language;
}
public void setLanguage(String language) {
	this.language = language;
}
public String getText() {
	return text;
}
public void setText(String text) {
	this.text = text;
}
public String getKeywords() {
	return keywords;
}
public void setKeywords(String keywords) {
	this.keywords = keywords;
}
public String getSentiments() {
	return sentiments;
}
public void setSentiments(String sentiments) {
	this.sentiments = sentiments;
}
public String getCallid() {
	return callid;
}
public void setCallid(String callid) {
	this.callid = callid;
}

 
}