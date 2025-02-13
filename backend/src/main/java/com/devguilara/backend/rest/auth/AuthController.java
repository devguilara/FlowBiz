package com.devguilara.backend.rest.auth;


import com.devguilara.backend.model.Usuario;
import com.devguilara.backend.model.repository.UsuarioRepository;
import com.devguilara.backend.security.JwtService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("/api/auth")
@CrossOrigin("http://localhost:3000/")
public class AuthController {

    private final UsuarioRepository usuarioRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();


    public AuthController(UsuarioRepository usuarioRepository, JwtService jwtService) {
        this.usuarioRepository = usuarioRepository;
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginAuthReq loginRequest) {
        Optional<Usuario> usuarioOpt = usuarioRepository.findByEmail(loginRequest.getEmail());
        if (usuarioOpt.isPresent()) {
            Usuario usuario = usuarioOpt.get();
            if (passwordEncoder.matches(loginRequest.getPassword(), usuario.getPassword())) {
                //return jwtService.generateToken(usuario.getEmail()); mostrar token
                return usuario.getNome() + " Autenticado";
            }
        }
        throw new RuntimeException("Usuario ou senha invalidos");
    }
}

