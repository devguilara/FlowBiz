package com.devguilara.backend.rest.produtos;

import com.devguilara.backend.model.Produto;
import com.devguilara.backend.model.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/produtos")
@CrossOrigin("http://localhost:3000/")
public class ProdutoController {

    @Autowired
    private ProdutoRepository produtoRepository;

    @PostMapping
    public ProdutoFormReq salvar(@RequestBody ProdutoFormReq prod) {
        Produto entityProd = prod.toModel();
        produtoRepository.save(entityProd);
        return ProdutoFormReq.fromModel(entityProd);
    }

    @PutMapping("{id}")
    public ResponseEntity<Void> atualizar(
            @PathVariable Long id,
            @RequestBody ProdutoFormReq prod
    ){
        Optional<Produto> existingProd = produtoRepository.findById(id);
        if (existingProd.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Produto entityProd = prod.toModel();
        entityProd.setId(id);
        produtoRepository.save(entityProd);

        return  ResponseEntity.ok().build();
    }
}
