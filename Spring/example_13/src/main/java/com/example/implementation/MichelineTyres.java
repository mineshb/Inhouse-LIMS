package com.example.implementation;

import com.example.interfaces.ITyre;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class MichelineTyres implements ITyre {
    @Override
    public void rotate() {
        System.out.println("MichelineTyres is rotating");
    }

    public void MichelineTyres() {
        System.out.println("Instance of MichelineTyres is being created");
    }
}
