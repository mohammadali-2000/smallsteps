package com.smallsteps.backend.repository;

import com.smallsteps.backend.model.MockInterviewRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface MockInterviewRequestRepository extends JpaRepository<MockInterviewRequest, UUID> {
}
