package com.example.implementation;

import com.example.interfaces.ISpeaker;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;


@Component
@Primary
public class BoseSpeakers implements ISpeaker {
    @Override
    public void makeSound() {
        System.out.println("BoseSpeakers is playing");
    }

    public void BoseSpeakers() {
        System.out.println("Instance of BoseSpeakers is being created");
    }
}
