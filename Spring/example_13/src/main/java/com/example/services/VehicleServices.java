package com.example.services;

import com.example.interfaces.ISpeaker;
import com.example.interfaces.ITyre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLOutput;

@Service
public class VehicleServices {

    private ITyre tyre;
    private ISpeaker speaker;

    @Autowired
    public VehicleServices(ITyre tyre, ISpeaker speaker) {
        System.out.println("Instance of VehicleService is being created");
        this.tyre = tyre;
        this.speaker = speaker;
    }

    public void playMusic() {
        System.out.println("Vehicle is trying to play music");
        speaker.makeSound();
    }

    public void moveVehicle() {
        System.out.println("Vehicle is trying to move");
        tyre.rotate();
    }

}
