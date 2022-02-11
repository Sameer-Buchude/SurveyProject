package com.yash.Survey.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yash.Survey.model.Survey;
import com.yash.Survey.repository.LandRepository;

@Service
public class LandService {
	@Autowired
	private LandRepository landrepo;
	//to store data we need to create methods
	public Survey farmstoredata(Survey survey)
	{
		return landrepo.save(survey);
	}
	
	//to delete data
	public void deleteSurvey(int id) {
		// TODO Auto-generated method stub
		landrepo.deleteById(id);
	}
	
    //to update data
	public Survey updateSurvey(Survey survey) {
		Integer id = survey.getId();
		Survey sur = landrepo.findById(id).get();
		sur.setFarmername(survey.getFarmername());
		sur.setAddharno(survey.getAddharno());
		sur.setMobileno(survey.getMobileno());
		sur.setGatno(survey.getGatno());
		sur.setGatnakshano(survey.getGatnakshano());
		return landrepo.save(sur);
	
}
}
