package com.br.refactorit.domain.post.dtos;

import com.br.refactorit.domain.post.PostEntity;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDateTime;

public record PostResponseDto(
    Long id,
    String owner,
    String title,
    String description,
    String imageUrl,
    String repositoryUrl,
    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    LocalDateTime createdAt
) {
    public PostResponseDto(PostEntity entity) {
        this(
            entity.getId(),
            entity.getOwner(),
            entity.getTitle(),
            entity.getDescription(),
            entity.getImageUrl(),
            entity.getRepositoryUrl(),
            entity.getCreatedAt()
        );
    }
}
