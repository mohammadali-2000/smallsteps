package com.smallsteps.backend.controller;

import com.smallsteps.backend.model.CommunityApplication;
import com.smallsteps.backend.repository.CommunityApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/community")
public class CommunityController {

    @Autowired
    private CommunityApplicationRepository applicationRepository;

    @PostMapping("/apply")
    public ResponseEntity<String> submitApplication(@RequestBody CommunityApplication application) {
        applicationRepository.save(application);
        return ResponseEntity.ok("Application saved successfully");
    }
}
