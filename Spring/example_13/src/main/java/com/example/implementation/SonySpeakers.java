package com.example.implementation;

import com.example.interfaces.ISpeaker;
import org.springframework.stereotype.Component;

@Component
public class SonySpeakers implements ISpeaker {
    @Override
    public void makeSound() {
        System.out.println("SonySpeakers is playing");
    }

    public void SonySpeakers() {
        System.out.println("Instance of SonySpeakers is being created");
    }
}
