package com.system.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.system.domain.model.Duvida;
import com.system.domain.repository.DuvidaRepository;

@RestController
@RequestMapping("/duvidas")
public class DuvidaController {

	@Autowired
	private DuvidaRepository duvidaRepository;
	
	@GetMapping
	public List<Duvida> findAll() {
		return duvidaRepository.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Duvida create(@RequestBody Duvida duvida) {
		return duvidaRepository.save(duvida);
	}
	
}
