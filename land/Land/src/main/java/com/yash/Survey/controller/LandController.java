package com.yash.Survey.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yash.Survey.model.Survey;
import com.yash.Survey.repository.LandRepository;
import com.yash.Survey.service.LandService;

@RestController
@CrossOrigin
public class LandController {
	
	@Autowired
	private LandRepository landRepo;
	@Autowired
	private LandService landservice;
	
	//to show data
	@GetMapping(path="/showfarm")
	public Iterable<Survey> showfarm() {
		System.out.println("success.....");
		return landRepo.findAll();
	}
	
	//to save data
	@PostMapping(path="/storefarmdata")
	public Survey farmstoredata(@RequestBody Survey survey)
	{
		return landservice.farmstoredata(survey);
	
	}
	
	//to delete data
	@DeleteMapping(path="/deleteSurvey/{id}")
	public void deleteSurvey(@PathVariable("id") int id) {
		System.out.println(id);
		landservice.deleteSurvey(id);
	
	}	
	
	
	//to update the data
	@PutMapping(path="/updateSurvey")
		public Survey updateSurvey(@RequestBody Survey up) 
		{
			return  landservice.updateSurvey(up);
		}
}

