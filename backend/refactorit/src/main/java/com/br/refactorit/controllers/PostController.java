package com.br.refactorit.controllers;

import com.br.refactorit.domain.post.PostEntity;
import com.br.refactorit.domain.post.PostService;
import com.br.refactorit.domain.post.dtos.PostRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
@RequiredArgsConstructor
public class PostController {

    private final PostService service;

    @PostMapping
    public ResponseEntity<PostEntity> createPost(@RequestBody PostRequestDto dto) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(service.create(dto));
    }

    @GetMapping
    public ResponseEntity<List<PostEntity>> listAll() {
        return ResponseEntity.ok(service.listAll());
    }
}
