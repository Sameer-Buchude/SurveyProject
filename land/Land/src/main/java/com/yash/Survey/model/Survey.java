package com.yash.Survey.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Survey {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String farmername;
	private double addharno;
	private double mobileno;
	private int gatno;
	private int gatnakshano;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFarmername() {
		return farmername;
	}
	public void setFarmername(String farmername) {
		this.farmername = farmername;
	}
	public double getAddharno() {
		return addharno;
	}
	public void setAddharno(double addharno) {
		this.addharno = addharno;
	}
	public double getMobileno() {
		return mobileno;
	}
	public void setMobileno(double mobileno) {
		this.mobileno = mobileno;
	}
	public int getGatno() {
		return gatno;
	}
	public void setGatno(int gatno) {
		this.gatno = gatno;
	}
	public int getGatnakshano() {
		return gatnakshano;
	}
	public void setGatnakshano(int gatnakshano) {
		this.gatnakshano = gatnakshano;
	}
	
	

}
