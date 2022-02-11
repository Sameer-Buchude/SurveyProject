package com.yash.Survey.repository;

import org.springframework.data.repository.CrudRepository;

import com.yash.Survey.model.Survey;

public interface LandRepository  extends CrudRepository<Survey, Integer>{

}
