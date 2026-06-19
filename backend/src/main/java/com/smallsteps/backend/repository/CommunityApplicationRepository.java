package com.smallsteps.backend.repository;

import com.smallsteps.backend.model.CommunityApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CommunityApplicationRepository extends JpaRepository<CommunityApplication, UUID> {
}
