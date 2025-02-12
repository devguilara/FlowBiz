package com.devguilara.backend.rest.usuarios;

import com.devguilara.backend.model.Usuario;
import com.devguilara.backend.model.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
@RestController
    @RequestMapping("/api/usuarios")
    @CrossOrigin("http://localhost:3000/")
    public class UsuarioController {

    private final PasswordEncoder crypt = new BCryptPasswordEncoder();
    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping
    public ResponseEntity<?> salvar(@RequestBody UsuarioFormReq usuario) {
        if (usuarioRepository.findByEmail(usuario.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email já cadastrado!");
        }

        Usuario userEntity = usuario.toModel();
        userEntity.setPassword(crypt.encode(userEntity.getPassword()));
        usuarioRepository.save(userEntity);

        return ResponseEntity.ok(UsuarioFormReq.fromModel(userEntity));
    }
}