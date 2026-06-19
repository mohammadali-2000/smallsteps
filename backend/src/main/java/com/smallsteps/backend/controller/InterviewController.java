package com.smallsteps.backend.controller;

import com.smallsteps.backend.model.MockInterviewRequest;
import com.smallsteps.backend.repository.MockInterviewRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/interviews")
public class InterviewController {

    @Autowired
    private MockInterviewRequestRepository interviewRepository;

    @PostMapping("/request")
    public ResponseEntity<String> requestInterview(@RequestBody MockInterviewRequest request) {
        interviewRepository.save(request);
        return ResponseEntity.ok("Interview request saved successfully");
    }
}
