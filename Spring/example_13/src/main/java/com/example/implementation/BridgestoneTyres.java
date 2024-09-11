package com.example.implementation;

import com.example.interfaces.ITyre;
import org.springframework.stereotype.Component;

@Component
public class BridgestoneTyres implements ITyre {
    @Override
    public void rotate() {
        System.out.println("BridgestoneTyres is rotating");
    }

    public void BridgestoneTyres() {
        System.out.println("Instance of BridgestoneTyres is being created");
    }
}
