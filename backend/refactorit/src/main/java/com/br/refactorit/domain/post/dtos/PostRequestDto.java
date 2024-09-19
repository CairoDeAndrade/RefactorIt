package com.br.refactorit.domain.post.dtos;

public record PostRequestDto(
    String owner,
    String title,
    String description,
    String imageUrl,
    String repositoryUrl
) {
}
