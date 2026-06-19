package com.smallsteps.backend.controller;

import com.smallsteps.backend.model.Contact;
import com.smallsteps.backend.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contacts")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping
    public ResponseEntity<String> submitContact(@RequestBody Contact contact) {
        contactRepository.save(contact);
        return ResponseEntity.ok("Contact saved successfully");
    }
}
