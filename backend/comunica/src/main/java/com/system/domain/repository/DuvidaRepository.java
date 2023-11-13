package com.system.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.system.domain.model.Duvida;

@Repository
public interface DuvidaRepository extends JpaRepository<Duvida, Long> {

}
