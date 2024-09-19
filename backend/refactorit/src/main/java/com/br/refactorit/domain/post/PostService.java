package com.br.refactorit.domain.post;

import com.br.refactorit.domain.post.dtos.PostRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;

    @Transactional
    public PostEntity create(PostRequestDto dto) {
        return postRepository.save(
                PostEntity.builder()
                .owner(dto.owner())
                .title(dto.title())
                .description(dto.description())
                .imageUrl(dto.imageUrl())
                .repositoryUrl(dto.repositoryUrl())
                .build()
        );
    }

    @Transactional(readOnly = true)
    public List<PostEntity> listAll() {
        return postRepository.findAll();
    }
}
